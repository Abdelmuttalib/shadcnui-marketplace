# Drawer — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; overlay/content/handle lines verified
by direct grep per style. Baseline `registry/default/ui/drawer.tsx`
(`black/80` overlay; `rounded-t-[10px]` bordered content; muted handle;
`shouldScaleBackground`; bottom-only; 10 exports). Scaling/direction/exports/
Header/Footer/Title uniform everywhere. Reports:
`components/<style>/drawer-vs-default.md`.

| Style | Overlay | Content | Handle | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | `black/60` + dark gray-950 (UNVERIFIED) | bare border (DIVERGENCE) | swap | 1 | `carbon/drawer-vs-default.md` |
| linear | swap | bare border (DIVERGENCE) | swap | 1 | `linear/drawer-vs-default.md` |
| material | swap | bare border (DIVERGENCE) | swap | 1 | `material/drawer-vs-default.md` |
| catalyst | swap | bare border (DIVERGENCE) | swap | 1 | `catalyst/drawer-vs-default.md` |
| spectrum | `black/60`, no dark (UNVERIFIED) | `-md` + popover + `input/70` (UNVERIFIED) | swap | — | `spectrum/drawer-vs-default.md` |
| wedges | swap | bare border (DIVERGENCE) | swap | 1 | `wedges/drawer-vs-default.md` |
| moon | swap | swap | swap | — | `moon/drawer-vs-default.md` |
| lucid | swap | swap | swap | — | `lucid/drawer-vs-default.md` |
| snow | swap | swap | swap | — | `snow/drawer-vs-default.md` |
| neon | swap | swap | swap | — | `neon/drawer-vs-default.md` |
| libelle | swap | swap | swap | — | `libelle/drawer-vs-default.md` |

## Corroborated patterns

- **Bare Content borders** (carbon/linear/material/catalyst/wedges, 5 styles):
  needs one set-level ruling (deliberate borderless language vs shared slip).
- **Pure swaps** (moon/lucid/snow/neon/libelle): no component-level difference.
- **Lighter scrims** (carbon with dark variant; spectrum without): UNVERIFIED.
