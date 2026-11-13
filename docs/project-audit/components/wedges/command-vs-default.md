# Wedges Command vs Default

## 1. Audit Metadata

- Style: wedges
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/wedges/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified by direct read of
  separator:108)

## 2. Executive Summary

Wedges shortens the search input (`h-10`), unpads the group (`p-1` gone) with
wider headings (`px-3`), widens items (`px-3`, radius dropped) with state-colored
svgs, tones Shortcut with opacity, and uses unprefixed `bg-border` for the
separator. Own-style dialog import verified.

## 3. Base Classes

Input: `h-11` → `h-10` (UNVERIFIED, DIMENSION — as spectrum). Group: `p-1`
deleted + heading `px-2` → `px-3` (UNVERIFIED). Item: radius deleted + `px-2`
→ `px-3` + `[&_svg]:text-wedges-muted-foreground` +
`data-[selected=true]:[&_svg]:text-wedges-accent-foreground` (UNVERIFIED set —
state-colored icons, as material). Separator (`wedges:108`, verified):
`bg-dft-border` → **`bg-border` (unprefixed)** — PARITY_DIVERGENCE, Open (same
unprefixed token as wedges separator component; confirm or re-tokenize to
`bg-wedges-border`). Inner overrides `px-2` → `px-3` (×3, UNVERIFIED).
Root/wrapper/Shortcut-tone: prefix swaps + `opacity-60` (UNVERIFIED).
Text correctly prefixed throughout (no unprefixed-text divergence here).

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

Own-style import `…/wedges/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` except unprefixed separator (§3).

## 12. Typography and Global Styling

Heading/item text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact group/item system + state-colored icons — UNVERIFIED;
(2) unprefixed separator — PARITY_DIVERGENCE/Open (rule with wedges separator
component's identical instance); (3) Shortcut tone — UNVERIFIED.

## 14. Verification

Full-file diff run (7 changed lines); separator line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. `bg-border` separator: shared slip with the separator component or convention?
