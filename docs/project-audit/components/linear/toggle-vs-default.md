# Linear Toggle vs Default

## 1. Audit Metadata

- Style: linear
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/linear/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear compacts all three toggle sizes one step and drops the focus-offset width
(color kept, double space left behind). Variants are prefix-only swaps; on-state,
icons, structure, and exports unchanged.

## 3. Base Classes

Base (`linear:10` vs `default:10`): prefix swap, except `focus-visible:ring-offset-2`
absent — `ring-offset-linear-background` color kept, double space before
`disabled:` is a no-op. Ring-2 retained. Offset removal: PARITY_DIVERGENCE,
Needs-designer (concern FOCUS); rest TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`linear:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `linear` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`linear:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-9 px-2.5 min-w-9` | Matches default sm | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-2 min-w-8` | Shorter, narrower | UNVERIFIED |
| lg | `h-11 px-5 min-w-11` | `h-10 px-3 min-w-10` | Shorter, much narrower | UNVERIFIED |

Compact set: UNVERIFIED (consistent with linear's cross-component density).

## 6. Interaction States

Hover, on-state (accent), disabled, svg sizing identical. Focus per §3. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants`, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` retained. No component-level type change.

## 13. Findings and Upgrade Preservation

Findings: (1) compact sizes — UNVERIFIED (re-apply as a set); (2) missing offset
width — PARITY_DIVERGENCE/Needs-designer. No other divergences.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
