# Tooltip — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (single-line delta
each). Baseline `registry/default/ui/tooltip.tsx` (`px-3 py-1.5 text-sm`,
bordered, always-on + close-gated anims, `sideOffset=4`). Structure/exports/
animations uniform everywhere. Reports:
`components/<style>/tooltip-vs-default.md`.

| Style | Content delta vs baseline | Divergences | Doc |
|---|---|---|---|
| carbon | unprefixed text (DIVERGENCE, joint ruling) | 1 | `carbon/tooltip-vs-default.md` |
| linear | prefix swap only | — | `linear/tooltip-vs-default.md` |
| material | unprefixed text (DIVERGENCE, joint ruling) | 1 | `material/tooltip-vs-default.md` |
| catalyst | `border-catalyst-input` (UNVERIFIED) + unprefixed text (DIVERGENCE, joint ruling) | 1 | `catalyst/tooltip-vs-default.md` |
| spectrum | `border-spctm-input/70` + `px-2 py-0.5` density (UNVERIFIED) | — | `spectrum/tooltip-vs-default.md` |
| wedges | `border-wedges-input` (UNVERIFIED) | — | `wedges/tooltip-vs-default.md` |
| moon | prefix swap only | — | `moon/tooltip-vs-default.md` |
| lucid | prefix swap only | — | `lucid/tooltip-vs-default.md` |
| snow | prefix swap only | — | `snow/tooltip-vs-default.md` |
| neon | prefix swap only | — | `neon/tooltip-vs-default.md` |
| libelle | prefix swap only | — | `libelle/tooltip-vs-default.md` |

## Corroborated patterns

- **Unprefixed text** (carbon/material/catalyst): joint ruling set now spans
  select (2) + popover (2) + hover-card (3) + tooltip (3) + sheet Close/Title —
  recommend requesting one consolidated ruling after B2-B.
- **Input-token borders** (catalyst/spectrum/wedges): as popover/hover-card.
- **Spectrum density** (`px-2 py-0.5`): sole padding change, UNVERIFIED.
- 6 of 11 pure swaps.
