#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const HOST = process.env.VERIFY_PORTFOLIO_HOST || '127.0.0.1';
const PORT = process.env.VERIFY_PORTFOLIO_PORT || '3000';
const BASE = process.env.VERIFY_PORTFOLIO_URL || `http://${HOST}:${PORT}`;
const BUILD_ID = process.env.VERIFY_PORTFOLIO_BUILD_ID || '';
const EVIDENCE_ROOT =
  process.env.VERIFY_PORTFOLIO_EVIDENCE || '/opt/cursor/artifacts/verify-portfolio';
const STATE_DIR = process.env.VERIFY_PORTFOLIO_STATE_DIR || '/tmp/verify-portfolio';
const CHROME =
  process.env.VERIFY_PORTFOLIO_CHROME || '/usr/bin/google-chrome-stable';
const RUN_ID =
  process.env.VERIFY_PORTFOLIO_RUN_ID ||
  new Date().toISOString().replace(/[:.]/g, '-');

async function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : 0;
      server.close((error) => {
        if (error) reject(error);
        else resolve(port);
      });
    });
    server.on('error', reject);
  });
}

async function waitForHttpJson(url, timeoutMs) {
  const start = Date.now();
  let last;
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      last = `HTTP ${response.status}`;
    } catch (cause) {
      last = cause instanceof Error ? cause.message : String(cause);
    }
    await delay(150);
  }
  throw new Error(`timed out fetching ${url} (${last || 'no response'})`);
}

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 0;
    this.pending = new Map();
    this.ws.addEventListener('message', (event) => {
      const msg = JSON.parse(String(event.data));
      if (msg.id == null) return;
      const waiter = this.pending.get(msg.id);
      if (!waiter) return;
      this.pending.delete(msg.id);
      if (msg.error) waiter.reject(new Error(`${msg.error.message || 'cdp'} (${JSON.stringify(msg.error)})`));
      else waiter.resolve(msg.result);
    });
  }

  send(method, params = {}, sessionId) {
    const id = ++this.nextId;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    this.ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, 30000);
      this.pending.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });
    });
  }
}

async function connectChrome(debugPort) {
  const version = await waitForHttpJson(
    `http://127.0.0.1:${debugPort}/json/version`,
    15000
  );
  const wsUrl = version.webSocketDebuggerUrl;
  if (!wsUrl) throw new Error('chrome json/version missing webSocketDebuggerUrl');
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', () => reject(new Error('chrome websocket failed')), {
      once: true,
    });
  });
  return new Cdp(ws);
}

async function attachPage(cdp, url) {
  const created = await cdp.send('Target.createTarget', { url });
  const attached = await cdp.send('Target.attachToTarget', {
    targetId: created.targetId,
    flatten: true,
  });
  const sessionId = attached.sessionId;
  await cdp.send('Page.enable', {}, sessionId);
  await cdp.send('Runtime.enable', {}, sessionId);
  const start = Date.now();
  while (Date.now() - start < 20000) {
    const ready = await evaluate(
      cdp,
      sessionId,
      `Boolean(document.querySelector('[data-identity="copy"]'))`
    );
    if (ready) return sessionId;
    await delay(150);
  }
  const href = await evaluate(cdp, sessionId, 'location.href');
  throw new Error(`page did not become ready at ${url} (at ${href})`);
}

async function evaluate(cdp, sessionId, expression) {
  const result = await cdp.send(
    'Runtime.evaluate',
    {
      expression,
      returnByValue: true,
      awaitPromise: true,
    },
    sessionId
  );
  if (result.exceptionDetails) {
    const text =
      result.exceptionDetails.text ||
      result.exceptionDetails.exception?.description ||
      'evaluate failed';
    throw new Error(text);
  }
  return result.result.value;
}

async function setViewport(cdp, sessionId, width, height) {
  await cdp.send(
    'Emulation.setDeviceMetricsOverride',
    {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 1280,
    },
    sessionId
  );
}

async function screenshot(cdp, sessionId, filePath) {
  const shot = await cdp.send(
    'Page.captureScreenshot',
    { format: 'png', fromSurface: true },
    sessionId
  );
  await writeFile(filePath, Buffer.from(shot.data, 'base64'));
}

const SNAPSHOT_EXPR = `(() => {
  const nodes = [];
  const walk = (el) => {
    if (!el) return;
    const tag = el.tagName ? el.tagName.toLowerCase() : '';
    const role = el.getAttribute && el.getAttribute('role');
    const identity = el.getAttribute && el.getAttribute('data-identity');
    const href = el.getAttribute && el.getAttribute('href');
    const aria = el.getAttribute && el.getAttribute('aria-label');
    let name = aria || '';
    if (!name && ['h1', 'h2', 'h3', 'a', 'button', 'label'].includes(tag)) {
      name = (el.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 120);
    }
    if (identity || href || aria || ['h1', 'h2', 'nav', 'main', 'button'].includes(tag) || role === 'alert' || role === 'img') {
      nodes.push({ tag, role, name, href, identity });
    }
    for (const child of el.children || []) walk(child);
  };
  walk(document.body);
  return nodes;
})()`;

