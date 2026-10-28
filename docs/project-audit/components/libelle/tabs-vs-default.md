# Libelle Tabs vs Default

## 1. Audit Metadata

- Style: libelle
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/libelle/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Libelle drops the list fill/padding (unmuted, unpadded bar) with foreground
text, and widens triggers (`px-4 py-2`) with a bottom border edge and a
primary-bordered muted active state (shadow kept). Content unchanged. Structure
and exports unchanged.

## 3. Base Classes

List: `bg-dft-muted` + `p-1` dropped; `text-dft-muted-foreground` →
`text-libelle-foreground` (UNVERIFIED set, COLOR — unmuted bar text).
Trigger: `border-b border-b-libelle-border` added; `px-3 py-1.5` → `px-4 py-2`;
active `bg-dft-background` → `bg-libelle-muted/60` + `border-libelle-primary`
added, `shadow-sm` kept (UNVERIFIED set, DIMENSION/BORDER). Ring-2/offset-2
retained. Content: prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active treatment per §3; hover absent in both files; disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace only.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unmuted bar + wide edged triggers + primary active — UNVERIFIED
as a set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the unmuted wide-tab system as intended.
