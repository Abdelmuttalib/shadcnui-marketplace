# Catalyst Input vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/catalyst/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst shortens input to `h-9` with a 50% input-tinted fill and drops the
focus-offset width (ring-2 kept). Otherwise a prefix swap.

## 3. Base Classes

Baseline vs catalyst:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-10` | `h-9` | 40px → 36px | Shorter field | UNVERIFIED (concern DIMENSION) |
| `bg-dft-background` | `bg-catalyst-input/50` | Opaque → 50% tint | Tinted face | UNVERIFIED (concern COLOR) |
| `focus-visible:ring-offset-2` | (absent; offset color kept) | Offset width dropped | Ring without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| All else | prefix swap / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single height change in §3.

## 6. Interaction States

Focus ring-2 present, offset absent. Hover/disabled/md identical. No
invalid-state handling in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + 50% fill — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
