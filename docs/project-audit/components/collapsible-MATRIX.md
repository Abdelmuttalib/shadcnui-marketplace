# Collapsible — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; byte-identity confirmed by `diff -q`
(no output for any style). Baseline `registry/default/ui/collapsible.tsx`
(11-line pure Radix re-export, no classes, 3 aliases). Reports:
`components/<style>/collapsible-vs-default.md`.

| Style | Delta vs baseline | Divergences | Doc |
|---|---|---|---|
| carbon | none (byte-identical) | — | `carbon/collapsible-vs-default.md` |
| linear | none (byte-identical) | — | `linear/collapsible-vs-default.md` |
| material | none (byte-identical) | — | `material/collapsible-vs-default.md` |
| catalyst | none (byte-identical) | — | `catalyst/collapsible-vs-default.md` |
| spectrum | none (byte-identical) | — | `spectrum/collapsible-vs-default.md` |
| wedges | none (byte-identical) | — | `wedges/collapsible-vs-default.md` |
| moon | none (byte-identical) | — | `moon/collapsible-vs-default.md` |
| lucid | none (byte-identical) | — | `lucid/collapsible-vs-default.md` |
| snow | none (byte-identical) | — | `snow/collapsible-vs-default.md` |
| neon | none (byte-identical) | — | `neon/collapsible-vs-default.md` |
| libelle | none (byte-identical) | — | `libelle/collapsible-vs-default.md` |

## Result

Uniform NO_DIFFERENCE: no classes exist to customize in any style. No
divergences, no exceptions. All 11 Complete.
