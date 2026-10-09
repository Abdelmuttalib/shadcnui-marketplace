# Libelle Select vs Default

## 1. Audit Metadata

- Style: libelle
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/libelle/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Libelle keeps the `h-10` trigger height but restyles it as a bottom-bordered
field (dual radius + `border-b` primary, 50% fill — matching libelle input),
with full ring-2/offset-2 focus. Content, label, item, separator, and exports
are prefix-only swaps.

## 3. Base Classes

Trigger: `rounded-libelle-md rounded-t-[4px]` (dual radius, as input);
`border border-*-input` → `border-b border-b-libelle-primary` (underline edge);
`bg-*-background` → `bg-libelle-input/50`; `h-10`, ring-2/offset-2 retained.
Underline system + fill UNVERIFIED (BORDER/COLOR/SHAPE); rest TOKEN_DEPENDENCY,
Corroborated.
Content/Label/Item/Separator/Scroll: prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger height unchanged.

## 6. Interaction States

Focus identical. Highlight/disabled/animations identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) underline trigger system — UNVERIFIED (preserve literally,
including class order, consistent with libelle input). No divergences, no
exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm underline trigger language as intended.
