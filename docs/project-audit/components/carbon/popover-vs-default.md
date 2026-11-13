# Carbon Popover vs Default

## 1. Audit Metadata

- Style: carbon
- Component: popover
- Baseline source: `registry/default/ui/popover.tsx:1-31`
- Alternative source: `registry/carbon/ui/popover.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified)

## 2. Executive Summary

Carbon popover is a pure token-namespace swap: identical geometry
(`w-72`, `p-4`), animations, Portal, defaults, and exports.

## 3. Base Classes

Content (`carbon:22` vs `default:22`): `dft` → `cb` on rounded/border/bg/text
tokens only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-72`, `p-4` unchanged.

## 6. Interaction States

Open/close fade+zoom and all four side-slide animations identical. No
hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (Root/Trigger aliases, Portal + Content, ref, passthrough). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Popover`, `PopoverContent`, `PopoverTrigger`; defaults `align="center"`,
`sideOffset={4}` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (Radix positioning/dismissal untouched). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix popover, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace only.

## 12. Typography and Global Styling

No text classes on Content beyond popover-foreground token.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run; single class-string delta. Effects inferred from source.

## 15. Unresolved Questions

None.
