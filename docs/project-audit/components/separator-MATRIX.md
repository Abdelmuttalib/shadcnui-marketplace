# Separator — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; line-for-line identity confirmed except
the base color token. Baseline `registry/default/ui/separator.tsx` (1px
`bg-dft-border`, `h-px w-full` / `h-full w-px`, `horizontal`+`decorative`
defaults). Reports: `components/<style>/separator-vs-default.md`.

| Style | Base token | Thickness/orientation | Defaults/exports | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | `bg-cb-border` (swap) | = | = | — | `carbon/separator-vs-default.md` |
| linear | `bg-linear-border` (swap) | = | = | — | `linear/separator-vs-default.md` |
| material | `bg-material-border` (swap) | = | = | — | `material/separator-vs-default.md` |
| catalyst | `bg-catalyst-border` (swap) | = | = | — | `catalyst/separator-vs-default.md` |
| spectrum | `bg-spctm-border` (swap) | = | = | — | `spectrum/separator-vs-default.md` |
| wedges | `bg-border` unprefixed (DIVERGENCE) | = | = | unprefixed token, confirm or re-tokenize | `wedges/separator-vs-default.md` |
| moon | `bg-moon-border` (swap) | = | = | — | `moon/separator-vs-default.md` |
| lucid | `bg-lucid-border` (swap) | = | = | — | `lucid/separator-vs-default.md` |
| snow | `bg-snow-border` (swap) | = | = | — | `snow/separator-vs-default.md` |
| neon | `bg-neon-border` (swap) | = | = | — | `neon/separator-vs-default.md` |
| libelle | `bg-libelle-border` (swap) | = | = | — | `libelle/separator-vs-default.md` |

## Result

Token-swap parity in 10 of 11; wedges' unprefixed `bg-border` is the sole open
item. No thickness, orientation, default, or export differences anywhere.
