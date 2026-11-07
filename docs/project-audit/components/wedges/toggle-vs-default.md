# Wedges Toggle vs Default

## 1. Audit Metadata

- Style: wedges
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/wedges/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Wedges drops the focus-offset width, compacts all sizes (narrowest padding in the
set alongside neon: `px-2`/`px-1.5`), and is otherwise a prefix swap. On-state and
exports unchanged.

## 3. Base Classes

Base (`wedges:10` vs `default:10`): prefix swap, except `focus-visible:ring-offset-2`
absent (offset color `ring-offset-wedges-background` kept). Ring-2 retained.
Offset removal: PARITY_DIVERGENCE, Needs-designer (concern FOCUS); rest
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`wedges:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `wedges` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`wedges:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-9 px-2 min-w-9` | Shorter, narrower | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-1.5 min-w-8` | Shorter, narrowest sm padding | UNVERIFIED |
| lg | `h-11 px-5 min-w-11` | `h-10 px-3 min-w-10` | Shorter, narrower | UNVERIFIED |

Compact set: UNVERIFIED.

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

`wedges-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact sizes — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
