# Spectrum Input-OTP vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/spectrum/ui/input-otp.tsx:1-71`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Spectrum compacts slots to `h-9 w-9` with everything else a prefix swap
(`spctm`) — including a correctly prefixed caret. Group, separator, imports,
and exports unchanged.

## 3. Base Classes

Group identical. Slot base: `h-10 w-10` → `h-9 w-9` (UNVERIFIED, DIMENSION —
compact slots, shared with lucid/snow/neon); borders, first/last radius,
active ring, caret `bg-spctm-foreground` are prefix swaps (Corroborated).

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

`spctm-*` namespace only. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 36px slots — UNVERIFIED (preserve; shared set with 3 styles).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
