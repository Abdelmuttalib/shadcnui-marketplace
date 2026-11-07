# Linear Textarea vs Default

## 1. Audit Metadata

- Style: linear
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/linear/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear's only changes are a transparent face and a fully dropped offset (both
the base offset color and the focus offset width are gone; ring-2 kept).
Otherwise a prefix swap.

## 3. Base Classes

Baseline vs linear:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `bg-dft-background` | `bg-transparent` | Transparent face | Shows parent surface | UNVERIFIED (concern COLOR) |
| `ring-offset-linear-background` (base) + `focus-visible:ring-offset-2` | both absent | Offset color and width dropped | Ring without offset gap or offset layer | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| All else (border-input, ring-2, padding, placeholder/disabled/md) | prefix swap / retained | — | Focus visible via ring-2 | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

## 6. Interaction States

Focus ring-2 present, offset absent. Hover/disabled/md identical.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) transparent face — UNVERIFIED; (2) missing offset color+width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset removal: deliberate or slip?
