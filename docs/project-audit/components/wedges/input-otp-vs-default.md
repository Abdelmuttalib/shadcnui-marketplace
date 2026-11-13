# Wedges Input-OTP vs Default

## 1. Audit Metadata

- Style: wedges
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/wedges/ui/input-otp.tsx:1-72`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
caret line verified by direct grep of `wedges:54`)

## 2. Executive Summary

Wedges uses wide-short slots (`h-9 w-10`) with a 20% input-tinted fill and an
unprefixed caret (verified line 54). Group, separator, imports, and exports
unchanged.

## 3. Base Classes

Group identical. Slot base: `h-10 w-10` → `h-9 w-10` (shorter, same width —
UNVERIFIED, DIMENSION; sole `h-9 w-10` slots in the set) + `bg-wedges-input/20`
added (UNVERIFIED, COLOR); borders, first/last radius, active ring retained
with swapped tokens. Caret (`wedges:54`, verified): `bg-dft-foreground` →
`bg-foreground` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling
with linear/material/catalyst).

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

`wedges-*` except unprefixed caret (§3); fill uses `--wedges-input` at 20%.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) wide-short tinted slots — UNVERIFIED (preserve); (2) unprefixed
caret — PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Both files read fully; caret line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Caret: rule jointly with the 4-style set.
