# Spectrum Navigation-Menu vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/spectrum/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Spectrum is the only fully-faithful navigation-menu clone: prefix swap
throughout (`spctm`), including the Viewport border color, Viewport text, and
the Indicator diamond — with trigger height kept at `h-10`. No divergences.

## 3. Base Classes

Trigger style, Viewport (`border-spctm-border`, `text-spctm-popover-foreground`),
Indicator diamond (`rounded-tl-spctm-sm bg-spctm-border`): prefix swaps only.
TOKEN_DEPENDENCY, Corroborated. Trigger `h-10` unchanged.

## 4. Variants

`navigationMenuTriggerStyle` single-string base, same export name, no variant
keys. PARITY_EXPECTED.

## 5. Sizes

No size scale. All metrics unchanged.

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

`spctm-*` namespace only. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.
Useful as the reference faithful clone when ruling on other styles' Viewport
deviations.

## 14. Verification

Full-file diff run (3 changed lines, all swaps). Effects inferred from source.

## 15. Unresolved Questions

None.
