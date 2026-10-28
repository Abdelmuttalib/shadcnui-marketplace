# Snow Input vs Default

## 1. Audit Metadata

- Style: snow
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/snow/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Snow shortens to `h-9` with uniquely wider `px-3.5` padding and drops the
focus-offset width (double space left behind). Otherwise a prefix swap; ring-2
kept.

## 3. Base Classes

Baseline vs snow:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-10` | `h-9` | 40px → 36px | Shorter field | UNVERIFIED (concern DIMENSION) |
| `px-3` | `px-3.5` | 12px → 14px horizontal padding (sole instance) | Roomier text inset | UNVERIFIED (concern DIMENSION) |
| `focus-visible:ring-offset-2` | (absent; offset color kept; double space is a no-op) | Offset width dropped | Ring without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| Rest (border-input, bg-background, ring-2, file/placeholder/disabled/md) | prefix swap / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Height + padding changes in §3.

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

`snow-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + `px-3.5` — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
