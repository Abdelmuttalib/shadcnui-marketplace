# Catalyst Toggle vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/catalyst/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst's toggle is a prefix swap plus a compact size table (all three sizes one
step down; `lg` keeps `px-5`). Base, variants, on-state, focus (offset-2 kept),
icons, structure, and exports all parity.

## 3. Base Classes

Base (`catalyst:10` vs `default:10`): prefix swap only — ring-2/offset-2, on-state
accent, hover muted, svg sizing retained. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`catalyst:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `catalyst` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`catalyst:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-9 px-2.5 min-w-9` | Matches default sm | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-2 min-w-8` | Shorter, narrower | UNVERIFIED |
| lg | `h-11 px-5 min-w-11` | `h-10 px-5 min-w-10` | Shorter; padding kept | UNVERIFIED |

Compact set: UNVERIFIED (consistent with catalyst's cross-component density).

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

`catalyst-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact sizes — UNVERIFIED (re-apply as a set). No divergences,
no exceptions. Note: catalyst toggle is one of the few files in the batch with
no offset removal and no dead classes.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
