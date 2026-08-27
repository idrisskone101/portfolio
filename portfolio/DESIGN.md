# Visual canon

This file is the source of truth for how the site should look and how to change it later. Tokens live in `src/app/_assets/globals.css` and `tailwind.config.js`. Shared chrome lives in `src/components/page-chrome/`. Content and placeholders live in `src/data/site-content.js`.

## Design read

Dark personal site for a Montreal software developer. Recruiters and collaborators scan identity, work, and a way to write. Structure and section rhythm can nod at Tokyo-style one-pagers; this repo stays multi-route and keeps its own voice.

**Do not** clone Tokyo copy, assets, or WordPress/Adriano theming. **Do** keep the look Idriss already likes: `#111` canvas, black identity rail, magenta accent, Montserrat, morphing portrait on Home.

## How to iterate

Change appearance in this order. Stop as soon as the change lands.

1. **Color, type, space, radius, motion** — CSS variables in `globals.css`, then Tailwind aliases in `tailwind.config.js`.
2. **Repeated page rhythm** — `src/components/page-chrome/` (`PageShell`, `PageHeader`, `PageSection`, `PageCard`, `PlaceholderFlag`).
3. **Route motion** — `src/lib/motion/tokens.js` and `src/components/page-transition/PageTransition.jsx`. One transition, every route.
4. **Copy and projects** — `src/data/site-content.js` and `src/settings.json`. Placeholder rows are marked `placeholder: true`.
5. **One-off layout** — the page folder under `src/app/`. Do not invent a second component kit.

## Tokens

| Token | Role | Where |
| --- | --- | --- |
| `--canvas` `#111111` | Main stage | `bg-canvas` |
| `--rail` `#000000` | Desktop identity column | `bg-rail` |
| `--topbar` `#323232` | Mobile top bar | `bg-main` (existing) |
| `--magenta` `rgb(210, 45, 128)` | Only accent | `text-magenta`, `bg-magenta`, active nav |
| `--copy` `#ffffff` | Headings and primary text | body |
| `--copy-muted` `#bbbbbb` | Body copy | `text-copy-muted` |
| `--copy-faint` `#999999` | Eyebrows, meta | `text-copy-faint` |
| `--surface` `#1a1a1a` | Cards | `bg-surface` |
| `--line` `rgba(255,255,255,0.10)` | Dividers and card edges | `border-line` |
| `--radius` `0.5rem` | Controls and cards | `rounded-md` / `rounded-lg` |
| `--ease-out` | Page and hover easing | motion tokens |
| `--duration-page` `380ms` | Shared route transition | motion tokens |
| `--duration-morph` `18s` / `80s` below xl | Home portrait blob loop | `animate-morph` |
| `--identity-gutter` `3rem` | Desktop identity origin | nav name, Home blob, Home copy |
| `--rail-span` `20vw` | Desktop identity column width | nav + Home lockup |

Montserrat is the only typeface. Weights: 400 body, 600 labels, 700–800 titles. Do not add a display serif or a second sans.

## Type scale

| Role | Class | Notes |
| --- | --- | --- |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.18em]` | Square chip, not a pill |
| Page title | `text-3xl font-extrabold sm:text-4xl` | One per route |
| Section title | `text-2xl font-bold` | |
| Body | `text-sm leading-7 text-copy-muted sm:text-base` | `max-w-[65ch]` on long copy |
| Meta | `text-sm text-copy-faint` | Dates, labels |

## Page chrome

Every inner route (`/about`, `/services`, `/portfolio`, `/blog`, `/news`, `/contact`) uses:

1. `PageShell` — left-aligned, `max-w-5xl`, shared page padding.
2. `PageHeader` — eyebrow chip, title, optional lede.
3. Sections and cards from the same folder.

Home is the exception: morphing portrait, no eyebrow chip. Mobile stays centered. Desktop locks the rail name, blob, and home copy to one left edge (`--identity-gutter`). The Home rail paint is transparent so that lockup does not cross a black/canvas seam. Inner routes keep the black rail.

## Layout

- **xl and up:** left identity rail (~20%), canvas on the right. Rail stays black on inner routes. Home takes the rail out of flow, drops its paint, and starts the hero at `--identity-gutter` inside the full-width canvas so `main` overflow cannot clip the lockup.
- **Below xl:** `#323232` top bar, name on the left, sheet menu on the left.
- **Scroll:** the rail/top bar stays put. Only the canvas scrolls.
- **Canvas:** `#111`. Do not switch to a light theme.

## Motion

One shared route transition: fade + 16px rise on enter, fade + 10px rise-out on exit, 380ms `--ease-out`. No spring. No per-page snowflake animation.

The Home portrait morph is the only looping motion (`--duration-morph`: 18s desktop, 80s below xl). Honor `prefers-reduced-motion` (no morph, no route travel, instant swap).

Hover on cards is border and opacity, not scale.

## Color rules

- One accent: magenta. Links, active nav underline, focus rings, primary buttons.
- Neutrals are cool near-black, not warm beige and not slate-blue.
- Do not add purple glows, mesh gradients, or floating blur orbs.
- Placeholder content uses `PlaceholderFlag`, never fake metrics or logos.

## Cards and controls

- Cards: `bg-surface`, `border border-line`, `rounded-lg`. Hover: `border-magenta/40`.
- Primary button: magenta fill, white label.
- Inverse button (resume): white fill, black label.
- Inputs: dark surface, `border-line`, magenta focus ring.

Use `src/components/ui` (shadcn) for Button, Sheet, dialogs, Input, Textarea, Label. New UI goes in a feature folder next to the page that owns it.

## Do not

- Dump a second component library next to shadcn.
- Center inner pages. Home is centered below xl. Desktop Home shares the identity origin. Everything else is left-aligned.
- Invent employers, schools, or metrics. If copy is not real yet, mark it placeholder.
- Use `dangerouslySetInnerHTML`.
- Give each route a different transition.
