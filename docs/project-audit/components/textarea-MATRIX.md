# Textarea — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/textarea.tsx`
(`min-h-[80px]`, boxed border, opaque bg, ring-2/offset-2). Structure/exports
uniform; `min-h`, disabled, and (no) `resize-*` uniform everywhere. Reports:
`components/<style>/textarea-vs-default.md`.

| Style | Face | Border | Focus | Padding/other | Divergences | Doc |
|---|---|---|---|---|---|---|
| moon | `bg-inherit` (UNVERIFIED) | swap | = | — | — | `moon/textarea-vs-default.md` |
| spectrum | `bg-inherit` (UNVERIFIED) | swap | = | — | — | `spectrum/textarea-vs-default.md` |
| carbon | `bg-input/40` (UNVERIFIED) | underline (UNVERIFIED) | ring-1 + border, no offset (UNVERIFIED) | — | — | `carbon/textarea-vs-default.md` |
| linear | transparent (UNVERIFIED) | swap | ring-2, offset color+width dropped (DIVERGENCE) | — | — | `linear/textarea-vs-default.md` |
| material | `bg-input/60` (UNVERIFIED) | `border-2` transparent (UNVERIFIED) | border-only, no ring (UNVERIFIED) | `py-3` (UNVERIFIED) | — | `material/textarea-vs-default.md` |
| catalyst | `bg-input/50` (UNVERIFIED) | swap | ring-2, offset dropped (DIVERGENCE) | — | — | `catalyst/textarea-vs-default.md` |
| wedges | `bg-input/20` (UNVERIFIED) | swap | **ring deleted, no replacement (DIVERGENCE)** | — | — | `wedges/textarea-vs-default.md` |
| lucid | `bg-inherit` (UNVERIFIED) | `border`-token edge (UNVERIFIED) | = | — | — | `lucid/textarea-vs-default.md` |
| snow | opaque (swap) | swap | ring-2, offset dropped (DIVERGENCE) | `px-3.5 py-3` (UNVERIFIED) | double space (no-op) | `snow/textarea-vs-default.md` |
| neon | `bg-input/40` (UNVERIFIED) | swap | = | — | — | `neon/textarea-vs-default.md` |
| libelle | `bg-input/50` (UNVERIFIED) | underline primary (UNVERIFIED) | = | top-only radius + `md:text-base` (UNVERIFIED) | — | `libelle/textarea-vs-default.md` |

## Corroborated patterns

- Each style's textarea mirrors its input treatment almost exactly (underline
  carbon/libelle, tints, offset removals, ring deletions) — input+textarea intent
  rulings can be made jointly per style.
- **Ring deletion** (wedges only): DIVERGENCE, Needs-designer.
- **Offset removal** (linear/catalyst/snow): DIVERGENCE in all three.
- **Full-parity focus** (moon/spectrum/lucid/neon/libelle): ring-2/offset-2 kept.
