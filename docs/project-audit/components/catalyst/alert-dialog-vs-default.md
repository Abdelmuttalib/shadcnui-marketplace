# Catalyst Alert-Dialog vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/catalyst/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (4 changed lines, verified by direct read of
  overlay:21 and content:39)

## 2. Executive Summary

Catalyst lightens the overlay to `black/30` (dark `black/70`) and reduces the
Content border to a bare width-only `border` (themed color dropped — unique in
the set). Action/Cancel mapping, type, animations, and exports unchanged.
Own-style import verified.

## 3. Base Classes

Overlay (`catalyst:21`, verified): `bg-black/80` → `bg-black/30` + added
`dark:bg-black/70` (UNVERIFIED, COLOR — lightest scrim, as catalyst dialog).
Content (`catalyst:39`, verified): `border border-dft-border` → bare `border`
(width kept, color dropped — unique; UNVERIFIED, BORDER); `bg-catalyst-background`,
`sm:rounded-catalyst-lg` prefix swaps (Corroborated). Action/Cancel unchanged.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel states flow through catalyst buttonVariants.
Dark overlay variant noted (§3). No other dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Dismissal unchanged; lighter scrim noted without contrast-failure claim.
PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Own-style import `…/catalyst/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace; `--catalyst-radius: 0.6rem`.

## 12. Typography and Global Styling

Title/description type identical (namespace tokens).

## 13. Findings and Upgrade Preservation

Findings: (1) light overlay + dark variant — UNVERIFIED; (2) width-only Content
border — UNVERIFIED (preserve exactly; do not restore a color or delete the
width without designer sign-off).

## 14. Verification

Full-file diff run (4 changed lines); overlay/content lines verified by direct
read. Effects inferred from source.

## 15. Unresolved Questions

1. Is the colorless-but-present border deliberate (vs full deletion elsewhere)?
