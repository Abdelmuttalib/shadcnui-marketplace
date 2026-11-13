# sidebar — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sidebar.tsx`
- Line count: 767
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Largest baseline module: provider + context + 24 exports covering sidebar shell, menus, and sub-components.
State persists via cookie with mobile/desktop branching and a Cmd/Ctrl+B shortcut.
Menu-button scale runs `h-8`/`h-7`/`h-12` with default/outline variants; internal links target six `@/registry/default` paths.
Effects, tokens, and Radix/Sheet/Tooltip behavior are source facts only; nothing browser-verified.

## 3. Exports and API

24 exports (source fact; counted from the export block):

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `SidebarProvider` | `React.forwardRef` (`HTMLDivElement`) + context provider | `React.ComponentProps<"div"> & { defaultOpen?: boolean; open?: boolean; onOpenChange?: (open: boolean) => void }` | `defaultOpen = true` |
| `Sidebar` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div"> & { side?: "left" \| "right"; variant?: "sidebar" \| "floating" \| "inset"; collapsible?: "offcanvas" \| "icon" \| "none" }` | `side = "left"`, `variant = "sidebar"`, `collapsible = "offcanvas"` |
| `SidebarTrigger` | `React.forwardRef` wrapping internal `Button` | `React.ComponentProps<typeof Button>` + `onClick` passthrough | `variant="ghost"`, `size="icon"` (hardcoded) |
| `SidebarRail` | `React.forwardRef` (`HTMLButtonElement`) | `React.ComponentProps<"button">` | None declared (`tabIndex={-1}` hardcoded) |
| `SidebarInset` | `React.forwardRef` (`HTMLDivElement` rendering `main`) | `React.ComponentProps<"main">` | None declared |
| `SidebarInput` | `React.forwardRef` wrapping internal `Input` | `React.ComponentProps<typeof Input>` | None declared |
| `SidebarHeader` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarFooter` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarSeparator` | `React.forwardRef` wrapping internal `Separator` | `React.ComponentProps<typeof Separator>` | None declared |
| `SidebarContent` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarGroup` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarGroupLabel` | `React.forwardRef` (`div` or `Slot`) | `React.ComponentProps<"div"> & { asChild?: boolean }` | `asChild = false` |
| `SidebarGroupAction` | `React.forwardRef` (`button` or `Slot`) | `React.ComponentProps<"button"> & { asChild?: boolean }` | `asChild = false` |
| `SidebarGroupContent` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarMenu` | `React.forwardRef` (`HTMLUListElement`) | `React.ComponentProps<"ul">` | None declared |
| `SidebarMenuItem` | `React.forwardRef` (`HTMLLIElement`) | `React.ComponentProps<"li">` | None declared |
| `SidebarMenuButton` | `React.forwardRef` (`button` or `Slot`) | `React.ComponentProps<"button"> & { asChild?: boolean; isActive?: boolean; tooltip?: string \| React.ComponentProps<typeof TooltipContent> } & VariantProps<typeof sidebarMenuButtonVariants>` | `asChild = false`, `isActive = false`, `variant = "default"`, `size = "default"` |
| `SidebarMenuAction` | `React.forwardRef` (`button` or `Slot`) | `React.ComponentProps<"button"> & { asChild?: boolean; showOnHover?: boolean }` | `asChild = false`, `showOnHover = false` |
| `SidebarMenuBadge` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div">` | None declared |
| `SidebarMenuSkeleton` | `React.forwardRef` (`HTMLDivElement`) | `React.ComponentProps<"div"> & { showIcon?: boolean }` | `showIcon = false` |
| `SidebarMenuSub` | `React.forwardRef` (`HTMLUListElement`) | `React.ComponentProps<"ul">` | None declared |
| `SidebarMenuSubItem` | `React.forwardRef` (`HTMLLIElement`) | `React.ComponentProps<"li">` (passthrough `{...props}` only) | None declared |
| `SidebarMenuSubButton` | `React.forwardRef` (`a` or `Slot`) | `React.ComponentProps<"a"> & { asChild?: boolean; size?: "sm" \| "md"; isActive?: boolean }` | `asChild = false`, `size = "md"` (`isActive` has no default) |
| `useSidebar` | Function reading `SidebarContext` (throws if null) | None | n/a |

