# toggle-group

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/toggle-group.tsx` |
| Source line count | 61 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`toggle-group.tsx` wraps Radix `Root`/`Item` and reuses `toggleVariants` for item styling.
A `ToggleGroupContext` carries optional `variant`/`size` with defaults of `"default"`/`"default"`.
`ToggleGroupItem` resolves each prop as context-first (`context.variant || variant`).
No local `cva` table; the group container uses a fixed flex class.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `ToggleGroupContext` | `React.createContext<VariantProps<typeof toggleVariants>>` | `{ variant?, size? }` per `VariantProps` | Created with `{ size: "default", variant: "default" }` (quoted key order `size` then `variant` in source) |
| `ToggleGroup` | `React.forwardRef` wrapping `ToggleGroupPrimitive.Root` | `React.ElementRef<typeof ToggleGroupPrimitive.Root>`; `React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>`; destructures `className, variant, size, children` | No `cva` defaults in this file; `variant`/`size` are passed into context as `value={{ variant, size }}` (may be `undefined` when unset) |
| `ToggleGroupItem` | `React.forwardRef` wrapping `ToggleGroupPrimitive.Item` | `React.ElementRef<typeof ToggleGroupPrimitive.Item>`; `React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>`; destructures `className, children, variant, size` | Effective styling resolved as `toggleVariants({ variant: context.variant \|\| variant, size: context.size \|\| size })`, then merged with `className` via `cn(…, className)` |

`displayName`s are assigned from `ToggleGroupPrimitive.Root.displayName` and `ToggleGroupPrimitive.Item.displayName`. No `cva` export is defined here; `toggleVariants` is imported.

## 4. Variants

None locally. Item variant classes come from the imported `toggleVariants` table (see `toggle.md`); this file defines no `cva` variant map.

Group container class string (quoted exactly):

`"flex items-center justify-center gap-1"`

## 5. Sizes

No local size scale. Item sizes come from the imported `toggleVariants` size table (`default: "h-10 px-3 min-w-10"`, `sm: "h-9 px-2.5 min-w-9"`, `lg: "h-11 px-5 min-w-11"` — see `toggle.md`); the group container has no size prop handling beyond `className`.

## 6. Interaction States

Source-derived facts only (no state classes are hardcoded in this file):

- Hover/focus/disabled/on: none hardcoded here; they arrive via `toggleVariants(...)` applied to each `ToggleGroupItem` (see `toggle.md` for `hover:`, `focus-visible:`, `disabled:`, `data-[state=on]:` coverage).
- Checked/open/selected/active: none (`data-[state=*]` absent in this file).
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).

## 7. DOM and Component Structure

- `ToggleGroup` renders `ToggleGroupPrimitive.Root` with `ref`, `className={cn("flex items-center justify-center gap-1", className)}`, and `{...props}`; it wraps `children` in `<ToggleGroupContext.Provider value={{ variant, size }}>`.
- `ToggleGroupItem` reads `const context = React.useContext(ToggleGroupContext);` and renders `ToggleGroupPrimitive.Item` with `ref`, computed `toggleVariants` classes plus `className`, `{...props}`, and `{children}`.
- Composition: `ToggleGroup` > Provider > `ToggleGroupItem`(s); no other elements.

## 8. Behavior

- Context propagation — inferred from source: `variant`/`size` set on `ToggleGroup` are supplied to all descendant items through context; items without explicit props inherit group values via the `context.* || *` resolution.
- Context-first override — inferred from source: `toggleVariants({ variant: context.variant || variant, size: context.size || size })` means a defined context value wins over the item-level prop; the item prop applies only when the corresponding context value is falsy (e.g. group prop unset, so Provider value is `undefined`).
- Layout — inferred from source: `flex items-center justify-center gap-1` suggests centered, evenly spaced items; wrapping/scrolling behavior is not specified in source.
- No runtime/browser verification was performed.

## 9. Accessibility

Source facts + labeled inferences (Radix-delegated semantics below are inferred from primitive identity, not stated in source):

- Underlying primitives are `@radix-ui/react-toggle-group` (Root/Item), so group semantics, selection mode (`type` prop), and keyboard behavior come from Radix via `{...props}` passthrough.
- No `aria-*`, `role`, focus, label, or keyboard code is hardcoded in this file; focus/disabled styling arrives indirectly via `toggleVariants`.
- No hardcoded labels; consumers must provide accessible names for items.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-toggle-group` as `ToggleGroupPrimitive`
- `class-variance-authority` — `type VariantProps` (type-only)
- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility
- `@/registry/default/ui/toggle` — `toggleVariants` (exact import in source: `import { toggleVariants } from "@/registry/default/ui/toggle";`)


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

No `dft-*` token strings are hardcoded in this file. Tokens apply indirectly through the imported `toggleVariants` classes:

| Token | Where used | Status |
|---|---|---|
| `dft-muted`, `dft-muted-foreground`, `dft-accent`, `dft-accent-foreground`, `dft-input`, `dft-ring`, `dft-background` | Via `toggleVariants` (see `toggle.md`) — not verbatim in this file | Unresolved — values not verified; dependency is transitive via `@/registry/default/ui/toggle` |

## 12. Upgrade-Sensitive Areas

- Context-first resolution quirk — quote exactly: `toggleVariants({ variant: context.variant || variant, size: context.size || size, })`. Because the expression prefers context, an item-level `variant`/`size` is silently ignored whenever the group sets that key. Changing to `variant ?? context.variant` or merging differently would invert precedence.
- Provider passes possibly-`undefined` values — quote exactly: `<ToggleGroupContext.Provider value={{ variant, size }}>`. When `ToggleGroup` is used without `variant`/`size`, context fields are `undefined` (not the `createContext` defaults `{ size: "default", variant: "default" }`, which only apply outside any Provider). Item fallback then depends on `toggleVariants` `defaultVariants`, not on the `createContext` argument.
- `createContext` defaults — quote exactly:
  `"const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({ size: \"default\", variant: \"default\", });"`
  These defaults are only observable for `ToggleGroupItem` rendered without an ancestor `ToggleGroup`; edits must preserve that edge case.
- Shared `cva` coupling: any change to `toggleVariants` keys, classes, or `defaultVariants` in `@/registry/default/ui/toggle` changes every `ToggleGroupItem`.
- Group container `"flex items-center justify-center gap-1"` is the only layout; `justify-center` forces centering even for overflowed groups (no `overflow-*` class in source).
- No dead code observed; 61 lines.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/toggle-group.tsx` (61 lines) in full; cross-checked `toggle.tsx` (45 lines) for the imported `toggleVariants` table.
- Verified: exact `@/registry/default/ui/toggle` import path, context creation defaults, Provider value form, `context.variant || variant` / `context.size || size` resolution, group container class string, absence of local `cva` / `dft-*` / `data-[state=*]` strings.
- Assumptions: `cn`/`VariantProps` behave as standard; Radix supplies group/item behavior and `data-state` attributes (assumed, not verified at runtime).

## 14. Unresolved Questions

1. Is context-wins (`context.variant || variant`) precedence intentional, or should item props override group props?
2. Should the Provider normalize `undefined` to `"default"` so behavior matches the `createContext` defaults?
3. What are the resolved values of the transitively used `dft-*` tokens (see §11)?
