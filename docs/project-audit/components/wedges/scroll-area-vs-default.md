# Wedges Scroll-Area vs Default

## 1. Audit Metadata

- Style: wedges
- Component: scroll-area
- Baseline source: `registry/default/ui/scroll-area.tsx:1-48`
- Alternative source: `registry/wedges/ui/scroll-area.tsx:1-48`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; Thumb line verified by direct grep

## 2. Executive Summary

Thumb (`wedges:43`, verified): `bg-dft-border` → `bg-border` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling with the unprefixed-token set). Root/Viewport/ScrollBar/Corner identical. No width/shape/orientation differences anywhere.

## 3. Base Classes

Thumb (`wedges:43`, verified): `bg-dft-border` → `bg-border` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling with the unprefixed-token set). Root/Viewport/ScrollBar/Corner identical.

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

Findings: (1) unprefixed thumb — PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Both files read fully; Thumb line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. `bg-border` thumb: shared slip or convention (rule jointly)?
