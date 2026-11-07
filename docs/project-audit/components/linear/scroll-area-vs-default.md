# Linear Scroll-Area vs Default

## 1. Audit Metadata

- Style: linear
- Component: scroll-area
- Baseline source: `registry/default/ui/scroll-area.tsx:1-48`
- Alternative source: `registry/linear/ui/scroll-area.tsx:1-48`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; Thumb line verified by direct grep

## 2. Executive Summary

Thumb (`linear:43`, verified): `bg-dft-border` → `bg-linear-border` (prefix swap). Root/Viewport/ScrollBar/Corner identical. TOKEN_DEPENDENCY, Corroborated. No width/shape/orientation differences anywhere.

## 3. Base Classes

Thumb (`linear:43`, verified): `bg-dft-border` → `bg-linear-border` (prefix swap). Root/Viewport/ScrollBar/Corner identical. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — orientation conditional unchanged.

## 5. Sizes

No size scale. Scrollbar `w-2.5`/`h-2.5`, thumb pill unchanged.

## 6. Interaction States

`transition-colors` on ScrollBar retained. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree (Root/Viewport/ScrollBar/Thumb/Corner). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ScrollArea`, `ScrollBar`, `orientation="vertical"` default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix scroll-area, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

Thumb token per §3; no other tokens.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully; Thumb line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

None.
