# Lucid Tooltip vs Default

## 1. Audit Metadata

- Style: lucid
- Component: tooltip
- Baseline source: `registry/default/ui/tooltip.tsx:1-30`
- Alternative source: `registry/lucid/ui/tooltip.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified)

## 2. Executive Summary

Lucid tooltip is a pure token-namespace swap: identical padding
(`px-3 py-1.5`), text size, always-on + close-gated animations, sideOffset
default, and all 4 exports.

## 3. Base Classes

Content (`lucid:22` vs `default:22`): `dft` → `lucid` on rounded/border/bg/text
tokens only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `px-3 py-1.5`, `text-sm` unchanged.

## 6. Interaction States

Always-on `animate-in fade-in-0 zoom-in-95` plus close-gated and side-slide
animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (Provider/Root/Trigger aliases, Content, ref, `sideOffset`
passthrough). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`; default
`sideOffset={4}` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (Radix timing/positioning untouched). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix tooltip, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` namespace only.

## 12. Typography and Global Styling

`text-sm` retained. No component-level type change.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run; single class-string delta. Effects inferred from source.

## 15. Unresolved Questions

None.
