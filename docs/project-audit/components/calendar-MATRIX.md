# Calendar — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (5–6 changed lines
each). Baseline `registry/default/ui/calendar.tsx` (DayPicker + classNames +
h-4 chevrons; `rounded-r-dfs-md` typo in the cell `last:` helper; nav `outline`;
`CalendarProps` + `Calendar` export). Own-style `buttonVariants` imports verified
in all 11. Reports: `components/<style>/calendar-vs-default.md`.

| Style | Import | Root/nav | Typo handling (verified) | Other | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | own ✓ | popover root + ghost nav (UNVERIFIED) | fixed → `cb-md` | — | — | `carbon/calendar-vs-default.md` |
| linear | own ✓ | rounded root (UNVERIFIED) | fixed → `linear-md` | — | — | `linear/calendar-vs-default.md` |
| material | own ✓ | `font-material` pin (UNVERIFIED) | fixed → `material-md` | — | — | `material/calendar-vs-default.md` |
| catalyst | own ✓ | swap | plain `rounded-r-md` (DIVERGENCE) | — | 1 | `catalyst/calendar-vs-default.md` |
| spectrum | own ✓ | swap | fixed → `spctm-md`; `/80` outside (UNVERIFIED) | **missing generic selected wash (DIVERGENCE)** | 1 | `spectrum/calendar-vs-default.md` |
| wedges | own ✓ | swap | fixed → `wedges-md` | — | — | `wedges/calendar-vs-default.md` |
| moon | own ✓ | swap | fixed → `moon-md` | — | — | `moon/calendar-vs-default.md` |
| lucid | own ✓ | swap | asymmetric: plain first, prefixed last (DIVERGENCE) | — | 1 | `lucid/calendar-vs-default.md` |
| snow | own ✓ | swap | **preserved verbatim** (UNVERIFIED) | — | — | `snow/calendar-vs-default.md` |
| neon | own ✓ | swap | **preserved verbatim** (UNVERIFIED) | — | — | `neon/calendar-vs-default.md` |
| libelle | own ✓ | `font-outfit` pin (UNVERIFIED) | **preserved verbatim** (UNVERIFIED) | — | — | `libelle/calendar-vs-default.md` |

## Typo-handling map (the `rounded-r-dfs-md` baseline typo)

- **Fixed to prefixed tier** (6): carbon, linear, material, spectrum, wedges, moon.
- **Replaced with plain `md`** (1 + asymmetric 1): catalyst (all-plain), lucid
  (first-plain + last-prefixed).
- **Preserved verbatim** (3): snow, neon, libelle (+ baseline itself).
- Rule requested: one owner ruling on the canonical resolution (prefixed tier vs
  plain `md` vs verbatim); then apply uniformly at migration. No per-style
  normalization in prose.

## Other corroborated patterns

- **Root font pins** (material, libelle): joint ruling candidate with libelle
  dialog/menubar pins.
- Day states/icons namespace-swapped everywhere; cells stay `h-9 w-9` in all 12.
