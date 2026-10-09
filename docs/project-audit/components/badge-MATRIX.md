# Badge — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/badge.tsx` (pill, `px-2.5 py-0.5`, semibold, ring-2/
offset-2; 4 variants with solid fills + `/80` hovers; `Badge`/`badgeVariants`/
`BadgeProps`). Structure/exports uniform everywhere. Reports:
`components/<style>/badge-vs-default.md`.

| Style | Base | Variants | Divergences | Doc |
|---|---|---|---|---|
| carbon | medium, dup border, ring removed (DIVERGENCE/Open + UNVERIFIED) | tints `/10`–`/50`, no hovers, dark overrides (UNVERIFIED) | 2 | `carbon/badge-vs-default.md` |
| linear | bare border (DIVERGENCE) | tints, no hovers, dark; unprefixed secondary border (DIVERGENCE) | 2 | `linear/badge-vs-default.md` |
| material | `-md`, `py-1`, medium, no border (UNVERIFIED) | tints `/15`–`/5`, dual hovers (UNVERIFIED) | — | `material/badge-vs-default.md` |
| catalyst | bare border (DIVERGENCE) | swaps; unprefixed outline (DIVERGENCE) | 2 | `catalyst/badge-vs-default.md` |
| spectrum | `-md`, `px-1.5 py-1` (UNVERIFIED) | outlined system, `/15` fills, `/30` hovers (UNVERIFIED) | — | `spectrum/badge-vs-default.md` |
| wedges | `-md`, `py-1`, medium, no border (UNVERIFIED) | tints, dual hovers, bordered outline; unprefixed secondary ink (DIVERGENCE) | 1 | `wedges/badge-vs-default.md` |
| moon | swap | swap | — | `moon/badge-vs-default.md` |
| lucid | `-md` (UNVERIFIED) | swap | — | `lucid/badge-vs-default.md` |
| snow | `-md` (UNVERIFIED) | swap | offset dropped (DIVERGENCE) | `snow/badge-vs-default.md` |
| neon | `-md` (UNVERIFIED) | swap | — | `neon/badge-vs-default.md` |
| libelle | `-md` (UNVERIFIED) | swap except tinted destructive + unprefixed border (DIVERGENCE) | 1 | `libelle/badge-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (moon only, full; lucid/neon/snow `-md` tier only).
- **`-md` radius tier** (material/spectrum/wedges/lucid/snow/neon/libelle, 7 styles):
  near-universal badge reshaping — set-level ruling candidate; reports keep
  UNVERIFIED/token-swap per file.
- **Translucent tints + dropped hovers** (carbon/linear/material/wedges):
  UNVERIFIED per style.
- **Unprefixed tokens** (linear secondary border, wedges secondary ink, catalyst
  outline, libelle destructive border): joint ruling set.
