# Catalyst Hover-Card vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/catalyst/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `catalyst:21`)

## 2. Executive Summary

Catalyst swaps the border to the `input` token and uses unprefixed
`text-popover-foreground` — matching its popover Content exactly. Geometry,
animations, and exports unchanged.

## 3. Base Classes

Content (`catalyst:21` vs `default:21`): `border-dft-border` →
`border-catalyst-input` (UNVERIFIED, COLOR — input-token edge, consistent with
catalyst popover); `text-dft-popover-foreground` → `text-popover-foreground`
(PARITY_DIVERGENCE, Needs-designer — joint ruling with catalyst popover/select);
rest prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-64`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No Portal added. No hover/focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. defaults. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed text (§3); edge on the input token.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED; (2) unprefixed text —
PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground` + input-token border: rule jointly with catalyst
   popover/select.
