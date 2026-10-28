# Lucid Tabs vs Default

## 1. Audit Metadata

- Style: lucid
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/lucid/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Lucid compacts the list (`h-9`, dropped `p-1`) and restyles triggers as `-md`
bordered tabs (`border-transparent`, active `input` border) with the active
shadow dropped. Content unchanged. Structure and exports unchanged.

## 3. Base Classes

List: `h-10` → `h-9`; `p-1` dropped (UNVERIFIED, DIMENSION). Trigger:
`rounded-dft-sm` → `rounded-lucid-md`; `border border-transparent` added;
active `bg-dft-background` → `bg-lucid-background` + `border-lucid-input`
added, `shadow-sm` dropped (UNVERIFIED set, SHAPE/BORDER). Ring-2/offset-2
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

`lucid-*` namespace; active edge on the input token (consistent with lucid's
input-token edges elsewhere — corroboration candidate, still UNVERIFIED).

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact bordered-tab system — UNVERIFIED as a set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the bordered-tab system as intended.
