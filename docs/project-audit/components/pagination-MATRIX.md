# Pagination — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (exactly 2 changed
lines each — the import pair). Baseline `registry/default/ui/pagination.tsx`
(active=outline + `aria-current`, inactive=ghost, icon/default sizes, chevrons,
ellipsis, 7 exports). Active mapping, sizes, icons, labels, structure uniform
everywhere. Reports: `components/<style>/pagination-vs-default.md`.

| Style | Button import | Other deltas | Divergences | Doc |
|---|---|---|---|---|
| carbon | own ✓ | none | — | `carbon/pagination-vs-default.md` |
| linear | own ✓ | none | — | `linear/pagination-vs-default.md` |
| material | own ✓ | none | — | `material/pagination-vs-default.md` |
| catalyst | own ✓ | none | — | `catalyst/pagination-vs-default.md` |
| spectrum | own ✓ | none | — | `spectrum/pagination-vs-default.md` |
| wedges | own ✓ | none | — | `wedges/pagination-vs-default.md` |
| moon | own ✓ | none | — | `moon/pagination-vs-default.md` |
| lucid | own ✓ | none | — | `lucid/pagination-vs-default.md` |
| snow | own ✓ | none | — | `snow/pagination-vs-default.md` |
| neon | own ✓ | none | — | `neon/pagination-vs-default.md` |
| libelle | own ✓ | none | — | `libelle/pagination-vs-default.md` |

## Result

Uniform own-style wiring + byte-identity otherwise: all 11 import their own
button module (no cross-style imports — toggle-group/command/calendar/data-table
precedent holds); active mapping, sizes, icons, labels identical. No
divergences, no exceptions. All 11 Complete.
