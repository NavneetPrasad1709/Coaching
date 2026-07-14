# Design Spec — Santosh Singh Academy ("The Ruled Page" system)

Premium lead-gen site for a tuition brand (Classes 5–12, CBSE/ICSE, Prayagraj & Varanasi).
Audience: parents. Every section exists to build trust and drive one of: enquiry form (#enquiry),
WhatsApp chat, phone call, free demo booking.

Identity: the Indian school notebook, executed with premium restraint — faint baseline rules,
one red margin line, report-card mono numerals, a scholarly serif. Never childish, never loud.

## Palette (Tailwind classes — already defined in globals.css @theme)

| Token | Class examples | Use for |
|---|---|---|
| paper `#F6F5EE` | `bg-paper` | page ground, text on dark sections (`text-paper`) |
| paper-deep `#EDECDF` | `bg-paper-deep` | alternate light sections, progress tracks, chips |
| board `#0E3826` | `bg-board text-board` | dark sections, headings on light, dark buttons |
| board-deep `#092A1C` | `bg-board-deep` | footer, hover on dark buttons |
| board-soft `#1B4F39` | `bg-board-soft` | raised cards on dark sections |
| ink `#1A2620` | `text-ink` | body text on light |
| muted `#5A6B61` | `text-muted` | secondary text on light |
| mist `#A8BCAE` | `text-mist` | secondary text on dark |
| marigold `#E8A428` | `bg-marigold text-marigold` | CTAs, accents, one highlight per section max |
| rule `#C75C4A` | `bg-rule/50` | hairlines/dashes ONLY (decorative) |
| rule-deep `#A34534` | `text-rule-deep` | eyebrow text (AA-safe red) |
| wa `#25D366` | `bg-wa` | WhatsApp elements ONLY |

Rules: marigold is precious — CTAs and one accent per section. Red is structural (lines,
eyebrows), never a fill. Dark sections use `tone="board"` and `dark` props on primitives.

## Type roles

- Display serif: `font-display` (Spectral). Headlines, big numbers, italic accents (`italic`).
- Body/UI: `font-sans` (Schibsted Grotesk) — default, no class needed.
- Data/labels: `font-mono` (Spline Sans Mono) — eyebrows, stats labels, timestamps, small
  uppercase labels with `uppercase tracking-[0.14em..0.2em]`. This is the "report card" voice.

H2 scale is handled by `SectionHeading`. Card titles: `text-xl font-semibold text-board` (sans)
or `font-display text-2xl` for feature cards. Body: `text-muted leading-relaxed`.

## Primitives (import from `@/components/ui/...`, all default exports unless noted)

- `Section` — `{ id?, tone?: "paper"|"paper-deep"|"white"|"board", ruled?, marginRule?, className?, children }`. Renders `<section>` with py-24/32. Use `ruled` sparingly (1–2 sections beyond hero).
- `Container` — `{ className?, children }` max-w-7xl gutters. Always wrap section content.
- `SectionHeading` — `{ eyebrow, title, description?, align?: "left"|"center", dark?, className? }`. Every section starts with one. Title string gets a word-stagger reveal automatically.
- `Eyebrow` — `{ children, dark?, center? }` mono label with red dash (rarely needed directly).
- `Button` — `{ href?, variant: "primary"|"dark"|"outline"|"outline-dark"|"whatsapp", size: "md"|"lg", arrow?, wa?, external?, type?, onClick?, className?, ariaLabel? }`. `wa` prepends WhatsApp glyph. wa.me links: `external`.
- `Reveal` — `{ delay?, y?, blur?, className? }` scroll-triggered fade-up wrapper (client). Handles reduced motion.
- `TextReveal` — `{ text, as?, className?, delay?, onMount? }` word-mask reveal for standalone headlines.
- `Counter` — `{ to, suffix?, className?, duration? }` count-up on view (client).
- `Marquee` — `{ children, duration?, reverse?, className? }` seamless CSS loop.
- `Accordion` — `{ items: {q,a}[], defaultOpen? }` animated, accessible.
- `Avatar` — `{ name, className? }` initials avatar (no photos yet).
- `Underline` — hand-drawn marigold underline; ALREADY used in hero + reserved for FinalCta. Do not use elsewhere.
- `icons.tsx` — named export `WhatsAppIcon`.

Data/config: `@/lib/data` (all content arrays — use them, do not invent new copy blocks unless
the spec for your section says so), `@/lib/site` (`site`, `waLink(message?)`, `telLink`,
`mailLink`, `DEFAULT_WA_MESSAGE`), `@/lib/motion` (`EASE`, `VIEWPORT`, `fadeUp`, `blurUp`,
`scaleIn`, `stagger(stagger?, delay?)`, `item`), `@/lib/utils` (`cn`).

## Motion rules

- Scroll reveals: `Reveal` / `TextReveal` for single blocks; `StaggerGroup` + `StaggerItem`
  (from `@/components/ui/Stagger`) for card grids — these are client primitives, so sections
  using them stay SERVER components (no "use client", no direct motion imports).
- Ease is always `EASE`; durations 0.6–0.9s; stagger 0.08–0.12s. `viewport once: true` (via VIEWPORT).
- Card hover recipe (light): `transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift`.
- Reduced motion is handled GLOBALLY by `MotionProvider` (`MotionConfig reducedMotion="user"`)
  plus the CSS kill switch in globals.css. NEVER branch the rendered tree on
  `useReducedMotion` — it returns null on the server and causes hydration divergence.
  Infinite decorative loops should be CSS animations (globals kill them under PRM).
- No scroll-jacking, no parallax heavier than ±30px, nothing animating on the main thread per-frame.

## Card recipes

- Light card: `rounded-3xl border border-ink/8 bg-white p-7 shadow-card`.
- Chip/pill: `rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-sm`.
- Dark-section card: `rounded-3xl border border-paper/10 bg-board-soft/50 p-7`.

## Layout & spacing

- Sections alternate tones: paper → white → paper-deep → board (dark) for rhythm. Never two
  dark sections adjacent.
- Grids: 2-col md, 3-col lg for cards; gap-5 to gap-8. Generous whitespace — when in doubt, more.
- Section ids (anchors, must match exactly): `services`, `subjects`, `how-it-works`, `teachers`,
  `results`, `faq`, `enquiry`.

## Copy rules

- Voice: calm, specific, parent-first. Plain verbs, sentence case. No exclamation marks except
  inside quoted testimonials. Specifics beat adjectives ("tutor replaced free" > "best quality").
- Buttons say what happens: "Book a free demo class", "Chat on WhatsApp", "Call {number}".
- Use `&apos;` or typographic ' in JSX text (eslint react/no-unescaped-entities is on).

## CRO rules

- Every section ends within one viewport of a CTA. Mid-page CTA strips after Services and
  after Results. WhatsApp is the highest-priority channel — `waLink()` with a message tailored
  to the section context (e.g. `waLink("Hello, I want to hire a teacher...")`).
- Phone: always `telLink`. Never write the number as plain text without the link.

## Accessibility & quality floor

- Semantic HTML: one h1 (hero), h2 per section, h3 for cards. Buttons/links labelled.
- Decorative elements get `aria-hidden="true"`.
- Interactive targets ≥ 44px. Focus styles come free (globals).
- Server components by default; add `"use client"` only when the file itself uses hooks or
  `motion.*` directly (the primitives are already client where needed).
- TypeScript strict: data arrays are `as const` — type props as `readonly`/specific literals.
