# context-menu — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/context-menu.tsx |
| Source line count | 200 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Radix context-menu wrapper with fifteen exports covering trigger, content, items, checkbox/radio items, and shortcut.
Styled subcomponents share `dft-*` accent/popover/border tokens with `data-[state]`/`data-[side]` animation selectors.
Six symbols are direct Radix aliases with no local classes or props.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `ContextMenu` | Direct alias | `ContextMenuPrimitive.Root` | Inherited from Radix |
| `ContextMenuTrigger` | Direct alias | `ContextMenuPrimitive.Trigger` | Inherited from Radix |
| `ContextMenuGroup` | Direct alias | `ContextMenuPrimitive.Group` | Inherited from Radix |
| `ContextMenuPortal` | Direct alias | `ContextMenuPrimitive.Portal` | Inherited from Radix |
| `ContextMenuSub` | Direct alias | `ContextMenuPrimitive.Sub` | Inherited from Radix |
| `ContextMenuRadioGroup` | Direct alias | `ContextMenuPrimitive.RadioGroup` | Inherited from Radix |
| `ContextMenuSubTrigger` | `forwardRef` component | Ref/props of `SubTrigger` + `{ inset?: boolean }`; renders `ChevronRight` icon; `displayName = SubTrigger.displayName` | `inset` unset (falsy → no `pl-8`) |
| `ContextMenuSubContent` | `forwardRef` component | Ref/props of `SubContent`; `displayName = SubContent.displayName` | No defaults |
| `ContextMenuContent` | `forwardRef` component | Ref/props of `Content`; wraps in `Portal`; `displayName = Content.displayName` | No defaults |
| `ContextMenuItem` | `forwardRef` component | Ref/props of `Item` + `{ inset?: boolean }`; `displayName = Item.displayName` | `inset` unset |
| `ContextMenuCheckboxItem` | `forwardRef` component | Ref/props of `CheckboxItem` (destructures `checked`); `displayName = CheckboxItem.displayName` | No defaults |
| `ContextMenuRadioItem` | `forwardRef` component | Ref/props of `RadioItem`; `displayName = RadioItem.displayName` | No defaults |
| `ContextMenuLabel` | `forwardRef` component | Ref/props of `Label` + `{ inset?: boolean }`; `displayName = Label.displayName` | `inset` unset |
| `ContextMenuSeparator` | `forwardRef` component | Ref/props of `Separator`; `displayName = Separator.displayName` | No defaults |
| `ContextMenuShortcut` | Function component | `React.HTMLAttributes<HTMLSpanElement>`; `displayName = "ContextMenuShortcut"` | No defaults |

All fifteen symbols are named exports in a single export block.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; `inset` boolean toggles `"pl-8"` on SubTrigger/Item/Label (not a `cva` variant) |

Fixed exact class strings (source-derived):

| Component | Exact classes |
|---|---|
| `ContextMenuSubTrigger` | `"flex cursor-default select-none items-center rounded-dft-sm px-2 py-1.5 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[state=open]:bg-dft-accent data-[state=open]:text-dft-accent-foreground"` + conditional `"pl-8"`; icon `"ml-auto h-4 w-4"` (`ChevronRight`) |
| `ContextMenuSubContent` | `"z-50 min-w-[8rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover p-1 text-dft-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"` |
| `ContextMenuContent` | `"z-50 min-w-[8rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover p-1 text-dft-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"` |
| `ContextMenuItem` | `"relative flex cursor-default select-none items-center rounded-dft-sm px-2 py-1.5 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"` + conditional `"pl-8"` |
| `ContextMenuCheckboxItem` / `ContextMenuRadioItem` | `"relative flex cursor-default select-none items-center rounded-dft-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`; indicator wrapper `"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"`; `Check` icon `"h-4 w-4"`; `Circle` icon `"h-2 w-2 fill-current"` |
| `ContextMenuLabel` | `"px-2 py-1.5 text-sm font-semibold text-dft-foreground"` + conditional `"pl-8"` |
| `ContextMenuSeparator` | `"-mx-1 my-1 h-px bg-dft-border"` |
| `ContextMenuShortcut` | `"ml-auto text-xs tracking-widest text-dft-muted-foreground"` |

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed sizing only: `"min-w-[8rem]"`, `"h-3.5 w-3.5"`, `"h-4 w-4"`, `"h-2 w-2"`, `"text-sm"`, `"text-xs"` |

## 6. Interaction States

Source-derived states (class strings quoted exactly):

- Focus: `"focus:bg-dft-accent focus:text-dft-accent-foreground"` on SubTrigger, Item, CheckboxItem, RadioItem.
- Open: `"data-[state=open]:bg-dft-accent data-[state=open]:text-dft-accent-foreground"` on SubTrigger; `data-[state=open]:animate-in`, `data-[state=open]:fade-in-0`, `data-[state=open]:zoom-in-95` on SubContent/Content.
- Closed: `"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"` on SubContent/Content.
- Side: `"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"` on SubContent/Content.
- Disabled: `"data-[disabled]:pointer-events-none data-[disabled]:opacity-50"` on Item, CheckboxItem, RadioItem.
- Hover: no `hover:` class is present in this file.
- Checked: no `data-[state=checked]` class is present (check state shown via `ItemIndicator`, not styling).
- Dark: no `dark:` class is present in this file.
- Responsive: no responsive (`sm:`/`md:`) class is present in this file.

## 7. DOM and Component Structure

