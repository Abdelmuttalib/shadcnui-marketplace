# Catalyst Skeleton vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: skeleton
- Baseline source: `registry/default/ui/skeleton.tsx:1-15`
- Alternative source: `registry/catalyst/ui/skeleton.tsx:1-15`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Catalyst skeleton is a pure token-namespace swap: `animate-pulse rounded-catalyst-md bg-catalyst-muted`, identical function signature, structure, and exports.

## 3. Base Classes

Single class string: `animate-pulse` retained (no custom keyframes, no motion library); `rounded-dft-md` → `rounded-catalyst-md`; `bg-dft-muted` → `bg-catalyst-muted`. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Dimensions flow through `className` in both files.

## 6. Interaction States

Animation identical (`animate-pulse`); no hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical function component rendering a `div` (no `forwardRef` in either file). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Skeleton` export, `React.HTMLAttributes<HTMLDivElement>` props identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (decorative pulse block, no ARIA in either file). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (`cn` only). PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace: muted fill token only.

## 12. Typography and Global Styling

Not applicable — no text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). No inferences required beyond token resolution.

## 15. Unresolved Questions

None.
