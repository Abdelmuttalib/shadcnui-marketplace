# Card — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/card.tsx` (`rounded-lg`, bordered, `shadow-sm`, `p-6`
header/content/footer, `text-2xl semibold` title; 6 exports). Structure/exports
uniform everywhere. Reports: `components/<style>/card-vs-default.md`.

| Style | Card shell | Header | Title | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | `-md` tier (UNVERIFIED) | swap | swap | — | `carbon/card-vs-default.md` |
| linear | swap | swap | swap | — | `linear/card-vs-default.md` |
| material | unprefixed fg (DIVERGENCE) | swap | swap | 1 | `material/card-vs-default.md` |
| catalyst | swap | swap | swap | — | `catalyst/card-vs-default.md` |
| spectrum | swap | swap | medium weight (UNVERIFIED) | — | `spectrum/card-vs-default.md` |
| wedges | swap | swap | swap | — | `wedges/card-vs-default.md` |
| moon | swap | swap | swap | — | `moon/card-vs-default.md` |
| lucid | swap | swap | swap | — | `lucid/card-vs-default.md` |
| snow | swap | swap | `text-xl` medium (UNVERIFIED) | — | `snow/card-vs-default.md` |
| neon | swap | swap | medium weight (UNVERIFIED) | — | `neon/card-vs-default.md` |
| libelle | swap | `p-5` (UNVERIFIED) | `text-xl`, no tracking (UNVERIFIED) | — | `libelle/card-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (linear/catalyst/wedges/moon/lucid): no component-level difference.
- **Medium title weight** (spectrum/neon): shared treatment, UNVERIFIED per style.
- **Title restyles** (snow/libelle): UNVERIFIED per style.
