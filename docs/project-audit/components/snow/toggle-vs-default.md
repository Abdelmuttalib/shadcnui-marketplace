# Snow Toggle vs Default

## 1. Audit Metadata

- Style: snow
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/snow/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Snow is the only toggle whose **on-state uses `secondary` tokens instead of
`accent`**, compacts sizes with sm/lg radius overrides (`rounded-snow-sm/lg`),
and drops the focus-offset width — three differences from baseline in one file
alongside the routine prefix swap.

## 3. Base Classes

Base (`snow:10` vs `default:10`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `focus-visible:ring-offset-2` | (absent; `ring-offset-snow-background` kept, double space) | Offset width dropped | Inferred: ring without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| `data-[state=on]:bg-dft-accent` | `data-[state=on]:bg-snow-secondary` | On fill accent → secondary | On-state reads secondary-colored, unique in the set | UNVERIFIED (concern COLOR) |
| `data-[state=on]:text-dft-accent-foreground` | `data-[state=on]:text-snow-secondary-foreground` | On ink follows | Consistent secondary pairing | UNVERIFIED (concern COLOR) |
| All else (hover, ring-2, disabled, svg) | `snow` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

| Variant | Default | Alternative (`snow:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `snow` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`snow:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-9 px-2.5 min-w-9` | Shorter, narrower | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-2 rounded-snow-sm min-w-8` | + non-`md` radius override (unique, mirrors snow checkbox/button) | UNVERIFIED (concern DIMENSION/SHAPE) |
| lg | `h-11 px-5 min-w-11` | `h-10 px-3 rounded-snow-lg min-w-10` | + non-`md` radius override | UNVERIFIED |

## 6. Interaction States

On-state per §3 (secondary). Hover, disabled, svg sizing identical. Focus per
§3. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants`, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*`: secondary/secondary-foreground drive the on-state (vs accent
elsewhere); `--snow-radius` bypassed by sm/lg radius utilities (same 0.75-vs-0.4
mismatch context as button/checkbox).

## 12. Typography and Global Styling

`text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) secondary on-state — UNVERIFIED (preserve exactly; do not
"correct" to accent); (2) sm/lg radius overrides — UNVERIFIED; (3) compact sizes —
UNVERIFIED; (4) missing offset width — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Secondary on-state: deliberate snow language or slip?
2. Offset width: deliberate or slip (sixth snow instance)?
