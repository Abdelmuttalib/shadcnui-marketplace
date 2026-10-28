# Input-OTP — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; caret/radius/group lines verified by
direct grep per style. Baseline `registry/default/ui/input-otp.tsx` (container
+ Group + `h-10 w-10` slots with first/last radius + ring-2/offset active +
`bg-foreground` caret + `Dot` separator; 4 exports). Separator/imports/exports
uniform everywhere. Reports: `components/<style>/input-otp-vs-default.md`.

| Style | Group | Slots | Caret | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | underline frame (UNVERIFIED) | border-relocated + tint (UNVERIFIED) | swap | — | `carbon/input-otp-vs-default.md` |
| linear | swap | swap | unprefixed (DIVERGENCE) | 1 | `linear/input-otp-vs-default.md` |
| material | swap | 60% tint (UNVERIFIED) | unprefixed (DIVERGENCE) | 1 | `material/input-otp-vs-default.md` |
| catalyst | swap | 50% tint + plain radius (DIVERGENCE) | unprefixed (DIVERGENCE) | 2 | `catalyst/input-otp-vs-default.md` |
| spectrum | swap | `h-9 w-9` (UNVERIFIED) | swap (`spctm`) | — | `spectrum/input-otp-vs-default.md` |
| wedges | swap | `h-9 w-10` + tint (UNVERIFIED) | unprefixed (DIVERGENCE) | 1 | `wedges/input-otp-vs-default.md` |
| moon | swap | swap | swap | — | `moon/input-otp-vs-default.md` |
| lucid | swap | `h-9 w-9` (UNVERIFIED) | swap | — | `lucid/input-otp-vs-default.md` |
| snow | swap | `h-9 w-9` (UNVERIFIED) | swap | — | `snow/input-otp-vs-default.md` |
| neon | swap | `h-9 w-9` (UNVERIFIED) | swap | — | `neon/input-otp-vs-default.md` |
| libelle | swap | swap | swap | — | `libelle/input-otp-vs-default.md` |

## Corroborated patterns

- **Compact `h-9` slots** (spectrum/lucid/snow/neon; wedges `h-9 w-10`):
  UNVERIFIED per style.
- **Unprefixed caret** (linear/material/wedges/catalyst): joint ruling set —
  recommend one consolidated ruling with the unprefixed-token set.
- **Pure swaps** (moon/libelle): no component-level difference.
