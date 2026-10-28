# Toggle — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/toggle.tsx`
(base with muted-hover, ring-2/offset-2, accent on-state, `size-4` icons;
variants default/outline; sizes with `min-w-*`). `toggleVariants` export name and
`Toggle` structure uniform everywhere. Reports:
`components/<style>/toggle-vs-default.md`.

| Style | Base | Focus | On-state | Outline variant | Sizes (d/sm/lg) | Divergences | Doc |
|---|---|---|---|---|---|---|---|
| moon | swap | = | accent (swap) | swap | = h-10/9/11 | — (exact clone) | `moon/toggle-vs-default.md` |
| libelle | swap | = | accent (swap) | swap | = h-10/9/11 | — (exact clone) | `libelle/toggle-vs-default.md` |
| carbon | swap | = | accent (swap) | `border-cb-border` + on-state `ring/5` border (UNVERIFIED) | =/= lg `px-4` (UNVERIFIED) | — | `carbon/toggle-vs-default.md` |
| catalyst | swap | = | accent (swap) | swap | compact h-9/8/10 (UNVERIFIED) | — | `catalyst/toggle-vs-default.md` |
| spectrum | swap | = | accent (swap) | swap | compact h-9/8/10, lg `px-3` (UNVERIFIED) | — | `spectrum/toggle-vs-default.md` |
| lucid | swap | = | accent (swap) | swap | compact h-9/8/10 (UNVERIFIED) | — | `lucid/toggle-vs-default.md` |
| neon | swap | = | accent (swap) | swap | compact h-9/8/10 narrow (UNVERIFIED) | — | `neon/toggle-vs-default.md` |
| wedges | swap | offset dropped (DIVERGENCE) | accent (swap) | swap | compact h-9/8/10 narrow (UNVERIFIED) | — | `wedges/toggle-vs-default.md` |
| linear | swap | offset dropped (DIVERGENCE) | accent (swap) | swap | compact h-9/8/10 (UNVERIFIED) | double space (no-op) | `linear/toggle-vs-default.md` |
| material | swap | offset dropped (DIVERGENCE) | accent (swap) | dup border colors (DIVERGENCE) | uneven compact (UNVERIFIED) | dead `border-material-border` | `material/toggle-vs-default.md` |
| snow | swap | offset dropped (DIVERGENCE) | **secondary (UNVERIFIED)** | swap | compact + sm/lg radius overrides (UNVERIFIED) | double space (no-op) | `snow/toggle-vs-default.md` |

## Corroborated patterns

- **Exact clones** (moon, libelle): prefix-only, full parity including sizes.
- **Compact sizes** (8 of 11): one-step-down density is near-universal — candidate
  for STYLE_INTENTIONAL as a set; reports keep UNVERIFIED pending ruling.
- **Offset-width removal** (linear/material/wedges/snow): PARITY_DIVERGENCE in all
  four, Needs-designer. (carbon/catalyst/spectrum/lucid/moon/neon/libelle retain it.)
- **Snow secondary on-state**: sole on-state token swap in the batch — UNVERIFIED.
- **On-state treatment otherwise uniform**: accent/accent-foreground everywhere else.
