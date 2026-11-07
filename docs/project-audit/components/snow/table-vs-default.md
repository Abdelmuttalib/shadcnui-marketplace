# Snow Table vs Default

## 1. Audit Metadata

- Style: snow
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/snow/ui/table.tsx:1-121`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Snow is a pure token-namespace swap: header/footer/row border colors,
fills, hover/selected, head, and cells all map one-to-one onto `snow-*` tokens
(verified — the baseline already carries explicit border colors). Head stays
`h-12 px-4`, cells `p-4`. No structural change.

## 3. Base Classes

Header/Footer/Row/Head/Cell/Caption/Table/Wrapper: `dft` → `snow` token
swaps only, verified by full-file diff (the baseline already carries explicit
border colors). TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

Hover/selected namespace-swapped. No focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

Head `font-medium`, table `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
