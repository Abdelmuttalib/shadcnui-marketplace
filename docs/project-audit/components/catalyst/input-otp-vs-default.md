# Catalyst Input-OTP vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/catalyst/ui/input-otp.tsx:1-72`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
radius + caret lines verified by direct grep of `catalyst:44,54`)

## 2. Executive Summary

Catalyst adds a 50% input-tinted slot fill, uses unprefixed slot radius
(`rounded-l-md`/`rounded-r-md`, verified line 44), and unprefixes the caret
(verified line 54). Group, separator, imports, and exports unchanged.

## 3. Base Classes

Group identical. Slot base: `bg-catalyst-input/50` added (UNVERIFIED, COLOR);
`first:rounded-l-dft-md last:rounded-r-dft-md` → `first:rounded-l-md
last:rounded-r-md` (unprefixed — PARITY_DIVERGENCE, Open, SHAPE/TECHNICAL;
likely slip, confirm or re-tokenize to `catalyst-md`); `h-10 w-10` retained.
Slot active ring-2/offset retained. Caret (`catalyst:54`, verified):
`bg-dft-foreground` → `bg-foreground` (unprefixed) — PARITY_DIVERGENCE,
Needs-designer (joint ruling with linear/material/wedges).

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

`catalyst-*` except unprefixed slot radius + caret (§3).

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 50% fill — UNVERIFIED; (2) unprefixed slot radius —
PARITY_DIVERGENCE/Open; (3) unprefixed caret — PARITY_DIVERGENCE/Needs-designer
(joint ruling).

## 14. Verification

Both files read fully; radius + caret lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Are the two unprefixed slot classes slips?
2. Caret: rule jointly with the 4-style set.
