# Catalyst Tooltip vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: tooltip
- Baseline source: `registry/default/ui/tooltip.tsx:1-30`
- Alternative source: `registry/catalyst/ui/tooltip.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `catalyst:22`)

## 2. Executive Summary

Catalyst swaps the border to the `input` token and uses unprefixed
`text-popover-foreground` — matching its popover/hover-card Content exactly.
Padding, animations, and exports unchanged.

## 3. Base Classes

Content (`catalyst:22` vs `default:22`): `border-dft-border` →
`border-catalyst-input` (UNVERIFIED, COLOR — input-token edge language);
`text-dft-popover-foreground` → `text-popover-foreground` (PARITY_DIVERGENCE,
Needs-designer — joint ruling with catalyst popover/hover-card/select); rest
prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `px-3 py-1.5`, `text-sm` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. `sideOffset={4}`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed text (§3); edge on the input token.

## 12. Typography and Global Styling

`text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED; (2) unprefixed text —
PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground` + input-token border: rule jointly with catalyst
   popover/hover-card/select.
