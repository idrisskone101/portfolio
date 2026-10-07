# About

About is the bio page. It shows a portrait, the name Idriss Kone, a short subtitle, the main bio, a fact list, skill groups, and a resume link.

## Sub-features

- `about-hero` shows eyebrow About, `h1` About Me, the portrait, and the name Idriss Kone.
- `about-facts` lists Birthday, Email, Phone, Studio, Study, and Degree.
- `about-skills` lists Frontend, Backend, and Tools & Platforms groups.
- `about-resume` exposes View my Resume as a link to `/IdrissKoneResume.pdf`.

## How to get to it (user POV)

- Open `/about`.
- Choose About in the desktop rail or in the mobile sheet.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.
- Start from `/` or go directly to `/about`.

- **Open About.** Click About, or `browser_navigate` to `/about`. The `h1` is About Me. An image named `Idriss Kone portrait` is present. A heading Idriss Kone is present.
- **Facts.** The snapshot includes Studio Kode Studios and Email idriss@idrisskone.com. Phone shows +1 234 567 890 and a Placeholder flag. There is no Location row.
- **Skills.** The snapshot includes headings Frontend, Backend, and Tools & Platforms, plus at least React, Next.js, and Node.js.
- **Resume link.** The snapshot includes a link named View my Resume with `href="/IdrissKoneResume.pdf"`. Request that URL. Record the status code. A 404 is a product gap. Do not call the feature verified-unreachable because of it. The link itself must exist.
- **Proof.** Screenshot and ARIA dump of `/about` with About Me visible. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/about/`.

## Gotchas

- Phone is labeled placeholder on purpose. Do not treat the Placeholder flag as a driver failure.
- The resume file may be missing from `public/`. Assert the href first. Then record HTTP status as a side observation.
- The portrait on About does not use `data-identity="blob"`. That attribute is Home-only. Use the `aria-label` Idriss Kone portrait.