const STATE_EXPR = `(() => {
  const q = (sel) => document.querySelector(sel);
  const text = (sel) => {
    const el = q(sel);
    return el ? (el.textContent || '').replace(/\\s+/g, ' ').trim() : null;
  };
  const visible = (el) => {
    if (!el) return false;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const copy = q('[data-identity="copy"]');
  const blob = q('[data-identity="blob"]');
  const name = q('[data-identity="name"]');
  const menu = q('[aria-label="Open menu"]');
  const viewWork = [...document.querySelectorAll('a')].find((a) => (a.textContent || '').trim() === 'View work' && visible(a));
  const contact = [...document.querySelectorAll('a')].find((a) => (a.textContent || '').trim() === 'Get in touch' && visible(a));
  const navNames = [...document.querySelectorAll('nav a')].filter(visible).map((a) => (a.textContent || '').replace(/\\s+/g, ' ').trim()).filter(Boolean);
  return {
    path: location.pathname,
    title: document.title,
    copy: copy ? copy.textContent.trim() : null,
    blobLabel: blob ? blob.getAttribute('aria-label') : null,
    nameText: visible(name) ? name.textContent.trim() : null,
    nameHref: visible(name) ? name.getAttribute('href') : null,
    hasMenu: visible(menu),
    viewWorkHref: viewWork ? viewWork.getAttribute('href') : null,
    contactHref: contact ? contact.getAttribute('href') : null,
    h1: text('h1'),
    navNames,
    bodyText: (document.body.textContent || '').replace(/\\s+/g, ' '),
    pillieHref: [...document.querySelectorAll('a')].find((a) => /Pillie/.test(a.textContent || ''))?.getAttribute('href') || null,
    hairTraceHref: [...document.querySelectorAll('a')].find((a) => /HairTrace/.test(a.textContent || ''))?.getAttribute('href') || null,
    innerWidth: window.innerWidth,
  };
})()`;

function check(assertions, name, ok, detail) {
  assertions.push({ name, ok: Boolean(ok), detail: detail ?? null });
  if (!ok) {
    const err = new Error(`assertion failed: ${name}${detail ? ` (${detail})` : ''}`);
    err.assertions = assertions;
    throw err;
  }
}

function formatAria(nodes) {
  return nodes
    .map((node) => {
      const bits = [node.tag];
      if (node.role) bits.push(`role=${node.role}`);
      if (node.identity) bits.push(`data-identity=${node.identity}`);
      if (node.href) bits.push(`href=${node.href}`);
      if (node.name) bits.push(`"${node.name}"`);
      return bits.join(' ');
    })
    .join('\n');
}

async function clickByText(cdp, sessionId, tag, label) {
  const clicked = await evaluate(
    cdp,
    sessionId,
    `(() => {
      const nodes = [...document.querySelectorAll(${JSON.stringify(tag)})];
      const el = nodes.find((node) => (node.textContent || '').replace(/\\s+/g, ' ').trim() === ${JSON.stringify(label)});
      if (!el) return false;
      el.click();
      return true;
    })()`
  );
  if (!clicked) throw new Error(`clickByText: no ${tag} named ${label}`);
}

async function waitForH1(cdp, sessionId, expected, timeoutMs = 10000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const h1 = await evaluate(
      cdp,
      sessionId,
      `document.querySelector('h1')?.textContent.replace(/\\s+/g, ' ').trim() || ''`
    );
    if (h1 === expected) return;
    await delay(150);
  }
  const actual = await evaluate(
    cdp,
    sessionId,
    `document.querySelector('h1')?.textContent.replace(/\\s+/g, ' ').trim() || ''`
  );
  const pathName = await evaluate(cdp, sessionId, 'location.pathname');
  throw new Error(`timed out waiting for h1 ${expected} (h1=${actual} path=${pathName})`);
}

