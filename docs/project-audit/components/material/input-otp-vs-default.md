# Material Input-OTP vs Default

## 1. Audit Metadata

- Style: material
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/material/ui/input-otp.tsx:1-72`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
caret line verified by direct grep of `material:54`)

## 2. Executive Summary

Material adds a 60% input-tinted slot fill with everything else a prefix swap,
except the caret's unprefixed `bg-foreground` (verified line 54 — joint ruling
with linear/wedges/catalyst). Group, separator, imports, and exports unchanged.

## 3. Base Classes

Group identical. Slot base: `bg-material-input/60` added (UNVERIFIED, COLOR —
tinted slots); `h-10 w-10`, borders, first/last radius retained. Slot active
ring-2/offset retained. Caret (`material:54`, verified): `bg-dft-foreground` →
`bg-foreground` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling).

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

`material-*` except unprefixed caret (§3); fill uses `--material-input` at 60%.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 60% slot fill — UNVERIFIED (preserve); (2) unprefixed caret —
PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Both files read fully; caret line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Caret + fill: confirm fill as intended; rule caret jointly.
