# Snow Input-OTP vs Default

## 1. Audit Metadata

- Style: snow
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/snow/ui/input-otp.tsx:1-71`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Snow: `h-9 w-9` slots (UNVERIFIED, DIMENSION — shared set). Group, separator, imports, and exports unchanged.

## 3. Base Classes

`h-9 w-9` slots (UNVERIFIED, DIMENSION — shared set); borders, radius, active ring, caret `bg-snow-foreground` are prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Slot dims change in §3.

## 6. Interaction States

Active/focus/disabled/caret-blink identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: UNVERIFIED (preserve; shared set).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
