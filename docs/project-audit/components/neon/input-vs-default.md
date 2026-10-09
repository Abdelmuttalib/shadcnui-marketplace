# Neon Input vs Default

## 1. Audit Metadata

- Style: neon
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/neon/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon shortens to `h-9` with a 40% input-tinted face and is otherwise a prefix
swap — full focus stack (ring-2/offset-2) retained, structure and exports
unchanged.

## 3. Base Classes

Baseline vs neon: `h-10` → `h-9` (UNVERIFIED, DIMENSION); `bg-dft-background` →
`bg-neon-input/40` (UNVERIFIED, COLOR — tinted face, mirrors neon checkbox/radio
resting treatment); everything else prefix swap / retained. TOKEN_DEPENDENCY,
Corroborated for the swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single height change in §3.

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

`neon-*`: resting fill uses `--neon-input` at 40%.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + 40% tint — UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
