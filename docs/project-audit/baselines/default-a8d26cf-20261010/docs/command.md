# command — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/command.tsx |
| Source line count | 156 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

`cmdk` command-palette wrapper with nine exports including a `Dialog`-based `CommandDialog`.
Each subcomponent carries a fixed class string using `dft-*` popover/border/accent tokens.
Selection/disabled styling keys on `data-[selected]`/`data-[disabled]` with `cmdk-*` attribute selectors.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Command` | `forwardRef` component | Ref: `React.ElementRef<typeof CommandPrimitive>`; Props: `React.ComponentPropsWithoutRef<typeof CommandPrimitive>`; `displayName = CommandPrimitive.displayName` | No defaults |
| `CommandDialog` | Function component | `DialogProps` (`{ children, ...props }`); renders `Dialog` + `DialogContent` + inner `Command` | No defaults |
| `CommandInput` | `forwardRef` component | Ref/props of `CommandPrimitive.Input`; `displayName = CommandPrimitive.Input.displayName` | No defaults |
| `CommandList` | `forwardRef` component | Ref/props of `CommandPrimitive.List`; `displayName = CommandPrimitive.List.displayName` | No defaults |
| `CommandEmpty` | `forwardRef` component | Ref/props of `CommandPrimitive.Empty` (`(props, ref)` signature — no `className` destructure); `displayName = CommandPrimitive.Empty.displayName` | No defaults |
| `CommandGroup` | `forwardRef` component | Ref/props of `CommandPrimitive.Group`; `displayName = CommandPrimitive.Group.displayName` | No defaults |
| `CommandSeparator` | `forwardRef` component | Ref/props of `CommandPrimitive.Separator`; `displayName = CommandPrimitive.Separator.displayName` | No defaults |
| `CommandItem` | `forwardRef` component | Ref/props of `CommandPrimitive.Item`; `displayName = CommandPrimitive.Item.displayName` | No defaults |
| `CommandShortcut` | Function component | `React.HTMLAttributes<HTMLSpanElement>`; `displayName = "CommandShortcut"` | No defaults |

All nine symbols are named exports in a single export block.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; each subcomponent has one fixed class string (see below) |

Fixed exact class strings (source-derived):

| Component | Exact classes |
|---|---|
| `Command` | `"flex h-full w-full flex-col overflow-hidden rounded-dft-md bg-dft-popover text-dft-popover-foreground"` |
| `CommandDialog` inner `Command` | `"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-dft-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"` |
| `CommandInput` wrapper div | `"flex items-center border-b border-b-dft-border px-3"` with attribute `cmdk-input-wrapper=""`; icon `"mr-2 h-4 w-4 shrink-0 opacity-50"` |
| `CommandPrimitive.Input` | `"flex h-11 w-full rounded-dft-md bg-transparent py-3 text-sm outline-none placeholder:text-dft-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"` |
| `CommandList` | `"max-h-[300px] overflow-y-auto overflow-x-hidden"` |
| `CommandEmpty` | `"py-6 text-center text-sm"` (fixed, not `cn`-merged) |
| `CommandGroup` | `"overflow-hidden p-1 text-dft-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-dft-muted-foreground"` |
| `CommandSeparator` | `"-mx-1 h-px bg-dft-border"` |
| `CommandItem` | `"relative flex cursor-default select-none items-center gap-2 rounded-dft-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-dft-accent data-[selected=true]:text-dft-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"` |
| `CommandShortcut` | `"ml-auto text-xs tracking-widest text-dft-muted-foreground"` |
| `DialogContent` (in dialog) | `"overflow-hidden p-0 shadow-lg"` |

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed dimensions only: `"h-11"`, `"h-12"` (dialog input), `"max-h-[300px]"`, `"[&_svg]:size-4"`, `"h-4 w-4"`, `"h-5 w-5"` forms |

## 6. Interaction States

Source-derived states (class strings quoted exactly):

- Selected: `"data-[selected='true']:bg-dft-accent"` and `"data-[selected=true]:text-dft-accent-foreground"` on `CommandItem` (note mixed quoting — single quotes in the first selector only).
- Disabled: `"data-[disabled=true]:pointer-events-none"` and `"data-[disabled=true]:opacity-50"` on `CommandItem`; `"disabled:cursor-not-allowed disabled:opacity-50"` on the input.
- Placeholder: `"placeholder:text-dft-muted-foreground"` on the input.
- Hover: no `hover:` class is present in this file.
- Focus: no `focus:` class is present in this file (input uses `"outline-none"`).
- Checked/open: no checked/open state class is present in this file.
- Dark: no `dark:` class is present in this file.
- Responsive: no responsive (`sm:`/`md:`) class is present in this file.

## 7. DOM and Component Structure

- `Command` renders `<CommandPrimitive>` (cmdk root) with merged classes and prop spread.
- `CommandDialog` renders `<Dialog {...props}>` → `<DialogContent className="overflow-hidden p-0 shadow-lg">` → inner `<Command>` with the long `cmdk-*` selector string → `{children}`.
- `CommandInput` renders `<div className="flex items-center border-b border-b-dft-border px-3" cmdk-input-wrapper="">` containing `<Search className="mr-2 h-4 w-4 shrink-0 opacity-50">` + `<CommandPrimitive.Input>`.
- `CommandList` / `CommandEmpty` / `CommandGroup` / `CommandSeparator` / `CommandItem` wrap the corresponding `CommandPrimitive` parts with fixed classes.
- `CommandShortcut` renders `<span className="ml-auto text-xs tracking-widest text-dft-muted-foreground">`.
- Primitives: `cmdk` (`CommandPrimitive` and subparts) and Radix `Dialog` (via internal wrapper).

## 8. Behavior

- Dialog open/close behavior is delegated to `Dialog` via `{...props}` spread of `DialogProps` (inferred from source — prop pass-through; no browser verification).
- Filter-on-type, arrow-key navigation, and item selection are inherited from `cmdk` (inferred from source — primitive composition; no browser verification).
- Selected-row highlight (`data-[selected]` background/foreground) is an inferred visual effect from source (inferred from source; no browser verification).
- Disabled-row suppression (`pointer-events-none`, `opacity-50`) is an inferred visual effect from source (inferred from source; no browser verification).
- Scroll containment via `"max-h-[300px] overflow-y-auto overflow-x-hidden"` on `CommandList` is an inferred effect from source (inferred from source; no browser verification).
- No CSS transitions or animations are declared in this file (source-derived fact — no `transition-*` / `animate-*` strings present).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- No `role`, `aria-*` attribute, keyboard handler, or focus-management code is added in this file; listbox/option semantics and type-ahead come from `cmdk` and dialog semantics from `Dialog`.
- `CommandEmpty` provides an empty-state slot (`"py-6 text-center text-sm"`); its announcement behavior is not verifiable from this source.
- `Search` icon is decorative in source (no accessible label attached in this file).

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `type DialogProps` | External (type) | `@radix-ui/react-dialog` |
| `Command as CommandPrimitive` | External | `cmdk` |
| `Search` | External | `lucide-react` |
| `React` | External | `react` |
| `cn` | Internal | `@/lib/utils` |
| `Dialog, DialogContent` | Internal | `@/registry/default/ui/dialog` |

Internal links with exact paths: `command.tsx` → `Dialog` and `DialogContent` from `@/registry/default/ui/dialog` (used only inside `CommandDialog`).

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-md` (radius) | `Command` (`rounded-dft-md`); input (`rounded-dft-md`) | Unresolved — token value not verified |
| `dft-popover` | `Command` (`bg-dft-popover`) | Unresolved — token value not verified |
| `dft-popover-foreground` | `Command` (`text-dft-popover-foreground`) | Unresolved — token value not verified |
| `dft-muted-foreground` | Dialog inner selectors; input placeholder; group heading; shortcut | Unresolved — token value not verified |
| `dft-border` | Input wrapper (`border-b-dft-border`); separator (`bg-dft-border`) | Unresolved — token value not verified |
| `dft-foreground` | `CommandGroup` (`text-dft-foreground`) | Unresolved — token value not verified |
| `dft-accent` | `CommandItem` (`data-[selected='true']:bg-dft-accent`) | Unresolved — token value not verified |
| `dft-accent-foreground` | `CommandItem` (`data-[selected=true]:text-dft-accent-foreground`) | Unresolved — token value not verified |
| `dft-sm` (radius) | `CommandItem` (`rounded-dft-sm`) | Unresolved — token value not verified |

