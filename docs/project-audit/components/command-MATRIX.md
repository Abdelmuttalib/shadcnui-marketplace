# Command — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run. Baseline
`registry/default/ui/command.tsx` (9 exports; `h-11` input; `p-1` group;
`px-2 py-1.5` items; plain Shortcut; cmdk arbitrary selectors). Own-style
dialog imports verified in all 11 (no cross-style imports). Reports:
`components/<style>/command-vs-default.md`.

| Style | Import | Root/group/item deltas | Shortcut/misc | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | own ✓ | input border-neutralization (DIVERGENCE); muted empty, `pt-1` group + unprefixed text (DIVERGENCE), `px-3` headings, roomy items + muted svg (UNVERIFIED) | kbd chip (UNVERIFIED) | 2 | `carbon/command-vs-default.md` |
| linear | own ✓ | bare wrapper border (DIVERGENCE); muted item svg (UNVERIFIED) | wide tracking (UNVERIFIED) | 1 | `linear/command-vs-default.md` |
| material | own ✓ | unprefixed root text (DIVERGENCE); unpadded group + `px-3`/`py-2.5` + state-colored icons (UNVERIFIED) | tone+opacity (UNVERIFIED) | 1 | `material/command-vs-default.md` |
| catalyst | own ✓ | unprefixed root text (DIVERGENCE); `p-0.5` group + `px-2.5 py-2` (UNVERIFIED); input-token separator (UNVERIFIED) | /60 tone (UNVERIFIED) | 1 | `catalyst/command-vs-default.md` |
| spectrum | own ✓ | `h-10` input + `py-1` group + wide radius-less items (UNVERIFIED) | swap | — | `spectrum/command-vs-default.md` |
| wedges | own ✓ | `h-10` input + unpadded group + wide items + state icons (UNVERIFIED); unprefixed separator (DIVERGENCE) | opacity (UNVERIFIED) | 1 | `wedges/command-vs-default.md` |
| moon | own ✓ | `py-2` items (UNVERIFIED) | swap | — | `moon/command-vs-default.md` |
| lucid | own ✓ | swap only | swap | — | `lucid/command-vs-default.md` |
| snow | own ✓ | swap only | swap | — | `snow/command-vs-default.md` |
| neon | own ✓ | swap only | swap | — | `neon/command-vs-default.md` |
| libelle | own ✓ | swap only | swap | — | `libelle/command-vs-default.md` |

## Corroborated patterns

- **Uniform own-style wiring**: all 11 import their own dialog — no cross-style
  imports anywhere in B2-C (command, calendar, alert-dialog).
- **Unprefixed texts** (carbon Group, material Root, catalyst Root): joint ruling set.
- **Compact inputs** (`h-10`: spectrum/wedges): UNVERIFIED per style.
- **Pure swaps** (lucid/snow/neon/libelle): no component-level difference.
