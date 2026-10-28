# Catalyst Tabs vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/catalyst/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Catalyst frames the list (border, tight `p-0.5`, no height/bg) and restyles
triggers as bordered tabs with muted active fill (`bg-catalyst-muted`) plus an
`input`-bordered active state. Content unchanged. Structure and exports unchanged.

## 3. Base Classes

List: `h-10` + `bg-dft-muted` dropped (unframed height, no fill); `p-1` →
`p-0.5`; `border border-catalyst-border` added (UNVERIFIED set, DIMENSION/BORDER).
Trigger: `border border-transparent` added; active `bg-dft-background` →
`bg-catalyst-muted` + `border-catalyst-input` added (UNVERIFIED set).
`rounded-catalyst-sm`, ring-2/offset-2 retained. Content: prefix swap.

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

`catalyst-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed tight list + bordered triggers + muted active —
UNVERIFIED as a set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the framed treatment as intended.
