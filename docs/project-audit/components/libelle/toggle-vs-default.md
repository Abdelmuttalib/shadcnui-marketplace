# Libelle Toggle vs Default

## 1. Audit Metadata

- Style: libelle
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/libelle/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Libelle's toggle is an exact clone of Default modulo the `dft` → `libelle`
prefix (with moon, one of two clones in the batch). Same base, variants,
on-state, focus, sizes, structure, and exports.

## 3. Base Classes

Prefix swap only (`libelle:10` vs `default:10`). TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`libelle:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `libelle` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

All three keys (`libelle:18-22`) identical: `h-10 px-3 min-w-10`,
`h-9 px-2.5 min-w-9`, `h-11 px-5 min-w-11`. NO_DIFFERENCE.

## 6. Interaction States

All identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants`, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace only.

## 12. Typography and Global Styling

`text-sm font-medium` retained. No change.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. Migration: re-apply prefix
mapping only. No divergences, no exceptions.

## 14. Verification

Both files read fully. Byte-level comparison confirms prefix-only delta.

## 15. Unresolved Questions

None.
