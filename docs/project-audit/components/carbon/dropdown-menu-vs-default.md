# Carbon Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: carbon
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/carbon/ui/dropdown-menu.tsx:1-203`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (9 changed lines, verified)

## 2. Executive Summary

Carbon widens item spacing (`px-2`→`px-3`, label `px-3 py-2`), steps item radius
to `-md`, drops content padding (`p-1` gone on both SubContent and Content),
leaves SubContent/Content text unprefixed, and restyles Shortcut as a bordered
kbd chip. Icons, animations, Portal, and all 15 exports unchanged.

## 3. Base Classes

SubTrigger: `rounded-dft-sm px-2 py-1.5` → `rounded-cb-md px-3 py-1.5`
(UNVERIFIED, DIMENSION/SHAPE). SubContent + Content: `p-1` deleted (both);
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed)** —
PARITY_DIVERGENCE, Needs-designer (joins the joint ruling set); `border-cb-border`,
`rounded-cb-md`, `shadow-lg/md` prefix swaps (Corroborated).
Item: `rounded-cb-md px-3 py-1.5` (same spacing/radius treatment as SubTrigger).
Checkbox/RadioItem: `rounded-cb-md` only (padding unchanged).
Label: `px-2 py-1.5` → `px-3 py-2` (UNVERIFIED, DIMENSION).
Separator `bg-cb-muted`: prefix swap.
Shortcut (`carbon:177-180`, verified): `ml-auto text-xs tracking-widest opacity-60`
→ `ml-auto rounded-cb-md border border-cb-border bg-cb-input/30 px-px text-xs
tracking-widest text-cb-muted-foreground/80` — kbd-chip restyle, opacity dropped
(UNVERIFIED, COLOR/BORDER).

## 4. Variants

Not applicable — no cva variants; `inset` handling (`pl-8`) unchanged.

## 5. Sizes

No size scale. Item/label padding changes in §3; `min-w-[8rem]` unchanged.

## 6. Interaction States

Highlight (`focus:bg/accent`), open-state, disabled (`data-[disabled]`),
animations, side slides identical. ChevronRight `ml-auto` unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Sub/Item/Checkbox/Radio indicators, `left-2` spans, Check h-4 /
Circle h-2 icons). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical; `inset?`, `checked` passthrough identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 notes (no failure claims).

## 10. Imports and Dependencies

Identical set (radix dropdown, Check/ChevronRight/Circle, react, utils).
PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace except unprefixed Content text (§3); `--cb-radius: 0rem`.

## 12. Typography and Global Styling

`text-sm` items/label, `text-xs` shortcut retained; label stays semibold.

## 13. Findings and Upgrade Preservation

Findings: (1) wider item/label spacing + `-md` radii — UNVERIFIED; (2) unpadded
contents — UNVERIFIED; (3) unprefixed Content text — PARITY_DIVERGENCE/
Needs-designer (joint ruling); (4) kbd Shortcut — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (9 changed lines); Shortcut block verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Confirm spacing/radius/padding/Shortcut set as intended carbon language.
2. `text-popover-foreground`: rule jointly with the set.
