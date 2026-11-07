# Typography — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; base line + 60-key parity verified
(delegated verbatim read + direct grep of line 29 per style). Baseline
`registry/default/ui/typography.tsx` (60-key size/weight cva matrix, no semantic
keys; `defaultVariants "md/normal"` vs component default `"base/normal"`;
`text-balance` wrapper; `as="p"`; 3 exports). All 60 keys verbatim in all 12.
Reports: `components/<style>/typography-vs-default.md`.

| Style | Base ink (line 29) | Keys/wrapper/defaults/exports | Divergences | Doc |
|---|---|---|---|---|
| carbon | unprefixed (DIVERGENCE) | verbatim | 1 | `carbon/typography-vs-default.md` |
| linear | swap | verbatim | — | `linear/typography-vs-default.md` |
| material | swap | verbatim | — | `material/typography-vs-default.md` |
| catalyst | unprefixed (DIVERGENCE) | verbatim | 1 | `catalyst/typography-vs-default.md` |
| spectrum | swap (`spctm`) | verbatim | — | `spectrum/typography-vs-default.md` |
| wedges | swap | verbatim | — | `wedges/typography-vs-default.md` |
| moon | swap | verbatim | — | `moon/typography-vs-default.md` |
| lucid | swap | verbatim | — | `lucid/typography-vs-default.md` |
| snow | swap | verbatim | — | `snow/typography-vs-default.md` |
| neon | swap | verbatim | — | `neon/typography-vs-default.md` |
| libelle | swap | verbatim | — | `libelle/typography-vs-default.md` |

## Corroborated patterns

- **60-key parity everywhere**: no size/weight/family/tracking/leading/color
  variant exists to differ — the file carries no per-level styling features.
- **Unprefixed base ink** (carbon/catalyst): joint ruling set (catalyst has
  convention evidence).
- **Shared default-mismatch quirk** (`defaultVariants` vs component default) in
  all 12: not a divergence.
