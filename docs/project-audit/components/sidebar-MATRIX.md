# Sidebar — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09 (767 lines; carbon 1535 with dead
region); size ladders verified by direct grep. Baseline
`registry/default/ui/sidebar.tsx` (16rem/3rem vars, cookie, `b` shortcut,
24 exports). Constants/state/keyboard/mobile/exports uniform everywhere.
Reports: `components/<style>/sidebar-vs-default.md`.

| Style | Imports | Menu system | Frame/edges | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | own ✓ | gap-3/p-3, `h-9/h-8/h-10`, svg inks (UNVERIFIED) | popover base, explicit frame (UNVERIFIED) | dead 767-line region (DIVERGENCE) | `carbon/sidebar-vs-default.md` |
| linear | own ✓ | swap | swap | — | `linear/sidebar-vs-default.md` |
| material | own ✓ | `h-9/h-9/h-11`, muted icons (UNVERIFIED) | added frame border (UNVERIFIED) | — | `material/sidebar-vs-default.md` |
| catalyst | own ✓ | gap-3, `h-9/h-8/h-10`, svg inks (UNVERIFIED) | swap | — | `catalyst/sidebar-vs-default.md` |
| spectrum | own ✓ | swap (`spctm`) | swap | — | `spectrum/sidebar-vs-default.md` |
| wedges | own ✓ | `h-9/h-9/h-11`, muted icons (UNVERIFIED) | unprefixed ×2 (DIVERGENCE) | 1 | `wedges/sidebar-vs-default.md` |
| moon | own ✓ | swap | swap | — | `moon/sidebar-vs-default.md` |
| lucid | own ✓ | swap | swap | — | `lucid/sidebar-vs-default.md` |
| snow | own ✓ | swap | swap | — | `snow/sidebar-vs-default.md` |
| neon | own ✓ | partial ladder + frame (UNVERIFIED) | added frame border (UNVERIFIED) | — | `neon/sidebar-vs-default.md` |
| libelle | own ✓ | swap | swap | — | `libelle/sidebar-vs-default.md` |

## Corroborated patterns

- **Uniform own-style wiring**: all 66 internal imports resolve own-style — no
  cross-style imports in the largest file (toggle-group/command/calendar/
  data-table/pagination precedent holds).
- **Shifted ladders** (carbon/material/catalyst/wedges/neon): UNVERIFIED per style.
- **Dead code** (carbon only): remove on migration.
