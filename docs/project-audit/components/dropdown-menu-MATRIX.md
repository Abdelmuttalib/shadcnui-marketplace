# Dropdown-Menu — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run. Baseline
`registry/default/ui/dropdown-menu.tsx` (15 exports; items `px-2 py-1.5`,
`rounded-sm`; contents `p-1`; label `px-2 py-1.5 semibold`; plain Shortcut).
Icons/animations/Portal/exports uniform everywhere. Reports:
`components/<style>/dropdown-menu-vs-default.md`.

| Style | Items | Contents | Label/separator | Shortcut | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | `-md` + `px-3` (UNVERIFIED) | unpadded + unprefixed text (DIVERGENCE) | `px-3 py-2` (UNVERIFIED) | kbd chip (UNVERIFIED) | 1 | `carbon/dropdown-menu-vs-default.md` |
| linear | swap | swap | swap | wide tracking (UNVERIFIED) | — | `linear/dropdown-menu-vs-default.md` |
| material | radius-less + `px-3 py-2.5` (UNVERIFIED) | unpadded + unprefixed text (DIVERGENCE) | `px-3` (UNVERIFIED) | explicit color (UNVERIFIED) | 1 | `material/dropdown-menu-vs-default.md` |
| catalyst | `px-2.5 py-2` (UNVERIFIED) | `input` edge + `p-0.5` + unprefixed text (DIVERGENCE) | `px-2.5 py-2` (UNVERIFIED) | swap | 1 | `catalyst/dropdown-menu-vs-default.md` |
| spectrum | radius-less + `px-3 py-2` (UNVERIFIED) | `input/70` + `py-1` (UNVERIFIED) | `px-3` (UNVERIFIED) | swap | — | `spectrum/dropdown-menu-vs-default.md` |
| wedges | radius-less + `px-3` (UNVERIFIED) | split borders `input`/`border` (DIVERGENCE) | `px-3` (UNVERIFIED) | blurred pill (UNVERIFIED) | 1 | `wedges/dropdown-menu-vs-default.md` |
| moon | `py-2` rows/label (UNVERIFIED) | swap | `py-2` (UNVERIFIED) | swap | — | `moon/dropdown-menu-vs-default.md` |
| lucid | swap | swap | swap | swap | — | `lucid/dropdown-menu-vs-default.md` |
| snow | swap | `p-1.5` (UNVERIFIED) | restyled label (UNVERIFIED) | swap | — | `snow/dropdown-menu-vs-default.md` |
| neon | swap | swap | swap | swap | — | `neon/dropdown-menu-vs-default.md` |
| libelle | swap | swap | swap | swap | — | `libelle/dropdown-menu-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (lucid/neon/libelle): no component-level difference.
- **Roomier rows** (carbon/material/catalyst/spectrum/wedges/moon): near-universal
  density, UNVERIFIED per style.
- **Unprefixed Content text** (carbon/material/catalyst): joint ruling set.
- **Unpadded contents** (carbon/material/wedges): needs set-level ruling.
- **Kbd/pill Shortcuts** (carbon/wedges): UNVERIFIED per style.
