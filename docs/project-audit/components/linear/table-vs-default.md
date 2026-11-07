# Linear Table vs Default

## 1. Audit Metadata

- Style: linear
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/linear/ui/table.tsx:1-117`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Linear is the density play: head `px-4`→`px-3`, cells `p-4`→`p-3` (sole `p-3`
cells in the set), and the header `thead` drops its `border-b-dft-border`
tr-border color (verified — `<thead>` keeps width only; footer/row colors are
prefix swaps, as the baseline already carries them). Hover/selected treatments
otherwise unchanged. The `thead` collapse to one line is formatting only.

## 3. Base Classes

Header/Body/Table/Wrapper/Caption: identical or prefix swap, except footer/row
border colors below. Deltas (`linear` vs `default`):

| Part | Default | Alternative | Classification |
|---|---|---|---|
| Header tr | `[&_tr]:border-b [&_tr]:border-b-dft-border` | `[&_tr]:border-b` (color dropped) | Tr border color deleted (UNVERIFIED, BORDER) |
| Footer | `border-t border-t-dft-border bg-dft-muted/50` | `border-t border-t-linear-border bg-linear-muted/50 ...` | Prefix swap (baseline already colored) | TOKEN_DEPENDENCY, Corroborated |
| Row | `border-b border-b-dft-border ...` | `border-b border-b-linear-border ...` (hover/selected swapped) | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| Head | `h-12 px-4 ...` | `h-12 px-3 ...` | Narrower head padding (UNVERIFIED, DIMENSION) |
| Cell | `p-4 ...` | `p-3 ...` | Tighter cells, sole instance (UNVERIFIED, DIMENSION) |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Head/cell padding changes in §3.

## 6. Interaction States

Hover/selected treatments namespace-swapped only. No focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace only.

## 12. Typography and Global Styling

Head `font-medium`, table `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact density (`px-3`/`p-3`) — UNVERIFIED (preserve);
(2) header tr-border color deletion — UNVERIFIED (confirm or restore
`border-b-linear-border`; footer/row colors are swaps, not additions).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
