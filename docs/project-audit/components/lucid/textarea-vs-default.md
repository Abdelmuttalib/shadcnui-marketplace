# Lucid Textarea vs Default

## 1. Audit Metadata

- Style: lucid
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/lucid/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid changes the resting face (`bg-inherit`) and the border token (`border`
instead of `input`, sole instance among textareas). Full focus stack retained.

## 3. Base Classes

Baseline vs lucid: `bg-dft-background` → `bg-inherit` (UNVERIFIED, COLOR);
`border-lucid-input` (expected) → `border-lucid-border` (UNVERIFIED, COLOR —
anomalous token choice, no defect verdict); everything else prefix swap /
retained (TOKEN_DEPENDENCY, Corroborated).

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

`lucid-*`: edge driven by the border token (not input).

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) inheriting face — UNVERIFIED; (2) `border`-token edge —
UNVERIFIED (preserve literally; confirm token choice). Consistent with lucid
input/checkbox/report border-token language — corroboration candidate, still
UNVERIFIED pending set-level ruling.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Is the `border`-token edge deliberate (now recurring across lucid
   input/textarea/checkbox)?
