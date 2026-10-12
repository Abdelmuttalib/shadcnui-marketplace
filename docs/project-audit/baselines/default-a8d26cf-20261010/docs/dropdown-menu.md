# dropdown-menu — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/dropdown-menu.tsx` (original: `registry/default/ui/dropdown-menu.tsx`)
- Line count: 200
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Radix DropdownMenu wrapper with 15 exports covering triggers, items, checkbox/radio items, labels, separators, and sub-menus.
Styling is per-component class strings with `inset` and `sideOffset` props; no cva.
State styling uses `focus:`, `data-[state]`, `data-[disabled]`, and `data-[side]` selectors.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `DropdownMenu` | alias | `DropdownMenuPrimitive.Root` | n/a |
| `DropdownMenuTrigger` | alias | `DropdownMenuPrimitive.Trigger` | n/a |
| `DropdownMenuGroup` | alias | `DropdownMenuPrimitive.Group` | n/a |
| `DropdownMenuPortal` | alias | `DropdownMenuPrimitive.Portal` | n/a |
| `DropdownMenuSub` | alias | `DropdownMenuPrimitive.Sub` | n/a |
| `DropdownMenuRadioGroup` | alias | `DropdownMenuPrimitive.RadioGroup` | n/a |
| `DropdownMenuSubTrigger` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }`; destructures `{ className, inset, children, ...props }`; appends `<ChevronRight className="ml-auto" />` | `inset` undefined (falsy); conditional `inset && "pl-8"` |
| `DropdownMenuSubContent` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.SubContent>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>` | No defaults |
| `DropdownMenuContent` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>`; destructures `{ className, sideOffset = 4, ...props }`; renders inside `DropdownMenuPrimitive.Portal` | `sideOffset = 4` |
| `DropdownMenuItem` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.Item>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }` | `inset` undefined (falsy); conditional `inset && "pl-8"` |
| `DropdownMenuCheckboxItem` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>`; destructures `{ className, children, checked, ...props }`; passes `checked={checked}`; renders `ItemIndicator` + `Check` | No defaults |
| `DropdownMenuRadioItem` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>`; renders `ItemIndicator` + `Circle` | No defaults |
| `DropdownMenuLabel` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.Label>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }` | `inset` undefined (falsy); conditional `inset && "pl-8"` |
| `DropdownMenuSeparator` | forwardRef component | `React.ElementRef<typeof DropdownMenuPrimitive.Separator>`, `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>` | No defaults |
| `DropdownMenuShortcut` | function component | `React.HTMLAttributes<HTMLSpanElement>` | No defaults |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. `inset` is a boolean layout flag, not a cva variant. |

## 5. Sizes

No size scale. Fixed geometry only, e.g. content `min-w-[8rem]`, icons `[&_svg]:size-4`, indicator box `"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"`, `Check` `"h-4 w-4"`, `Circle` `"h-2 w-2 fill-current"`.

## 6. Interaction States

- Focus: `focus:bg-dft-accent` (SubTrigger); `focus:bg-dft-accent focus:text-dft-accent-foreground` + `transition-colors` (Item, CheckboxItem, RadioItem).
- Open: `data-[state=open]:bg-dft-accent` (SubTrigger); `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95` (SubContent, Content).
- Side: `data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2` (SubContent, Content).
- Disabled: `data-[disabled]:pointer-events-none data-[disabled]:opacity-50` (Item, CheckboxItem, RadioItem).
- Checked: `DropdownMenuPrimitive.ItemIndicator` wrapping `Check` / `Circle` inside CheckboxItem/RadioItem — source fact; no `checked:` class in source.
- Selected / empty-state / dark: none present in source.
- Responsive: none present in source.

## 7. DOM and Component Structure

- Elements/primitives: `DropdownMenuPrimitive.Root/Trigger/Group/Portal/Sub/RadioGroup/SubTrigger/SubContent/Content/Item/CheckboxItem/RadioItem/Label/Separator`, plus `ItemIndicator`, `ChevronRight` (`className="ml-auto"`), `Check` (`className="h-4 w-4"`), `Circle` (`className="h-2 w-2 fill-current"`), and plain `span` for shortcut/indicators.
- Composition: `DropdownMenuContent` wraps `Content` in `Portal`, while `DropdownMenuSubContent` renders its `SubContent` directly with no `Portal` wrapper (source-fact asymmetry, upgrade-relevant for positioning behavior); `SubTrigger` appends chevron after `{children}`; `CheckboxItem`/`RadioItem` prepend `<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><ItemIndicator>icon</ItemIndicator></span>`; `Shortcut` is `<span className="ml-auto text-xs tracking-widest opacity-60">`.
- Base classes quoted exactly:
  - SubTrigger: `"flex cursor-default select-none items-center gap-2 rounded-dft-sm px-2 py-1.5 text-sm outline-none focus:bg-dft-accent data-[state=open]:bg-dft-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"`.
  - SubContent: `"z-50 min-w-[8rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover p-1 text-dft-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`.
  - Content: same as SubContent except `shadow-md` in place of `shadow-lg`.
  - Item: `"relative flex cursor-default select-none items-center gap-2 rounded-dft-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"`.
  - CheckboxItem/RadioItem: `"relative flex cursor-default select-none items-center rounded-dft-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`.
  - Label: `"px-2 py-1.5 text-sm font-semibold"`.
  - Separator: `"-mx-1 my-1 h-px bg-dft-muted"`.
  - Shortcut: `"ml-auto text-xs tracking-widest opacity-60"`.

