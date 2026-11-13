# Neon Avatar vs Default

## 1. Audit Metadata

- Style: neon
- Component: avatar
- Baseline source: `registry/default/ui/avatar.tsx:1-50`
- Alternative source: `registry/neon/ui/avatar.tsx:1-50`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; Root + Fallback lines verified by direct grep

## 2. Executive Summary

Neon avatar shrinks the Root to 36px (`h-9 w-9`) with a namespace-swapped muted fallback; shape, Image, structure, and exports unchanged.

## 3. Base Classes

Root (`neon:15`): `h-10 w-10` → `h-9 w-9` (UNVERIFIED, DIMENSION — compact avatar, shared with 5 other styles). Fallback (`neon:42`): `bg-dft-muted` → `bg-neon-muted` (TOKEN_DEPENDENCY, Corroborated). Image identical; `rounded-full` retained everywhere.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Root change in §3.

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

`neon-*` namespace: fallback muted token only.

## 12. Typography and Global Styling

Fallback has no text classes in either file (initials inherit context).

## 13. Findings and Upgrade Preservation

Findings: (1) 36px Root — UNVERIFIED (preserve); (2) namespace swap — TOKEN_DEPENDENCY.

## 14. Verification

Both files read fully; Root/Fallback lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

None.
