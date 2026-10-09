# Data-Table — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads + import/wrapper
greps run. Baseline `registry/default/ui/data-table.tsx` (tanstack hook with
core row model; own-table imports; `rounded-md border` wrapper; `h-24`
"No results." empty state; `data-state` selected rows; sole `DataTable`
export). Hook/props/generics/behavior identical everywhere. Reports:
`components/<style>/data-table-vs-default.md`.

| Style | Table import | Wrapper | Empty state/logic | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | own ✓ | swap | identical | — | `carbon/data-table-vs-default.md` |
| linear | own ✓ | bare `border` (DIVERGENCE) | identical | 1 | `linear/data-table-vs-default.md` |
| material | own ✓ | swap | identical | — | `material/data-table-vs-default.md` |
| catalyst | own ✓ | swap | identical | — | `catalyst/data-table-vs-default.md` |
| spectrum | own ✓ | swap (`spctm`) | identical | — | `spectrum/data-table-vs-default.md` |
| wedges | own ✓ | swap | identical | — | `wedges/data-table-vs-default.md` |
| moon | own ✓ | swap | identical | — | `moon/data-table-vs-default.md` |
| lucid | own ✓ | swap | identical | — | `lucid/data-table-vs-default.md` |
| snow | own ✓ | swap | identical | — | `snow/data-table-vs-default.md` |
| neon | own ✓ | swap | identical | — | `neon/data-table-vs-default.md` |
| libelle | own ✓ | swap | identical | — | `libelle/data-table-vs-default.md` |

## Corroborated patterns

- **Uniform own-style wiring**: all 11 import their own table module — no
  cross-style imports (toggle-group/command/calendar precedent holds).
- **Zero logic drift**: hook config, generics, selection, empty text identical.
- **Linear bare-border wrapper**: sole divergence (shared pattern with linear
  menubar contents — set-level ruling candidate).
