# Spectrum Drawer vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: drawer
- Baseline source: `registry/default/ui/drawer.tsx:1-118`
- Alternative source: `registry/spectrum/ui/drawer.tsx:1-118`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
overlay:31, content:46 verified by direct grep)

## 2. Executive Summary

Spectrum lightens the overlay (`black/60`, no dark variant), restyles Content
with a `-md` radius tier, popover bg, and 70% `input` border — the only drawer
changing radius or surface token. Handle, Header/Footer/Title, scaling, and
exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Overlay (`spectrum:31`, verified): `bg-black/80` → `bg-black/60`, no `dark:`
variant (UNVERIFIED, COLOR — unlike carbon, which pairs its 60% scrim with a
dark override). Content (`spectrum:46`, verified): `rounded-t-[10px]` →
`rounded-t-md` (UNVERIFIED, SHAPE — sole radius change); `bg-dft-background` →
`bg-spctm-popover` (UNVERIFIED, COLOR); `border-dft-border` →
`border-spctm-input/70` (UNVERIFIED, COLOR/BORDER — 70% input edge).
Handle `bg-spctm-muted`, Description swapped (Corroborated).

## 4. Variants

Not applicable — bottom-only sheet in both files.

## 5. Sizes

No size scale. `mt-24`, handle metrics unchanged.

## 6. Interaction States

Vaul behavior identical. No dark-mode classes at all (noted — overlay has no
dark override).

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports, Root props, refs, displayNames identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 notes (no failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Title `text-lg font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) lighter scrim without dark override — UNVERIFIED (confirm whether
a dark variant is missing or intentionally absent); (2) `-md` popover Content +
70% edge — UNVERIFIED (preserve exactly).

## 14. Verification

Both files read fully; overlay/content lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Should the overlay have a dark-mode variant (cf. carbon)?
2. Confirm Content restyle as intended.
