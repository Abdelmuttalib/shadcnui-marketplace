# sheet — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sheet.tsx`
- Line count: 140
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Radix Dialog-based sheet system with 10 exports; the cva variant helper is NOT exported and `side` defaults to `"right"`.
Four-sided slide-over panel with overlay fade and open/close durations 500/300.
Content embeds overlay plus a close button; header/footer/title/description are layout/typography helpers.
All runtime conduct derives from Radix Dialog primitives (source facts only).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Sheet` | Re-export (`SheetPrimitive.Root`) | Radix Dialog Root props | Radix defaults |
| `SheetTrigger` | Re-export (`SheetPrimitive.Trigger`) | Radix Trigger props | Radix defaults |
| `SheetClose` | Re-export (`SheetPrimitive.Close`) | Radix Close props | Radix defaults |
| `SheetPortal` | Re-export (`SheetPrimitive.Portal`) | Radix Portal props | Radix defaults |
| `SheetOverlay` | `React.forwardRef` wrapping `SheetPrimitive.Overlay` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>` | None declared |
| `sheetVariants` | `cva` definition — NOT exported (source fact) | `side: "top" \| "bottom" \| "left" \| "right"` | `side: "right"` via `defaultVariants` |
| `SheetContent` | `React.forwardRef` wrapping `SheetPrimitive.Content` + interface `SheetContentProps` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>` | `side = "right"` (destructured default) |
| `SheetHeader` | Function component (`div`) | `React.HTMLAttributes<HTMLDivElement>` | None declared |
| `SheetFooter` | Function component (`div`) | `React.HTMLAttributes<HTMLDivElement>` | None declared |
| `SheetTitle` | `React.forwardRef` wrapping `SheetPrimitive.Title` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>` | None declared |
| `SheetDescription` | `React.forwardRef` wrapping `SheetPrimitive.Description` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>` | None declared |

Export block contains 10 symbols (`Sheet`, `SheetClose`, `SheetContent`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetOverlay`, `SheetPortal`, `SheetTitle`, `SheetTrigger`); `sheetVariants` is defined but absent from the export list (source fact). `SheetContent` destructured default `side = "right"` matches `defaultVariants`. `SheetHeader.displayName = "SheetHeader"` and `SheetFooter.displayName = "SheetFooter"` are declared (source fact).

## 4. Variants

Full `side` system via `sheetVariants` (quoted exactly):

| Key | Classes |
|---|---|
| base | `"fixed z-50 gap-4 bg-dft-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500"` |
| `side: top` | `"inset-x-0 top-0 border-b border-b-dft-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"` |
| `side: bottom` | `"inset-x-0 bottom-0 border-t border-t-dft-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"` |
| `side: left` | `"inset-y-0 left-0 h-full w-3/4 border-r border-r-dft-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm"` |
| `side: right` | `"inset-y-0 right-0 h-full w-3/4 border-l border-l-dft-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"` (also the default) |

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a (panel width `w-3/4` + `sm:max-w-sm` applies to left/right sides only; top/bottom are `inset-x-0` edge sheets, not a scale) |

## 6. Interaction States

- Hover: close button `"hover:opacity-100"` (base `"opacity-70"`); no other hover classes.
- Focus: close button `"focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2"`.
- Disabled: close button `"disabled:pointer-events-none"`.
- Open/closed: overlay `"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"`; content base `data-[state=open]:animate-in data-[state=closed]:animate-out` plus per-side `slide-in-from-*`/`slide-out-to-*`; close button `"data-[state=open]:bg-dft-secondary"`.
- Checked/selected: none in source.
- Dark: no `dark:` classes. Responsive: `sm:max-w-sm` (left/right sides), `sm:text-left` (header), `sm:flex-row sm:justify-end sm:space-x-2` (footer).

## 7. DOM and Component Structure

- Primitives: `@radix-ui/react-dialog` (`Root`, `Trigger`, `Close`, `Portal`, `Overlay`, `Content`, `Title`, `Description`).
- `SheetContent` renders `SheetPortal` > `SheetOverlay` + `SheetPrimitive.Content` (`cn(sheetVariants({ side }), className)`) > `{children}` + `SheetPrimitive.Close` (icon `X` `"h-4 w-4"` + `span.sr-only` `"sr-only"` with text `Close`).
- `SheetOverlay` is a standalone `forwardRef` wrapper; `SheetContent` mounts its own `<SheetOverlay />` internally.
- Exact class strings:
  - Overlay: `"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"`
  - Close: `"absolute right-4 top-4 rounded-dft-sm opacity-70 ring-offset-dft-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-dft-secondary"`
  - Header: `"flex flex-col space-y-2 text-center sm:text-left"`
  - Footer: `"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"`
  - Title: `"text-lg font-semibold text-dft-foreground"`
  - Description: `"text-sm text-dft-muted-foreground"`

## 8. Behavior

- Overlay fade in/out via `fade-in-0`/`fade-out-0` with `animate-in`/`animate-out` — inferred from source (no browser verification).
- Panel slide per side via `slide-in-from-*` on open and `slide-out-to-*` on close — inferred from source.
- Content durations `data-[state=closed]:duration-300` and `data-[state=open]:duration-500` set close/open timing — source-derived fact; timing effect inferred from source.
- Close-button opacity transition via `transition-opacity` from `opacity-70` to `hover:opacity-100` — inferred from source.
- No timers or imperative logic in source. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: dialog semantics, focus trapping, and Escape-to-close come from Radix Dialog primitives (not inspected beyond imports).
- Close control: `SheetPrimitive.Close` containing `<X />` plus `<span className="sr-only">Close</span>` (source fact).
- Focus: close-button focus-ring classes (visual source facts only); no manual focus code in source.
- Labels: `SheetTitle`/`SheetDescription` map to Radix `Title`/`Description` (source fact); no extra labeling logic.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-dialog` (`* as SheetPrimitive`), `class-variance-authority` (`cva`, `type VariantProps`), `lucide-react` (`X`).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-background` | content base `bg-dft-background`; close `ring-offset-dft-background` | unresolved |
| `dft-border` | `border-b-dft-border`, `border-t-dft-border`, `border-r-dft-border`, `border-l-dft-border` (per side) | unresolved |
| `dft-sm` (radius) | close `rounded-dft-sm` | unresolved |
| `dft-ring` | close `focus:ring-dft-ring` | unresolved |
| `dft-secondary` | close `data-[state=open]:bg-dft-secondary` | unresolved |
| `dft-foreground` | title `text-dft-foreground` | unresolved |
| `dft-muted-foreground` | description `text-dft-muted-foreground` | unresolved |

All values unresolved (not verified against token files). Non-token overlay fill `bg-black/80` noted as source fact.

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) forms: `cn("fixed inset-0 z-50 bg-black/80 ...", className)` (overlay); `cn(sheetVariants({ side }), className)` (content); `cn("flex flex-col space-y-2 text-center sm:text-left", className)`; `cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)`; `cn("text-lg font-semibold text-dft-foreground", className)`; `cn("text-sm text-dft-muted-foreground", className)`.
- Travel: n/a.
- Quirks / dead code: none observed; note `sheetVariants` is intentionally unexported so consumers must go through `SheetContent`'s `side` prop (source-derived observation, no behavior claim).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sheet.tsx` in full (140 lines).
- Quoted all `sheetVariants` branches and component classes directly; confirmed `sheetVariants` absent from export block.
- Assumptions: `cva`/`VariantProps` behave per `class-variance-authority` contract (not audited); Radix Dialog behavior not audited.

## 14. Unresolved Questions

None.
