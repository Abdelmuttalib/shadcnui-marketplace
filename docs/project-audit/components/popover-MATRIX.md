# Popover — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (single-line delta
each). Baseline `registry/default/ui/popover.tsx` (`w-72`, `p-4`, bordered,
`bg-popover`, fade+zoom+side anims, Portal, `align=center sideOffset=4`).
Structure/defaults/exports/animations uniform everywhere. Reports:
`components/<style>/popover-vs-default.md`.

| Style | Content delta vs baseline | Divergences | Doc |
|---|---|---|---|
| carbon | prefix swap only | — | `carbon/popover-vs-default.md` |
| linear | prefix swap only | — | `linear/popover-vs-default.md` |
| material | unprefixed `text-popover-foreground` | DIVERGENCE, joint ruling | `material/popover-vs-default.md` |
| catalyst | `border-catalyst-input` (UNVERIFIED) + unprefixed text | DIVERGENCE (text), joint ruling | `catalyst/popover-vs-default.md` |
| spectrum | `border-spctm-input/60` (UNVERIFIED) | — | `spectrum/popover-vs-default.md` |
| wedges | `border-wedges-input` (UNVERIFIED) | — | `wedges/popover-vs-default.md` |
| moon | prefix swap only | — | `moon/popover-vs-default.md` |
| lucid | prefix swap only | — | `lucid/popover-vs-default.md` |
| snow | prefix swap only | — | `snow/popover-vs-default.md` |
| neon | prefix swap only | — | `neon/popover-vs-default.md` |
| libelle | prefix swap only | — | `libelle/popover-vs-default.md` |

## Corroborated patterns

- **Unprefixed text** (material + catalyst): same instance as both selects —
  one joint ruling should cover all four files.
- **Input-token borders** (catalyst, spectrum, wedges): recurring edge language,
  UNVERIFIED per style.
- 7 of 11 pure swaps — the quietest B2-B component.
