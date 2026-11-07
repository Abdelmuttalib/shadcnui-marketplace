# menubar — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/menubar.tsx`
- Line count: 236
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Radix Menubar wrapper exposing 16 exports including triggers, content, items, and shortcut.
No `cva`; all styling is inline `cn(...)` strings with `dft-*` tokens and `data-[state]` selectors.
Notable quirk is lowercase `MenubarShortcut.displayname`; defaults live on `MenubarContent` offsets.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `MenubarMenu` | Re-export alias | `typeof MenubarPrimitive.Menu` | — |
| `MenubarGroup` | Re-export alias | `typeof MenubarPrimitive.Group` | — |
| `MenubarPortal` | Re-export alias | `typeof MenubarPrimitive.Portal` | — |
| `MenubarSub` | Re-export alias | `typeof MenubarPrimitive.Sub` | — |
| `MenubarRadioGroup` | Re-export alias | `typeof MenubarPrimitive.RadioGroup` | — |
| `Menubar` | `React.forwardRef` | `React.ElementRef<typeof MenubarPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>`; `{ className, ...props }` | No local defaults |
| `MenubarTrigger` | `React.forwardRef` | `React.ElementRef<typeof MenubarPrimitive.Trigger>`, `React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>` | No local defaults |
| `MenubarSubTrigger` | `React.forwardRef` | Above SubTrigger props plus `{ inset?: boolean }`; destructures `{ className, inset, children, ...props }` | `inset` undefined (falsy); `inset && "pl-8"` |
| `MenubarSubContent` | `React.forwardRef` | `React.ElementRef<typeof MenubarPrimitive.SubContent>`, `React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>` | No local defaults |
| `MenubarContent` | `React.forwardRef` with Portal | `React.ElementRef<typeof MenubarPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>`; destructures `{ className, align, alignOffset, sideOffset, ...props }` | `align = "start"`, `alignOffset = -4`, `sideOffset = 8` |
| `MenubarItem` | `React.forwardRef` | Item props plus `{ inset?: boolean }` | `inset` falsy → no `pl-8` |
| `MenubarCheckboxItem` | `React.forwardRef` | CheckboxItem props; destructures `{ className, children, checked, ...props }`, passes `checked={checked}` explicitly | No local defaults |
| `MenubarRadioItem` | `React.forwardRef` | RadioItem props; `{ className, children, ...props }` | No local defaults |
| `MenubarLabel` | `React.forwardRef` | Label props plus `{ inset?: boolean }` | `inset` falsy → no `pl-8` |
| `MenubarSeparator` | `React.forwardRef` | Separator props | No local defaults |
| `MenubarShortcut` | Function component | `React.HTMLAttributes<HTMLSpanElement>`; `{ className, ...props }` | No local defaults |

Display names in source: each `*.displayName = MenubarPrimitive.*.displayName;` except `MenubarShortcut.displayname = "MenubarShortcut";` (lowercase `n` — source-derived quirk).

## 4. Variants

None — no `cva` in source.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No size scale.

## 6. Interaction States

Source-derived classes only:

- Focus: `"focus:bg-dft-accent focus:text-dft-accent-foreground"` on `MenubarTrigger`, `MenubarSubTrigger`, `MenubarItem`, `MenubarCheckboxItem`, `MenubarRadioItem`.
- Open: `"data-[state=open]:bg-dft-accent data-[state=open]:text-dft-accent-foreground"` on `MenubarTrigger` and `MenubarSubTrigger`.
- Disabled: `"data-[disabled]:pointer-events-none data-[disabled]:opacity-50"` on `MenubarItem`, `MenubarCheckboxItem`, `MenubarRadioItem`.
- Checked / selected: rendered via `MenubarPrimitive.ItemIndicator` with `<Check className="h-4 w-4" />` and `<Circle className="h-2 w-2 fill-current" />`; no `checked:` class in source.
- Hover: no `hover:` classes in source.
- Active: no `data-[active]` in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.
- Animations gated on state/side (see Behavior): `MenubarSubContent` carries the full set including `data-[state=closed]:animate-out`, while `MenubarContent` omits `data-[state=closed]:animate-out` (it has `data-[state=open]:animate-in`, `data-[state=closed]:fade-out-0`, `data-[state=open]:fade-in-0`, `data-[state=closed]:zoom-out-95`, `data-[state=open]:zoom-in-95`, plus the four `data-[side=*]:slide-in-from-*` classes) — source-fact asymmetry between the two content components.

## 7. DOM and Component Structure

