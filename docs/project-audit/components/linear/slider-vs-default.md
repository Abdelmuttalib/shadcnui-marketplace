# Linear Slider vs Default

## 1. Audit Metadata

- Style: linear
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/linear/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear's slider is a prefix swap except for one subtraction: the thumb's
focus-offset width is dropped (ring-2 kept). Track, range, thumb dimensions,
and disabled treatment identical.

## 3. Base Classes

Root/Track/Range identical modulo prefix (`bg-linear-secondary`,
`bg-linear-primary`). Thumb: `focus-visible:ring-offset-2` absent with
`ring-offset-linear-background` color kept; `h-5 w-5`, `border-2
border-linear-primary`, ring-2 retained. Offset removal: PARITY_DIVERGENCE,
Needs-designer (concern FOCUS); rest TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Dimensions unchanged (track `h-2`, thumb 20px).

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

`linear-*` namespace throughout.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) missing offset width — PARITY_DIVERGENCE/Needs-designer (restore
or record as intended).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