- Six direct Radix aliases render no local DOM: `ContextMenu` (Root), `Trigger`, `Group`, `Portal`, `Sub`, `RadioGroup`.
- `ContextMenuSubTrigger` renders `SubTrigger` + `{children}` + `<ChevronRight className="ml-auto h-4 w-4">`.
- `ContextMenuSubContent` renders `SubContent` directly; `ContextMenuContent` renders `<Portal><Content/></Portal>`.
- `ContextMenuCheckboxItem` renders `CheckboxItem` with an indicator span (`ItemIndicator` + `Check`); `ContextMenuRadioItem` renders `RadioItem` with an indicator span (`ItemIndicator` + `Circle`).
- `ContextMenuLabel` renders `Label`; `ContextMenuSeparator` renders `Separator`; `ContextMenuShortcut` renders `<span>`.
- Primitives: `@radix-ui/react-context-menu` throughout; icons from `lucide-react`.

## 8. Behavior

- Right-click open / sub-menu open / item selection are inherited from Radix primitives (inferred from source — alias/wrapper composition; no browser verification).
- Open/close fade/zoom/slide animation classes (`animate-in`, `fade-in-0`, `zoom-out-95`, `slide-in-from-*`) describe inferred visual effects from source (inferred from source; no browser verification).
- Base `animate-in fade-in-80` on `ContextMenuContent` (absent on `SubContent`) is an inferred entrance effect from source (inferred from source; no browser verification).
- Focus highlight and disabled suppression classes are inferred visual effects from source (inferred from source; no browser verification).
- `inset && "pl-8"` conditionally reserves gutter space for indicators (inferred from source — conditional class join; no browser verification).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- Menu semantics, keyboard navigation, `data-state`/`data-disabled` management, and indicator announcements are inherited from Radix primitives; no explicit ARIA attribute is added in this file.
- Checkbox/radio items expose check state via `ItemIndicator` (`Check` / `Circle` icons); no text alternative is added in this file.
- No `label` association or focus-management code is present in this file beyond Radix inheritance.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `ContextMenuPrimitive` | External | `@radix-ui/react-context-menu` |
| `Check, ChevronRight, Circle` | External | `lucide-react` |
| `React` | External | `react` |
| `cn` | Internal | `@/lib/utils` |

No internal `@/registry/default` links are present in this file.

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-sm` (radius) | SubTrigger, Item, CheckboxItem, RadioItem (`rounded-dft-sm`) | Unresolved — token value not verified |
| `dft-accent` | `focus:bg-dft-accent`, `data-[state=open]:bg-dft-accent` | Unresolved — token value not verified |
| `dft-accent-foreground` | `focus:text-dft-accent-foreground`, `data-[state=open]:text-dft-accent-foreground` | Unresolved — token value not verified |
| `dft-md` (radius) | SubContent, Content (`rounded-dft-md`) | Unresolved — token value not verified |
| `dft-border` | SubContent, Content (`border-dft-border`); Separator (`bg-dft-border`) | Unresolved — token value not verified |
| `dft-popover` | SubContent, Content (`bg-dft-popover`) | Unresolved — token value not verified |
| `dft-popover-foreground` | SubContent, Content (`text-dft-popover-foreground`) | Unresolved — token value not verified |
| `dft-foreground` | Label (`text-dft-foreground`) | Unresolved — token value not verified |
| `dft-muted-foreground` | Shortcut (`text-dft-muted-foreground`) | Unresolved — token value not verified |

Hardcoded utilities mixed in: `"z-50"`, `"shadow-md"`, `"border"`, `"min-w-[8rem]"`, animation utilities (`animate-in`, `fade-in-80`, etc.) (source-derived).

## 12. Upgrade-Sensitive Areas

- No `cva` table; animation surface is `tailwindcss-animate`-shaped utilities (`animate-in`, `animate-out`, `fade-in-0`, `fade-out-0`, `fade-in-80`, `zoom-in-95`, `zoom-out-95`, `slide-in-from-*`) keyed on `data-[state]` / `data-[side]` — plugin or Radix attribute changes silently break motion.
- Quirk — asymmetric entrance classes, quoted exactly: Content includes `"... shadow-md animate-in fade-in-80 data-[state=open]:animate-in ..."` while SubContent includes `"... shadow-md data-[state=open]:animate-in ..."` (no base `animate-in fade-in-80`).
- Arbitrary value: `"min-w-[8rem]"` — verify Tailwind arbitrary-value handling on upgrade.
- `inset` uses `inset && "pl-8"` (boolean short-circuit into `cn`); `checked` on CheckboxItem is passed explicitly (`checked={checked}`) before `{...props}`, so a caller `checked` inside props would be overridden in order — actually spread comes after, so props win; verify intended precedence on Radix upgrade.
- Icons sized in fixed units (`"h-4 w-4"`, `"h-2 w-2 fill-current"`) will not track type-scale changes.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/context-menu.tsx` (200 lines total), read-only; no edits made.
- Verified by inspection: all fifteen exports, alias vs wrapper split, `inset`/`checked` handling, exact class strings, `Portal` wrapping on Content only, icon usage, absence of `cva`/`hover:`/`dark:` classes.
- Assumptions: Radix provides menu state semantics and `data-*` attributes; `cn` handles falsy `inset`. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. Is the Content-only base `animate-in fade-in-80` (missing on SubContent) intentional?
2. What are the resolved values of the `dft-*` tokens (not verified in this audit)?
3. Which `@radix-ui/react-context-menu` version's `data-state`/`data-side` attributes do the animation selectors target?
