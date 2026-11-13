# Spectrum Sheet vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/spectrum/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified)

## 2. Executive Summary

Spectrum is the most recolored sheet: popover-surfaced base, explicit per-side
`border-{side}-spctm-border` colors (kept, unlike the five width-only styles),
`black/60` overlay, and a whitespace fix (single space in `right`, vs baseline's
double). Close, type, durations, default side, and exports unchanged. (Prefix
`spctm`.)

## 3. Base Classes

Overlay: `bg-black/80` → `bg-black/60`, no dark variant (UNVERIFIED, COLOR).
Base: `bg-dft-background` → `bg-spctm-popover` (UNVERIFIED, COLOR — as spectrum
dialog). Sides: `border-{side}-spctm-border` explicitly present on all four
(UNVERIFIED, BORDER — the colored-edge minority: spectrum/moon/lucid/snow/neon/
libelle keep colors; carbon/linear/material/catalyst/wedges drop them).
`right` single-spaced (baseline double space normalized — cosmetic, no-op).
Close/Title/Description: prefix swaps, ring stack retained (Corroborated).

## 4. Variants

Side system + default `"right"` identical. PARITY_EXPECTED for the contract.

## 5. Sizes

No size scale. Geometry unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps`, all 10 exports, non-exported `sheetVariants`, `side`
default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) lighter overlay — UNVERIFIED; (2) popover base + kept side colors
— UNVERIFIED (preserve; minority pattern worth a set-level ruling against the
width-only majority). Whitespace fix needs no action.

## 14. Verification

Full-file diff run (8 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Should side edges keep colors (this minority) or go width-only (majority)?
