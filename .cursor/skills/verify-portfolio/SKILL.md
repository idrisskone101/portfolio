---
name: verify-portfolio
description: Drive the Idriss Kone Next.js portfolio web app in portfolio/ the way a user does. Use when proving Home, About, Services, Portfolio, Blog, News, or Contact on the production next start server, or when a change needs a real-browser proof instead of a compile check.
---

# Verify portfolio

Agent-facing control skill for this repo. Read `features/` before you drive. The app is npm + Next 14. There is no database and no Prisma.

Keep this map honest with `/maintain-verification-skill`.

## Launch

Proof runs against a production server, not `next dev`.

```bash
.cursor/skills/verify-portfolio/bin/verify-portfolio launch
```

That command builds with `npm --prefix portfolio run build`, then starts `npm --prefix portfolio run start` on `VERIFY_PORTFOLIO_PORT` (default `3000`) at `VERIFY_PORTFOLIO_HOST` (default `127.0.0.1`). Ready when `GET /` returns HTTP 200. State lands in `VERIFY_PORTFOLIO_STATE_DIR` (default `/tmp/verify-portfolio`): `run.env`, `server.pid`, `server.log`.

Idempotent for this skill's own instance. If `run.env` names a live PID that still owns the port, launch prints the URL and exits 0. If the port is bound by any other process, launch refuses. Do not share a server you did not start. Do not run `next build` while another Next process holds `portfolio/.next`.

Dev-only, not for proof:

```bash
npm --prefix portfolio run dev
```

Teardown is Cleanup below. Never `pkill -f` or kill by process name.

Two instances can share the static site if they use different ports (`VERIFY_PORTFOLIO_PORT=3001`). They still must not share `portfolio/.next` during a build.

## Doctor

```bash
.cursor/skills/verify-portfolio/bin/verify-portfolio doctor
```

Read-only. Fail unless all of these hold:

- `run.env` exists and its PID is alive.
- That PID's cmdline contains `next` and does not look like `next dev`.
- That PID owns `VERIFY_PORTFOLIO_PORT`.
- `GET /` is 200 and the body contains `Idriss`.
- `portfolio/.next/BUILD_ID` exists.

Print URL, PID, and BUILD_ID. Run doctor before the first drive, after any failed drive, and whenever the page looks wedged. A healthy process with a stuck client tree still needs a reload or relaunch.

## Drive

Prefer this skill's helper for a rerunnable proof file. Prefer Playwright MCP (`browser_navigate`, `browser_snapshot`, `browser_click`, `browser_resize`, `browser_take_screenshot`, `browser_fill_form`) when you are already in an agent session. Chrome DevTools MCP (`navigate_page`, `take_snapshot`, `click`, `resize_page`, `take_screenshot`) is the fallback. Both talk to the running production URL from doctor.

```bash
.cursor/skills/verify-portfolio/bin/verify-portfolio drive home
```

Recipes live in `features/`. Stable handles, in order of preference:

| Handle | Where |
| --- | --- |
| Routes `/`, `/about`, `/services`, `/portfolio`, `/blog`, `/news`, `/contact` | every page |
| Link names Home, About, Services, Portfolio, Blog, News, Contact | desktop rail; mobile sheet after **Open menu** |
| Home social names GitHub and Email | Home; placeholder networks stay hidden |
| `data-identity="name"` | desktop rail word Idriss, `href="/"` |
| `data-identity="blob"` | Home portrait, `aria-label="Idriss Kone portrait"` |
| `data-identity="copy"` | Home `h1` Idriss Kone |
| `aria-label="Open menu"` | viewport below `xl` (1280px) |
| `href="/portfolio"` named View work, `href="/contact"` named Get in touch | Home |
| `role="tablist"` named Project categories | Portfolio, only when more than one category exists |
| `label` Name, Email, Message and button Send message | Contact |
| `role="alert"` Name, email, and message are required. | Contact invalid submit |
| `aria-label="Map"` | Contact map |

Do not click by coordinates. Do not tab-walk when a name, href, or `data-identity` exists. After a client navigation, wait for the destination `h1` (or the named status). `PageTransition` fades the outgoing tree. Do not treat a mid-fade screenshot as proof. Do not change fade or Home typewriter/blob timing from this skill.

Viewport: desktop proof at 1440×900. Mobile proof at 390×844. Tailwind `xl` is 1280px.

## Evidence

Default directory: `VERIFY_PORTFOLIO_EVIDENCE` (default `/opt/cursor/artifacts/verify-portfolio`). Cleanup never deletes it.

Each drive writes a run folder `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/<feature>/` with:

- `before.png` and `after.png` (action, then resulting state)
- `after.aria.txt` (accessible names, hrefs, `data-identity`)
- `report.json` (URL, BUILD_ID, viewport, assertions, pass/fail)

Proof standards:

- Exercise the real user path. Do not stub router state or call Hashnode from Node as a substitute for `/blog`.
- Capture the action and the resulting state, not only the last frame.
- This app stores nothing. Side effects are navigation, the Contact `mailto:` URL, and the Resume link status. Observe those. Do not invent a database check.
- Hashnode and the map tiles are production boundaries. `/blog` may render live posts or the in-repo placeholders. The Contact map may be a MapLibre canvas or the OpenStreetMap iframe fallback. Record which one you got.

## Cleanup

```bash
.cursor/skills/verify-portfolio/bin/verify-portfolio cleanup
```

Kills only the PID in `run.env` (the server this launch started) and removes `$VERIFY_PORTFOLIO_STATE_DIR`. Leaves `$VERIFY_PORTFOLIO_EVIDENCE` in place. After cleanup, confirm the evidence files still exist at the named path.

A drive that launches Chrome records that PID in the drive report and kills it when the drive ends. Failed iterations still run cleanup so ports and Chrome profiles do not leak.

## Helpers

All helpers are executable. Invoke them from the repo root.

| Command | What it does |
| --- | --- |
| `.cursor/skills/verify-portfolio/bin/verify-portfolio launch` | Production build + `next start`. Writes `run.env`. |
| `.cursor/skills/verify-portfolio/bin/verify-portfolio doctor` | Read-only health check. |
| `.cursor/skills/verify-portfolio/bin/verify-portfolio drive home` | CDP Chrome against the doctor URL. Home only in v1. |
| `.cursor/skills/verify-portfolio/bin/verify-portfolio cleanup` | Kill our server PID. Keep evidence. |

`drive` uses `/usr/bin/google-chrome-stable` (or `VERIFY_PORTFOLIO_CHROME`) over CDP. No Playwright package is required. Env vars: `VERIFY_PORTFOLIO_HOST`, `VERIFY_PORTFOLIO_PORT`, `VERIFY_PORTFOLIO_STATE_DIR`, `VERIFY_PORTFOLIO_EVIDENCE`, `VERIFY_PORTFOLIO_RUN_ID`, `VERIFY_PORTFOLIO_SKIP_BUILD=1` (reuse an existing `.next`, still requires `next start`).
