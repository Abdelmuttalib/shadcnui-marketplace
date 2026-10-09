# Slider — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/slider.tsx`
(2px `secondary` rail, 20px bordered thumb, ring-2/offset-2). Imports/props/
structure uniform except material's nested halo span. Reports:
`components/<style>/slider-vs-default.md`.

| Style | Track | Range | Thumb | Focus | Divergences | Doc |
|---|---|---|---|---|---|---|
| moon | swap | swap | swap (20px bordered) | = | — | `moon/slider-vs-default.md` |
| lucid | swap | swap | swap (20px bordered) | = | — | `lucid/slider-vs-default.md` |
| carbon | 1px, square, `muted` (UNVERIFIED) | legacy `foreground` (UNVERIFIED) | 16px solid dot, no border (UNVERIFIED) | **ring removed (DIVERGENCE)** | unprefixed tokens | `carbon/slider-vs-default.md` |
| linear | swap | swap | swap (20px bordered) | offset dropped (DIVERGENCE) | — | `linear/slider-vs-default.md` |
| material | 1px `muted` (UNVERIFIED) | swap | 16px solid primary dot, no border (UNVERIFIED) | ring removed, halo instead (UNVERIFIED) | nested halo span (exception candidate) | `material/slider-vs-default.md` |
| catalyst | 1.5px (UNVERIFIED) | swap | 16px (UNVERIFIED) | = | — | `catalyst/slider-vs-default.md` |
| spectrum | 1px (UNVERIFIED) | swap | 16px, foreground edge (UNVERIFIED) | ring → `border-4` (UNVERIFIED) | — | `spectrum/slider-vs-default.md` |
| wedges | 1.5px `input` (UNVERIFIED) | swap | 14px white, 1px edge (UNVERIFIED) | always-on offset-1, no focus offset (UNVERIFIED) | — | `wedges/slider-vs-default.md` |
| snow | swap | swap | swap (20px bordered) | offset dropped (DIVERGENCE) | double space (no-op) | `snow/slider-vs-default.md` |
| neon | 1.5px square (UNVERIFIED) | swap | rectangular 16×20, square (UNVERIFIED) | = | — | `neon/slider-vs-default.md` |
| libelle | transparent outlined rail (UNVERIFIED) | swap | 20px, 1px edge (UNVERIFIED) | = | — | `libelle/slider-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (moon, lucid): no component-level difference.
- **Hairline rails** (carbon/material/spectrum 1px; catalyst/wedges/neon 1.5px) with
  smaller thumbs — widespread density language, UNVERIFIED per style.
- **Ring removal** (carbon: DIVERGENCE; material: halo replacement, UNVERIFIED and
  explicitly not owner-decided).
- **White thumbs** (wedges; carbon/material solid dots in token colors).
- Slider stays in the DESIGN_EXCEPTIONS protocol queue; only material's nested
  span currently qualifies as structural candidacy.
