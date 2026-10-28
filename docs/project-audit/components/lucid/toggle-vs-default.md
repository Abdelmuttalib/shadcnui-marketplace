# Lucid Toggle vs Default

## 1. Audit Metadata

- Style: lucid
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/lucid/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid compacts all three sizes (default matches old sm; sm/lg share `px-2`/`px-3`
with narrowed min-widths) and is otherwise a prefix swap. Base, on-state, focus
(offset-2 kept), and exports all parity.

## 3. Base Classes

Prefix swap only (`lucid:10` vs `default:10`). TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`lucid:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `lucid` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`lucid:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-9 px-2 min-w-9` | Shorter, narrower | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-2 min-w-8` | Shorter, narrower | UNVERIFIED |
| lg | `h-11 px-5 min-w-11` | `h-10 px-3 min-w-10` | Shorter, narrower | UNVERIFIED |

Compact set: UNVERIFIED.

## 6. Interaction States

All identical to baseline. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants`, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact sizes — UNVERIFIED (re-apply as a set). No divergences,
no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