- `Menubar`: `<MenubarPrimitive.Root>` with `ref`, `cn(...)`, spread props.
- `MenubarTrigger`: `<MenubarPrimitive.Trigger>`.
- `MenubarSubTrigger`: `<MenubarPrimitive.SubTrigger>` rendering `{children}` plus `<ChevronRight className="ml-auto h-4 w-4" />`.
- `MenubarSubContent`: `<MenubarPrimitive.SubContent>`.
- `MenubarContent`: `<MenubarPrimitive.Portal>` wrapping `<MenubarPrimitive.Content>` with explicit `align`, `alignOffset`, `sideOffset`.
- `MenubarItem`: `<MenubarPrimitive.Item>`.
- `MenubarCheckboxItem` / `MenubarRadioItem`: primitive item with leading `<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">` wrapping `<MenubarPrimitive.ItemIndicator>` + icon.
- `MenubarLabel`: `<MenubarPrimitive.Label>`.
- `MenubarSeparator`: `<MenubarPrimitive.Separator>`.
- `MenubarShortcut`: `<span>` with shortcut classes.
- Primitives: `@radix-ui/react-menubar`; icons `Check`, `ChevronRight`, `Circle` from `lucide-react`.

## 8. Behavior

- Root horizontal bar layout — inferred from source (effect inferred from `"flex h-10 items-center space-x-1 ... p-1"`; no browser verification).
- Sub-trigger chevron pushed right — inferred from source (effect inferred from `"ml-auto h-4 w-4"`; no browser verification).
- Content/sub-content mount animation on open/close/side — inferred from source (effects inferred from `animate-in` / `animate-out` / `fade-*` / `zoom-*` / `slide-in-from-*` data-attribute classes; no browser verification).
- Disabled items ignore pointer events and dim — inferred from source (effect inferred from `data-[disabled]:pointer-events-none data-[disabled]:opacity-50`; no browser verification).
- Focus/open recolor to accent — inferred from source (effect inferred from `focus:` / `data-[state=open]:` classes; no browser verification).

## 9. Accessibility

- Source facts only: relies on Radix Menubar primitives for keyboard interaction, roles, and focus management; no explicit `role`, `aria-*`, or key handlers in this file except passthrough `...props`.
- `MenubarCheckboxItem` passes `checked={checked}` explicitly to primitive.
- Icons have no `aria-hidden` in this file.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-menubar"` as `MenubarPrimitive`; `"lucide-react"` (`Check`, `ChevronRight`, `Circle`); `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-md` in `"flex h-10 items-center space-x-1 rounded-dft-md border border-dft-border bg-dft-background p-1"`, `"z-50 min-w-[8rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover p-1 text-dft-popover-foreground ..."`, `"z-50 min-w-[12rem] overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover p-1 text-dft-popover-foreground shadow-md ..."`.
- `dft-sm` in `"flex cursor-default select-none items-center rounded-dft-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[state=open]:bg-dft-accent data-[state=open]:text-dft-accent-foreground"`, `"flex cursor-default select-none items-center rounded-dft-sm px-2 py-1.5 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[state=open]:bg-dft-accent data-[state=open]:text-dft-accent-foreground"`, `"relative flex cursor-default select-none items-center rounded-dft-sm px-2 py-1.5 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`, `"relative flex cursor-default select-none items-center rounded-dft-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-dft-accent focus:text-dft-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"`.
- `dft-border` in root, sub-content, content, and `"-mx-1 my-1 h-px bg-dft-muted"` separator uses `dft-muted` (see below); separator class is `"-mx-1 my-1 h-px bg-dft-muted"`.
- `dft-background` in root class above.
- `dft-accent` / `dft-accent-foreground` in trigger / sub-trigger / item focus and `data-[state=open]` classes above.
- `dft-popover` / `dft-popover-foreground` in sub-content and content classes above.
- `dft-muted` in `"-mx-1 my-1 h-px bg-dft-muted"`.
- `dft-muted-foreground` in `"ml-auto text-xs tracking-widest text-dft-muted-foreground"`.

All token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Quirk (exact): `MenubarShortcut.displayname = "MenubarShortcut";` — lowercase `n` in `displayname`, so React DevTools `displayName` is not set by this line; all other components use `*.displayName`.
- Defaults (exact): `align = "start"`, `alignOffset = -4`, `sideOffset = 8` on `MenubarContent`.
- Conditional inset (exact): `inset && "pl-8"` on `MenubarSubTrigger`, `MenubarItem`, `MenubarLabel`.
- Arbitrary values (exact): `"min-w-[8rem]"`, `"min-w-[12rem]"`.
- Icon sizes (exact): `"<ChevronRight className=\"ml-auto h-4 w-4\" />"`, `"<Check className=\"h-4 w-4\" />"`, `"<Circle className=\"h-2 w-2 fill-current\" />"`, indicator wrapper `"<span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">"`.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/menubar.tsx` (236 lines).
- Verified: import list, all 16 export names, `displayname` lowercase spelling, `align`/`alignOffset`/`sideOffset` defaults, `inset` conditionals, icon class strings, content animation class strings.
- Assumptions: none beyond source text; Radix and `cn` runtime semantics not verified.

## 14. Unresolved Questions

1. Is lowercase `MenubarShortcut.displayname` intentional or a typo to be fixed on upgrade?
2. Are `align="start"`, `alignOffset={-4}`, `sideOffset={8}` part of the contract or incidental defaults?