## 8. Behavior

- `transition-colors` on Item/CheckboxItem/RadioItem — inferred from source to suggest a color transition on focus/disabled changes; no browser verification.
- Open/close animation classes (`data-[state=open]:animate-in`, `data-[state=closed]:animate-out`, `fade-out-0`/`fade-in-0`, `zoom-out-95`/`zoom-in-95`) — inferred from source to suggest animated enter/exit; no browser verification.
- Side-based slide classes (`data-[side=*]:slide-in-from-*`) — inferred from source to suggest direction-aware entry; no browser verification.
- Chevron/indicator rendering is static composition — source-derived fact; no motion claimed beyond class names.

## 9. Accessibility

- Source facts only: `Item`, `CheckboxItem`, `RadioItem` carry `data-[disabled]:pointer-events-none data-[disabled]:opacity-50`; focus styles use `focus:bg-dft-accent focus:text-dft-accent-foreground`; `outline-none` on interactive rows.
- No explicit `aria-*` attributes, `role`, `tabIndex`, labels, or keyboard handlers in this file; Radix-provided keyboard/focus semantics (if any) are not stated in source.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `@radix-ui/react-dropdown-menu` as `DropdownMenuPrimitive`; `lucide-react` — `Check`, `ChevronRight`, `Circle`; `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `rounded-dft-sm` | SubTrigger, Item, CheckboxItem, RadioItem bases | Unresolved — definition not verified in this doc |
| `bg-dft-accent` | SubTrigger `focus:`/`data-[state=open]:`; Item/CheckboxItem/RadioItem `focus:` | Unresolved — definition not verified in this doc |
| `rounded-dft-md` | SubContent, Content bases | Unresolved — definition not verified in this doc |
| `border-dft-border` | SubContent, Content `border border-dft-border` | Unresolved — definition not verified in this doc |
| `bg-dft-popover` | SubContent, Content `bg-dft-popover` | Unresolved — definition not verified in this doc |
| `text-dft-popover-foreground` | SubContent, Content `text-dft-popover-foreground` | Unresolved — definition not verified in this doc |
| `text-dft-accent-foreground` | Item/CheckboxItem/RadioItem `focus:text-dft-accent-foreground` | Unresolved — definition not verified in this doc |
| `bg-dft-muted` | Separator `"-mx-1 my-1 h-px bg-dft-muted"` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- `sideOffset` default quoted exactly: `({ className, sideOffset = 4, ...props }, ref)` in `DropdownMenuContent` only; `SubContent` has no offset default.
- `inset` pattern quoted exactly: `inset && "pl-8"` in `SubTrigger`, `Item`, `Label`; `CheckboxItem`/`RadioItem` hardcode `pl-8` via `"relative flex cursor-default select-none items-center rounded-dft-sm py-1.5 pl-8 pr-2 ..."`.
- `checked` passthrough quoted exactly: `checked={checked}` in `DropdownMenuCheckboxItem` (RadioItem relies on Radix value, no explicit `checked` prop in source).
- Arbitrary selectors quoted exactly: `"[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"`; side/state selectors listed in §6.
- Shadow divergence: SubContent `shadow-lg` vs Content `shadow-md` — preserve on upgrade.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/dropdown-menu.tsx` in full (200 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `dropdown-menu`.
- Assumptions: class strings transcribed verbatim; Radix behavior not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
