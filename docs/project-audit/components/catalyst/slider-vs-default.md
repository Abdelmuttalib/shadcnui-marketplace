# Catalyst Slider vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/catalyst/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst thins the track to 1.5px and shrinks the thumb to 16px; everything else
— border, background token roles, full ring-2/offset-2 focus, disabled handling —
is a prefix swap. No structural divergence.

## 3. Base Classes

Root/Range identical modulo prefix. Track: `h-2` → `h-1.5`; `bg-dft-secondary`
→ `bg-catalyst-secondary` (UNVERIFIED, DIMENSION/COLOR). Thumb: `h-5 w-5` →
`h-4 w-4`; `border-2 border-catalyst-primary`, `bg-catalyst-background`, full
focus stack retained (UNVERIFIED dimension; rest TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus identical. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace throughout.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) 1.5px track + 16px thumb — UNVERIFIED (re-apply as a set). No
divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
