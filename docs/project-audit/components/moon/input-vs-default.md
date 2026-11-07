# Moon Input vs Default

## 1. Audit Metadata

- Style: moon
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/moon/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon's only component-level change is the resting face (`bg-inherit` instead of
`bg-background`); height, border, full focus stack, and disabled treatment are
identical. Nearest-to-baseline input.

## 3. Base Classes

Baseline vs moon: `bg-dft-background` → `bg-inherit` (UNVERIFIED, concern COLOR —
shows parent surface); everything else prefix swap / retained, including
`h-10` and ring-2/offset-2. TOKEN_DEPENDENCY, Corroborated for the swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; height stays `h-10`.

## 6. Interaction States

Focus identical. Hover/disabled/md identical. No invalid-state handling in
either file.

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

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `bg-inherit` face — UNVERIFIED; (2) namespace swap —
TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
