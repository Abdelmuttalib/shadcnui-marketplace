# carousel — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/carousel.tsx |
| Source line count | 262 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Embla-backed carousel with context (`CarouselContext`/`useCarousel`) and five exports plus the `CarouselApi` type.
Orientation (`horizontal`/`vertical`) drives axis, layout, and arrow positioning classes.
Arrow buttons reuse the internal `Button` and disable from `canScrollPrev`/`canScrollNext` state.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `CarouselApi` | Type alias | `UseEmblaCarouselType[1]` | — |
| `Carousel` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement> & CarouselProps` where `CarouselProps = { opts?: CarouselOptions; plugins?: CarouselPlugin; orientation?: "horizontal" \| "vertical"; setApi?: (api: CarouselApi) => void }`; `displayName = "Carousel"` | `orientation = "horizontal"` |
| `CarouselContent` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>`; consumes `carouselRef`, `orientation` via `useCarousel`; `displayName = "CarouselContent"` | No defaults |
| `CarouselItem` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>`; consumes `orientation`; renders `role="group"` `aria-roledescription="slide"`; `displayName = "CarouselItem"` | No defaults |
| `CarouselPrevious` | `forwardRef` component | `HTMLButtonElement` ref; `React.ComponentProps<typeof Button>`; consumes `orientation`, `scrollPrev`, `canScrollPrev`; `displayName = "CarouselPrevious"` | `variant = "outline"`, `size = "icon"` |
| `CarouselNext` | `forwardRef` component | `HTMLButtonElement` ref; `React.ComponentProps<typeof Button>`; consumes `orientation`, `scrollNext`, `canScrollNext`; `displayName = "CarouselNext"` | `variant = "outline"`, `size = "icon"` |
| `useCarousel` (internal) | Hook (not exported) | Reads `CarouselContext`; throws `"useCarousel must be used within a <Carousel />"` when null | — |

Supporting internal types (source-derived): `CarouselOptions`, `CarouselPlugin`, `UseCarouselParameters`, `CarouselProps`, `CarouselContextProps` (holds `carouselRef`, `api`, `scrollPrev`, `scrollNext`, `canScrollPrev`, `canScrollNext` plus `CarouselProps`).

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; orientation-conditional classes act as layout variants (see table below) |

Orientation-conditional exact strings (source-derived):

| Location | Horizontal | Vertical |
|---|---|---|
| Embla axis | `axis: orientation === "horizontal" ? "x" : "y"` | same expression, `"y"` branch |
| `CarouselContent` inner | `"flex"` + `"-ml-4"` | `"flex"` + `"-mt-4 flex-col"` |
| `CarouselItem` | `"min-w-0 shrink-0 grow-0 basis-full"` + `"pl-4"` | `"min-w-0 shrink-0 grow-0 basis-full"` + `"pt-4"` |
| `CarouselPrevious` | `"absolute h-8 w-8 rounded-full"` + `"-left-12 top-1/2 -translate-y-1/2"` | `"absolute h-8 w-8 rounded-full"` + `"-top-12 left-1/2 -translate-x-1/2 rotate-90"` |
| `CarouselNext` | `"absolute h-8 w-8 rounded-full"` + `"-right-12 top-1/2 -translate-y-1/2"` | `"absolute h-8 w-8 rounded-full"` + `"-bottom-12 left-1/2 -translate-x-1/2 rotate-90"` |

Other exact strings: root `cn("relative", className)`; content viewport `"overflow-hidden"`; arrow icons `"h-4 w-4"`; screen-reader spans `"sr-only"` with text `"Previous slide"` / `"Next slide"`.

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed geometry only: `"h-8 w-8"`, `"h-4 w-4"`, item `"basis-full"`, list offsets `"-ml-4"` / `"-mt-4"` / `"pl-4"` / `"pt-4"`; arrow `size = "icon"` is a `Button` prop default, not a local scale |

## 6. Interaction States

- Disabled: `disabled={!canScrollPrev}` on Previous and `disabled={!canScrollNext}` on Next (source-derived props); `canScrollPrev`/`canScrollNext` state derives from `api.canScrollPrev()` / `api.canScrollNext()` in `onSelect`.
- Hover / focus / checked / open: no hover, focus, checked, or open state classes are present in this file.
- Dark: no `dark:` class is present in this file.
- Responsive: no responsive (`sm:`/`md:`) class is present in this file.
- Keyboard: `onKeyDownCapture={handleKeyDown}` maps `ArrowLeft` → `scrollPrev()` and `ArrowRight` → `scrollNext()`, each with `event.preventDefault()`.

## 7. DOM and Component Structure

- `Carousel` renders `CarouselContext.Provider` (value: `carouselRef`, `api`, `opts`, resolved `orientation`, `scrollPrev`, `scrollNext`, `canScrollPrev`, `canScrollNext`) wrapping `<div role="region" aria-roledescription="carousel" onKeyDownCapture className={cn("relative", className)}>`.
- `CarouselContent` renders `<div className="overflow-hidden">` (ref=`carouselRef`) wrapping an inner flex `<div>` (forwarded ref) with orientation classes.
- `CarouselItem` renders `<div role="group" aria-roledescription="slide">` with basis/sizing classes.
- `CarouselPrevious` / `CarouselNext` render the internal `Button` with absolute-position classes, an `ArrowLeft`/`ArrowRight` icon (`"h-4 w-4"`), and an `sr-only` label span.
- Primitives: Embla via `useEmblaCarousel` (no Radix/cmdk/recharts primitive in this file).

## 8. Behavior

- `orientation` selects the Embla `axis` (`"x"` vs `"y"`) at hook initialization (inferred from source — `useEmblaCarousel({ ...opts, axis })`; no browser verification).
- `scrollPrev`/`scrollNext` call `api?.scrollPrev()` / `api?.scrollNext()` (inferred from source — callback wiring; no browser verification).
- Arrow disabled state follows Embla `select`/`reInit` events through `onSelect` → `setCanScrollPrev`/`setCanScrollNext` (inferred from source — event subscription; no browser verification).
- `setApi(api)` is invoked in an effect when both `api` and `setApi` are set (inferred from source — effect wiring; no browser verification).
- The effect cleanup removes only the `"select"` listener (`api?.off("select", onSelect)`) and not the `"reInit"` listener (inferred from source — cleanup asymmetry; no browser verification).
- Keyboard arrow navigation via `onKeyDownCapture` is an inferred interaction from source (inferred from source; no browser verification).
- No CSS transitions or animations are declared in this file (source-derived fact — no `transition-*` / `animate-*` strings present).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- Root `<div>` carries `role="region"` and `aria-roledescription="carousel"`.
- Each `CarouselItem` carries `role="group"` and `aria-roledescription="slide"`.
- Arrow buttons include `sr-only` text: `"Previous slide"` and `"Next slide"`.
- Arrow buttons disable via `disabled={!canScrollPrev}` / `disabled={!canScrollNext}`.
- Keyboard: `ArrowLeft`/`ArrowRight` handled with `preventDefault()`; no vertical-orientation arrow mapping is present in source.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `useEmblaCarousel`, `type UseEmblaCarouselType` | External | `embla-carousel-react` |
| `ArrowLeft, ArrowRight` | External | `lucide-react` |
| `React` | External | `react` |
| `cn` | Internal | `@/lib/utils` |
| `Button` | Internal | `@/registry/default/ui/button` |

Internal link with exact path: `carousel.tsx` → `Button` from `@/registry/default/ui/button` (used by `CarouselPrevious`/`CarouselNext` with `variant`/`size` defaults `"outline"`/`"icon"`).

## 11. Token Dependencies

No `dft-*` token is present in this file's class strings (source-derived inspection fact).

| Token | Status |
|---|---|
| (none) | No `dft-*` tokens found; all styling uses hardcoded Tailwind utilities (`"relative"`, `"overflow-hidden"`, `"flex"`, `"absolute h-8 w-8 rounded-full"`, offsets/transforms) plus `Button`-inherited styling (unresolved — `Button` token usage not audited here) |

## 12. Upgrade-Sensitive Areas

- No `cva` table and no arbitrary values are present in this file.
- Hardcoded geometry (`"-left-12"`, `"-right-12"`, `"-top-12"`, `"-bottom-12"`, `"-ml-4"`, `"-mt-4"`, `"pl-4"`, `"pt-4"`, `"basis-full"`) is upgrade-sensitive if spacing scale or layout strategy changes.
- Effect cleanup asymmetry, quoted from source: subscription adds `api.on("reInit", onSelect)` and `api.on("select", onSelect)` but cleanup returns only `api?.off("select", onSelect)` — `reInit` listener is never removed.
- Orientation fallback expression `orientation || (opts?.axis === "y" ? "vertical" : "horizontal")` is dead in practice because `orientation` defaults to `"horizontal"`; `opts.axis` can also conflict with the derived `axis` override.
- Keyboard handler only maps `ArrowLeft`/`ArrowRight` even in vertical orientation.
- Error string is hardcoded: `"useCarousel must be used within a <Carousel />"`.
- `embla-carousel-react` API surface (`useEmblaCarousel`, `canScrollPrev/Next`, `scrollPrev/Next`, `reInit`/`select` events) is the primary upgrade surface.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/carousel.tsx` (262 lines total), read-only; no edits made.
- Verified by inspection: exports, context/hook wiring, Embla initialization, event subscriptions, orientation-conditional class strings, `Button` reuse with `variant`/`size` defaults, ARIA attributes, absence of `cva` and `dft-*` tokens.
- Assumptions: `useEmblaCarousel` returns `[ref, api]`; `Button` accepts `variant`/`size` props. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. Is the missing `api.off("reInit", onSelect)` cleanup intentional or an oversight?
2. Should vertical orientation support `ArrowUp`/`ArrowDown` keys (source only handles left/right)?
3. What `Button` tokens/styles do the arrow buttons inherit (not audited in this file)?
