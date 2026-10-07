# Home

Home is the landing page. It shows Idriss Kone's portrait, name, Kode Studios, rotating titles, a short lede, Pillie and HairTrace, two CTAs, and social links. Desktop places the portrait and copy in a row on the canvas beside the in-flow left rail. Mobile stacks them and uses a top bar plus a menu sheet.

## Sub-features

- `home-lockup` shows the portrait, the `h1` Idriss Kone, Kode Studios, at least one title, the lede, Pillie, and HairTrace.
- `home-cta-work` follows View work to Portfolio.
- `home-cta-contact` follows Get in touch to Contact.
- `home-social` exposes GitHub and Email by accessible name.
- `home-desktop-rail` shows the Idriss name link and in-flow nav at 1440.
- `home-mobile-menu` opens the sheet from Open menu at 390 and reaches the same routes.

## How to get to it (user POV)

- Open `/`.
- Choose the Idriss name in the desktop rail.
- Choose Home in the desktop rail or in the mobile sheet.
- On mobile, the top-bar Idriss word also goes to `/`.

## Driving it with the harness

Preconditions:

- Doctor reports HTTP 200 on `http://127.0.0.1:3000/` (or the configured host/port).
- The launch PID owns that port and is `next start`, not `next dev`.

- **Open Home.** Go to `/`. Run `.cursor/skills/verify-portfolio/bin/verify-portfolio drive home`, or Playwright `browser_navigate` to that URL then `browser_snapshot`. The snapshot includes `h1` Idriss Kone (`data-identity="copy"`), an image named `Idriss Kone portrait` (`data-identity="blob"`), the words Kode Studios, Pillie, and HairTrace, a link named View work with `href="/portfolio"`, and a link named Get in touch with `href="/contact"`. Pillie is an App Store link (`https://apps.apple.com/app/id6759352439`). HairTrace goes to `/portfolio`.
- **Desktop rail.** Resize to 1440×900. The snapshot includes a link named Idriss with `data-identity="name"` and `href="/"`, plus links named Home, About, Services, Portfolio, Blog, News, and Contact. There is no button named Open menu.
- **Mobile chrome.** Resize to 390×844 and reload `/`. The snapshot includes a button named Open menu. `data-identity="name"` is absent. The portrait and `h1` remain.
- **Mobile sheet.** Click Open menu. The snapshot includes the same seven route names. Click About. The destination `h1` is About Me. Return to `/` before the next bullet.
- **View work.** From `/` at 1440, click View work. The destination `h1` is Selected work and the URL path is `/portfolio`.
- **Get in touch.** From `/`, click Get in touch. The destination `h1` is Get in touch and the URL path is `/contact`.
- **Social names.** From `/`, the snapshot includes links named GitHub and Email. Placeholder LinkedIn, Twitter, and Instagram icons are hidden until real URLs exist.
- **Proof.** Capture Home at 1440 and at 390 before any CTA click. Write `before.png`, `after.png` (after View work), `after.aria.txt`, and `report.json` under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/home/`. The dumps must show Idriss Kone and the matching `data-identity` attributes.

## Gotchas

- Tailwind `xl` is 1280px. 1279 still uses the mobile bar. 1280 shows the rail. Proof viewports are 1440 and 390 so you are not sitting on the breakpoint.
- `data-identity="name"` and the Open menu button stay in the DOM at every width. `xl:hidden` / `hidden xl:block` only hide them. Assert visibility (box size / computed style), not `querySelector` presence.
- After a client navigation, wait for the new `h1`. A screenshot during `PageTransition` is not proof.
- The magenta titles rotate on a timer. Assert that some title text is present. Do not assert character timing, hold duration, or blob morph duration from this recipe.
- The rail name and the Home `h1` use CSS `uppercase`. `innerText` is `IDRISS` / `IDRISS KONE`. Read `textContent` or match case-insensitively.
- `waitUntil: networkidle` can hang. Wait for `[data-identity="copy"]` or `domcontentloaded`.
- LinkedIn, Twitter, and Instagram hrefs are placeholders. A 404 on those hosts is not a Home failure.
