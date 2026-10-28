# Moon Checkbox vs Default

## 1. Audit Metadata

- Style: moon
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/moon/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon's only component-level change is the 18px box (`size-[1.125rem]`); everything
else is a pure token swap, including the primary-colored resting border and no
checked-border addition (matching Default). Nearest-to-baseline checkbox.

## 3. Base Classes

Baseline Root (`default:16`) vs moon Root (`moon:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `size-[1.125rem]` | 16px → 18px | Slightly larger box | UNVERIFIED (concern DIMENSION) |
| All tokens | `moon` equivalents | Prefix swap (`border-moon-primary`, checked bg+text, ring, radius `-sm`) | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none. Focus ring-2/offset-2 retained. Checked: fill + recolor, no added
border (as baseline). Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace; `--moon-primary: 46% 0.1683 280.94`.

## 12. Typography and Global Styling

Icon `Check h-4 w-4` unchanged (`moon:24`).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px box — UNVERIFIED; (2) namespace swap — TOKEN_DEPENDENCY.
Re-apply both. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
