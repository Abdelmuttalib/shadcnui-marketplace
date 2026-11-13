# Snow Resizable vs Default

## 1. Audit Metadata

- Style: snow
- Component: resizable
- Baseline source: `registry/default/ui/resizable.tsx:1-45`
- Alternative source: `registry/snow/ui/resizable.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; handle + grip lines verified by direct grep

## 2. Executive Summary

prefix swaps throughout — TOKEN_DEPENDENCY, Corroborated. No divergences. Group/direction handling, GripVertical icon, imports, and exports unchanged.

## 3. Base Classes

prefix swaps throughout — TOKEN_DEPENDENCY, Corroborated. No divergences.

## 4. Variants

Not applicable — `withHandle` conditional unchanged.

## 5. Sizes

No size scale. Handle `w-px`, grip `h-4 w-3`, icon `h-2.5 w-2.5` unchanged.

## 6. Interaction States

Focus ring-1/offset-1 + vertical-direction variants identical. No hover/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree (Group/Panel/Handle+grip). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ResizablePanelGroup/Panel/Handle`, `withHandle?`, displayNames identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Resize interaction + keyboard focus ring unchanged. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (react-resizable-panels, GripVertical, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

See §3 per class.

## 12. Typography and Global Styling

No text (icon-only grip).

## 13. Findings and Upgrade Preservation

See §3 classifications. Preserve grip/handle classes exactly pending rulings.

## 14. Verification

Both files read fully; handle + grip lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

None.
