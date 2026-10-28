# Material Accordion vs Default

## 1. Audit Metadata

- Style: material
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/material/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Material matches the linear/wedges pattern in its own tokens: accent hover +
accent-ink text, `px-3 py-3` trigger, `px-3` Content. Item border unchanged;
chevron, animations, and exports unchanged.

## 3. Base Classes

Item: `border-b` unchanged. Trigger: `hover:underline` →
`hover:bg-material-accent hover:text-material-accent-foreground`; `px-3`,
`py-4` → `py-3` (`font-medium` kept) — UNVERIFIED set
(INTERACTION/DIMENSION). Chevron retained. Content outer: `px-3` added
(UNVERIFIED); inner `pb-4 pt-0` unchanged. Animations identical.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/content padding changes in §3.

## 6. Interaction States

Hover fill+ink vs underline. No focus/disabled additions. Chevron rotation
retained. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*`: accent tokens.

## 12. Typography and Global Styling

Trigger `font-medium` kept; Content `text-sm` (no muted override here).

## 13. Findings and Upgrade Preservation

Findings: (1) accent hover+ink trigger + padded Content — UNVERIFIED as a set
(preserve; shared pattern with wedges — set-level ruling candidate).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the row treatment (rule with wedges).
