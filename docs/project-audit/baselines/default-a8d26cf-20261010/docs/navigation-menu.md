# navigation-menu — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/navigation-menu.tsx`
- Line count: 128
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Radix NavigationMenu wrapper with 9 exports including `navigationMenuTriggerStyle` cva helper.
Trigger style is a single base string with accent, disabled, and active/open states.
Viewport, content, and indicator carry motion-gated animation classes and CSS-variable sizing.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `NavigationMenu` | `React.forwardRef` | `React.ElementRef<typeof NavigationMenuPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>`; destructures `{ className, children, ...props }`, always renders `<NavigationMenuViewport />` after children | No local defaults |
| `NavigationMenuList` | `React.forwardRef` | `React.ElementRef<typeof NavigationMenuPrimitive.List>`, `React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>` | No local defaults |
| `NavigationMenuItem` | Re-export alias | `typeof NavigationMenuPrimitive.Item` | — |
| `navigationMenuTriggerStyle` | Exported `cva()` result | No variant keys; base only; callable as `navigationMenuTriggerStyle()` | — |
| `NavigationMenuTrigger` | `React.forwardRef` | `React.ElementRef<typeof NavigationMenuPrimitive.Trigger>`, `React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>`; `{ className, children, ...props }` | `className` merged as `cn(navigationMenuTriggerStyle(), "group", className)` |
| `NavigationMenuContent` | `React.forwardRef` | Content element/props | No local defaults |
| `NavigationMenuLink` | Re-export alias | `typeof NavigationMenuPrimitive.Link` | — |
| `NavigationMenuViewport` | `React.forwardRef` | Viewport element/props; `ref` passed to inner `Viewport`, outer wrapper `div` takes no props | No local defaults |
| `NavigationMenuIndicator` | `React.forwardRef` | Indicator element/props | No local defaults |

## 4. Variants

Single `cva` with base only, no variant keys:

| Key | Exact classes |
| --- | --- |
| base (`navigationMenuTriggerStyle()`) | `"group inline-flex h-10 w-max items-center justify-center rounded-dft-md bg-dft-background px-4 py-2 text-sm font-medium transition-colors hover:bg-dft-accent hover:text-dft-accent-foreground focus:bg-dft-accent focus:text-dft-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-dft-accent/50 data-[state=open]:bg-dft-accent/50"` |

## 5. Sizes

No size scale.

## 6. Interaction States

- Hover (source-derived): `"hover:bg-dft-accent hover:text-dft-accent-foreground"` in trigger style.
- Focus (source-derived): `"focus:bg-dft-accent focus:text-dft-accent-foreground focus:outline-none"` in trigger style.
- Disabled (source-derived): `"disabled:pointer-events-none disabled:opacity-50"` in trigger style.
- Active (source-derived): `"data-[active]:bg-dft-accent/50"` in trigger style.
- Open (source-derived): `"data-[state=open]:bg-dft-accent/50"` in trigger style plus `"group-data-[state=open]:rotate-180"` on chevron; `"data-[state=open]:animate-in"`, `"data-[state=open]:zoom-in-90"`, `"data-[state=visible]:animate-in"`, `"data-[state=visible]:fade-in"` on viewport/indicator.
- Closed/hidden (source-derived): `"data-[state=closed]:animate-out"`, `"data-[state=closed]:zoom-out-95"`, `"data-[state=hidden]:animate-out"`, `"data-[state=hidden]:fade-out"` on viewport/indicator.
- Motion (source-derived): `"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52"` on content.
- Dark: no `dark:` classes in source.
- Responsive (source-derived): `"md:absolute md:w-auto"` on content; `"md:w-[var(--radix-navigation-menu-viewport-width)]"` on viewport.

## 7. DOM and Component Structure

- `NavigationMenu` → `<NavigationMenuPrimitive.Root className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}>` containing `{children}` plus always-mounted `<NavigationMenuViewport />`.
- `NavigationMenuList` → `<NavigationMenuPrimitive.List className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}>`.
- `NavigationMenuTrigger` → `<NavigationMenuPrimitive.Trigger className={cn(navigationMenuTriggerStyle(), "group", className)}>` containing `{children}{" "}` plus `<ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />`.
- `NavigationMenuContent` → `<NavigationMenuPrimitive.Content>` with base `"left-0 top-0 w-full ... md:absolute md:w-auto"` plus motion classes.
- `NavigationMenuViewport` → outer `<div className={cn("absolute left-0 top-full flex justify-center")}>` wrapping `<NavigationMenuPrimitive.Viewport className={cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover text-dft-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className)}>`.
- `NavigationMenuIndicator` → `<NavigationMenuPrimitive.Indicator className={cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className)}>` containing `<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-dft-sm bg-dft-border shadow-md" />`.
- Primitives: `@radix-ui/react-navigation-menu`; icon `ChevronDown` from `lucide-react`.

