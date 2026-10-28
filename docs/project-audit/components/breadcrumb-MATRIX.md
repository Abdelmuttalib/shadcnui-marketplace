# Breadcrumb — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/breadcrumb.tsx` (nav/list/item/link-hvr/page/separator-
ChevronRight/ellipsis, 7 exports, `Elipssis` typo). Roles/props/exports uniform
everywhere (typo retained in all 12 — shared-baseline note). Reports:
`components/<style>/breadcrumb-vs-default.md`.

| Style | Link/Page text | Separator | Divergences | Doc |
|---|---|---|---|---|
| carbon | unprefixed ×2 (DIVERGENCE) | Slash `-rotate-30` + `h-2.5` box (UNVERIFIED) | 1 | `carbon/breadcrumb-vs-default.md` |
| linear | swap | swap | — | `linear/breadcrumb-vs-default.md` |
| material | swap | swap | — | `material/breadcrumb-vs-default.md` |
| catalyst | unprefixed ×2 (DIVERGENCE) | `h-3` box (UNVERIFIED) | 1 | `catalyst/breadcrumb-vs-default.md` |
| spectrum | swap (`spctm`) | tinted glyph (UNVERIFIED) | — | `spectrum/breadcrumb-vs-default.md` |
| wedges | swap | swap | — | `wedges/breadcrumb-vs-default.md` |
| moon | swap | swap | — | `moon/breadcrumb-vs-default.md` |
| lucid | swap | swap | — | `lucid/breadcrumb-vs-default.md` |
| snow | swap | text `/` + sr-only (UNVERIFIED) | dead import (DIVERGENCE) | `snow/breadcrumb-vs-default.md` |
| neon | swap | swap | — | `neon/breadcrumb-vs-default.md` |
| libelle | swap | swap | — | `libelle/breadcrumb-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (linear/material/wedges/moon/lucid/neon/libelle, 7 styles).
- **Unprefixed Link/Page** (carbon/catalyst): joint ruling set.
- **Separator redesigns** (carbon Slash, snow `/`, spectrum tint, catalyst `h-3`):
  UNVERIFIED per style — four distinct answers to the same slot.
