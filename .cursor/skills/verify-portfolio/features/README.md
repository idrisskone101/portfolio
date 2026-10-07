# Portfolio verification map

This directory is the maintained source for verifying the user-facing behavior of the Next.js app in `portfolio/`. Read this index, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `.cursor/skills/verify-portfolio/bin/verify-portfolio launch` so proof hits `next start`, not `next dev`.
- Base URL is `http://127.0.0.1:3000` unless `VERIFY_PORTFOLIO_PORT` says otherwise.
- Run `.cursor/skills/verify-portfolio/bin/verify-portfolio doctor` and require a 200 on `/`, the launch PID, and a BUILD_ID.
- No auth and no database. There is nothing to seed.
- Never drive an instance this run did not start.
- Keep `PageTransition` and Home typewriter/blob timing untouched. Wait for the destination heading after a route change.

## Driving conventions

- Start every recipe from `/` unless the feature file says otherwise.
- Prefer ARIA names, visible link text, `href`, and `data-identity` over CSS paths and coordinates.
- Desktop: 1440×900. The left rail is visible at `xl` (1280px and up). Click nav links by name.
- Mobile: 390×844. Open the sheet with the button named `Open menu`, then the same link names.
- Treat helper flags and quoted accessible names as literal.
- Restore nothing after a drive. The site is static aside from client UI state (Portfolio filter, Contact form, mobile sheet). Reload `/` to reset.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes an ARIA dump and a screenshot with Idriss Kone or the page `h1` visible.
- Record the feature id, route, viewport, and BUILD_ID on every artifact.
- Report an unreachable path with the handle you tried and what was missing.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with the harness` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

Keep implementation details out of the map. Name only user paths, stable handles, required state, commands, and observable proof.

## Features

- [Home](./home.md) covers the landing lockup, Kode Studios line, Pillie and HairTrace, CTAs, social links, and the desktop vs mobile chrome.
- [About](./about.md) covers bio, facts, skills, and the resume link.
- [Services](./services.md) covers the two Kode Studios offerings.
- [Portfolio](./portfolio.md) covers the project grid and project dialog.
- [Blog](./blog.md) covers Hashnode posts and the in-repo fallback list.
- [News](./news.md) covers the notes index and article pages.
- [Contact](./contact.md) covers the mailto form, details, and map pin.
