# Table — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run. Baseline
`registry/default/ui/table.tsx` (explicit `border-*-border` colors on
header/footer/row already; `h-12` head, `p-4` cells; muted hover/selected; 8
exports). Structure/exports uniform everywhere. Reports:
`components/<style>/table-vs-default.md`.

| Style | Header | Footer/row | Head/cells | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | + opaque accent fill (UNVERIFIED) | footer opaque accent, top color dropped (UNVERIFIED); row swap + accent hover (UNVERIFIED) | swap | — | `carbon/table-vs-default.md` |
| linear | header tr color dropped (UNVERIFIED) | swaps | `px-3` head + `p-3` cells (UNVERIFIED) | 1 | `linear/table-vs-default.md` |
| material | swap | top color dropped (UNVERIFIED); accent selected (UNVERIFIED) | `h-14` + solid ink (UNVERIFIED) | 1 | `material/table-vs-default.md` |
| catalyst | swap | swap | swap | — | `catalyst/table-vs-default.md` |
| spectrum | swap | swap | swap | — | `spectrum/table-vs-default.md` |
| wedges | swap | top color dropped (UNVERIFIED); accent hover+selected (UNVERIFIED) | `h-14` + solid ink (UNVERIFIED) | 1 | `wedges/table-vs-default.md` |
| moon | swap | swap | swap | — | `moon/table-vs-default.md` |
| lucid | swap | swap | swap | — | `lucid/table-vs-default.md` |
| snow | swap | swap | swap | — | `snow/table-vs-default.md` |
| neon | swap | swap | swap | wrapper tint (UNVERIFIED) | `neon/table-vs-default.md` |
| libelle | swap | swap | swap | — | `libelle/table-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (catalyst/spectrum/moon/lucid/snow/libelle): no component-level
  difference — correction landed during audit (baseline already carries explicit
  border colors; earlier "added color" framing was wrong).
- **Dropped edge colors** (linear header, material/wedges footer, carbon footer):
  UNVERIFIED per style.
- **Tall solid-ink headers + accent rows** (material/wedges): shared language,
  UNVERIFIED per style.
- **Carbon accent chrome + neon wrapper tint**: sole-instance treatments.