## 8. Behavior

- Trigger recolors on hover/focus/active/open — inferred from source (effects inferred from `hover:` / `focus:` / `data-[active]:` / `data-[state=open]:` classes; no browser verification).
- Chevron rotates when menu open — inferred from source (effect inferred from `"group-data-[state=open]:rotate-180"` with `"transition duration-200"`; no browser verification).
- Content slides/fades by motion direction — inferred from source (effects inferred from `data-[motion...]:animate-in/out`, `fade-in/out`, `slide-in/out` classes; no browser verification).
- Viewport height/width tracks Radix CSS variables — inferred from source (effect inferred from `"h-[var(--radix-navigation-menu-viewport-height)]"` and `"md:w-[var(--radix-navigation-menu-viewport-width)]"`; no browser verification).
- Viewport/content zoom on open/close — inferred from source (effects inferred from `zoom-in-90` / `zoom-out-95` classes; no browser verification).

## 9. Accessibility

- Source facts only: relies on Radix NavigationMenu for keyboard navigation, focus, and ARIA; only explicit accessibility attribute in this file is `aria-hidden="true"` on the `ChevronDown` icon.
- No explicit `role`, `aria-label`, or keyboard handlers in this file.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-navigation-menu"` as `NavigationMenuPrimitive`; `"class-variance-authority"` (`cva`); `"lucide-react"` (`ChevronDown`); `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-md` in trigger base `"... rounded-dft-md ..."` and viewport `"... rounded-dft-md border border-dft-border bg-dft-popover text-dft-popover-foreground ..."`.
- `dft-background` in trigger base `"... bg-dft-background ..."`.
- `dft-accent` / `dft-accent-foreground` in trigger base `"hover:bg-dft-accent hover:text-dft-accent-foreground focus:bg-dft-accent focus:text-dft-accent-foreground ... data-[active]:bg-dft-accent/50 data-[state=open]:bg-dft-accent/50"`.
- `dft-border` in viewport `"... border-dft-border ..."` and indicator diamond `"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-dft-sm bg-dft-border shadow-md"`.
- `dft-popover` / `dft-popover-foreground` in viewport class above.
- `dft-sm` in indicator diamond `"... rounded-tl-dft-sm ..."` (corner radius token).

All token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Exported helper `navigationMenuTriggerStyle` is part of public API; base-only `cva` with no variants — changes to base string propagate to all consumers.
- `NavigationMenu` always mounts `<NavigationMenuViewport />` internally (source-derived composition coupling).
- `NavigationMenuViewport` outer `div` has fixed `className={cn("absolute left-0 top-full flex justify-center")}` with no `className` merge and does not receive `ref`; `ref` goes to inner `Viewport` only.
- Whitespace literal `{children}{" "}` before chevron is source-exact.
- Bracket values (exact): `"top-[1px]"`, `"h-[var(--radix-navigation-menu-viewport-height)]"`, `"md:w-[var(--radix-navigation-menu-viewport-width)]"`, `"z-[1]"`, `"top-[60%]"`; plain motion utilities (not arbitrary-value syntax): `"slide-in-from-right-52"`, `"slide-in-from-left-52"`, `"slide-out-to-right-52"`, `"slide-out-to-left-52"`.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/navigation-menu.tsx` (128 lines).
- Verified: `navigationMenuTriggerStyle` base string, chevron class + `aria-hidden`, viewport wrapper vs inner class split, content motion classes, indicator diamond class, 9 export names.
- Assumptions: none beyond source text; Radix CSS-variable behavior and `cn` merging not verified.

## 14. Unresolved Questions

1. Is the always-mounted internal `<NavigationMenuViewport />` intended, or should viewport placement be caller-controlled?
2. Is the non-mergeable outer wrapper `"absolute left-0 top-full flex justify-center"` positioning contract intended to be fixed?
