# Design Spec — Santosh Singh Academy (kidocare-style system)

Lead-gen tuition site (Classes 5–12, CBSE/ICSE, Prayagraj & Varanasi). Structure follows the
purchased kidocare template (centered hero + full-bleed photo, photo cards, portrait grid,
pill FAQ, big CTA panel); the skin is premium/enterprise: porcelain ground, charcoal ink,
one deep-emerald accent with muted rust/plum details, single-family type. Every section
funnels to #enquiry, WhatsApp, or a call.

## Palette (globals.css @theme)

| Token | Hex | Use |
|---|---|---|
| cream | #F6F5F1 | porcelain page ground |
| cream-soft | #FCFBF8 | alternate sections, input fills |
| ink | #16171B | headings, primary buttons |
| gray | #5D6066 | body text |
| lime | #E5EEE6 | sage-mist surfaces: quote/CTA panels, hovers (deep: #D8E5DA) |
| leaf | #0E6F4F | THE accent: icons, checks, dots |
| coral | #A6543C | muted rust: numbers, errors, details |
| lilac | #6C5F79 | muted plum details |
| line | ink/10 | hairlines |
| wa | #25D366 | WhatsApp elements only |

## Type

- One family: **Instrument Sans** (variable) for display AND body — hierarchy by weight
  (semibold display, medium UI, regular body), size and tight tracking (-0.025em display).
- Section h2 scale via `SectionHeading`: centered, text-5xl→6xl, with an attached `Sticker`.

## Primitives (`@/components/ui/*`)

- `Section` — `{ id?, tone: "cream"|"soft"|"white", className? }`, py-20/28.
- `Container`, `Reveal`, `TextReveal`, `StaggerGroup`/`StaggerItem`, `Counter`, `Marquee` — as before.
- `SectionHeading` — `{ title, sticker?, stickerColor?, description?, align?: "center"(default)|"left" }`.
- `Sticker` — quiet glass chip (white/85 + colored dot + uppercase label); near-zero rotation.
- `Eyebrow` — white pill chip (e.g. "Classes 5–7").
- `Button` — `{ variant: primary(charcoal)|dark(white)|outline|whatsapp, size, plus?, arrow?, wa?, external? }`.
- `Accordion` — pill-row FAQ bars.
- Teacher portraits: `rounded-[28px]` rects (deep emerald/rust/plum/charcoal panels until real photos).

## Rules

- Cards: `rounded-3xl bg-white shadow-card`, hover `-translate-y-1.5 shadow-lift`. Flat > shadowed.
- Icon blobs: `size-13 rounded-2xl` in coral/lime/lilac/leaf/ink rotation.
- At most one chip per headline; chips are aria-hidden decoration. Restraint is the style.
- Reduced motion: global `MotionProvider` (reducedMotion="user") + CSS kill switch. Never branch
  rendered trees on `useReducedMotion`.
- Photos live in `public/images/` — Unsplash placeholders. TODO(client): replace with real
  photos of Santosh Sir, tutors and students; real faces are the strongest trust signal.
- Contact config in `src/lib/site.ts`, all content in `src/lib/data.ts` (placeholders marked
  TODO(client)).
- Verify visually: `node scripts/shot.mjs <outdir>` against localhost:3178 (Playwright).