async function main() {
  const assertions = [];
  const outDir = path.join(EVIDENCE_ROOT, RUN_ID, 'home');
  await mkdir(outDir, { recursive: true });

  const debugPort = await freePort();
  const profileDir = path.join(STATE_DIR, `chrome-${process.pid}`);
  const chrome = spawn(
    CHROME,
    [
      '--headless=new',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--remote-allow-origins=*',
      `--remote-debugging-port=${debugPort}`,
      `--remote-debugging-address=127.0.0.1`,
      `--user-data-dir=${profileDir}`,
      'about:blank',
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] }
  );

  let cdp;
  try {
    cdp = await connectChrome(debugPort);
    const sessionId = await attachPage(cdp, `${BASE}/`);

    await setViewport(cdp, sessionId, 1440, 900);
    await cdp.send('Page.reload', { ignoreCache: true }, sessionId);
    await delay(500);
    await evaluate(
      cdp,
      sessionId,
      `new Promise((resolve) => {
        const start = Date.now();
        const tick = () => {
          if (document.querySelector('[data-identity="copy"]')) resolve(true);
          else if (Date.now() - start > 10000) resolve(false);
          else setTimeout(tick, 100);
        };
        tick();
      })`
    );

    const desktop = await evaluate(cdp, sessionId, STATE_EXPR);
    check(assertions, 'desktop-copy', desktop.copy === 'Idriss Kone', desktop.copy);
    check(
      assertions,
      'desktop-blob',
      desktop.blobLabel === 'Idriss Kone portrait',
      desktop.blobLabel
    );
    check(assertions, 'desktop-name', desktop.nameText === 'Idriss', desktop.nameText);
    check(assertions, 'desktop-name-href', desktop.nameHref === '/', desktop.nameHref);
    check(assertions, 'desktop-no-menu', desktop.hasMenu === false, desktop.hasMenu);
    check(assertions, 'view-work-href', desktop.viewWorkHref === '/portfolio', desktop.viewWorkHref);
    check(assertions, 'contact-href', desktop.contactHref === '/contact', desktop.contactHref);
    check(
      assertions,
      'desktop-studio',
      /Kode Studios/.test(desktop.bodyText || ''),
      desktop.bodyText
    );
    check(
      assertions,
      'desktop-pillie',
      desktop.pillieHref === 'https://apps.apple.com/app/id6759352439',
      desktop.pillieHref
    );
    check(
      assertions,
      'desktop-hairtrace',
      desktop.hairTraceHref === '/portfolio',
      desktop.hairTraceHref
    );
    const requiredNav = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'News', 'Contact'];
    check(
      assertions,
      'desktop-nav',
      requiredNav.every((name) => desktop.navNames.includes(name)),
      desktop.navNames.join(',')
    );

    const desktopAria = await evaluate(cdp, sessionId, SNAPSHOT_EXPR);
    await screenshot(cdp, sessionId, path.join(outDir, 'before.png'));
    await writeFile(path.join(outDir, 'before.aria.txt'), formatAria(desktopAria));

    await clickByText(cdp, sessionId, 'a', 'View work');
    await waitForH1(cdp, sessionId, 'Selected work');
    const after = await evaluate(cdp, sessionId, STATE_EXPR);
    check(assertions, 'cta-work-h1', after.h1 === 'Selected work', after.h1);
    check(assertions, 'cta-work-path', after.path === '/portfolio', after.path);
    const afterAria = await evaluate(cdp, sessionId, SNAPSHOT_EXPR);
    await screenshot(cdp, sessionId, path.join(outDir, 'after.png'));
    await writeFile(path.join(outDir, 'after.aria.txt'), formatAria(afterAria));

    await cdp.send('Page.navigate', { url: `${BASE}/` }, sessionId);
    await delay(400);
    await setViewport(cdp, sessionId, 390, 844);
    await cdp.send('Page.reload', { ignoreCache: true }, sessionId);
    await delay(500);
    await evaluate(
      cdp,
      sessionId,
      `new Promise((resolve) => {
        const start = Date.now();
        const tick = () => {
          if (document.querySelector('[data-identity="copy"]')) resolve(true);
          else if (Date.now() - start > 10000) resolve(false);
          else setTimeout(tick, 100);
        };
        tick();
      })`
    );
    const mobile = await evaluate(cdp, sessionId, STATE_EXPR);
    check(assertions, 'mobile-copy', mobile.copy === 'Idriss Kone', mobile.copy);
    check(
      assertions,
      'mobile-blob',
      mobile.blobLabel === 'Idriss Kone portrait',
      mobile.blobLabel
    );
    check(assertions, 'mobile-menu', mobile.hasMenu === true, mobile.hasMenu);
    check(assertions, 'mobile-no-name', mobile.nameText == null, mobile.nameText);
    await screenshot(cdp, sessionId, path.join(outDir, 'mobile.png'));
    const mobileAria = await evaluate(cdp, sessionId, SNAPSHOT_EXPR);
    await writeFile(path.join(outDir, 'mobile.aria.txt'), formatAria(mobileAria));

    const report = {
      feature: 'home',
      ok: true,
      url: BASE,
      buildId: BUILD_ID,
      runId: RUN_ID,
      chromePid: chrome.pid,
      assertions,
      desktop,
      mobile,
      evidence: outDir,
    };
    await writeFile(path.join(outDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
    process.stdout.write(`verify-portfolio drive home: ok ${outDir}\n`);
  } catch (cause) {
    const report = {
      feature: 'home',
      ok: false,
      url: BASE,
      buildId: BUILD_ID,
      runId: RUN_ID,
      chromePid: chrome.pid,
      error: cause instanceof Error ? cause.message : String(cause),
      assertions: cause.assertions || assertions,
      evidence: outDir,
    };
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
    process.stderr.write(`verify-portfolio drive home: fail ${cause instanceof Error ? cause.message : cause}\n`);
    process.exitCode = 1;
  } finally {
    if (cdp) {
      try {
        cdp.ws.close();
      } catch (cause) {
        console.error('verify-portfolio: chrome websocket close failed', { cause });
      }
    }
    if (chrome.pid && !chrome.killed) {
      chrome.kill('SIGTERM');
      await delay(300);
      if (!chrome.killed) chrome.kill('SIGKILL');
    }
  }
}

main();
