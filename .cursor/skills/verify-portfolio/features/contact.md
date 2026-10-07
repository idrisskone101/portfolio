# Contact

Contact is a frontend-only mailto form, a small details list, and a map. Nothing is stored on a server.

## Sub-features

- `contact-header` shows eyebrow Contact and `h1` Get in touch.
- `contact-invalid` shows an alert when Name, Email, or Message is empty.
- `contact-submit` opens a `mailto:` URL to idriss@idrisskone.com after a valid submit.
- `contact-details` lists Email and Phone (placeholder).
- `contact-map` shows a map labelled Map, or the OpenStreetMap iframe fallback with that title.

## How to get to it (user POV)

- Open `/contact`.
- Choose Contact in the desktop rail or in the mobile sheet.
- From Home, choose Get in touch.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.
- Do not require a desktop mail client. Headless Chrome will not send mail.

- **Open Contact.** Click Contact or Get in touch, or go to `/contact`. The `h1` is Get in touch. Labels Name, Email, and Message are present. The submit control is named Send message.
- **Invalid submit.** Click Send message with the fields empty. A `role="alert"` node reads Name, email, and message are required. The URL stays on `/contact`.
- **Valid submit.** Fill Name `Verify Bot`, Email `verify@example.com`, Message `Harness check`. Click Send message. Observe the navigation URL. It must start with `mailto:idriss@idrisskone.com` and include the subject Kode Studios — note from Verify Bot. Then stop. Do not wait for a mail composer. If the page shows If a mail client did not open, write directly to idriss@idrisskone.com, that status also counts.
- **Details.** The snapshot includes Email idriss@idrisskone.com and Phone +1 234 567 890 with Placeholder. There is no Location row and no Montreal or Verdun text.
- **Map.** The snapshot includes an image named Map, or an iframe titled that same string. Either is a pass. A blank box with no label is a fail.
- **Proof.** Screenshot of the empty form, then of the invalid alert. Capture the mailto URL in `report.json`. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/contact/`.

## Gotchas

- Submit uses `window.location.href = mailto:...`. A driver that follows the URL can sit on an empty document. Intercept or read the href, then halt.
- The form is `noValidate`. The alert is the app's own check, not native browser validation. Clearing one field is enough to trigger it.
- MapLibre talks to Esri tiles. `networkidle` waits forever. Wait for the `h1`. The iframe fallback is still Contact working.
- Phone is a placeholder. Do not call the real number.
