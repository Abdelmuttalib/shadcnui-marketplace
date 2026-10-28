# Aspect-Ratio — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; byte-identity confirmed by `diff -q`
(no output for any style). Baseline `registry/default/ui/aspect-ratio.tsx`
(7-line Radix alias, no classes, sole export). Reports:
`components/<style>/aspect-ratio-vs-default.md`.

| Style | Delta vs baseline | Divergences | Doc |
|---|---|---|---|
| carbon | none (byte-identical) | — | `carbon/aspect-ratio-vs-default.md` |
| linear | none (byte-identical) | — | `linear/aspect-ratio-vs-default.md` |
| material | none (byte-identical) | — | `material/aspect-ratio-vs-default.md` |
| catalyst | none (byte-identical) | — | `catalyst/aspect-ratio-vs-default.md` |
| spectrum | none (byte-identical) | — | `spectrum/aspect-ratio-vs-default.md` |
| wedges | none (byte-identical) | — | `wedges/aspect-ratio-vs-default.md` |
| moon | none (byte-identical) | — | `moon/aspect-ratio-vs-default.md` |
| lucid | none (byte-identical) | — | `lucid/aspect-ratio-vs-default.md` |
| snow | none (byte-identical) | — | `snow/aspect-ratio-vs-default.md` |
| neon | none (byte-identical) | — | `neon/aspect-ratio-vs-default.md` |
| libelle | none (byte-identical) | — | `libelle/aspect-ratio-vs-default.md` |

## Result

Uniform NO_DIFFERENCE: the only component with zero source delta in all 11
styles (with label byte-identical too, but label at least carries classes).
No divergences, no exceptions. All 11 Complete.
