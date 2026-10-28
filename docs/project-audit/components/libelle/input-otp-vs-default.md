# Libelle Input-OTP vs Default

## 1. Audit Metadata

- Style: libelle
- Component: input-otp
- Baseline source: `registry/default/ui/input-otp.tsx:1-71`
- Alternative source: `registry/libelle/ui/input-otp.tsx:1-72`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Libelle: pure token-namespace swap (72-vs-71 lines is formatting only). Group, separator, imports, and exports unchanged.

## 3. Base Classes

pure token-namespace swap (72-vs-71 lines is formatting only)

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Slot dims `h-10 w-10` unchanged.

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

`libelle-*` namespace only.

## 12. Typography and Global Styling

Slot `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: TOKEN_DEPENDENCY, Corroborated. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
