# Moon Separator vs Default

## 1. Audit Metadata

- Style: moon
- Component: separator
- Baseline source: `registry/default/ui/separator.tsx:1-31`
- Alternative source: `registry/moon/ui/separator.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; line-for-line identity confirmed except base color token

## 2. Executive Summary

Only the base color token differs (prefix swap). Orientation variants
(`h-px w-full` / `h-full w-px`), defaults (`horizontal`, `decorative`), structure,
and exports identical.

## 3. Base Classes

Base (`moon:21` vs `default:21`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `bg-dft-border` | `bg-moon-border` | Prefix swap only | None at component level | TOKEN_DEPENDENCY, Corroborated |

Orientation strings identical (`h-px w-full`, `h-full w-px`); `shrink-0` retained;
no margins, thickness, or color changes beyond the base token.

## 4. Variants

Orientation conditional identical (`orientation === "horizontal" ? ... : ...`).
PARITY_EXPECTED.

## 5. Sizes

Thickness fixed at 1px both orientations, both files. NO_DIFFERENCE.

## 6. Interaction States

Not applicable — separator carries no hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (`SeparatorPrimitive.Root`, ref, `decorative`/`orientation` passthrough).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`Separator` export, prop types, `orientation="horizontal"` and `decorative=true`
defaults, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (decorative default retained). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix separator, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`bg-moon-border` resolves within the moon namespace.

## 12. Typography and Global Styling

Not applicable — no text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions. Migration: re-apply prefix mapping only.

## 14. Verification

Both files read fully. Line-for-line identity except §3 verified by direct read.

## 15. Unresolved Questions

None.
