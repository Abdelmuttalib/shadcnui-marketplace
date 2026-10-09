# Dialog — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (3–4 changed lines
each). Baseline `registry/default/ui/dialog.tsx` (`black/80` overlay, `max-w-lg`
bordered `p-6` content, Close with X + sr-only + ring-2/offset-2, header/footer/
title/desc, 10 exports). Geometry/animations/exports uniform everywhere. Reports:
`components/<style>/dialog-vs-default.md`.

| Style | Overlay | Content bg/border/radius | Close | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | `black/60` + dark `black/80` (UNVERIFIED) | popover bg (UNVERIFIED); `-md` tier (UNVERIFIED) | unprefixed offset (DIVERGENCE) | 1 | `carbon/dialog-vs-default.md` |
| linear | swap | swap | swap | — | `linear/dialog-vs-default.md` |
| material | swap | borderless (UNVERIFIED) | swap (ring kept) | — | `material/dialog-vs-default.md` |
| catalyst | `black/30` + dark `black/70` (UNVERIFIED) | swap | swap | — | `catalyst/dialog-vs-default.md` |
| spectrum | `black/60`, no dark (UNVERIFIED) | popover bg + input/70 border + `-md` tier (UNVERIFIED) | swap | — | `spectrum/dialog-vs-default.md` |
| wedges | swap | borderless (UNVERIFIED) | swap | — | `wedges/dialog-vs-default.md` |
| moon | swap | popover bg (UNVERIFIED) | swap | — | `moon/dialog-vs-default.md` |
| lucid | swap | swap | swap | — | `lucid/dialog-vs-default.md` |
| snow | swap | swap | offset dropped (DIVERGENCE) | 1 | `snow/dialog-vs-default.md` |
| neon | swap | swap | swap | — | `neon/dialog-vs-default.md` |
| libelle | swap | swap + `font-outfit` (UNVERIFIED) | swap | — | `libelle/dialog-vs-default.md` |

## Corroborated patterns

- **Lighter scrims** (carbon/catalyst/spectrum): UNVERIFIED per style; only
  carbon/catalyst carry dark variants.
- **Borderless panels** (material/wedges): UNVERIFIED; catalyst keeps a
  width-only border (distinct third treatment).
- **Popover-surfaced content** (carbon/moon/spectrum): set-level ruling candidate.
- **Snow Close offset**: PARITY_DIVERGENCE (snow pattern, ~11th instance).
- **Pure swaps** (linear/lucid/neon): no component-level difference.