Not exported (source facts): `SidebarContext`, `sidebarMenuButtonVariants`, and all `SIDEBAR_*` constants.

Constants (quoted exactly):

- `const SIDEBAR_COOKIE_NAME = "sidebar:state";`
- `const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;`
- `const SIDEBAR_WIDTH = "16rem";`
- `const SIDEBAR_WIDTH_MOBILE = "18rem";`
- `const SIDEBAR_WIDTH_ICON = "3rem";`
- `const SIDEBAR_KEYBOARD_SHORTCUT = "b";`

## 4. Variants

`sidebarMenuButtonVariants` (`cva`) variant keys (quoted exactly):

| Key | Classes |
|---|---|
| base | `"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-dft-md p-2 text-left text-sm outline-none ring-dft-sidebar-ring transition-[width,height,padding] hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground focus-visible:ring-2 active:bg-dft-sidebar-accent active:text-dft-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-dft-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-dft-sidebar-accent-foreground data-[state=open]:hover:bg-dft-sidebar-accent data-[state=open]:hover:text-dft-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"` |
| `variant: default` | `"hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground"` |
| `variant: outline` | `"bg-dft-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground hover:shadow-[0_0_0_1px_oklch(var(--dft-sidebar-accent))]"` |

`defaultVariants`: `variant: "default"`, `size: "default"`. `Sidebar` shell props `side` (`"left"` default), `variant` (`"sidebar"` default), `collapsible` (`"offcanvas"` default) are prop conditionals, not `cva` variants (source fact).

## 5. Sizes

Menu-button size ladder via `sidebarMenuButtonVariants` (quoted exactly):

| Key | Classes |
|---|---|
| `size: default` | `"h-8 text-sm"` |
| `size: sm` | `"h-7 text-xs"` |
| `size: lg` | `"h-12 text-sm group-data-[collapsible=icon]:!p-0"` |

Related fixed sizes (source facts, not a scale): `SidebarTrigger` `"h-7 w-7"`; `SidebarGroupLabel` `"flex h-8 ..."`; `SidebarMenuSkeleton` `"flex h-8 ..."`; `SidebarMenuSubButton` `h-7` with `size === "sm" && "text-xs"`, `size === "md" && "text-sm"`.

## 6. Interaction States

- Hover: menu-button `hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground`; group-action/action `hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground`; rail `hover:after:bg-dft-sidebar-border`; sub-button `hover:bg-dft-sidebar-accent hover:text-dft-sidebar-accent-foreground`.
- Focus: `focus-visible:ring-2` on input/group-label/group-action/menu-button/menu-action/sub-button (not on trigger — `SidebarTrigger` carries only `"h-7 w-7"` and inherits focus treatment from its internal `Button`); `group-focus-within/menu-item:opacity-100` (menu-action `showOnHover`).
- Disabled: menu-button `disabled:pointer-events-none disabled:opacity-50` + `aria-disabled:pointer-events-none aria-disabled:opacity-50`; sub-button same pair; `data-[active=true]` and `data-[state=open]` selectors throughout.
- Open/active/selected: `data-[active=true]:bg-dft-sidebar-accent`, `data-[state=open]:hover:*`, `peer-data-[active=true]/menu-button:*`, `peer-data-[size=...]/menu-button:top-*`.
- Dark: no `dark:` classes in source.
- Responsive: `hidden md:block` / `md:flex` (sidebar shell), `sm:flex` (rail), `after:md:hidden` (group-action/menu-action hit area), `md:peer-data-[variant=inset]:*` (inset).

## 7. DOM and Component Structure

