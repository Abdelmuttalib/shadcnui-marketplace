# breadcrumb — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/breadcrumb.tsx (equivalently registry/default/ui/breadcrumb.tsx, read-only) |
| Line count | 115 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

Seven-export breadcrumb set built on semantic `nav`/`ol`/`li` elements with Radix `Slot` as-child support.
Two `dft-*` color tokens (`text-dft-muted-foreground`, `text-dft-foreground`) plus hover transition on links.
Current-page, separator, and ellipsis nodes carry explicit ARIA/presentation attributes.
One displayName typo (`BreadcrumbElipssis`) is preserved verbatim from source.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Breadcrumb` | `React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }>` rendering `<nav aria-label="breadcrumb">` | Spreads all props to `<nav>`; note `separator` is accepted in types but never destructured or rendered (see §12) | `aria-label="breadcrumb"` fixed |
| `BreadcrumbList` | `React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>` rendering `<ol>` | `className` + ol attributes | Fixed list classes |
| `BreadcrumbItem` | `React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>` rendering `<li>` | `className` + li attributes | Fixed item classes |
| `BreadcrumbLink` | `React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }>` rendering `Slot` or `<a>` | `asChild`, `className` + anchor attributes | `asChild` unset → renders `<a>`; `Comp = asChild ? Slot : "a"` |
| `BreadcrumbPage` | `React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>` rendering `<span role="link" aria-disabled="true" aria-current="page">` | `className` + span attributes | Fixed page classes + ARIA trio |
| `BreadcrumbSeparator` | function component (`React.ComponentProps<"li">`) rendering `<li role="presentation" aria-hidden="true">` | `children`, `className` + li props | `children ?? <ChevronRight />` fallback icon |
| `BreadcrumbEllipsis` | function component (`React.ComponentProps<"span">`) rendering `<span role="presentation" aria-hidden="true">` | `className` + span props | Fixed content: `<MoreHorizontal className="h-4 w-4" />` + `<span className="sr-only">More</span>`; `displayName = "BreadcrumbElipssis"` (typo verbatim) |

## 4. Variants

None — no `cva` in source. Fixed class strings per sub-component:

| Key | Exact classes |
|---|---|
| `Breadcrumb` (nav) | No classes — `<nav ref={ref} aria-label="breadcrumb" {...props} />` |
| `BreadcrumbList` | `"flex flex-wrap items-center gap-1.5 break-words text-sm text-dft-muted-foreground sm:gap-2.5"` |
| `BreadcrumbItem` | `"inline-flex items-center gap-1.5"` |
| `BreadcrumbLink` | `"transition-colors hover:text-dft-foreground"` |
| `BreadcrumbPage` | `"font-normal text-dft-foreground"` |
| `BreadcrumbSeparator` | `"[&>svg]:h-3.5 [&>svg]:w-3.5"` |
| `BreadcrumbEllipsis` (outer) | `"flex h-9 w-9 items-center justify-center"` |
| `BreadcrumbEllipsis` (icon) | `"h-4 w-4"` on `<MoreHorizontal>`; `"sr-only"` on the `"More"` text span |

## 5. Sizes

No size scale — no `size` prop or size table. Fixed geometry only: `text-sm` list, `h-9 w-9` ellipsis hit area, `h-4 w-4` ellipsis icon, `[&>svg]:h-3.5 [&>svg]:w-3.5` separator icon sizing, gaps `1.5` / `2.5`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | `hover:text-dft-foreground` on `BreadcrumbLink` only |
| focus | Not applicable — no focus utilities in source |
| disabled | `aria-disabled="true"` on `BreadcrumbPage` (ARIA attribute, not a disabled style); no `disabled:` utilities |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | Not applicable — no `dark:` classes in source |
| responsive | `sm:gap-2.5` on `BreadcrumbList` (base `gap-1.5`) |

## 7. DOM and Component Structure

- `Breadcrumb` → `<nav aria-label="breadcrumb">` (landmark); `ref` forwarded.
- `BreadcrumbList` → `<ol>` (ordered list); `ref` forwarded.
- `BreadcrumbItem` → `<li>`; `ref` forwarded.
- `BreadcrumbLink` → `Slot` (when `asChild`) or `<a>`; `ref` forwarded to `Comp`.
- `BreadcrumbPage` → `<span role="link" aria-disabled="true" aria-current="page">`; `ref` forwarded.
- `BreadcrumbSeparator` → `<li role="presentation" aria-hidden="true">` containing `children ?? <ChevronRight />` (default icon has no sizing class; sized via parent `[&>svg]` selector).
- `BreadcrumbEllipsis` → `<span role="presentation" aria-hidden="true">` containing icon + screen-reader `"More"` text.
- Expected composition: `Breadcrumb` > `BreadcrumbList` > (`BreadcrumbItem` > Link/Page, interleaved with `BreadcrumbSeparator`) + optional `BreadcrumbEllipsis`.

## 8. Behavior

- No transitions (other than `transition-colors` on `BreadcrumbLink`) and no animations in source.
- Link hover color change to `text-dft-foreground` — effect inferred from source (no browser verification).
- List wrapping (`flex-wrap`, `break-words`) — wrapping effect inferred from source (no browser verification).
- `asChild` Slot delegation swaps the rendered element while keeping classes — effect inferred from source (no browser verification).
- NO browser claims: hover rendering, wrapping, icon sizing via `[&>svg]`, and Slot behavior were not verified at runtime.

## 9. Accessibility

Source facts only:

- `Breadcrumb` sets `aria-label="breadcrumb"` on `<nav>`.
- `BreadcrumbPage` sets `role="link"`, `aria-disabled="true"`, `aria-current="page"`.
- `BreadcrumbSeparator` sets `role="presentation"`, `aria-hidden="true"`.
- `BreadcrumbEllipsis` sets `role="presentation"`, `aria-hidden="true"` on the outer span with a nested `<span className="sr-only">More</span>` text.
- No keyboard handlers, focus utilities, or label props beyond the above in source.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-slot` (`Slot`)
- `lucide-react` (`ChevronRight`, `MoreHorizontal`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.

`@/registry/default` links: none — this file imports no sibling registry component.

## 11. Token Dependencies

| `dft-*` token (as used) | `app/globals.css` definition location (verifiable) |
|---|---|
| `text-dft-muted-foreground` (on `BreadcrumbList`) | `--dft-muted-foreground` at `app/globals.css` lines ~1120 (light) / ~1725 (dark) |
| `hover:text-dft-foreground` (on `BreadcrumbLink`) | `--dft-foreground` at lines ~1110 / ~1715 |
| `text-dft-foreground` (on `BreadcrumbPage`) | Same as above |

All other classes (flex/gap/text-sm/sr-only/icon sizes) are token-free utilities.

## 12. Upgrade-Sensitive Areas

- No `cva` tables — not applicable.
- Arbitrary values / arbitrary selectors (quoted exactly): `"[&>svg]:h-3.5"`, `"[&>svg]:w-3.5"` — separator icon sizing depends on Tailwind arbitrary-selector support and on the consumer/default icon being a direct `<svg>` child.
- Hardcoded tokens: `text-dft-muted-foreground`, `hover:text-dft-foreground`, `text-dft-foreground` (quoted in §4).
- Quirks (quoted from source):
  - `separator?: React.ReactNode` is declared on `Breadcrumb` props but the component destructures only `({ ...props }, ref)` — the prop is silently spread onto `<nav>` as a DOM-unknown attribute and never rendered as a separator.
  - `BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"` — typo (`Elipssis`) preserved verbatim; affects DevTools naming only.
  - `BreadcrumbSeparator` and `BreadcrumbEllipsis` are plain function components without `forwardRef`.
  - Default separator `<ChevronRight />` carries no className; its size comes solely from the parent `[&>svg]` selector.
- Dead code: the `separator` prop (accepted but unused as anything but a spread-through attribute).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/breadcrumb.tsx` in full (115 lines).
- Verified `dft-*` tokens against `app/globals.css` variable definitions.
- Assumptions: Radix `Slot` as-child merging and lucide icon rendering are upstream behavior; not verified at runtime.

## 14. Unresolved Questions

1. Is the unused `separator` prop on `Breadcrumb` legacy API surface that should be removed, or intended for future use?
2. Should the `BreadcrumbElipssis` displayName typo be fixed, or preserved for snapshot stability?
