# Spectrum Alert-Dialog vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/spectrum/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (4 changed lines, verified by direct read of
  overlay:21 and content:39)

## 2. Executive Summary

Spectrum lightens the overlay (`black/60`, no dark variant) with a prefix swap
everywhere else. Content keeps its themed border; Action/Cancel mapping, type,
animations, and exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Overlay (`spectrum:21`, verified): `bg-black/80` → `bg-black/60`, no `dark:`
variant (UNVERIFIED, COLOR — unlike carbon, which pairs its 60% scrim with a
dark override). Content (`spectrum:39`, verified): `border-spctm-border`,
`bg-spctm-background`, `sm:rounded-spctm-lg` — prefix swaps (Corroborated).
Action/Cancel unchanged.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel flow through spectrum buttonVariants. No
dark-mode classes at all (noted — overlay has no dark override).

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 note (no failure claims).

## 10. Imports and Dependencies

Own-style import `…/spectrum/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Title/description type identical (namespace tokens).

## 13. Findings and Upgrade Preservation

Findings: (1) `black/60` overlay without dark override — UNVERIFIED (preserve;
confirm whether a dark variant is missing or intentionally absent).

## 14. Verification

Full-file diff run (4 changed lines); overlay/content lines verified by direct
read. Effects inferred from source.

## 15. Unresolved Questions

1. Should the overlay have a dark-mode variant (cf. carbon/catalyst)?