- Primitives/internal: `@radix-ui/react-slot` (`Slot`), internal `Button`, `Input`, `Separator`, `Sheet`/`SheetContent`, `Skeleton`, `Tooltip`/`TooltipContent`/`TooltipProvider`/`TooltipTrigger`.
- `SidebarProvider` renders `SidebarContext.Provider` > `TooltipProvider delayDuration={0}` > wrapper `div.group/sidebar-wrapper` with `--sidebar-width` / `--sidebar-width-icon` CSS vars.
- `Sidebar` has three render paths (source facts): `collapsible === "none"` static div; `isMobile` `Sheet` + `SheetContent` (`data-sidebar="sidebar"`, `data-mobile="true"`, `"w-[--sidebar-width] bg-dft-sidebar p-0 text-dft-sidebar-foreground [&>button]:hidden"`, `side={side}`); desktop gap `div` + fixed `div` with `data-state`/`data-collapsible`/`data-variant`/`data-side`.
- Menus: `SidebarMenu` (`ul`) > `SidebarMenuItem` (`li.group/menu-item`) > `SidebarMenuButton` / `SidebarMenuAction` / `SidebarMenuBadge`; sub: `SidebarMenuSub` (`ul`) > `SidebarMenuSubItem` (`li`) > `SidebarMenuSubButton` (`a`/Slot).
- `data-sidebar` attributes used: `trigger`, `rail`, `input`, `header`, `footer`, `separator`, `content`, `group`, `group-label`, `group-action`, `group-content`, `menu`, `menu-item`, `menu-button`, `menu-action`, `menu-badge`, `menu-skeleton`, `menu-skeleton-icon`, `menu-skeleton-text`, `menu-sub`, `menu-sub-button`, `sidebar` (source facts).

## 8. Behavior

