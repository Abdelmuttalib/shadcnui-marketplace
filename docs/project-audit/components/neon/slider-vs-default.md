# Neon Slider vs Default

## 1. Audit Metadata

- Style: neon
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/neon/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon restyles the slider square: 1.5px `rounded-neon-md` rail and a rectangular
`h-4 w-5 rounded-neon-md` thumb (the only non-square thumb in the set). Full
ring-2/offset-2 focus retained. No structural divergence.

## 3. Base Classes

Root identical. Track: `h-2` → `h-1.5`; `rounded-full` → `rounded-neon-md`
(square via `--neon-radius: 0rem`); `bg-dft-secondary` → `bg-neon-secondary`
(UNVERIFIED, DIMENSION/SHAPE/COLOR). Range: prefix swap (TOKEN_DEPENDENCY,
Corroborated). Thumb: `h-5 w-5` → `h-4 w-5` (rectangular, sole instance);
`rounded-full` → `rounded-neon-md`; border/fill/focus/disabled otherwise
prefix-kept (UNVERIFIED set, DIMENSION/SHAPE).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus identical. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*`: `--neon-radius: 0rem` drives the square rail + thumb.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) square rail + rectangular thumb — UNVERIFIED as a set (preserve
exactly; neon's slider identity, consistent with its square switch). No
divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm square/rectangular slider identity as intended neon language.
