# Linear Input-OTP vs Default

## 1. Audit Metadata

- Style: linear
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/linear/ui/input-otp.tsx:1-72`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
caret line verified by direct grep of `linear:54`)

## 2. Executive Summary

Linear is a prefix swap except for the caret, which uses unprefixed
`bg-foreground` instead of `bg-linear-foreground` (verified line 54). Group,
slots, separator, imports, and exports unchanged (72-vs-71 lines is formatting
only).

## 3. Base Classes

Group/Slot base/active: prefix swaps (`h-10 w-10`, first/last radius,
ring-2/offset retained). Caret (`linear:54`, verified): `bg-dft-foreground` →
`bg-foreground` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling;
shared with material/wedges/catalyst carets — one ruling should cover all four).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Slot dims unchanged.

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

`linear-*` except unprefixed caret (§3).

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed caret — PARITY_DIVERGENCE/Needs-designer (joint ruling
with material/wedges/catalyst).

## 14. Verification

Both files read fully; caret line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. `bg-foreground` caret: shared slip or convention (rule with the 4-style set)?
