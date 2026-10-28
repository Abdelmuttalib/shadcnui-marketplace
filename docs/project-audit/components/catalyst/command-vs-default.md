# Catalyst Command vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/catalyst/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (6 changed lines, verified)

## 2. Executive Summary

Catalyst unprefixes the Root text token, tightens the group (`p-0.5`,
`px-2.5 py-2` headings), widens items (`px-2.5 py-2`), moves the separator to
the `input` token, and tones Shortcut to `/60`. Own-style dialog import verified.

## 3. Base Classes

Root: `text-dft-popover-foreground` → **`text-popover-foreground`
(unprefixed)** — PARITY_DIVERGENCE, Needs-designer (joint ruling).
Group: `p-1` → `p-0.5` + heading `px-2 py-1.5` → `px-2.5 py-2` (UNVERIFIED,
DIMENSION — tight group). Item: `px-2 py-1.5` → `px-2.5 py-2` (UNVERIFIED).
Separator: `bg-dft-border` → `bg-catalyst-input` (UNVERIFIED, COLOR).
Shortcut: adds `/60` to muted color (UNVERIFIED). Wrapper/input (`h-11`)/
inner/list/empty: prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Group/item padding changes in §3.

## 6. Interaction States

Selected/disabled/dialog/icon states identical. Search icon unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Own-style import `…/catalyst/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed Root text (§3); separator on the input token.

## 12. Typography and Global Styling

Heading/item text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed Root text — PARITY_DIVERGENCE/Needs-designer (joint
ruling); (2) tight group + wide items + input separator + Shortcut tone —
UNVERIFIED as a set.

## 14. Verification

Full-file diff run (6 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. `text-popover-foreground`: rule jointly with the catalyst set.
