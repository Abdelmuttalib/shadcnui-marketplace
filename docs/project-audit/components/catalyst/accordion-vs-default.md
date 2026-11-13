# Catalyst Accordion vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/catalyst/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Catalyst adds an item border color, restyles the trigger as a rounded muted
row (`rounded-catalyst-md`, `px-3 py-2`, `hover:bg-catalyst-muted`), and pads
Content (`px-3`). Chevron, animations, and exports unchanged.

## 3. Base Classes

Item: `border-b` → `border-b border-b-catalyst-border` (UNVERIFIED, BORDER).
Trigger: `rounded-catalyst-md px-3`, `py-4` → `py-2`, `hover:underline` →
`hover:bg-catalyst-muted` (`font-medium` kept) — UNVERIFIED set
(SHAPE/DIMENSION/INTERACTION). Chevron retained. Content outer: `px-3` added
(UNVERIFIED); inner `pb-4 pt-0` unchanged. Animations identical.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/content padding changes in §3.

## 6. Interaction States

Hover muted-fill vs underline. No focus/disabled additions. Chevron rotation
retained. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*`: muted/border tokens.

## 12. Typography and Global Styling

Trigger `font-medium` kept; Content `text-sm` (no muted override here).

## 13. Findings and Upgrade Preservation

Findings: (1) bordered item + rounded muted trigger + padded Content —
UNVERIFIED as a set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the row treatment as intended.
