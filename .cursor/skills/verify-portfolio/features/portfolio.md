# Portfolio

Portfolio is the selected-work grid. Each card opens a dialog with description, GitHub, and Live Preview. Current data is placeholder. Every project is category Frontend, so the category tablist is not shown until a second category exists.

## Sub-features

- `portfolio-header` shows eyebrow Portfolio, `h1` Selected work, and a page-level Placeholder flag.
- `portfolio-grid` shows cards for Weather App, IP Address Tracker, Designo Website, Dine Restaurant, Movie Search App, and Pokedex App.
- `portfolio-dialog` opens from a card, shows the title, Close, GitHub, and Live Preview, and closes from Close.
- `portfolio-filters` is the Project categories tablist. It is hidden while only All and Frontend exist.

## How to get to it (user POV)

- Open `/portfolio`.
- Choose Portfolio in the desktop rail or in the mobile sheet.
- From Home, choose View work.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open Portfolio.** Click Portfolio or View work, or go to `/portfolio`. The `h1` is Selected work. The snapshot includes Weather App and Pokedex App.
- **Open a project.** Click the Weather App card (the button that contains that heading). A dialog named Weather App appears, with Close, GitHub, and Live Preview.
- **Close the dialog.** Click Close. The dialog is gone and the grid is still on `/portfolio`.
- **Filters.** Snapshot the page. If a tablist named Project categories is absent, record `portfolio-filters` as verified-unreachable because only one category exists in the data. Do not click coordinates to invent a filter. If a second category ships later, click it, then expect either a filtered grid or No projects found plus Show all projects.
- **Proof.** Screenshot of the grid, then of the open Weather App dialog. ARIA dump of the dialog. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/portfolio/`.

## Gotchas

- CategoryFilters renders only when `categories.length > 2`. Today that is `['All', 'Frontend']`, so the tablist is not in the tree. That is current product behavior, not a harness miss.
- Cards are `<button>` elements. Click the card by the project title, not a wrapping link.
- GitHub and Live Preview leave the site. Record the href. Do not require those hosts to load.
- EmptyState (No projects found) is unreachable until a filter can yield zero cards.
