# Navigation-Menu — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (3 changed lines
each). Baseline `registry/default/ui/navigation-menu.tsx` (trigger `h-10`,
Viewport with `border-border` + prefixed text, diamond `rounded-tl-sm
bg-border`, 9 exports incl. `navigationMenuTriggerStyle`). Positioning/motion
animations uniform everywhere. Reports:
`components/<style>/navigation-menu-vs-default.md`.

| Style | Trigger | Viewport border | Viewport text | Diamond | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | `h-10` = | bare (DIVERGENCE) | unprefixed (DIVERGENCE) | unprefixed ×2 (DIVERGENCE) | 3 | `carbon/navigation-menu-vs-default.md` |
| linear | `h-10` = | bare (DIVERGENCE) | swap | radius unprefixed (DIVERGENCE) | 2 | `linear/navigation-menu-vs-default.md` |
| material | `h-9` (UNVERIFIED) | bare (DIVERGENCE) | unprefixed (DIVERGENCE) | unprefixed ×2 (DIVERGENCE) | 3 | `material/navigation-menu-vs-default.md` |
| catalyst | `h-10` = | bare (DIVERGENCE) | unprefixed (DIVERGENCE) | unprefixed ×2 (DIVERGENCE) | 3 | `catalyst/navigation-menu-vs-default.md` |
| spectrum | `h-10` = | swap | swap | swap | — | `spectrum/navigation-menu-vs-default.md` |
| wedges | `h-9` (UNVERIFIED) | bare (DIVERGENCE) | swap | unprefixed ×2 (DIVERGENCE) | 2 | `wedges/navigation-menu-vs-default.md` |
| moon | `h-10` = | swap | swap | swap | — | `moon/navigation-menu-vs-default.md` |
| lucid | `h-9` (UNVERIFIED) | swap | swap | swap | — | `lucid/navigation-menu-vs-default.md` |
| snow | `h-9` (UNVERIFIED) | swap | swap | swap | — | `snow/navigation-menu-vs-default.md` |
| neon | `h-9` (UNVERIFIED) | swap | swap | swap | — | `neon/navigation-menu-vs-default.md` |
| libelle | `h-10` = | swap | swap | swap | — | `libelle/navigation-menu-vs-default.md` |

## Corroborated patterns

- **Faithful clones** (spectrum/moon/libelle): zero non-swap delta — spectrum is
  the reference clone for ruling others' Viewport deviations.
- **Bare Viewport borders** (carbon/linear/material/catalyst/wedges, 5 styles):
  needs one set-level ruling.
- **Unprefixed diamond/text** (carbon/material/catalyst/wedges, linear radius):
  joint ruling set.
- **`h-9` triggers** (material/wedges/lucid/snow/neon): UNVERIFIED per style.
