# Moon Select vs Default

## 1. Audit Metadata

- Style: moon
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/moon/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Moon keeps the `h-10` trigger height and full focus stack; changes are a
transparent trigger face (background deleted) and taller items (`py-2`).
Content, viewport, label, separator, and exports unchanged.

## 3. Base Classes

Trigger: `bg-dft-background` deleted (transparent); `h-10`, border-input,
ring-2/offset-2, disabled all retained. Face UNVERIFIED (COLOR); rest
TOKEN_DEPENDENCY, Corroborated.
Item: `py-1.5` → `py-2` (taller; UNVERIFIED, DIMENSION).
Content (`p-1` viewport kept), Label, Separator, Scroll: prefix swaps
(Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Item padding change in §3.

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

`moon-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) transparent trigger face + taller items — UNVERIFIED. No
divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
