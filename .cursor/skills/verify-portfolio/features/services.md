# Services

Services lists six placeholder offerings. Copy is stand-in. The page is a readable catalog, not a checkout or booking flow.

## Sub-features

- `services-header` shows eyebrow Services, `h1` What I can help with, and the lede that these offerings are placeholders.
- `services-list` shows six numbered items: Web development, Frontend engineering, E-commerce, Design to code, Performance and polish, Collaboration.
- `services-placeholder` marks each offering with a Placeholder flag.

## How to get to it (user POV)

- Open `/services`.
- Choose Services in the desktop rail or in the mobile sheet.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open Services.** Click Services, or go to `/services`. The `h1` is What I can help with.
- **Offerings.** The snapshot includes headings Web development, Frontend engineering, E-commerce, Design to code, Performance and polish, and Collaboration, plus markers 01 through 06.
- **Placeholder.** Each offering row includes the text Placeholder.
- **Proof.** Screenshot and ARIA dump of `/services` with the `h1` and at least the first offering visible. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/services/`.

## Gotchas

- `settings.json` still says Web Development. The rendered heading is Web development from `site-content.js`. Assert the rendered text.
- There is no detail route and no CTA per offering. Do not look for a nested `/services/:id`.
- Placeholder flags are expected. They are not empty states.
