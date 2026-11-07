# Carbon Breadcrumb vs Default

## 1. Audit Metadata

- Style: carbon
- Component: breadcrumb
- Baseline source: `registry/default/ui/breadcrumb.tsx:1-115`
- Alternative source: `registry/carbon/ui/breadcrumb.tsx:1-115`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
import:2, Link:53, Page:69, Separator:86 verified by direct grep)

## 2. Executive Summary

Carbon leaves Link/Page text unprefixed, shrinks separator icons (`h-2.5`), and
swaps the default separator to a rotated `Slash` icon (new import). List, Item,
Ellipsis, props, and exports unchanged — including the shared `Elipssis` typo.

## 3. Base Classes

List: prefix swap (`text-cb-muted-foreground`). Item identical. Link
(`carbon:53`, verified): `hover:text-dft-foreground` → `hover:text-foreground`
(unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling). Page
(`carbon:69`, verified): `text-dft-foreground` → `text-foreground` (unprefixed) —
same ruling. Separator `li` (`carbon:86` region): `[&>svg]:h-3.5` →
`[&>svg]:h-2.5` both axes (UNVERIFIED, DIMENSION — smaller glyph box); default
`{children ?? <ChevronRight />}` → `{children ?? <Slash
className="-rotate-[30deg]" />}` (verified) — UNVERIFIED (new separator glyph;
requires the `Slash` import below).

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Separator icon box change in §3; Ellipsis `h-9 w-9` unchanged.

## 6. Interaction States

Link hover recolor per §3 (unprefixed token). Page `aria-current`/`aria-disabled`
attributes unchanged. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and roles (`nav aria-label`, `li presentation`/`aria-hidden`,
`role="link"` page). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 7 exports identical, including `Breadcrumb.displayName =
"BreadcrumbElipssis"` typo (verified present — shared-baseline quirk, not a
divergence). Unused `separator?` prop retained. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; separator `aria-hidden` retained. PARITY_EXPECTED with §3 notes (no
failure claims).

## 10. Imports and Dependencies

`import { MoreHorizontal, Slash } from "lucide-react"` (`carbon:2`, verified)
vs `{ChevronRight, MoreHorizontal}` — `Slash` added, `ChevronRight` dropped
(live import swap following the separator change; no dead imports).
PARITY_EXPECTED with note (import change is consequential, not drift).

## 11. Token Dependencies

`cb-*` namespace except unprefixed Link/Page text (§3).

## 12. Typography and Global Styling

List `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) Slash separator + smaller icon box — UNVERIFIED (preserve exactly,
including the import swap); (2) unprefixed Link/Page text —
PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Both files read fully; import/Link/Page/Separator lines verified by direct
grep. Effects inferred from source.

## 15. Unresolved Questions

1. Is the Slash separator deliberate carbon language?
2. Unprefixed Link/Page text: rule jointly with the set.
