# Snow Slider vs Default

## 1. Audit Metadata

- Style: snow
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/snow/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Snow's only component-level change is the dropped focus-offset width (offset
color kept, double space left behind). Track, range, thumb dimensions, ring-2,
and disabled handling identical.

## 3. Base Classes

Root/Track/Range identical modulo prefix. Thumb: `focus-visible:ring-offset-2`
absent with `ring-offset-snow-background` kept (double space is a no-op);
`h-5 w-5`, border, ring-2 retained. Offset removal: PARITY_DIVERGENCE,
Needs-designer (concern FOCUS); rest TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track `h-2`, thumb 20px unchanged.

## 6. Interaction States

Focus ring-2 present, offset absent. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace throughout.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) missing offset width — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
