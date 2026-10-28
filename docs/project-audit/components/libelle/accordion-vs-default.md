# Libelle Accordion vs Default

## 1. Audit Metadata

- Style: libelle
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/libelle/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; byte-identity confirmed by `diff -q` (no output)

## 2. Executive Summary

Libelle accordion is byte-identical to Default: same item border, trigger (medium weight, underline hover, `py-4`), trailing ChevronDown with 180° rotation, Content, animations, and all 4 exports.

## 3. Base Classes

Item/Trigger/Content strings identical. NO_DIFFERENCE (verified, not assumed).

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. All padding identical.

## 6. Interaction States

Underline hover, chevron 180° rotation, height animations identical. No focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree and icons. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

None beyond the shared unprefixed animation tokens (identical in both files).

## 12. Typography and Global Styling

Trigger `font-medium`, Content `text-sm` identical.

## 13. Findings and Upgrade Preservation

Findings: none — NO_DIFFERENCE. Freely replaceable with any upstream version.

## 14. Verification

Both files read fully; `diff -q` confirms byte-identity. No inferences required.

## 15. Unresolved Questions

None.
