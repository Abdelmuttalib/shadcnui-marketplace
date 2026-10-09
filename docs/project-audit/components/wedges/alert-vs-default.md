# Wedges Alert vs Default

## 1. Audit Metadata

- Style: wedges
- Component: alert
- Baseline source: `registry/default/ui/alert.tsx:1-59`
- Alternative source: `registry/wedges/ui/alert.tsx:1-59`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Wedges' only non-swap change is dropping the base border color (bare `border`,
as linear/material). Variants, svg layout, Title/Description, role, and exports
unchanged.

## 3. Base Classes

Base: `border border-dft-border` → bare `border` (color dropped —
PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip — confirm or restore
`border-wedges-border`); svg selectors + radius + icon ink are prefix swaps
(Corroborated).

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `bg-*-background text-*-foreground` | `wedges` equivalents | Prefix swap (Corroborated) |
| destructive | `border-*/destructive/50`, dark variant, svg ink | `wedges` equivalents | Prefix swap (Corroborated) |

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

`wedges-*` namespace; base border color absent (§3).

## 12. Typography and Global Styling

Title/Description type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless base border — PARITY_DIVERGENCE/Open (confirm or
restore; shared pattern with linear/material — set-level ruling candidate).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Bare `border`: deliberate or slip (rule with linear/material)?