- Desktop collapse/expand via `open` state and `data-state="expanded"|"collapsed"` driving `group-data-[collapsible=*]` width/position classes with `transition-[width]` / `transition-[left,right,width] duration-200 ease-linear` — inferred from source (no browser verification).
- Mobile path renders `Sheet` controlled by `openMobile`/`setOpenMobile` — source fact; slide-over effect inferred from source.
- `toggleSidebar` switches `setOpenMobile` on mobile vs `setOpen` on desktop — source fact; toggle effect inferred from source.
- Cookie write `document.cookie = \`${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}\`` persists state — source fact; persistence effect inferred from source.
- Keyboard shortcut: `keydown` listener toggles when `event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)` — source fact; shortcut effect inferred from source.
- Tooltip on `SidebarMenuButton` hidden unless collapsed desktop (`hidden={state !== "collapsed" || isMobile}`) — source fact; display effect inferred from source.
- Skeleton random width `Math.random() * 40 + 50` — source fact; shimmer via `Skeleton` `animate-pulse` (from skeleton source, not re-verified) — inferred from source.
- No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: `SidebarRail` has `aria-label="Toggle Sidebar"`, `title="Toggle Sidebar"`, `tabIndex={-1}`; `SidebarTrigger` contains `<span className="sr-only">Toggle Sidebar</span>` and `PanelLeft` icon.
- Keyboard: `Ctrl`/`Meta` + `"b"` shortcut via `window.addEventListener("keydown", handleKeyDown)` with `event.preventDefault()` and cleanup (source facts; shortcut key `"b"` from `SIDEBAR_KEYBOARD_SHORTCUT`).
- `useSidebar` throws `"useSidebar must be used within a SidebarProvider."` when context is null (quoted exactly).
- `SidebarMenuSubButton` supports `aria-disabled` styling pair (`aria-disabled:pointer-events-none aria-disabled:opacity-50`); menu-button supports `aria-disabled` pair plus `disabled:` pair (source classes only).
- No manual focus management beyond `focus-visible:ring-2` classes and `tabIndex={-1}` on rail.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-slot` (`Slot`), `class-variance-authority` (`cva`, `VariantProps`), `lucide-react` (`PanelLeft`).
- Internal: `@/hooks/use-mobile` (`useIsMobile`); `@/lib/utils` (`cn`); `@/registry/default/ui/button` (`Button`); `@/registry/default/ui/input` (`Input`); `@/registry/default/ui/separator` (`Separator`); `@/registry/default/ui/sheet` (`Sheet`, `SheetContent`); `@/registry/default/ui/skeleton` (`Skeleton`); `@/registry/default/ui/tooltip` (`Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`).

## 11. Token Dependencies

| Token | Usage (examples) | Resolved value |
|---|---|---|
| `dft-sidebar` | `bg-dft-sidebar` (provider `has-[[data-variant=inset]]:bg-dft-sidebar`, sidebar, mobile content); `hover:bg-dft-sidebar` (rail offcanvas) | unresolved |
| `dft-sidebar-foreground` | `text-dft-sidebar-foreground` (sidebar, mobile content, group-label `/70`, sub-button) | unresolved |
| `dft-sidebar-border` | `border-dft-sidebar-border` (floating, menu-sub `border-dft-sidebar-border`); `bg-dft-sidebar-border` (separator `bg-dft-sidebar-border`); `hover:after:bg-dft-sidebar-border` (rail) | unresolved |
| `dft-sidebar-accent` | `hover:bg-dft-sidebar-accent`, `active:bg-dft-sidebar-accent`, `data-[active=true]:bg-dft-sidebar-accent`; shadow form `hover:shadow-[0_0_0_1px_oklch(var(--dft-sidebar-accent))]` | unresolved |
| `dft-sidebar-accent-foreground` | `hover:text-dft-sidebar-accent-foreground`, `data-[active=true]:text-dft-sidebar-accent-foreground`, `[&>svg]:text-dft-sidebar-accent-foreground` | unresolved |
| `dft-sidebar-ring` | `ring-dft-sidebar-ring`, `focus-visible:ring-dft-sidebar-ring`, `ring-dft-sidebar-ring` on menu-button base | unresolved |
| `dft-background` | `bg-dft-background` (inset `bg-dft-background`, input `bg-dft-background`, outline variant `bg-dft-background`) | unresolved |
| `dft-md` / `dft-lg` (radius) | `rounded-dft-md` (group-label, group-action, menu-button, menu-action, menu-badge, menu-skeleton icon, sub-button); `group-data-[variant=floating]:rounded-dft-lg`; inset `md:peer-data-[variant=inset]:rounded-xl` (non-`dft` literal) | unresolved |

All values unresolved (not verified against token files). Raw CSS-var forms `hsl(var(--sidebar-border))` and `oklch(var(--dft-sidebar-accent))` quoted exactly in section 4.

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) forms: dozens, e.g. `cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-dft-sidebar", className)`; `cn("flex h-full w-[--sidebar-width] flex-col bg-dft-sidebar text-dft-sidebar-foreground", className)`; `cn(sidebarMenuButtonVariants({ variant, size }), className)`; `cn("h-8 w-full bg-dft-background shadow-none focus-visible:ring-2 focus-visible:ring-dft-sidebar-ring", className)` (input); `cn("mx-2 w-auto bg-dft-sidebar-border", className)` (separator passthrough).
- Travel: n/a.
- Quirks / dead code (quoted exactly):
  - `"useSidebar must be used within a SidebarProvider."`
  - `document.cookie = \`${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}\`;`
  - `// Random width between 50 to 90%.` with `return \`${Math.floor(Math.random() * 40) + 50}%\`;` (nondeterministic render width — source fact).
  - `import { cva, VariantProps } from "class-variance-authority";` (value-form `VariantProps` import, unlike sheet's `type VariantProps` — source fact).
  - `// This is the internal state of the sidebar.` / `// We use openProp and setOpenProp for control from outside the component.` / `// This sets the cookie to keep the sidebar state.` / `// Helper to toggle the sidebar.` / `// Adds a keyboard shortcut to toggle the sidebar.` / `// We add a state so that we can do data-state="expanded" or "collapsed".` / `{/* This is what handles the sidebar gap on desktop */}` / `// Adjust the padding for floating and inset variants.` / `// Increases the hit area of the button on mobile.`

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sidebar.tsx` in full (767 lines).
- Counted 24 export-block entries; verified constants, defaults, and `@/registry/default` paths by direct quotation; did not resolve tokens or execute behavior.
- Assumptions: `useIsMobile`, `cn`, and internal `Button`/`Input`/`Separator`/`Sheet`/`Skeleton`/`Tooltip` behave per their own sources (not re-audited here).

## 14. Unresolved Questions

None.
