# Linear Accordion vs Default

## 1. Audit Metadata

- Style: linear
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/linear/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Linear restyles the trigger as a rounded padded row (`rounded-linear-md`,
`px-4 py-2`, accent hover instead of underline) and pads + mutes Content
(`px-4`, `text-linear-muted-foreground`). Item border unchanged; chevron,
animations, and exports unchanged.

## 3. Base Classes

Item: `border-b` unchanged. Trigger: `rounded-linear-md px-4`, `py-4` → `py-2`,
`hover:underline` → `hover:bg-linear-accent` (`font-medium` kept) —
UNVERIFIED set (SHAPE/DIMENSION/INTERACTION). Chevron retained. Content outer:
`px-4` + `text-linear-muted-foreground` added (UNVERIFIED, DIMENSION/COLOR);
inner `pb-4 pt-0` unchanged. Animations identical.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/content padding changes in §3.

## 6. Interaction States

Hover fill vs underline; no focus/disabled additions (unlike carbon). Chevron
rotation retained. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*`: accent/muted tokens.

## 12. Typography and Global Styling

Trigger `font-medium` kept; Content `text-sm` + muted color.

## 13. Findings and Upgrade Preservation

Findings: (1) rounded padded trigger + muted padded Content — UNVERIFIED as a
set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the row treatment as intended.
