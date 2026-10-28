# Alert — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/alert.tsx` (cva, svg-layout selectors, 2 variants,
`role="alert"`, h5 Title, `Alert`/`AlertTitle`/`AlertDescription` exports,
non-exported `alertVariants`). Structure/exports/role uniform everywhere (0/11
export `alertVariants`). Reports: `components/<style>/alert-vs-default.md`.

| Style | Base border | Icon/default text | Destructive variant | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | swap | swap | swap | — | `carbon/alert-vs-default.md` |
| linear | bare (DIVERGENCE) | swap | swap | 1 | `linear/alert-vs-default.md` |
| material | bare (DIVERGENCE) | swap | swap | 1 | `material/alert-vs-default.md` |
| catalyst | bare (DIVERGENCE) | unprefixed ×2 (DIVERGENCE) | fully unprefixed (DIVERGENCE) | 3 | `catalyst/alert-vs-default.md` |
| spectrum | swap | swap | swap | — | `spectrum/alert-vs-default.md` |
| wedges | bare (DIVERGENCE) | swap | swap | 1 | `wedges/alert-vs-default.md` |
| moon | swap | swap | swap | — | `moon/alert-vs-default.md` |
| lucid | swap | swap | swap | — | `lucid/alert-vs-default.md` |
| snow | swap | swap | swap | — | `snow/alert-vs-default.md` |
| neon | swap | swap | swap | — | `neon/alert-vs-default.md` |
| libelle | swap | swap | swap | — | `libelle/alert-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (carbon/spectrum/moon/lucid/snow/neon/libelle, 7 styles).
- **Bare base borders** (linear/material/wedges + catalyst): set-level ruling
  candidate (deliberate borderless language vs shared slip).
- **Catalyst unprefixed set** (icon + default text + full destructive variant):
  densest single-file unprefixed instance in the audit so far — joint ruling,
  with convention evidence cited.
