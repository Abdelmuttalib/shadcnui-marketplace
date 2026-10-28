# scroll-area — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/scroll-area.tsx`
- Line count: 48
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Radix Scroll Area wrapper exporting `ScrollArea` and `ScrollBar`.
Viewport fills and inherits radius; scrollbar orientation defaults to vertical.
Thumb uses a single `dft-*` token; no cva variant or size scale exists.
All runtime conduct derives from Radix primitives (source facts only).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `ScrollArea` | `React.forwardRef` wrapping `ScrollAreaPrimitive.Root` | `React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>`; passes `className`, `children`, `...props` | None declared (Radix defaults apply) |
| `ScrollBar` | `React.forwardRef` wrapping `ScrollAreaPrimitive.ScrollAreaScrollbar` | `React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>` with `orientation` | `orientation = "vertical"` |

`displayName` assignments (source facts): `ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName`; `ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName`.

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a (orientation branching is a conditional, not a `cva` variant) |

Orientation conditionals (quoted exactly):

- vertical: `"h-full w-2.5 border-l border-l-transparent p-[1px]"`
- horizontal: `"h-2.5 flex-col border-t border-t-transparent p-[1px]"`

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a |

## 6. Interaction States

- Hover/focus: no hover/focus classes in source.
- Disabled: no disabled classes in source.
- Checked/open/selected: no `data-[state=...]` classes in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive (`sm:`/`md:`) classes in source.
- Present: `transition-colors` on the scrollbar element (visual effect inferred from source only); `touch-none select-none` hints at touch/selection handling (source classes only, no behavior claim).

## 7. DOM and Component Structure

- Elements: `ScrollAreaPrimitive.Root` > `ScrollAreaPrimitive.Viewport` (`{children}`) + `<ScrollBar />` + `ScrollAreaPrimitive.Corner`.
- `ScrollBar` renders `ScrollAreaPrimitive.ScrollAreaScrollbar` > `ScrollAreaPrimitive.ScrollAreaThumb`.
- Composition: `ScrollArea` always renders an unparameterized `<ScrollBar />` alongside the viewport and corner; `ScrollBar` sets `orientation={orientation}` on the primitive.
- Exact class strings:
  - Root: `"relative overflow-hidden"`
  - Viewport: `"h-full w-full rounded-[inherit]"`
  - Scrollbar base: `"flex touch-none select-none transition-colors"`
  - Thumb: `"relative flex-1 rounded-full bg-dft-border"`

## 8. Behavior

- Scrollbar color transition via `"flex touch-none select-none transition-colors"` — inferred from source (no browser verification).
- Orientation conditional switches scrollbar geometry (`orientation === "vertical"` vs `orientation === "horizontal"`) — source-derived fact; visual effect inferred from source.
- Viewport `rounded-[inherit]` inherits root radius — inferred from source.
- No timers, animation classes, or imperative logic in source. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: no explicit ARIA attributes, roles, labels, or keyboard handlers in this file; scrolling semantics and keyboard behavior come from `@radix-ui/react-scroll-area` primitives (not inspected beyond the import).
- No `aria-*`, `tabIndex`, `sr-only`, or focus classes in source.
- No focus management in source.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-scroll-area` (`* as ScrollAreaPrimitive`).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-border` | `"relative flex-1 rounded-full bg-dft-border"` (thumb) | unresolved (not verified against token files) |

No other `dft-*` tokens in source.

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) forms: `cn("relative overflow-hidden", className)`; `cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)`.
- Travel: n/a.
- Quirks / dead code: none observed. `ScrollArea` always mounts `<ScrollBar />` (vertical by default) even when content does not overflow — source-derived fact, quoted element `<ScrollBar />`.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/scroll-area.tsx` in full (48 lines).
- Compared class strings by direct quotation; did not resolve token values.
- Assumptions: `cn` is the standard class-merge helper; Radix primitive behavior not audited (import only).

## 14. Unresolved Questions

None.
