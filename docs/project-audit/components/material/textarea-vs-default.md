# Material Textarea vs Default

## 1. Audit Metadata

- Style: material
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/material/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material mirrors its input: 2px transparent border, 60% tinted fill, extra
vertical padding (`py-3`), and border-color-only focus with the full ring stack
deleted. Structure and exports unchanged.

## 3. Base Classes

Baseline vs material:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border` | `border-2` | Heavier edge | — | UNVERIFIED (concern BORDER) |
| `border-dft-input` | `border-transparent` | Invisible resting edge | Edge appears on focus | UNVERIFIED (concern BORDER) |
| `bg-dft-background` | `bg-material-input/60` | 60% tint | Tinted face | UNVERIFIED (concern COLOR) |
| `py-2` | `py-3` | 8px → 12px vertical padding (sole textarea padding change) | Roomier text inset | UNVERIFIED (concern DIMENSION) |
| `ring-offset-*` + `focus-visible:ring-2/ring/offset-2` | `focus-visible:border-material-ring` only | Ring stack → border recolor | Border-only focus (as material input) | UNVERIFIED (concern FOCUS) — not swept into owner decision A (checkbox/radio/switch only) |
| `min-h-[80px]`, radius, placeholder/disabled/md | retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Padding change in §3. No `resize-*` in either file.

## 6. Interaction States

Focus per §3. Hover/disabled/md identical. No invalid-state handling.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged structurally; focus rests on a 2px border recolor — UNVERIFIED with
accessibility relevance, not a failure claim and not owner-decided.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*`: input/ring/muted tokens.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 2px transparent border + 60% fill + `py-3` — UNVERIFIED;
(2) border-only focus — UNVERIFIED (preserve; needs designer ruling).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Is border-only focus intended for textarea?
