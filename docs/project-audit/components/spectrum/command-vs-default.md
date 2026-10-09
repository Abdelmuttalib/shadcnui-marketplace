# Spectrum Command vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/spectrum/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed lines, verified)

## 2. Executive Summary

Spectrum shortens the search input (`h-10`), narrows the group to vertical-only
(`py-1`) with wider headings (`px-3`), and widens items (`px-3 py-2`,
radius dropped). Text correctly prefixed throughout. (Prefix `spctm`.)

## 3. Base Classes

Input: `h-11` → `h-10` (UNVERIFIED, DIMENSION — sole input-height change in the
set). Group: `p-1` → `py-1` + heading `px-2` → `px-3` (UNVERIFIED). Item:
radius deleted + `px-2 py-1.5` → `px-3 py-2` (UNVERIFIED, SHAPE/DIMENSION).
Root/wrapper/separator/Shortcut/inner: prefix swaps, correctly prefixed
(Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Input/group/item padding changes in §3.

## 6. Interaction States

Selected/disabled/dialog/icon states identical. Search icon unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/spectrum/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace only. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Heading/item text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-10` input + vertical-only group + wide radius-less items —
UNVERIFIED as a set (preserve).

## 14. Verification

Full-file diff run (5 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the compact group/item system as intended.
