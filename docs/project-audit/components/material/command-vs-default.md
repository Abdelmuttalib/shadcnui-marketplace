# Material Command vs Default

## 1. Audit Metadata

- Style: material
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/material/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Material unprefixes the Root text token, widens group/item padding (`px-3`,
`py-2.5`), unpads the group (`p-1` gone), mutes item svgs with selected-state
recolor, and tones Shortcut with opacity. Own-style dialog import verified.

## 3. Base Classes

Root: `text-dft-popover-foreground` → **`text-popover-foreground`
(unprefixed)** — PARITY_DIVERGENCE, Needs-designer (joint ruling with the
material set). Inner overrides: `px-2` → `px-3` (×3: heading/group/item —
UNVERIFIED, DIMENSION). Wrapper/input (`h-11`): prefix swaps (Corroborated).
Group: `p-1` deleted + heading `px-2 py-1.5` → `px-3 py-2.5` (UNVERIFIED).
Item: radius deleted + `px-2 py-1.5` → `px-3 py-2.5` + `[&_svg]:
text-material-muted-foreground` + `data-[selected=true]:[&_svg]:
text-material-accent-foreground` (UNVERIFIED set — radius-less roomy rows with
state-colored icons). Separator swap. Shortcut: adds muted color + `opacity-60`
(UNVERIFIED).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Group/item/inner padding changes in §3.

## 6. Interaction States

Selected/disabled/dialog/icon states identical. Search icon unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree and cmdk primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Own-style import `…/material/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except unprefixed Root text (§3).

## 12. Typography and Global Styling

Heading/item text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed Root text — PARITY_DIVERGENCE/Needs-designer (joint
ruling); (2) widened group/item system + state-colored icons — UNVERIFIED
(preserve as one system); (3) Shortcut tone — UNVERIFIED.

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. `text-popover-foreground`: rule jointly with the material set.
2. Confirm the widened group/item system as intended.
