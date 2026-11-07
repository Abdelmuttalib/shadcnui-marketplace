# Snow Aspect-Ratio vs Default

## 1. Audit Metadata

- Style: snow
- Component: aspect-ratio
- Baseline source: `registry/default/ui/aspect-ratio.tsx:1-7`
- Alternative source: `registry/snow/ui/aspect-ratio.tsx:1-7`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; byte-identity confirmed by `diff -q` (no output)

## 2. Executive Summary

Snow aspect-ratio is byte-identical to Default: 7-line Radix alias, no classes, no wrapper, same export. No difference of any kind.

## 3. Base Classes

Not applicable — the file contains no class strings (`const AspectRatio = AspectRatioPrimitive.Root`). NO_DIFFERENCE (verified).

## 4. Variants

Not applicable — no variants, no ratio handling in this file (ratio flows through props).

## 5. Sizes

Not applicable — no dimensions in either file.

## 6. Interaction States

Not applicable — no state classes in either file.

## 7. DOM and Component Structure

Identical direct alias. PARITY_EXPECTED.

## 8. Props, Exports, and API

Sole `AspectRatio` export identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical (`@radix-ui/react-aspect-ratio` only). PARITY_EXPECTED.

## 11. Token Dependencies

None — no tokens referenced.

## 12. Typography and Global Styling

Not applicable.

## 13. Findings and Upgrade Preservation

Findings: none — NO_DIFFERENCE. Freely replaceable with any upstream version.

## 14. Verification

Both files read fully; `diff -q` confirms byte-identity. No inferences required.

## 15. Unresolved Questions

None.
