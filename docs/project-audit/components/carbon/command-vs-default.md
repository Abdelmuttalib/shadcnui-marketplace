# Carbon Command vs Default

## 1. Audit Metadata

- Style: carbon
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/carbon/ui/command.tsx:1-156`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified by direct read of
  input:50, empty:79, group:93, item, shortcut)

## 2. Executive Summary

Carbon hardens the search input against borders (`border-none` + focus/visible
border-none), mutes the empty state, re-pads the group (`p-1`→`pt-1`,
heading `px-3`) on an unprefixed `text-foreground`, enlarges items
(`rounded-cb-md px-2.5 py-2`) with muted svg color, and restyles Shortcut as a
kbd chip. Own-style dialog import verified. Root/wrapper/separator/list
otherwise unchanged.

## 3. Base Classes

Root: prefix swap (Corroborated). Dialog/inner Command overrides: `px-2` kept,
muted token swapped (Corroborated). Wrapper (`border-b-cb-border`): swap.
Input (`carbon:50`, verified): `rounded-cb-md` swap + added `border-none` +
added `focus:border-none focus-visible:border-none` — defensive border
neutralization on an already-borderless input (UNVERIFIED, TECHNICAL — harmless
redundancy, likely copy-paste; drop on migration unless a global style re-adds
borders). Empty (`carbon:79`, verified): added `text-cb-muted-foreground`
(UNVERIFIED, COLOR — muted empty state, sole instance).
Group (`carbon:93`, verified): `p-1` → `pt-1` (horizontal group padding dropped;
UNVERIFIED, DIMENSION); `text-dft-foreground` → **`text-foreground`
(unprefixed)** — PARITY_DIVERGENCE, Needs-designer (joint ruling);
heading `px-2` → `px-3` (UNVERIFIED).
Separator `bg-cb-border`: swap. Item: `rounded-dft-sm px-2 py-1.5` →
`rounded-cb-md px-2.5 py-2` + added `[&_svg]:text-cb-muted-foreground`
(UNVERIFIED, DIMENSION/SHAPE/COLOR).
Shortcut: kbd chip (`rounded-cb-md border border-cb-border bg-cb-input/30 px-px
... /80`, opacity dropped) — UNVERIFIED (consistent with carbon menu Shortcuts).

## 4. Variants

Not applicable — no cva variants; `inset` n/a.

## 5. Sizes

No size scale. Input stays `h-11`; item/group padding changes in §3.

## 6. Interaction States

Selected (`data-[selected]`), disabled (`data-[disabled]`), list overflow,
dialog behavior identical. Search icon `mr-2 h-4 w-4 opacity-50` unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree and cmdk primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/carbon/ui/dialog` verified (`carbon:9`); rest identical
(cmdk, radix dialog types, Search, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` except unprefixed Group text (§3).

## 12. Typography and Global Styling

Heading/item text sizes retained (`text-xs`/`text-sm`).

## 13. Findings and Upgrade Preservation

Findings: (1) input border-neutralization — PARITY_DIVERGENCE/Open (drop
unless justified); (2) muted empty + re-padded group — UNVERIFIED;
(3) unprefixed Group text — PARITY_DIVERGENCE/Needs-designer (joint ruling);
(4) roomier items + muted svg + kbd Shortcut — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run (7 changed lines); input/empty/group lines verified by
direct read. Effects inferred from source.

## 15. Unresolved Questions

1. Is the input `border-none` stack defensive redundancy or load-bearing?
2. Unprefixed Group text: rule jointly with the set.
