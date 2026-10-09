# Linear Alert vs Default

## 1. Audit Metadata

- Style: linear
- Component: alert
- Baseline source: `registry/default/ui/alert.tsx:1-59`
- Alternative source: `registry/linear/ui/alert.tsx:1-59`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Linear's only non-swap change is dropping the base border color (bare `border`,
no color token). Variants, svg layout, Title/Description, role, and exports
unchanged.

## 3. Base Classes

Base: `border border-dft-border` → bare `border` (color dropped —
PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip shared with linear
menubar contents — confirm or restore `border-linear-border`); svg-layout
selectors + radius + icon ink are prefix swaps (Corroborated).

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `bg-*-background text-*-foreground` | `linear` equivalents | Prefix swap (Corroborated) |
| destructive | `border-*/destructive/50`, dark variant, svg ink | `linear` equivalents | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. `p-4` unchanged.

## 6. Interaction States

No hover/focus/disabled classes in either file; dark destructive border retained.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Alert`, `AlertTitle`, `AlertDescription`; `role="alert"` retained;
`alertVariants` non-exported. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`role="alert"` retained. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace; base border color absent (§3).

## 12. Typography and Global Styling

Title/Description type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless base border — PARITY_DIVERGENCE/Open (confirm or
restore).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Bare `border`: deliberate or slip?
