# Label — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; byte-identity confirmed by `diff -q`
(no output for any style). Baseline `registry/default/ui/label.tsx`
(`text-sm font-medium leading-none peer-disabled:*`, non-exported
`labelVariants`, sole `Label` export). Reports:
`components/<style>/label-vs-default.md`.

| Style | Base | Variants/sizes | States | Structure/exports | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | identical | none/none | peer-disabled = | = | none | `carbon/label-vs-default.md` |
| linear | identical | none/none | = | = | none | `linear/label-vs-default.md` |
| material | identical | none/none | = | = | none | `material/label-vs-default.md` |
| catalyst | identical | none/none | = | = | none | `catalyst/label-vs-default.md` |
| spectrum | identical | none/none | = | = | none | `spectrum/label-vs-default.md` |
| wedges | identical | none/none | = | = | none | `wedges/label-vs-default.md` |
| moon | identical | none/none | = | = | none | `moon/label-vs-default.md` |
| lucid | identical | none/none | = | = | none | `lucid/label-vs-default.md` |
| snow | identical | none/none | = | = | none | `snow/label-vs-default.md` |
| neon | identical | none/none | = | = | none | `neon/label-vs-default.md` |
| libelle | identical | none/none | = | = | none | `libelle/label-vs-default.md` |

## Result

Uniform NO_DIFFERENCE: the only component with zero per-style customization.
No divergences, no exceptions, no token dependencies (the file references no
tokens). Migration: freely replaceable with any upstream label.
