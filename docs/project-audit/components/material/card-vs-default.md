# Material Card vs Default

## 1. Audit Metadata

- Style: material
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/material/ui/card.tsx:1-86`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
unprefixed token verified by direct grep below)

## 2. Executive Summary

Material's Card foreground uses the **unprefixed** `text-card-foreground`
(missing `material-` prefix; background stays `bg-material-card`) — verified by
direct grep. Everything else is a prefix swap; structure, padding, type, shadow,
and exports unchanged.

## 3. Base Classes

Card: `bg-dft-card` → `bg-material-card` (swap); `text-dft-card-foreground` →
**`text-card-foreground` (unprefixed)** — PARITY_DIVERGENCE, Needs-designer
(concern COLOR/TECHNICAL; likely slip, confirm or re-tokenize to
`text-material-card-foreground`). `rounded-material-lg`, `border-material-border`,
`shadow-sm`: swaps (Corroborated). Header/Title/Content/Footer identical;
Description prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All padding unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 6 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except unprefixed card-foreground (§3).

## 12. Typography and Global Styling

Title `text-2xl font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed Card foreground — PARITY_DIVERGENCE/Needs-designer
(confirm intended token; do not carry silently).

## 14. Verification

Both files read fully (delegated read with exact quotes); unprefixed token
verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. `text-card-foreground`: typo for `text-material-card-foreground`, or deliberate
   cross-token use?
