# Sheet — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (7–8 changed lines
each). Baseline `registry/default/ui/sheet.tsx` (cva side system, default right,
`black/80` overlay, ring-2/offset-2 Close, prefixed Title, 10 exports,
non-exported `sheetVariants`). Side system, default side, durations, exports
uniform everywhere. Reports: `components/<style>/sheet-vs-default.md`.

| Style | Base/overlay | Side borders | Close | Title | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | popover base (UNVERIFIED); gray-950/60 + dark scrim (UNVERIFIED) | width-only ×4 (UNVERIFIED) | unprefixed radius+offset (DIVERGENCE) | unprefixed (DIVERGENCE) | 3 | `carbon/sheet-vs-default.md` |
| linear | swap | width-only ×4 (UNVERIFIED) | swap | swap | — | `linear/sheet-vs-default.md` |
| material | swap | width-only ×4 (UNVERIFIED) | swap (ring kept) | swap | — | `material/sheet-vs-default.md` |
| catalyst | `black/30` + dark (UNVERIFIED) | width-only ×4 (UNVERIFIED) | swap | unprefixed (DIVERGENCE) | 1 | `catalyst/sheet-vs-default.md` |
| spectrum | popover base (UNVERIFIED); `black/60` (UNVERIFIED) | kept colors ×4 (UNVERIFIED) | swap | swap | — | `spectrum/sheet-vs-default.md` |
| wedges | swap | width-only ×4 (UNVERIFIED) | swap | swap | — | `wedges/sheet-vs-default.md` |
| moon | swap | kept colors ×4 (UNVERIFIED) | swap | swap | — | `moon/sheet-vs-default.md` |
| lucid | swap | kept colors ×4 (UNVERIFIED) | swap | swap | — | `lucid/sheet-vs-default.md` |
| snow | swap | kept colors ×4 (UNVERIFIED) | offset dropped (DIVERGENCE) | swap | 1 | `snow/sheet-vs-default.md` |
| neon | swap | kept colors ×4 (UNVERIFIED) | swap | swap | — | `neon/sheet-vs-default.md` |
| libelle | swap | kept colors ×4 (UNVERIFIED) | swap | swap | — | `libelle/sheet-vs-default.md` |

## Corroborated patterns

- **Width-only side edges** (carbon/linear/material/catalyst/wedges, 5 styles)
  vs **kept colors** (spectrum/moon/lucid/snow/neon/libelle, 6 styles) — needs
  one set-level ruling covering both camps.
- **Unprefixed tokens** (carbon Close ×2 + Title; catalyst Title): joint ruling
  with the select/popover/hover-card/tooltip set.
- **Snow Close offset**: PARITY_DIVERGENCE (snow pattern).
- **Popover-surfaced base** (carbon/spectrum): as dialog.
