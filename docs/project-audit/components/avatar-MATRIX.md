# Avatar — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; Root + Fallback lines verified by
direct grep per style. Baseline `registry/default/ui/avatar.tsx` (Root 40px
`rounded-full`; Image full-bleed; Fallback `bg-muted`; 3 exports). Shape/Image/
structure/exports uniform everywhere. Reports:
`components/<style>/avatar-vs-default.md`.

| Style | Root | Fallback | Divergences | Doc |
|---|---|---|---|---|
| carbon | 40px = | `bg-cb-muted` (swap) | — | `carbon/avatar-vs-default.md` |
| linear | 40px = | swap | — | `linear/avatar-vs-default.md` |
| material | 36px (UNVERIFIED) | swap | — | `material/avatar-vs-default.md` |
| catalyst | 40px = | swap | — | `catalyst/avatar-vs-default.md` |
| spectrum | 36px (UNVERIFIED) | swap (`spctm`) | — | `spectrum/avatar-vs-default.md` |
| wedges | 36px (UNVERIFIED) | swap | — | `wedges/avatar-vs-default.md` |
| moon | 40px = | swap | — | `moon/avatar-vs-default.md` |
| lucid | 36px (UNVERIFIED) | swap | — | `lucid/avatar-vs-default.md` |
| snow | 36px (UNVERIFIED) | swap | — | `snow/avatar-vs-default.md` |
| neon | 36px (UNVERIFIED) | swap | — | `neon/avatar-vs-default.md` |
| libelle | 40px = | swap | — | `libelle/avatar-vs-default.md` |

## Corroborated patterns

- **36px Roots** (material/spectrum/wedges/lucid/snow/neon, 6 styles):
  UNVERIFIED per style — set-level ruling candidate.
- **40px + swap-only** (carbon/linear/catalyst/moon/libelle): no
  component-level difference.
