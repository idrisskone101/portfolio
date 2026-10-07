# Services

Services lists what Kode Studios builds. Copy is real studio work, not a checkout or booking flow.

## Sub-features

- `services-header` shows eyebrow Services, `h1` What Kode Studios builds, and a lede that Kode Studios is an AI-first app studio.
- `services-list` shows one numbered item: Consumer iOS apps.

## How to get to it (user POV)

- Open `/services`.
- Choose Services in the desktop rail or in the mobile sheet.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open Services.** Click Services, or go to `/services`. The `h1` is What Kode Studios builds.
- **Offerings.** The snapshot includes heading Consumer iOS apps and marker 01. The offering names Pillie and HairTrace. There is no process copy about agents.
- **Proof.** Screenshot and ARIA dump of `/services` with the `h1` and the offering visible. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/services/`.

## Gotchas

- There is no detail route and no CTA per offering. Do not look for a nested `/services/:id`.
- These offerings are not marked Placeholder. Do not require a Placeholder flag here.
