# Linear Navigation-Menu vs Default

## 1. Audit Metadata

- Style: linear
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/linear/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Linear drops the Viewport border color (bare `border`, correctly prefixed text)
and leaves the Indicator diamond radius unprefixed (`rounded-tl-sm`, fill
correctly `bg-linear-border`). Trigger height (`h-10`) and everything else
unchanged.

## 3. Base Classes

Trigger style: prefix swap only (TOKEN_DEPENDENCY, Corroborated). Viewport:
`border border-dft-border` → bare `border` (color dropped — PARITY_DIVERGENCE,
Open, BORDER/TECHNICAL); text correctly prefixed. Indicator diamond:
`rounded-tl-dft-sm` → **`rounded-tl-sm` (unprefixed)** with correctly prefixed
`bg-linear-border` — PARITY_DIVERGENCE, Open (half-prefixed diamond; likely
slip, confirm or re-tokenize). Root/List/Content/chevron/positioning identical.

## 4. Variants

`navigationMenuTriggerStyle` single-string base, same export name, no variant
keys. PARITY_EXPECTED.

## 5. Sizes

No size scale. Trigger `h-10` unchanged.

## 6. Interaction States

Hover/focus/active/open, chevron rotation, motion animations identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace except the bare viewport border + unprefixed diamond
radius (§3).

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) bare viewport border — PARITY_DIVERGENCE/Open; (2) unprefixed
diamond radius — PARITY_DIVERGENCE/Open. Migration: confirm or re-tokenize both.

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Bare border + unprefixed radius: slips or deliberate?