Hardcoded utilities mixed in: `"border-b"`, `"shadow-lg"`, `"bg-transparent"`, `"outline-none"`, `"max-h-[300px]"`, `"size-4"` (source-derived).

## 12. Upgrade-Sensitive Areas

- No `cva` table; styling is pinned to `cmdk` attribute selectors (`cmdk-group-heading`, `cmdk-group`, `cmdk-input-wrapper`, `cmdk-input`, `cmdk-item`) — a `cmdk` DOM/attribute rename silently drops these styles.
- Arbitrary values/selectors: `"max-h-[300px]"`, `"[&_[cmdk-group-heading]]:px-2"`, `"[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0"`, `"[&_[cmdk-input-wrapper]_svg]:h-5"`, `"[&_svg]:size-4"` and siblings — verify Tailwind arbitrary-selector handling on upgrade.
- Quirk — inconsistent quoting, quoted exactly: `"data-[selected='true']:bg-dft-accent"` (single-quoted) versus `"data-[selected=true]:text-dft-accent-foreground"` (unquoted) in the same `CommandItem` string; also `data-[disabled=true]` unquoted.
- Quirk: `CommandEmpty` has no `cn` merge — its `className="py-6 text-center text-sm"` is fixed, but `{...props}` spreads after it, so a caller-passed `className` replaces (not merges with) the fixed string (source-derived override semantics).
- Hardcoded duplicate `border-b border-b-dft-border` pattern in the input wrapper.
- `Dialog`/`DialogContent` coupling (`@/registry/default/ui/dialog`) means dialog upgrades restyle `CommandDialog`.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/command.tsx` (156 lines total), read-only; no edits made.
- Verified by inspection: all nine exports, `cmdk`/`Dialog` wiring, exact class strings, `displayName` assignments, conditional absence of `cva`/`hover:`/`focus:`/`dark:` classes.
- Assumptions: `cmdk` exposes `Input`/`List`/`Empty`/`Group`/`Separator`/`Item` with matching `data-*` attributes; `Dialog` accepts `DialogProps`. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. Is the mixed quoting (`data-[selected='true']` vs `data-[selected=true]`) intentional, and do both selectors match the installed `cmdk` version?
2. Should `CommandEmpty` merge a caller `className` (currently fixed)?
3. What are the resolved values of the `dft-*` tokens (not verified in this audit)?
