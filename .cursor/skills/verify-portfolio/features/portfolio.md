# Portfolio

Portfolio is the selected-work grid for Kode Studios. Cards open a dialog with the description and any real outbound links. Current work is Pillie (live on the App Store) and HairTrace (in development). Both are category iOS, so the category tablist is not shown until a second category exists.

## Sub-features

- `portfolio-header` shows eyebrow Portfolio, `h1` Selected work, and a lede that names Pillie and HairTrace.
- `portfolio-grid` shows cards for Birth Control Reminder: Pillie and HairTrace.
- `portfolio-dialog` opens from a card, shows the title and Close, and shows App Store only when that URL exists.
- `portfolio-filters` is the Project categories tablist. It is hidden while only All and iOS exist.

## How to get to it (user POV)

- Open `/portfolio`.
- Choose Portfolio in the desktop rail or in the mobile sheet.
- From Home, choose View work.
- From Home, choose HairTrace.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open Portfolio.** Click Portfolio or View work, or go to `/portfolio`. The `h1` is Selected work. The snapshot includes Birth Control Reminder: Pillie and HairTrace. There is no page-level Placeholder flag.
- **Open Pillie.** Click the Birth Control Reminder: Pillie card (the button that contains that heading). A dialog named Birth Control Reminder: Pillie appears, with Close and App Store. App Store href is `https://apps.apple.com/app/id6759352439`.
- **Close the dialog.** Click Close. The dialog is gone and the grid is still on `/portfolio`.
- **Open HairTrace.** Click the HairTrace card. A dialog named HairTrace appears, with Close. There is no App Store, GitHub, or Live Preview control.
- **Filters.** Snapshot the page. If a tablist named Project categories is absent, record `portfolio-filters` as verified-unreachable because only one category exists in the data. Do not click coordinates to invent a filter. If a second category ships later, click it, then expect either a filtered grid or No projects found plus Show all projects.
- **Proof.** Screenshot of the grid, then of the open Pillie dialog. ARIA dump of the dialog. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/portfolio/`.

## Gotchas

- CategoryFilters renders only when `categories.length > 2`. Today that is `['All', 'iOS']`, so the tablist is not in the tree. That is current product behavior, not a harness miss.
- Cards are `<button>` elements. Click the card by the project title, not a wrapping link.
- App Store leaves the site. Record the href. Do not require the App Store host to load.
- EmptyState (No projects found) is unreachable until a filter can yield zero cards.
- Do not expect Weather App, Pokedex, GitHub, or Live Preview. Those were removed.
