# Libelle Slider vs Default

## 1. Audit Metadata

- Style: libelle
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/libelle/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Libelle drops the rail fill for a primary-bordered outline rail (transparent
face — the only track without a `bg`), thins the thumb border to 1px, and keeps
dimensions, ring-2/offset-2 focus, and disabled handling identical.

## 3. Base Classes

Root identical. Track: `bg-dft-secondary` dropped entirely, `border
border-libelle-primary` added — transparent outlined rail (UNVERIFIED,
COLOR/BORDER). `h-2` and `rounded-full` retained. Range: prefix swap
(TOKEN_DEPENDENCY, Corroborated). Thumb: `border-2` → `border` (1px);
everything else (`h-5 w-5`, fill, focus, disabled) prefix-kept (UNVERIFIED,
BORDER).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track `h-2`, thumb 20px unchanged.

## 6. Interaction States

Focus identical. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED — class-only restyle.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*`: primary token drives rail edge, range fill, and thumb edge.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) outlined transparent rail + 1px thumb border — UNVERIFIED as a set
(preserve exactly). No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm outlined-rail language as intended.
