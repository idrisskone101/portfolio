# Services

Services lists what Kode Studios builds. Copy is real studio work, not a checkout or booking flow.

## Sub-features

- `services-header` shows eyebrow Services, `h1` What Kode Studios builds, and a lede about consumer iOS in Montreal (Verdun).
- `services-list` shows two numbered items: Consumer iOS apps and AI-first studio work.

## How to get to it (user POV)

- Open `/services`.
- Choose Services in the desktop rail or in the mobile sheet.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open Services.** Click Services, or go to `/services`. The `h1` is What Kode Studios builds.
- **Offerings.** The snapshot includes headings Consumer iOS apps and AI-first studio work, plus markers 01 and 02. The first offering names Pillie and HairTrace.
- **Proof.** Screenshot and ARIA dump of `/services` with the `h1` and both offerings visible. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/services/`.

## Gotchas

- There is no detail route and no CTA per offering. Do not look for a nested `/services/:id`.
- These offerings are not marked Placeholder. Do not require a Placeholder flag here.
