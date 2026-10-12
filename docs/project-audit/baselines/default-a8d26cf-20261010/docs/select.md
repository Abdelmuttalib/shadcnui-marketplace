# select — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/select.tsx`
- Line count: 160
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Radix Select wrapper with 10 named exports covering trigger, content, items, and scroll buttons.
Trigger is `h-10` with ring/disabled styles; content is a portaled animated popover defaulting to `position="popper"`.
Items use indicator + text with focus/disabled states; no cva variant or size scale exists.
All runtime conduct derives from Radix primitives (source facts only).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Select` | Re-export (`SelectPrimitive.Root`) | Radix Root props | Radix defaults |
| `SelectGroup` | Re-export (`SelectPrimitive.Group`) | Radix Group props | Radix defaults |
| `SelectValue` | Re-export (`SelectPrimitive.Value`) | Radix Value props | Radix defaults |
| `SelectTrigger` | `React.forwardRef` wrapping `SelectPrimitive.Trigger` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>` | None declared |
| `SelectScrollUpButton` | `React.forwardRef` wrapping `SelectPrimitive.ScrollUpButton` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>` | None declared |
| `SelectScrollDownButton` | `React.forwardRef` wrapping `SelectPrimitive.ScrollDownButton` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>` | None declared |
| `SelectContent` | `React.forwardRef` wrapping `SelectPrimitive.Content` in `SelectPrimitive.Portal` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>` with `position` | `position = "popper"` |
| `SelectLabel` | `React.forwardRef` wrapping `SelectPrimitive.Label` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>` | None declared |
| `SelectItem` | `React.forwardRef` wrapping `SelectPrimitive.Item` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>` | None declared |
| `SelectSeparator` | `React.forwardRef` wrapping `SelectPrimitive.Separator` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>` | None declared |

`displayName` for each `forwardRef` component mirrors the corresponding primitive's `displayName` (source fact).

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a (`position === "popper"` branching is a conditional, not a `cva` variant) |

Popper conditional (quoted exactly): `"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"` and viewport `"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"`.

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a (trigger height `h-10` and content `max-h-96 min-w-[8rem]` are fixed classes, not a scale) |

## 6. Interaction States

- Hover: no `hover:` classes in source.
- Focus: trigger `"focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2"`; item `"focus:bg-dft-accent focus:text-dft-accent-foreground"`.
- Disabled: trigger `"disabled:cursor-not-allowed disabled:opacity-50"`; item `"data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`.
- Open/closed: content `"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"` plus side-specific `data-[side=...]:slide-in-from-*`.
- Selected/checked: no `checked:`/`selected:` classes; selection is conveyed via `SelectPrimitive.ItemIndicator` + `ItemText` (source structure only).
- Placeholder: `"placeholder:text-dft-muted-foreground"` and `"[&>span]:line-clamp-1"` on trigger.
- Dark: no `dark:` classes. Responsive: no `sm:`/`md:` classes.

## 7. DOM and Component Structure

- Primitives: `@radix-ui/react-select` (`Root`, `Group`, `Value`, `Trigger`, `Icon`, `ScrollUpButton`, `ScrollDownButton`, `Portal`, `Content`, `Viewport`, `Label`, `Item`, `ItemIndicator`, `ItemText`, `Separator`).
- `SelectTrigger` renders `Trigger` > `{children}` + `Icon asChild` > `ChevronDown` (`"h-4 w-4 opacity-50"`).
- `SelectContent` renders `Portal` > `Content` > `SelectScrollUpButton` + `Viewport` (`{children}`) + `SelectScrollDownButton`.
- `SelectItem` renders `Item` > indicator `span` (`"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"` > `ItemIndicator` > `Check` `"h-4 w-4"`) + `ItemText`.
- Exact class strings:
  - Trigger: `"flex h-10 w-full items-center justify-between rounded-dft-md border border-dft-input bg-dft-background px-3 py-2 text-sm ring-offset-dft-background placeholder:text-dft-muted-foreground focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"`
  - Scroll buttons: `"flex cursor-default items-center justify-center py-1"`
  - Content: `"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover text-dft-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`
  - Viewport base: `"p-1"`
  - Label: `"py-1.5 pl-8 pr-2 text-sm font-semibold"`
  - Item: `"relative flex w-full cursor-default select-none items-center rounded-dft-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`
  - Separator: `"-mx-1 my-1 h-px bg-dft-muted"`

## 8. Behavior

- Content open/close animation via `animate-in`/`animate-out` with `fade`/`zoom` and side-specific `slide-in-from-*` classes — inferred from source (no browser verification).
- Popper-position offset via `translate` adjustments and `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]` — inferred from source.
- Trigger ring and item focus background signal focus — inferred from source.
- Disabled pointer/opacity reduction — inferred from source.
- No timers or imperative logic in source. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: no explicit ARIA attributes in this file; accessibility comes from Radix Select primitives (not inspected beyond imports).
- Keyboard: no key handlers in source; keyboard interaction is delegated to Radix (no claim beyond source).
- Focus: `focus:outline-none`, `focus:ring-2`, item `focus:bg-dft-accent` classes present (visual source facts only).
- Labels: `SelectLabel` and `SelectValue` passthrough; no extra labeling logic in source.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-select` (`* as SelectPrimitive`), `lucide-react` (`Check`, `ChevronDown`, `ChevronUp`).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-input` | trigger `border-dft-input` | unresolved |
| `dft-background` | trigger `bg-dft-background`, `ring-offset-dft-background` | unresolved |
| `dft-muted-foreground` | trigger `placeholder:text-dft-muted-foreground` | unresolved |
| `dft-ring` | trigger `focus:ring-dft-ring` | unresolved |
| `dft-border` | content `border-dft-border` | unresolved |
| `dft-popover` | content `bg-dft-popover` | unresolved |
| `dft-popover-foreground` | content `text-dft-popover-foreground` | unresolved |
| `dft-accent` | item `focus:bg-dft-accent` | unresolved |
| `dft-accent-foreground` | item `focus:text-dft-accent-foreground` | unresolved |
| `dft-muted` | separator `bg-dft-muted` | unresolved |
| `dft-md` (radius) | trigger/content `rounded-dft-md` | unresolved |
| `dft-sm` (radius) | item `rounded-dft-sm` | unresolved |

All values unresolved (not verified against token files).

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) forms: `cn("flex h-10 ...", className)` (trigger); `cn("flex cursor-default items-center justify-center py-1", className)` (scroll buttons); `cn("relative z-50 ...", position === "popper" && "data-[side=bottom]:translate-y-1 ...", className)` (content); `cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] ...")` (viewport); `cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)`; `cn("relative flex w-full ...", className)`; `cn("-mx-1 my-1 h-px bg-dft-muted", className)`.
- Travel: n/a.
- Quirks / dead code: none observed; scroll buttons render `ChevronUp`/`ChevronDown` with `"h-4 w-4"` unconditionally (source fact).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/select.tsx` in full (160 lines).
- Quoted class strings directly; did not resolve tokens or Radix behavior.
- Assumptions: `cn` merges classes; Radix primitives supply select semantics (not audited).

## 14. Unresolved Questions

None.
