# avatar — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/avatar.tsx (equivalently registry/default/ui/avatar.tsx, read-only) |
| Line count | 50 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

Radix Avatar wrapper with three exports (Root/Image/Fallback).
Fixed 40px circular container with image and muted fallback layers.
Single `dft-*` token (`bg-dft-muted` on the fallback).
Image/fallback swap logic is fully delegated to the Radix primitive.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Avatar` | `React.forwardRef` wrapping `AvatarPrimitive.Root` | `React.ElementRef<typeof AvatarPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>`; `className` merged via `cn` | Fixed base classes; `displayName = AvatarPrimitive.Root.displayName` |
| `AvatarImage` | `React.forwardRef` wrapping `AvatarPrimitive.Image` | `React.ElementRef<typeof AvatarPrimitive.Image>`, `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>`; `className` merged via `cn` | Fixed base classes; `displayName = AvatarPrimitive.Image.displayName` |
| `AvatarFallback` | `React.forwardRef` wrapping `AvatarPrimitive.Fallback` | `React.ElementRef<typeof AvatarPrimitive.Fallback>`, `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>`; `className` merged via `cn` | Fixed base classes incl. `bg-dft-muted`; `displayName = AvatarPrimitive.Fallback.displayName` |

## 4. Variants

None — no `cva` in source. Fixed class strings per sub-component:

| Key | Exact classes |
|---|---|
| `Avatar` (Root) | `"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"` |
| `AvatarImage` | `"aspect-square h-full w-full"` |
| `AvatarFallback` | `"flex h-full w-full items-center justify-center rounded-full bg-dft-muted"` |

## 5. Sizes

No size scale — no `size` prop or size table. Fixed geometry only: container `h-10 w-10` (40px), fully round (`rounded-full`), image `aspect-square h-full w-full`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | Not applicable — no hover utilities in source |
| focus | Not applicable — no focus utilities in source |
| disabled | Not applicable — no disabled utilities in source |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | Not applicable — no `dark:` classes in source |
| responsive | Not applicable — no responsive (`sm:`/`md:`) classes in source |

## 7. DOM and Component Structure

- `Avatar` → `AvatarPrimitive.Root` (`<span>`-like Radix root) with `ref` forwarded; establishes the circular clipped box (`relative`, `overflow-hidden`).
- `AvatarImage` → `AvatarPrimitive.Image` (renders `<img>` when loaded) with `ref` forwarded; fills container.
- `AvatarFallback` → `AvatarPrimitive.Fallback` (renders fallback content, typically initials) with `ref` forwarded; fills container, centers content.
- Expected composition: `Avatar` > (`AvatarImage` + `AvatarFallback`); show/hide coordination is Radix-internal (image `onLoadingStatusChange`), with no logic in this file.

## 8. Behavior

- No interactions, transitions, or animations in source — no `transition-*` or `animate-*` classes, no handlers.
- Image-load fallback swap (fallback shown until image loads; hidden on error per Radix semantics) — effect inferred from source (no browser verification).
- Circular clipping via `rounded-full` + `overflow-hidden` — effect inferred from source (no browser verification).
- NO browser claims: image loading states, fallback timing, and clipped rendering were not verified at runtime.

## 9. Accessibility

Source facts only:

- No ARIA attributes, roles, keyboard handlers, focus management, or label props in source.
- Image alternative text depends on the consumer-passed `alt` prop on `AvatarImage` (inherited Radix/img prop, not redeclared); fallback text depends on consumer children. Neither is enforced here.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-avatar` (as `AvatarPrimitive`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.

`@/registry/default` links: none — this file imports no sibling registry component.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

| `dft-*` token (as used) | `app/globals.css` definition location (verifiable) |
|---|---|
| `bg-dft-muted` (on `AvatarFallback`) | `--dft-muted` at `app/globals.css` lines ~1119 (light) / ~1724 (dark) |

All other classes (`relative`, `flex`, `h-10`, `w-10`, `shrink-0`, `overflow-hidden`, `rounded-full`, `aspect-square`, `h-full`, `w-full`, `items-center`, `justify-center`) are token-free Tailwind utilities — no `app/globals.css` mapping applies.

## 12. Upgrade-Sensitive Areas

- No `cva` tables — not applicable.
- No arbitrary values — none in source.
- Hardcoded tokens: single instance `"flex h-full w-full items-center justify-center rounded-full bg-dft-muted"` on `AvatarFallback` — fallback background follows `--dft-muted` remaps.
- Quirks: fixed `h-10 w-10` with no size prop — any size change requires consumer `className` overrides (which merge after the base via `cn`); `rounded-full` is hardcoded (non-theme radius, unaffected by `--dft-radius`).
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/avatar.tsx` in full (50 lines).
- Verified `bg-dft-muted` against `app/globals.css` variable definitions.
- Assumptions: Radix image/fallback state coordination works as documented upstream; not verified at runtime. `cn` merge order (consumer `className` wins) is standard behavior; not executed.

## 14. Unresolved Questions

None.
