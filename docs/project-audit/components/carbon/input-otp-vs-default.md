# Carbon Input-OTP vs Default

## 1. Audit Metadata

- Style: carbon
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/carbon/ui/input-otp.tsx:1-78`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
Group lines verified by direct read of `carbon:28-37`)

## 2. Executive Summary

Carbon restructures the slot frame: the Group gains a `rounded-cb-md`
underline (`border-b-cb-foreground/40`), slots drop their bottom border
(`border-t` only) with a tinted fill, and dims stay `h-10 w-10`. Active ring
and caret (prefixed) unchanged. Separator, imports, and exports unchanged.

## 3. Base Classes

InputOTP container identical. Group (`carbon:28-37`, verified): `flex
items-center` → `flex items-center rounded-cb-md border-b
border-b-cb-foreground/40` (UNVERIFIED, SHAPE/BORDER — underline frame around
the slot row, sole instance). Slot base: `border-y border-r` → `border-r
border-t` (bottom moved to Group) + added `bg-cb-input/20` (UNVERIFIED,
BORDER/COLOR); `h-10 w-10`, first/last radius pattern retained. Slot active
(ring-2/ring/offset) + caret `bg-cb-foreground`: prefix swaps (Corroborated).

## 4. Variants

Not applicable — no cva variants; slot states flow through Radix/data attrs.

## 5. Sizes

No size scale. Slot dims `h-10 w-10` unchanged.

## 6. Interaction States

Active-caret/focus ring identical. Disabled (`has-[:disabled]`,
`disabled:cursor-not-allowed`) identical. Caret blink animation retained. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Group/Slot/Separator, `Dot` icon). PARITY_EXPECTED — border
relocation is class-level, not structural (same elements).

## 8. Props, Exports, and API

All 4 exports (`InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator`),
forwardRefs, displayNames identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Slot focus/active/disabled semantics unchanged (input-otp library untouched).
PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (input-otp, `Dot`, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: input/border/foreground/ring tokens.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) underline Group frame + border-relocated tinted slots —
UNVERIFIED as a set (preserve exactly; carbon's most distinctive OTP identity —
Group and Slot classes act as one system).

## 14. Verification

Both files read fully; Group lines verified by direct read. Effects inferred.

## 15. Unresolved Questions

1. Confirm the underline-frame system as intended.
