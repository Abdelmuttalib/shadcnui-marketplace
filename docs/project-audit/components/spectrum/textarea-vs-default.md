# Spectrum Textarea vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/spectrum/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum's only component-level change is the resting face (`bg-inherit`);
border, full focus stack (ring-2/offset-2), padding, and disabled treatment are
identical. Nearest-to-baseline textarea (shared with moon). (Prefix `spctm`.)

## 3. Base Classes

Baseline vs spectrum: `bg-dft-background` → `bg-inherit` (UNVERIFIED, COLOR);
everything else prefix swap / retained. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

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

`spctm-*` namespace only.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `bg-inherit` face — UNVERIFIED; (2) namespace swap —
TOKEN_DEPENDENCY. No divergences, no exceptions. Keep the `spctm` prefix.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
