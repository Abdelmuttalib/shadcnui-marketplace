# Moon Carousel vs Default

## 1. Audit Metadata

- Style: moon
- Component: carousel
- Baseline source: `registry/default/ui/carousel.tsx:1-262`
- Alternative source: `registry/moon/ui/carousel.tsx:1-262`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (exactly 2 changed lines — the import pair, verified)

## 2. Executive Summary

Moon carousel is byte-identical to Default except the own-style Button import: same embla context, orientation handling, keyboard behavior, container/track/slide geometry, outline icon buttons, sr-only labels, and all 6 exports. No dots or indicators in either file.

## 3. Base Classes

Container (`relative`), track (`flex -ml-4` / `-mt-4 flex-col`), viewport (`overflow-hidden`), slide (`min-w-0 shrink-0 grow-0 basis-full` + `pl-4`/`pt-4`), prev/next positioning, `h-8 w-8 rounded-full` buttons: identical. NO_DIFFERENCE (verified).

## 4. Variants

Prev/Next use `variant="outline" size="icon"` via the imported Button in both files — moon button styling flows through automatically. No local variants.

## 5. Sizes

No size scale. All geometry identical.

## 6. Interaction States

`disabled` gating via `canScrollPrev/Next`, hover/focus through Button, embla animations identical. Arrow icons `h-4 w-4` identical. No dark-mode classes in either file.

## 7. DOM and Component Structure

Identical tree (context, region/slide roles, buttons). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Carousel`, `CarouselApi` type, `CarouselContent/Item/Next/Previous`, `CarouselProps` (opts/plugins/orientation/setApi), `orientation="horizontal"` default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Embla wiring, keyboard ArrowLeft/ArrowRight handling, `aria-roledescription` region/slide labels, sr-only Previous/Next text identical. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/moon/ui/button` verified (the only delta); embla, lucide arrows, react, utils identical. PARITY_EXPECTED — the import path is expected namespacing (prev/next buttons render in moon button style automatically).

## 11. Token Dependencies

None local; button-token resolution flows through the imported moon button module.

## 12. Typography and Global Styling

No text classes beyond sr-only labels (identical).

## 13. Findings and Upgrade Preservation

Findings: (1) own-style Button import — PARITY_EXPECTED (keep re-pointed at the new moon button module). No divergences, no exceptions.

## 14. Verification

Full-file diff run (2 changed lines: the import pair). No inferences required beyond the import's automatic styling effect.

## 15. Unresolved Questions

None.
