# Spectrum Tooltip vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: tooltip
- Baseline source: `registry/default/ui/tooltip.tsx:1-30`
- Alternative source: `registry/spectrum/ui/tooltip.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `spectrum:22`)

## 2. Executive Summary

Spectrum densifies the tooltip (`px-2 py-0.5` vs `px-3 py-1.5`) with a 70%
input-token border — the only tooltip changing padding. Text stays correctly
prefixed; animations and exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Content (`spectrum:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border-dft-border` | `border-spctm-input/70` | Solid border-token → 70% input-token border | Softer edge | UNVERIFIED (concern COLOR) |
| `px-3 py-1.5` | `px-2 py-0.5` | Padding cut on both axes (sole instance) | Denser tooltip | UNVERIFIED (concern DIMENSION) |
| `text-sm`, animations, radius | retained (`text-spctm-popover-foreground` correctly prefixed) | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Padding change in §3.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. `sideOffset={4}`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*`; edge uses input at 70%. Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-sm` retained (padding only — no type-size change).

## 13. Findings and Upgrade Preservation

Findings: (1) dense padding + 70% border — UNVERIFIED as a set (preserve
exactly). No divergences, no exceptions.

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

1. Confirm dense tooltip as intended spectrum language.
