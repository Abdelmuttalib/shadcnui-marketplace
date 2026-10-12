# pagination — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/pagination.tsx`
- Line count: 117
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Plain-nav pagination built on anchor elements styled by shared `buttonVariants`.
Defines `PaginationLinkProps` with `isActive` plus button `size` passthrough.
Previous/Next add directional icons and labels; ellipsis is a static indicator.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Pagination` | Function component | `React.ComponentProps<"nav">`; `{ className, ...props }` | No local defaults; fixed `role="navigation"` `aria-label="pagination"` |
| `PaginationContent` | `React.forwardRef` | `HTMLUListElement` ref; `React.ComponentProps<"ul">` | No local defaults |
| `PaginationItem` | `React.forwardRef` | `HTMLLIElement` ref; `React.ComponentProps<"li">` | `cn("", className)` — empty base |
| `PaginationLinkProps` | Type | `{ isActive?: boolean } & Pick<ButtonProps, "size"> & React.ComponentProps<"a">` | — |
| `PaginationLink` | Function component | `PaginationLinkProps`; destructures `{ className, isActive, size = "icon", ...props }`; sets `aria-current={isActive ? "page" : undefined}`; `className={cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className)}` | `size = "icon"`; `variant` derived: `"outline"` if active else `"ghost"` |
| `PaginationPrevious` | Function component | `React.ComponentProps<typeof PaginationLink>`; wraps `PaginationLink` with `aria-label="Go to previous page"`, `size="default"`, `className={cn("gap-1 pl-2.5", className)}`, children `<ChevronLeft className="h-4 w-4" />` + `<span>Previous</span>` | `size="default"` |
| `PaginationNext` | Function component | `React.ComponentProps<typeof PaginationLink>`; wraps `PaginationLink` with `aria-label="Go to next page"`, `size="default"`, `className={cn("gap-1 pr-2.5", className)}`, children `<span>Next</span>` + `<ChevronRight className="h-4 w-4" />` | `size="default"` |
| `PaginationEllipsis` | Function component | `React.ComponentProps<"span">`; renders `<span aria-hidden ...>` with `<MoreHorizontal className="h-4 w-4" />` + `<span className="sr-only">More pages</span>` | No local defaults |

Export statement lists `Pagination`, `PaginationContent`, `PaginationEllipsis`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationPrevious`. `PaginationLinkProps` is a local type (not in export list). All seven components declare string-literal `displayName`s (`"Pagination"`, `"PaginationContent"`, `"PaginationItem"`, `"PaginationLink"`, `"PaginationPrevious"`, `"PaginationNext"`, `"PaginationEllipsis"` — source fact).

## 4. Variants

None local — no `cva` in this file; variant selection delegated to `buttonVariants({ variant: isActive ? "outline" : "ghost", size })`.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No local size scale; `size` prop is `Pick<ButtonProps, "size">` passthrough to `buttonVariants`, with `size = "icon"` default on `PaginationLink` and `size="default"` on Previous/Next.

## 6. Interaction States

- Selected/active (source-derived): `isActive` switches `buttonVariants` variant `"outline"` vs `"ghost"` and sets `aria-current={isActive ? "page" : undefined}`.
- Hover/focus/disabled/checked/open: none in this file; delegated to `buttonVariants` implementation (not verified here).
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.

## 7. DOM and Component Structure

- `Pagination` → `<nav role="navigation" aria-label="pagination" className={cn("mx-auto flex w-full justify-center", className)}>` passthrough.
- `PaginationContent` → `<ul className={cn("flex flex-row items-center gap-1", className)}>` with forwarded ref.
- `PaginationItem` → `<li className={cn("", className)}>` with forwarded ref.
- `PaginationLink` → `<a>` styled by `buttonVariants`.
- `PaginationPrevious` / `PaginationNext` → `PaginationLink` + icon + text span.
- `PaginationEllipsis` → `<span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)}>` containing icon plus screen-reader `<span className="sr-only">More pages</span>`.
- Primitives: none (native `nav`/`ul`/`li`/`a`/`span`); icons `ChevronLeft`, `ChevronRight`, `MoreHorizontal` from `lucide-react`.

## 8. Behavior

- Active page uses outline style, inactive uses ghost — inferred from source (effect inferred from `variant: isActive ? "outline" : "ghost"` mapping; visual outcome not verified, no browser verification).
- Previous/Next add gap and edge padding — inferred from source (effects inferred from `"gap-1 pl-2.5"` and `"gap-1 pr-2.5"`; no browser verification).
- Ellipsis is non-interactive indicator — inferred from source (rendered as `span`, not anchor/button; no browser verification).

## 9. Accessibility

- Source facts only: `Pagination` sets `role="navigation"` and `aria-label="pagination"`; `PaginationLink` sets `aria-current={isActive ? "page" : undefined}`; Previous/Next set `aria-label="Go to previous page"` / `aria-label="Go to next page"`; `PaginationEllipsis` sets `aria-hidden` (no explicit value) on outer span with inner `<span className="sr-only">More pages</span>`.
- No keyboard handlers or focus management in this file.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"lucide-react"` (`ChevronLeft`, `ChevronRight`, `MoreHorizontal`); `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`; `{ ButtonProps, buttonVariants }` from `"@/registry/default/ui/button"` (exact path — source-derived).
- Button variant/size implementation not audited in this doc.

## 11. Token Dependencies

No direct `dft-*` tokens in this file. Styling tokens (if any) arrive indirectly via `buttonVariants` from `"@/registry/default/ui/button"` — unresolved in this doc (not verified here). Direct classes are non-token utilities: `"mx-auto flex w-full justify-center"`, `"flex flex-row items-center gap-1"`, `""`, `"gap-1 pl-2.5"`, `"gap-1 pr-2.5"`, `"flex h-9 w-9 items-center justify-center"`, `"h-4 w-4"`, `"sr-only"`.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Empty base (exact): `cn("", className)` on `PaginationItem` — dead-code string preserved verbatim.
- `PaginationLinkProps` picks only `"size"` from `ButtonProps` (exact): `Pick<ButtonProps, "size">` — `variant` is derived, not caller-settable via this type.
- Boolean attribute shorthand (exact): `<span aria-hidden ...>` with no `={true}` value.
- Fixed copy (exact): `"Go to previous page"`, `"Go to next page"`, `"Previous"`, `"Next"`, `"More pages"`.
- Arbitrary values: none in this file.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/pagination.tsx` (117 lines).
- Verified: `PaginationLinkProps` definition, `size = "icon"` and `size="default"` defaults, `isActive` → variant mapping, exact `cn` strings, ellipsis `aria-hidden` + `sr-only` pairing, exact `@/registry/default/ui/button` import path.
- Assumptions: `buttonVariants`/`ButtonProps` semantics not verified here; no runtime claims.

## 14. Unresolved Questions

1. Should `PaginationLinkProps` (with `isActive` + `Pick<ButtonProps, "size">`) be exported for consumers, given it is currently unexported?
2. Is `cn("", className)` on `PaginationItem` intentional or leftover?
