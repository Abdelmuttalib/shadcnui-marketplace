# Scroll-Area — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; Thumb line verified by direct grep per
style. Baseline `registry/default/ui/scroll-area.tsx` (pill thumb
`bg-dft-border`; 48 lines; 2 exports). Single-axis component: only the Thumb
token varies. Reports: `components/<style>/scroll-area-vs-default.md`.

| Style | Thumb token | Divergences | Doc |
|---|---|---|---|
| carbon | unprefixed `bg-border` (DIVERGENCE) | 1 | `carbon/scroll-area-vs-default.md` |
| linear | swap | — | `linear/scroll-area-vs-default.md` |
| material | unprefixed `bg-border` (DIVERGENCE) | 1 | `material/scroll-area-vs-default.md` |
| catalyst | unprefixed `bg-border` (DIVERGENCE) | 1 | `catalyst/scroll-area-vs-default.md` |
| spectrum | swap (`spctm`) | — | `spectrum/scroll-area-vs-default.md` |
| wedges | unprefixed `bg-border` (DIVERGENCE) | 1 | `wedges/scroll-area-vs-default.md` |
| moon | swap | — | `moon/scroll-area-vs-default.md` |
| lucid | swap | — | `lucid/scroll-area-vs-default.md` |
| snow | swap | — | `snow/scroll-area-vs-default.md` |
| neon | swap | — | `neon/scroll-area-vs-default.md` |
| libelle | swap | — | `libelle/scroll-area-vs-default.md` |

## Corroborated patterns

- **Unprefixed thumb** (carbon/material/catalyst/wedges, 4 styles): joint ruling
  set — same single-class instance repeated; one ruling covers all four.
- **Pure swaps** (other 7): no component-level difference.
- No width/shape/orientation differences anywhere.
