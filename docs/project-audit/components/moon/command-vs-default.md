# Moon Command vs Default

## 1. Audit Metadata

- Style: moon
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/moon/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (verified — only the deltas below differ)

## 2. Executive Summary

Moon command: Item `py-1.5` → `py-2` (UNVERIFIED, DIMENSION — slightly roomier rows); everything else prefix swap. Own-style dialog import verified. All 9
exports identical.

## 3. Base Classes

Root/wrapper/input/list/empty/group/separator/item/shortcut/inner overrides:
`dft` → `moon` prefix swaps throughout, plus moon item `py-2`. Item `py-1.5` → `py-2`: UNVERIFIED.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Item padding change in §3.

## 6. Interaction States

Selected/disabled/dialog/icon states identical. Search icon unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree and cmdk primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/moon/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

Heading/item text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) roomier items — UNVERIFIED; (2) namespace swap — TOKEN_DEPENDENCY. Migration: keep the import re-pointed at the new moon dialog module.

## 14. Verification

Full-file diff run. Effects inferred from source.

## 15. Unresolved Questions

None.
