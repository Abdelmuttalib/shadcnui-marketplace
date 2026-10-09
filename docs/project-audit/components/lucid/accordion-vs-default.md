# Lucid Accordion vs Default

## 1. Audit Metadata

- Style: lucid
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/lucid/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Lucid's only change is the item border color (`border-b-lucid-border`); trigger
(medium, underline, `py-4`), chevron, Content, animations, and exports
unchanged.

## 3. Base Classes

Item: `border-b` → `border-b border-b-lucid-border` (UNVERIFIED, BORDER —
explicit color, consistent with lucid's border-token language elsewhere).
Trigger/Content/icon/animations: identical. TOKEN_DEPENDENCY n/a beyond the
item token; rest PARITY_EXPECTED by identity.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All padding identical.

## 6. Interaction States

Underline hover, chevron rotation, animations identical. No focus/disabled/dark
classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*`: item border token only.

## 12. Typography and Global Styling

Trigger `font-medium`, Content `text-sm` identical.

## 13. Findings and Upgrade Preservation

Findings: (1) item border color — UNVERIFIED (preserve; corroboration candidate
with lucid's border-token edges in input/textarea/checkbox/select).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
