# News

News is site-level notes, distinct from Hashnode. The index lists four placeholder articles. Each slug has its own page with a back link.

## Sub-features

- `news-index` shows eyebrow News, `h1` Notes and updates, and four article links.
- `news-article` opens a slug and shows the title, date, body paragraphs, and a Placeholder flag.
- `news-back` returns to the index from Back to news.

## How to get to it (user POV)

- Open `/news`.
- Choose News in the desktop rail or in the mobile sheet.
- From the index, choose an article title.
- Open a known slug such as `/news/site-foundation`.

## Driving it with the harness

Preconditions:

- Doctor is green on the production URL.

- **Open News.** Click News, or go to `/news`. The `h1` is Notes and updates. The snapshot includes This site now has a visual canon, Open to collaborations, A public reading list, and Contact and map.
- **Open an article.** Click This site now has a visual canon. The URL path is `/news/site-foundation`. The `h1` matches that title. Body text includes This is placeholder news. A Placeholder flag is present.
- **Back.** Click Back to news. The URL path is `/news` and the `h1` is Notes and updates again.
- **Unknown slug.** Optional. `/news/does-not-exist` is a Next not-found page. Record it if you hit it. Do not treat it as the happy path.
- **Proof.** Screenshot of the index, then of `/news/site-foundation`. ARIA dump of both. Save under `$VERIFY_PORTFOLIO_EVIDENCE/<run-id>/news/`.

## Gotchas

- News is not Blog. Blog cards leave the site. News stays on `/news/:slug`.
- Every current article is placeholder copy. Placeholder flags are required, not a failure.
- Dates are plain `YYYY-MM-DD` strings in a `<time>` node. Assert the visible date 2026-08-01 on the first article.
