# Spectrum Collapsible vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: collapsible
- Baseline source: `registry/default/ui/collapsible.tsx:1-11`
- Alternative source: `registry/spectrum/ui/collapsible.tsx:1-11`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; byte-identity confirmed by `diff -q` (no output)

## 2. Executive Summary

Spectrum collapsible is byte-identical to Default: 11-line pure Radix re-export, no classes, same 3 aliases, same export. No difference of any kind.

## 3. Base Classes

Not applicable — the file contains no class strings. NO_DIFFERENCE (verified).

## 4. Variants

Not applicable — no variants.

## 5. Sizes

Not applicable — no dimensions.

## 6. Interaction States

Not applicable — no state classes; expand/collapse behavior flows through Radix identically.

## 7. DOM and Component Structure

Identical direct aliases (`Root`, `CollapsibleTrigger`, `CollapsibleContent`). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Collapsible`, `CollapsibleContent`, `CollapsibleTrigger` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical (`@radix-ui/react-collapsible` only). PARITY_EXPECTED.

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
