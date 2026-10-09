# Moon Toggle vs Default

## 1. Audit Metadata

- Style: moon
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/moon/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon's toggle is an exact clone of Default modulo the `dft` → `moon` prefix:
same base, variants, on-state, focus (offset-2 kept), sizes, structure, and
exports. No component-level visual difference.

## 3. Base Classes

Prefix swap only (`moon:10` vs `default:10`). TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`moon:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | baseline outline classes | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

All three keys (`moon:18-22`) identical: `h-10 px-3 min-w-10`,
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

`moon-*` namespace only.

## 12. Typography and Global Styling

`text-sm font-medium` retained. No change.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. Migration: re-apply prefix
mapping only. No divergences, no exceptions.

## 14. Verification

Both files read fully. Byte-level comparison confirms prefix-only delta.

## 15. Unresolved Questions

None.
