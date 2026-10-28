# Skeleton — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/skeleton.tsx` (`animate-pulse rounded-md bg-muted`,
function component, sole `Skeleton` export). Imports/props/structure uniform
everywhere (no `forwardRef`, no motion library, no custom keyframes).
Reports: `components/<style>/skeleton-vs-default.md`.

| Style | Class string | Divergences | Doc |
|---|---|---|---|
| carbon | `animate-pulse rounded-cb-md bg-cb-muted` | — | `carbon/skeleton-vs-default.md` |
| linear | `animate-pulse rounded-linear-md bg-linear-muted` | — | `linear/skeleton-vs-default.md` |
| material | `animate-pulse rounded-material-md bg-material-muted` | — | `material/skeleton-vs-default.md` |
| catalyst | `animate-pulse rounded-catalyst-md bg-catalyst-muted` | — | `catalyst/skeleton-vs-default.md` |
| spectrum | `animate-pulse rounded-spctm-md bg-spctm-muted` | — | `spectrum/skeleton-vs-default.md` |
| wedges | `animate-pulse rounded-wedges-md bg-wedges-muted` | — | `wedges/skeleton-vs-default.md` |
| moon | `animate-pulse rounded-moon-md bg-moon-muted` | — | `moon/skeleton-vs-default.md` |
| lucid | `animate-pulse rounded-lucid-md bg-lucid-muted` | — | `lucid/skeleton-vs-default.md` |
| snow | `animate-pulse rounded-snow-md bg-snow-muted` | — | `snow/skeleton-vs-default.md` |
| neon | `animate-pulse rounded-neon-md bg-neon-muted` | — | `neon/skeleton-vs-default.md` |
| libelle | `animate-pulse rounded-libelle-md bg-libelle-muted` | — | `libelle/skeleton-vs-default.md` |

## Result

Uniform NO_DIFFERENCE beyond namespace: all 11 are pure token swaps. No
divergences, no exceptions, no animation variants anywhere. All 11 Complete.
