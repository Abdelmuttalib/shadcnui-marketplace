# Resizable — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; handle + grip lines verified by direct
grep per style. Baseline `registry/default/ui/resizable.tsx` (direction-aware
handle + ring-1/offset-1 focus; grip `border-dft-border` + `bg-dft-border`;
GripVertical `h-2.5`; 3 exports). Group/direction/icons/exports uniform
everywhere. Reports: `components/<style>/resizable-vs-default.md`.

| Style | Handle bg | Grip border/bg | Divergences | Doc |
|---|---|---|---|---|
| carbon | swap | bare border + swap bg (DIVERGENCE) | 1 | `carbon/resizable-vs-default.md` |
| linear | swap | bare border + swap bg (DIVERGENCE) | 1 | `linear/resizable-vs-default.md` |
| material | unprefixed (DIVERGENCE) | bare border + unprefixed bg (DIVERGENCE) | 2 | `material/resizable-vs-default.md` |
| catalyst | swap | swap | — | `catalyst/resizable-vs-default.md` |
| spectrum | swap (`spctm`) | swap | — | `spectrum/resizable-vs-default.md` |
| wedges | unprefixed (DIVERGENCE) | bare border + unprefixed bg (DIVERGENCE) | 2 | `wedges/resizable-vs-default.md` |
| moon | swap | swap | — | `moon/resizable-vs-default.md` |
| lucid | swap | swap | — | `lucid/resizable-vs-default.md` |
| snow | swap | swap | — | `snow/resizable-vs-default.md` |
| neon | swap | swap | — | `neon/resizable-vs-default.md` |
| libelle | swap | swap | — | `libelle/resizable-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (catalyst/spectrum/moon/lucid/snow/neon/libelle, 7 styles).
- **Bare grip borders** (carbon/linear): DIVERGENCE, confirm or restore.
- **Unprefixed handle/grip** (material/wedges): joint ruling set.
