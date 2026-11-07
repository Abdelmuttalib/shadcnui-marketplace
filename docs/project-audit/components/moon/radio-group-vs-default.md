# Moon Radio-Group vs Default

## 1. Audit Metadata

- Style: moon
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/moon/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon is a pure token-namespace swap of Default — same dimensions, border-token
role, ring stack, indicator, and dot. Nearest-to-baseline radio-group.

## 3. Base Classes

Root and Item (`moon:15,31` vs `default:15,31`) identical modulo `dft` → `moon`
(`border-moon-primary`, `text-moon-primary`, `ring-moon-ring`, offset-2 retained).
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; item stays 16px.

## 6. Interaction States

Hover: none. Focus: identical. Checked: dot only (no fill/border additions, as
baseline). Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace; `--moon-primary: 46% 0.1683 280.94`.

## 12. Typography and Global Styling

Indicator `Circle h-2.5 w-2.5 fill-current text-current` unchanged (`moon:37`).

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.
Migration: re-apply prefix mapping only.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
