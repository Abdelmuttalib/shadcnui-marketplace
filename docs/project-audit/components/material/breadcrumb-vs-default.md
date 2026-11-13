# Material Breadcrumb vs Default

## 1. Audit Metadata

- Style: material
- Component: breadcrumb
- Baseline source: `registry/default/ui/breadcrumb.tsx:1-115`
- Alternative source: `registry/material/ui/breadcrumb.tsx:1-118`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Material breadcrumb is a pure token-namespace swap: identical List/Item/Link/Page/Separator/Ellipsis, icons, props, and exports (including the shared `Elipssis` typo).

## 3. Base Classes

List/Link/Page/Separator/Ellipsis: `dft` → `material` on text tokens only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Separator `h-3.5` box, Ellipsis `h-9 w-9` unchanged.

## 6. Interaction States

Link hover correctly prefixed. Page ARIA unchanged. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and roles. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 7 exports identical incl. `Elipssis` typo (shared-baseline note). PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace only.

## 12. Typography and Global Styling

List `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
