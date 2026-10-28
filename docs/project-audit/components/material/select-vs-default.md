# Material Select vs Default

## 1. Audit Metadata

- Style: material
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/material/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files (via delegated read + direct source
  verification of the lines below)

## 2. Executive Summary

Material uses a 2px transparent trigger with 60% fill and border-color-only
focus (no ring), drops item rounding (`rounded-*-sm` gone), enlarges item
padding (`py-2.5`, `sm:pr-3`), empties the viewport padding (commented-out
`p-1`), and carries an **unprefixed `text-popover-foreground`** on Content —
verified by direct read (`material:78`), classified as divergence pending ruling.

## 3. Base Classes

Trigger (`material:22`): `border` → `border-2 border-transparent`;
`bg-dft-background` → `bg-material-input/60`; `ring-offset-*` +
`focus:ring-2/ring/offset-2` deleted, replaced by `focus:border-material-ring`
(with `focus:outline-none` kept). Border-only focus: UNVERIFIED (FOCUS) — not
swept into owner decision A. Rest prefix swap.
Content (`material:78`, verified): `bg-material-popover` + **`text-popover-foreground`
(unprefixed legacy — the `material-` prefix is missing)** + `border-material-border`.
PARITY_DIVERGENCE, Needs-designer (concern COLOR/TECHNICAL): with no `--popover-foreground`
unprefixed variable expected in the token system, the class may resolve to nothing —
verify rendered color. Viewport: `// "p-1"` commented out (`material:89`,
verified) → no content padding. PARITY_DIVERGENCE, Open (commented code — remove
comment or restore padding deliberately).
Item: `rounded-*-sm` dropped (square); `py-1.5` → `py-2.5`; added `sm:pr-3`.
UNVERIFIED (SHAPE/DIMENSION).
Label/Separator/Scroll: prefix swaps (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger stays `h-10`; item padding changes in §3.

## 6. Interaction States

Focus per §3 (trigger border-only; item highlight namespace-swapped). Disabled
identical. Animations/positioning identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 items. If `text-popover-foreground` resolves to nothing,
popover text color falls back to inherited — accessibility-adjacent, recorded
pending ruling, not a failure claim.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` throughout except the unprefixed Content text class (§3).

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 2px transparent trigger + border-only focus — UNVERIFIED;
(2) square roomy items — UNVERIFIED; (3) unprefixed Content text —
PARITY_DIVERGENCE/Needs-designer (confirm intended token: likely
`text-material-popover-foreground`; do not ship the migration until ruled);
(4) commented viewport padding — PARITY_DIVERGENCE/Open.

## 14. Verification

Delegated full read with exact quotes; `material:78` (unprefixed text) and
`material:89` (commented `p-1`) verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Is `text-popover-foreground` a typo for `text-material-popover-foreground`?
2. Restore viewport padding or keep unpadded deliberately?
3. Is border-only trigger focus intended?
