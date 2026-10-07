# Blog

Blog lists writing. When Hashnode answers, the cards are live posts that open on hashnode.dev. When it does not, the page shows three in-repo placeholder posts and says Hashnode is unavailable.

## Sub-features

- `blog-header` shows eyebrow Blog and `h1` Writing.
- `blog-live` lists Hashnode posts with Read more links to hashnode.dev.
- `blog-fallback` lists Shipping a UI you can iterate, Notes on React in production, and Building in public, each with a Placeholder flag, when Hashnode is down.

## How to get to it (user POV)

- Open `/blog`.
- Choose Blog in the desktop rail or in the mobile sheet.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.
- Outbound HTTPS to `gql.hashnode.com` may succeed or fail. Both are valid product states.

- **Open Blog.** Click Blog, or go to `/blog`. The `h1` is Writing.
- **Which source.** If the lede mentions Hashnode is unavailable, you are on `blog-fallback`. If not, you are on `blog-live`. Record which.
- **Fallback cards.** On fallback, the snapshot includes Shipping a UI you can iterate, Notes on React in production, Building in public, Placeholder flags, and Read more. Each card link targets `https://idrisskone.hashnode.dev`.
- **Live cards.** On live, the snapshot includes at least one heading and a Read more link whose href is on hashnode.dev. Do not require the Hashnode tab to finish loading.
- **Proof.** Screenshot and ARIA dump of `/blog` with Writing and at least one post title visible. Note `source: hashnode` or `source: placeholder` in `report.json`. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/blog/`.

## Gotchas

- Do not call the page broken because placeholders rendered. The production path is fetch Hashnode, then fall back.
- Do not GET Hashnode from the helper and skip the route. The proof is the HTML `/blog` returned.
- Cover images may be absent on placeholders. That is expected.
- `waitUntil: networkidle` is a bad wait here if a cover image host is slow. Wait for the `h1`.
