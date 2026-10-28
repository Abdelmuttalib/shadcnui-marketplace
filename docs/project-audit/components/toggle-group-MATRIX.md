# Toggle-Group — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09 (full-file diffs run). Baseline
`registry/default/ui/toggle-group.tsx` (imports `toggleVariants` from default's
toggle; context `{size,variant:"default"}`; Root `gap-1`; context-wins item
composition; exports `{ToggleGroup, ToggleGroupItem}`). Reports:
`components/<style>/toggle-group-vs-default.md`.

| Style | Import source (`:8`) | Root | Context/defaults | Item composition | Exports | Other diffs | Doc |
|---|---|---|---|---|---|---|---|
| carbon | own (`carbon/ui/toggle`) | `gap-1` = | = | context-wins = | = | none | `carbon/toggle-group-vs-default.md` |
| linear | own | = | = | = | = | none | `linear/toggle-group-vs-default.md` |
| material | own | = | = | = | = | none | `material/toggle-group-vs-default.md` |
| catalyst | own | = | = | = | = | none | `catalyst/toggle-group-vs-default.md` |
| spectrum | own | = | = | = | = | none | `spectrum/toggle-group-vs-default.md` |
| wedges | own | = | = | = | = | none | `wedges/toggle-group-vs-default.md` |
| moon | own | = | = | = | = | none | `moon/toggle-group-vs-default.md` |
| lucid | own | = | = | = | = | none | `lucid/toggle-group-vs-default.md` |
| snow | own | = | = | = | = | none | `snow/toggle-group-vs-default.md` |
| neon | own | = | = | = | = | none | `neon/toggle-group-vs-default.md` |
| libelle | own | = | = | = | = | none | `libelle/toggle-group-vs-default.md` |

## Result

Uniform parity: every style imports its **own** toggle's `toggleVariants` (no
cross-style imports — verified by diff and import grep); all other lines
byte-identical to baseline. Style-specific toggle differences (sizes, on-state,
offsets) flow into group items automatically through the import. No divergences,
no exceptions. Migration rule: preserve the own-style import path per file.
