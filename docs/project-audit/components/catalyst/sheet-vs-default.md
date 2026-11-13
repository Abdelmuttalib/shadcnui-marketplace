# Catalyst Sheet vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/catalyst/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Catalyst lightens the overlay (`black/30` + dark `black/70`), strips side-border
colors to bare widths, and leaves Title `text-foreground` unprefixed (joint
ruling with carbon sheet Title). Close, durations, default side, and exports
unchanged.

## 3. Base Classes

Overlay: `bg-black/80` → `bg-black/30` + `dark:bg-black/70` (UNVERIFIED, COLOR —
as catalyst dialog/alert-dialog). Base `bg-catalyst-background` prefix swap.
Sides: all four colors dropped, widths kept (UNVERIFIED, BORDER — as
linear/material/wedges). Close: namespace tokens, ring stack retained.
Title: `text-dft-foreground` → **`text-foreground` (unprefixed)** —
PARITY_DIVERGENCE, Needs-designer (recurs with carbon sheet Title; joint ruling
needed — note catalyst uses unprefixed `text-foreground` as verified convention
in alert/badge/typography/breadcrumb, so this instance may yet graduate on that
evidence; still unconfirmed for sheet pending the ruling).

## 4. Variants

Side system + default `"right"` identical. PARITY_EXPECTED for the contract.

## 5. Sizes

No size scale. Geometry unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. Dark overlay variant noted.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps`, all 10 exports, non-exported `sheetVariants`, `side`
default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Dismissal unchanged; lighter scrim noted without contrast-failure claim.
PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace except unprefixed Title (§3).

## 12. Typography and Global Styling

Title scale identical; Title color is the §3 finding.

## 13. Findings and Upgrade Preservation

Findings: (1) light overlay + dark variant — UNVERIFIED; (2) width-only sides —
UNVERIFIED; (3) unprefixed Title — PARITY_DIVERGENCE/Needs-designer (joint
ruling with carbon; catalyst-convention evidence cited for the ruling).

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Is Title's unprefixed token the catalyst convention (cf. button link,
   badge, typography) or a slip shared with carbon?
