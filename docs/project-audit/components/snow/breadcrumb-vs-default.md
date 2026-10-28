# Snow Breadcrumb vs Default

## 1. Audit Metadata

- Style: snow
- Component: breadcrumb
- Baseline source: `registry/default/ui/breadcrumb.tsx:1-115`
- Alternative source: `registry/snow/ui/breadcrumb.tsx:1-119`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
separator lines verified by direct read of `snow:87-88`)

## 2. Executive Summary

Snow replaces the ChevronRight separator with a rotated text `/` (muted color,
extra `sr-only`) — the only text-glyph separator in the set — leaving the
`ChevronRight` import unused. Link/Page correctly prefixed; icons, Ellipsis,
props, and exports otherwise unchanged.

## 3. Base Classes

List/Item/Link/Page: prefix swaps (Corroborated). Separator default
(`snow:87-88`, verified): `{children ?? <ChevronRight />}` → `<p
className="rotate-6 text-snow-muted-foreground">/<span
className="sr-only">Separator</span></p>` — text glyph instead of icon, rotated
6°, muted (UNVERIFIED, STRUCTURE-adjacent styling — same `li` shell, new
content; recorded as UNVERIFIED, not drift, pending intent ruling). The `li`
`[&>svg]` size classes are now childless (no `svg` descendant) — inert
leftovers, cosmetic (PARITY_EXPECTED with note, not separately flagged).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Ellipsis `h-9 w-9` unchanged.

## 6. Interaction States

Link hover correctly prefixed. Page ARIA unchanged; separator `aria-hidden`
retained on the `li`. No dark-mode classes.

## 7. DOM and Component Structure

Separator content element changed (`p` + text + `sr-only` vs icon); shell,
roles, and everything else identical. See §3 classification.

## 8. Props, Exports, and API

All 7 exports identical incl. `Elipssis` typo (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Separator stays `aria-hidden`; the added inner `sr-only` is redundant under an
already-hidden parent (inferred — harmless duplication, not a failure claim).

## 10. Imports and Dependencies

`import { ChevronRight, MoreHorizontal }` retained with `ChevronRight` now
unused (`snow:2`, verified) — PARITY_DIVERGENCE, Open (concern TECHNICAL; dead
import, remove on migration unless the icon is restored).

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

List `text-sm` retained; separator glyph is text-sized by inheritance.

## 13. Findings and Upgrade Preservation

Findings: (1) text `/` separator — UNVERIFIED (preserve exactly pending intent
ruling); (2) dead `ChevronRight` import — PARITY_DIVERGENCE/Open (remove).

## 14. Verification

Both files read fully; separator lines + import verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Is the text separator deliberate minimalism or drift (which decides the
   import's fate)?
