# Moon Hover-Card vs Default

## 1. Audit Metadata

- Style: moon
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/moon/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified)

## 2. Executive Summary

Moon hover-card is a pure token-namespace swap: identical geometry
(`w-64`, `p-4`), animations, defaults, no Portal (as baseline), and exports.

## 3. Base Classes

Content (`moon:21` vs `default:21`): `dft` → `moon` on rounded/border/bg/text
tokens only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-64`, `p-4` unchanged.

## 6. Interaction States

Open/close fade+zoom and all four side-slide animations identical. No
hover/focus/disabled/dark classes in either file. No Portal added (baseline has
none; none added here).

## 7. DOM and Component Structure

Identical (Root/Trigger aliases, direct Content, ref, `align`/`sideOffset`
passthrough). PARITY_EXPECTED.

## 8. Props, Exports, and API

`HoverCard`, `HoverCardContent`, `HoverCardTrigger`; defaults `align="center"`,
`sideOffset={4}` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (Radix hover timing/dismissal untouched). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix hover-card, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run; single class-string delta. Effects inferred from source.

## 15. Unresolved Questions

None.
