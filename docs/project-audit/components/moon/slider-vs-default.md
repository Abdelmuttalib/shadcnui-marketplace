# Moon Slider vs Default

## 1. Audit Metadata

- Style: moon
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/moon/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon's slider is a pure prefix swap: same 2px rail, 20px bordered thumb, full
ring-2/offset-2 focus, and disabled handling. No component-level difference.

## 3. Base Classes

Root/Track/Range/Thumb identical modulo `dft` → `moon` (`bg-moon-secondary`,
`bg-moon-primary`, `border-moon-primary`, `bg-moon-background`, ring/offset).
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track `h-2`, thumb 20px unchanged.

## 6. Interaction States

All identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
