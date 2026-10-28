# Hover-Card — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (single-line delta
each). Baseline `registry/default/ui/hover-card.tsx` (`w-64`, `p-4`, bordered,
no Portal, fade+zoom+side anims). Structure/defaults/exports/animations uniform
everywhere; no style adds a Portal. Reports:
`components/<style>/hover-card-vs-default.md`.

| Style | Content delta vs baseline | Divergences | Doc |
|---|---|---|---|
| carbon | bare `border` (DIVERGENCE) + unprefixed text (DIVERGENCE, joint ruling) | 2 | `carbon/hover-card-vs-default.md` |
| linear | bare `border` (DIVERGENCE) | 1 | `linear/hover-card-vs-default.md` |
| material | bare `border` (DIVERGENCE) + unprefixed text (DIVERGENCE, joint ruling) | 2 | `material/hover-card-vs-default.md` |
| catalyst | `border-catalyst-input` (UNVERIFIED) + unprefixed text (DIVERGENCE, joint ruling) | 1 | `catalyst/hover-card-vs-default.md` |
| spectrum | `border-spctm-input/70` (UNVERIFIED) | — | `spectrum/hover-card-vs-default.md` |
| wedges | `border-wedges-input` (UNVERIFIED) | — | `wedges/hover-card-vs-default.md` |
| moon | prefix swap only | — | `moon/hover-card-vs-default.md` |
| lucid | prefix swap only | — | `lucid/hover-card-vs-default.md` |
| snow | prefix swap only | — | `snow/hover-card-vs-default.md` |
| neon | prefix swap only | — | `neon/hover-card-vs-default.md` |
| libelle | prefix swap only | — | `libelle/hover-card-vs-default.md` |

## Corroborated patterns

- **Bare colorless `border`** (carbon/linear/material): same deletion in three
  styles — needs a set-level ruling (deliberate borderless language vs shared slip).
- **Unprefixed text** (carbon/material/catalyst): joins the joint ruling set
  (now 8 files: 2 select + 2 popover + 3 hover-card + 1 tooltip carbon… see tooltip matrix).
- **Input-token borders** (catalyst/spectrum/wedges): as popover.
