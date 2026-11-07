# Input — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/input.tsx`
(`h-10`, boxed `border-input`, opaque bg, ring-2/offset-2, `md:text-sm`).
Structure/exports uniform everywhere. No invalid-state styling in any file.
Reports: `components/<style>/input-vs-default.md`.

| Style | Height | Face | Border | Focus | Disabled/md | Divergences | Doc |
|---|---|---|---|---|---|---|---|
| moon | `h-10` = | `bg-inherit` (UNVERIFIED) | swap | = | = | — | `moon/input-vs-default.md` |
| carbon | `h-10` = | `bg-input/40` tint (UNVERIFIED) | underline transparent + bottom line (UNVERIFIED) | ring-1 + border recolor, no offset (UNVERIFIED) | = | — | `carbon/input-vs-default.md` |
| linear | `h-9` (UNVERIFIED) | transparent (UNVERIFIED) | swap | ring-2, offset dropped (DIVERGENCE) | = | — | `linear/input-vs-default.md` |
| material | `h-10` = | `bg-input/60` (UNVERIFIED) | `border-2` transparent (UNVERIFIED) | border-only, no ring (UNVERIFIED) | opacity-60 (UNVERIFIED) | — | `material/input-vs-default.md` |
| catalyst | `h-9` (UNVERIFIED) | `bg-input/50` (UNVERIFIED) | swap | ring-2, offset dropped (DIVERGENCE) | = | — | `catalyst/input-vs-default.md` |
| spectrum | `h-9` (UNVERIFIED) | `bg-inherit` (UNVERIFIED) | swap | = full stack | disabled fill (UNVERIFIED) | — | `spectrum/input-vs-default.md` |
| wedges | `h-9` (UNVERIFIED) | `bg-input/20` (UNVERIFIED) | swap | **ring deleted, no replacement (DIVERGENCE)** | opacity-60 (UNVERIFIED) | — | `wedges/input-vs-default.md` |
| lucid | `h-9` (UNVERIFIED) | `bg-inherit` (UNVERIFIED) | `border`-token edge (UNVERIFIED) | = | = | — | `lucid/input-vs-default.md` |
| snow | `h-9` (UNVERIFIED) | opaque (swap) | swap | ring-2, offset dropped (DIVERGENCE) | `px-3.5` (UNVERIFIED) | double space (no-op) | `snow/input-vs-default.md` |
| neon | `h-9` (UNVERIFIED) | `bg-input/40` (UNVERIFIED) | swap | = | = | — | `neon/input-vs-default.md` |
| libelle | `h-10` = | `bg-input/50` (UNVERIFIED) | underline + dual colors (UNVERIFIED) | = | `md:text-base` (UNVERIFIED) | dual radius literal (UNVERIFIED) | `libelle/input-vs-default.md` |

## Corroborated patterns

- **Compact `h-9`** (8 of 11; moon/carbon/material/libelle keep `h-10`) — candidate
  for STYLE_INTENTIONAL as a set; reports keep UNVERIFIED pending ruling.
- **Tinted/inheriting faces** (all except snow's opaque swap): tints track each
  style's input-token opacity language.
- **Offset removal** (linear/catalyst/snow): DIVERGENCE in all three.
- **Ring deletion** (wedges only): DIVERGENCE, Needs-designer — the batch's
  strongest input finding (no replacement focus treatment).
- **Border-only focus** (material only): UNVERIFIED — explicitly not covered by
  owner decision A.
