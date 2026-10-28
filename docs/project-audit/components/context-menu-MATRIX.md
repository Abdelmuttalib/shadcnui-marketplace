# Context-Menu — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run. Baseline
`registry/default/ui/context-menu.tsx` (15 exports; items `px-2 py-1.5`,
`rounded-sm`; contents `p-1`; label semibold with `text-foreground`; separator
`bg-border`; Content carries `animate-in fade-in-80`). Icons/animations/exports
uniform everywhere. Reports: `components/<style>/context-menu-vs-default.md`.

| Style | Items | Contents | Label/separator | Shortcut | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | `-md` + `px-2.5` (UNVERIFIED) | unpadded (UNVERIFIED) | `px-2.5` (UNVERIFIED) | kbd chip (UNVERIFIED) | — | `carbon/context-menu-vs-default.md` |
| linear | swap | swap | swap | wide tracking (UNVERIFIED) | — | `linear/context-menu-vs-default.md` |
| material | radius-less + `px-3 py-2.5` (UNVERIFIED) | unpadded + unprefixed text (DIVERGENCE) | `px-3 py-1` (UNVERIFIED) | color+opacity (UNVERIFIED) | 1 | `material/context-menu-vs-default.md` |
| catalyst | `px-2.5 py-2` (UNVERIFIED) | `input` edge + `p-0.5` + unprefixed text (DIVERGENCE) + label/sep unprefixed (DIVERGENCE) | `px-2.5 py-2` (UNVERIFIED) | /60 tone (UNVERIFIED) | 3 | `catalyst/context-menu-vs-default.md` |
| spectrum | radius-less + `px-3 py-2` (UNVERIFIED) | `input/70` + `py-1` (UNVERIFIED) | `px-3 py-2` (UNVERIFIED) | swap | — | `spectrum/context-menu-vs-default.md` |
| wedges | radius-less + `px-3` (UNVERIFIED) | unpadded + `input` edge (UNVERIFIED) | `px-3 py-1` + `border` sep (UNVERIFIED) | opacity (UNVERIFIED) | — | `wedges/context-menu-vs-default.md` |
| moon | swap | swap | swap | swap | — | `moon/context-menu-vs-default.md` |
| lucid | swap | swap | swap | swap | — | `lucid/context-menu-vs-default.md` |
| snow | swap | `p-1.5` (UNVERIFIED) | swap | swap | — | `snow/context-menu-vs-default.md` |
| neon | swap | swap | swap | swap | — | `neon/context-menu-vs-default.md` |
| libelle | swap | swap | swap | swap | — | `libelle/context-menu-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (moon/lucid/neon/libelle; linear except Shortcut).
- **Unprefixed tokens** (material Content ×2; catalyst Content ×2 + Label + Separator):
  joint ruling set — catalyst's four make it the densest single-file instance.
- **Unpadded contents** (carbon/material/wedges): as dropdown.
- Note: baseline separator here is `bg-border` (not `muted` as in dropdown) —
  per-file baselines differ; each report compares against its own file.
