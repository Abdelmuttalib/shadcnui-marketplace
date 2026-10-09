# Material Pagination vs Default

## 1. Audit Metadata

- Style: material
- Component: pagination
- Baseline source: `registry/default/ui/pagination.tsx:1-117`
- Alternative source: `registry/material/ui/pagination.tsx:1-117`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (exactly 2 changed lines — the import pair, verified)

## 2. Executive Summary

Material pagination is byte-identical to Default except the own-style `ButtonProps, buttonVariants` import: same active-page mapping (outline + `aria-current`), sizes, chevrons, ellipsis, aria labels, and all 7 exports.

## 3. Base Classes

Nav (`mx-auto flex w-full justify-center`), Content (`flex flex-row items-center gap-1`), Item, Link (active `outline` / inactive `ghost`, `size="icon"` default), Previous/Next (`gap-1 pl/pr-2.5`, `size="default"`), Ellipsis (`h-9 w-9`): identical. NO_DIFFERENCE (verified).

## 4. Variants

Active/inactive button-variant mapping via the imported `buttonVariants` is unchanged (`outline` when active with `aria-current="page"`, `ghost` otherwise) — material button styling flows through automatically. No local variants.

## 5. Sizes

No size scale. `size="icon"` link default and `size="default"` prev/next identical.

## 6. Interaction States

Hover/focus/disabled flow through Button; `aria-current`, `aria-label` navigation texts, sr-only labels identical. ChevronLeft/Right/MoreHorizontal `h-4 w-4` identical. No dark-mode classes in either file.

## 7. DOM and Component Structure

Identical tree (nav/ul/li/a/span). PARITY_EXPECTED.

## 8. Props, Exports, and API

`PaginationLinkProps` (`isActive`, Pick `size`, anchor props), all 7 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Navigation semantics, `aria-label="pagination"`, prev/next/ellipsis labels identical. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/material/ui/button` verified (the only delta); lucide icons, react, utils identical. PARITY_EXPECTED — the import path is expected namespacing.

## 11. Token Dependencies

None local; button-token resolution flows through the imported material button module.

## 12. Typography and Global Styling

No text classes beyond sr-only labels (identical).

## 13. Findings and Upgrade Preservation

Findings: (1) own-style Button import — PARITY_EXPECTED (keep re-pointed at the new material button module). No divergences, no exceptions.

## 14. Verification

Full-file diff run (2 changed lines: the import pair). No inferences required beyond the import's automatic styling effect.

## 15. Unresolved Questions

None.
