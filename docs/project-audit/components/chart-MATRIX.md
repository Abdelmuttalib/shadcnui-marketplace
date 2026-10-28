# Chart — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads + radial-selector
grep run. Baseline `registry/default/ui/chart.tsx` (recharts theming via
`chartConfig` + THEMES; duplicate tooltip border; buggy
`radial-bar-dft-background-sector`; 6 exports). No `chart-1..5` literals
anywhere. Structure/exports/theming uniform everywhere. Reports:
`components/<style>/chart-vs-default.md`.

| Style | Container | Tooltip border | Value text | Radial selector (verified) | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | mixed (curve/polar de-prefixed — UNVERIFIED) | single unprefixed + `rounded-none` + popover bg (DIVERGENCE/UNVERIFIED) | unprefixed (DIVERGENCE) | fixed, correct form | 2 | `carbon/chart-vs-default.md` |
| linear | fully unprefixed (UNVERIFIED) | single namespaced (UNVERIFIED) | swap | fixed, correct form | — | `linear/chart-vs-default.md` |
| material | fully unprefixed (UNVERIFIED) | single namespaced (UNVERIFIED) | swap | fixed, correct form | — | `material/chart-vs-default.md` |
| catalyst | prefixed except radial fill (DIVERGENCE) | single namespaced (UNVERIFIED) | unprefixed (DIVERGENCE) | fixed, correct form | 2 | `catalyst/chart-vs-default.md` |
| spectrum | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `spectrum/chart-vs-default.md` |
| wedges | fully unprefixed (UNVERIFIED) | single namespaced (UNVERIFIED) | swap | fixed, correct form | — | `wedges/chart-vs-default.md` |
| moon | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `moon/chart-vs-default.md` |
| lucid | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `lucid/chart-vs-default.md` |
| snow | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `snow/chart-vs-default.md` |
| neon | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `neon/chart-vs-default.md` |
| libelle | swap | duplicate kept (UNVERIFIED) | swap | bug preserved +prefix (UNVERIFIED) | — | `libelle/chart-vs-default.md` |

## Radial-selector map (verified by grep)

- **Fixed, correct form** (5): carbon, linear, material, catalyst, wedges
  (`recharts-radial-bar-background-sector`).
- **Bug preserved with prefix inserted** (6): spectrum, moon, lucid, snow, neon,
  libelle (`radial-bar-<prefix>-background-sector` — dead in both files).
- **Buggy baseline form** (1): default (`dft` infix).
- One owner ruling requested on canonical form; no per-style normalization.

## Other corroborated patterns

- **Unprefixed container trio** (linear/material/wedges): joint ruling candidate.
- **Collapsed single tooltip border** (carbon/linear/material/catalyst/wedges)
  vs **kept duplicate** (spectrum/moon/lucid/snow/neon/libelle + baseline).
