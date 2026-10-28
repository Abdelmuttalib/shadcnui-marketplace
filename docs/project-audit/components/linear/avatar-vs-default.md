# Linear Avatar vs Default

## 1. Audit Metadata

- Style: linear
- Component: avatar
- Baseline source: `registry/default/ui/avatar.tsx:1-50`
- Alternative source: `registry/linear/ui/avatar.tsx:1-50`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; Root + Fallback lines verified by direct grep

## 2. Executive Summary

Linear avatar is a pure token-namespace swap (muted fallback only): identical 40px Root, shape, Image, structure, and exports.

## 3. Base Classes

Root 40px unchanged. Fallback (`linear:42`): `bg-dft-muted` → `bg-linear-muted` (TOKEN_DEPENDENCY, Corroborated). Image identical; `rounded-full` retained.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Root unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (Root/Image/Fallback forwardRefs). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Avatar`, `AvatarImage`, `AvatarFallback` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix avatar, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace: fallback muted token only.

## 12. Typography and Global Styling

Fallback has no text classes in either file (initials inherit context).

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully; Root/Fallback lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

None.
