# button — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/button.tsx (equivalently registry/default/ui/button.tsx, read-only) |
| Line count | 106 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

`cva`-based button with 6 variants and 6 sizes, plus a `ButtonLink` variant for Next.js links.
Two exports render UI (`Button` for `<button>`, `ButtonLink` for `next/link`); both support `asChild` Slot.
`iconLeft`/`iconRight` props add a conditional flex-gap class on `ButtonLink` only.
This file is also imported by `alert-dialog` (`buttonVariants`).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `buttonVariants` | `cva` table (exported) | `variant`: 6 keys; `size`: 6 keys (see §4/§5) | `variant: "default"`, `size: "default"` |
| `ButtonProps` | exported interface (`React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>`) | `asChild?: boolean` + variant/size + native button attributes | `asChild = false` at render |
| `Button` | `React.forwardRef<HTMLButtonElement, ButtonProps>` | `className`, `variant`, `size`, `asChild`, spread `...props`; `Comp = asChild ? Slot : "button"` | `buttonVariants({ variant, size, className })` — note `className` passed inside the `cva` call, then wrapped in `cn(...)` |
| `ButtonLinkProps` | exported interface (`LinkProps & VariantProps<typeof buttonVariants>`) | `asChild?: boolean`, `iconLeft?: React.ReactNode`, `iconRight?: React.ReactNode`, `className?: string`, `children: React.ReactNode` (required), plus all `next/link` `LinkProps` | No `cva` defaults at interface level |
| `ButtonLink` | `React.forwardRef<HTMLAnchorElement, ButtonLinkProps>` | `className`, `variant`, `size`, `asChild`, `iconLeft`, `iconRight`, spread `...props` (incl. `children`); `Comp = asChild ? Slot : Link`; renders `<>{iconLeft}</> + <>{props.children}</> + <>{iconRight}</>` inside | `asChild = false`; icon slots render `null` when absent; conditional class `{"inline-flex items-center justify-center gap-x-1.5": iconLeft \|\| iconRight}` merged alongside `buttonVariants({ variant, size, className })` |

## 4. Variants

Base (first `cva` argument, quoted exactly):

`"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-dft-md text-sm font-medium ring-offset-dft-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"`

| Key | Exact classes |
|---|---|
| `default` | `"bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/90"` |
| `destructive` | `"bg-dft-destructive text-dft-destructive-foreground hover:bg-dft-destructive/90"` |
| `outline` | `"border border-dft-input bg-dft-background hover:bg-dft-accent hover:text-dft-accent-foreground"` |
| `secondary` | `"bg-dft-secondary text-dft-secondary-foreground hover:bg-dft-secondary/80"` |
| `ghost` | `"hover:bg-dft-accent hover:text-dft-accent-foreground"` |
| `link` | `"text-dft-primary underline-offset-4 hover:underline"` |

Default variant: `variant: "default"`.

## 5. Sizes

| Key | Exact classes |
|---|---|
| `default` | `"h-10 px-4 py-2"` |
| `sm` | `"h-9 rounded-dft-md px-3"` |
| `lg` | `"h-11 rounded-dft-md px-8"` |
| `icon` | `"h-10 w-10"` |
| `icon-sm` | `"h-9 w-9"` |
| `icon-lg` | `"h-11 w-11"` |

Default size: `size: "default"`. Note: only `sm` and `lg` restate `rounded-dft-md`; all other sizes inherit the base radius. `icon*` sizes are square (`h-* w-*`) with no `px-*`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | `hover:bg-dft-primary/90` (default), `hover:bg-dft-destructive/90` (destructive), `hover:bg-dft-accent hover:text-dft-accent-foreground` (outline/ghost), `hover:bg-dft-secondary/80` (secondary), `hover:underline` (link) |
| focus | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` in base (all variants/sizes) |
| disabled | `disabled:pointer-events-none disabled:opacity-50` in base (all variants/sizes) |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | Not applicable — no `dark:` classes in source |
| responsive | Not applicable — no responsive (`sm:`/`md:`) classes in source |

## 7. DOM and Component Structure

- `Button` → `Comp` (`Slot` when `asChild`, else `<button>`); `ref` forwarded to `Comp`; single `className` from `cn(buttonVariants({ variant, size, className }))`.
- `ButtonLink` → `Comp` (`Slot` when `asChild`, else Next.js `Link`); `ref` typed `HTMLAnchorElement` forwarded to `Comp`; children structure is always `<>{iconLeft}</> + <>{props.children}</> + <>{iconRight}</>` (empty fragments when icons absent).
- `asChild` delegation: Radix `Slot` merges props/classes onto a consumer child element in both components.
- SVG normalization: base `[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` constrains any descendant SVG icon in `Button`; `ButtonLink` has no such selector and relies on caller-sized `iconLeft`/`iconRight` nodes plus the conditional `gap-x-1.5` flex class.
- Downstream consumer: `@/registry/default/ui/alert-dialog` imports `buttonVariants` for `AlertDialogAction` (default) and `AlertDialogCancel` (`outline`).

## 8. Behavior

- `transition-colors` in base — color-transition effect inferred from source (no browser verification).
- Hover background/text/underline changes per §6 — effects inferred from source (no browser verification).
- Focus-visible ring (`ring-2` with `ring-offset-2`) — effect inferred from source (no browser verification).
- Disabled suppression (`pointer-events-none`, `opacity-50`) — effect inferred from source (no browser verification).
- `whitespace-nowrap` text containment; `gap-2` (Button) vs conditional `gap-x-1.5` (ButtonLink with icons) spacing — effects inferred from source (no browser verification).
- Next.js client-side navigation for `ButtonLink` (via `next/link`) — inferred from source import (no browser verification).
- NO browser claims: hover/focus/disabled rendering, transition timing, icon sizing, and navigation were not verified at runtime.

## 9. Accessibility

Source facts only:

- No ARIA attributes, roles, keyboard handlers, or label props in source; native `<button>` / `<Link>` (anchor) semantics are inherited.
- Focus visibility is class-driven (`focus-visible:ring-2` etc.); no focus-management code or skip-link logic.
- Disabled styling uses `disabled:` selectors; enforcement depends on the consumer passing `disabled` (Button) — nothing is enforced here.
- `iconLeft`/`iconRight` nodes are rendered verbatim with no `aria-hidden` applied by this file; icon accessibility depends on consumer props.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-slot` (`Slot`)
- `class-variance-authority` (`cva`, `VariantProps`)
- `next/link` (`Link`, `LinkProps`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.

`@/registry/default` links: this file is itself `@/registry/default/ui/button` (imported by `@/registry/default/ui/alert-dialog`); it imports no sibling registry component.

## 11. Token Dependencies

| `dft-*` token (as used) | `app/globals.css` definition location (verifiable) |
|---|---|
| `rounded-dft-md` (base + `sm` + `lg` sizes) | No `app/globals.css` entry; defined in archived `context/tailwind.config.ts` borderRadius block: `"dft-md": "calc(var(--dft-radius) - 2px)"`; `--dft-radius: 0.4rem` at `app/globals.css` line ~1136 |
| `ring-offset-dft-background` (base) | `--dft-background` at lines ~1109 / ~1714 |
| `focus-visible:ring-dft-ring` | `--dft-ring` at lines ~1127 / ~1734 |
| `bg-dft-primary` / `hover:bg-dft-primary/90` | `--dft-primary` at lines ~1115 / ~1720 |
| `text-dft-primary-foreground` | `--dft-primary-foreground` at lines ~1116 / ~1721 |
| `bg-dft-destructive` / `hover:bg-dft-destructive/90` | `--dft-destructive` at lines ~1123 / ~1730 |
| `text-dft-destructive-foreground` | `--dft-destructive-foreground` at lines ~1124 / ~1731 |
| `border-dft-input` (outline) | `--dft-input` at lines ~1126 / ~1733 |
| `bg-dft-background` (outline) | `--dft-background` rows above |
| `hover:bg-dft-accent` / `hover:text-dft-accent-foreground` (outline, ghost) | `--dft-accent` at lines ~1121 / ~1728; `--dft-accent-foreground` at lines ~1122 / ~1729 |
| `bg-dft-secondary` / `hover:bg-dft-secondary/80` | `--dft-secondary` at lines ~1117 / ~1722 |
| `text-dft-secondary-foreground` | `--dft-secondary-foreground` at lines ~1118 / ~1723 |
| `text-dft-primary` (link) | `--dft-primary` rows above |

## 12. Upgrade-Sensitive Areas

- `cva` tables (both axes): 6 variant keys × 6 size keys plus the base string are upgrade-sensitive — renames, token swaps, or radius-scale changes propagate to every button and to `AlertDialogAction`/`AlertDialogCancel` downstream. Full strings quoted in §4/§5.
- Arbitrary values / arbitrary selectors (quoted exactly): `"[&_svg]:pointer-events-none"`, `"[&_svg]:size-4"`, `"[&_svg]:shrink-0"` — icon normalization depends on Tailwind arbitrary-selector support; only on `Button`, not `ButtonLink`.
- Opacity-modified hovers: `"hover:bg-dft-primary/90"`, `"hover:bg-dft-destructive/90"`, `"hover:bg-dft-secondary/80"` — depend on color-mix/opacity support for CSS-variable-backed colors.
- Hardcoded tokens: all `dft-*` classes in §11 are literal strings.
- Quirks (quoted from source):
  - `Button` passes `className` inside the `cva` call: `cn(buttonVariants({ variant, size, className }))` — relies on `cva` passthrough of `className`.
  - `ButtonLink` merges an object second argument: `cn(buttonVariants({ variant, size, className }), { "inline-flex items-center justify-center gap-x-1.5": iconLeft || iconRight })` — duplicates base flex utilities when icons are present (base already `inline-flex items-center justify-center gap-2`; the conditional adds `gap-x-1.5` alongside `gap-2`).
  - `ButtonLink` always renders wrapping fragments (`<>{iconLeft}</>`, `<>{props.children}</>`) even when icons are absent.
  - `ButtonLinkProps extends LinkProps` — all Next.js link navigation props (href, replace, scroll, prefetch) flow through unvalidated.
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/button.tsx` in full (106 lines), including all 6 variants, all 6 sizes, `ButtonLink`, and `iconLeft`/`iconRight`.
- Verified each `dft-*` token against `app/globals.css` variable definitions and the archived `context/tailwind.config.ts` radius block.
- Assumptions: `cva`/`cn`/`Slot`/`next/link` semantics are standard upstream behavior; not executed or rendered. No runtime or browser verification performed.

## 14. Unresolved Questions

1. Is the `gap-2` (base) + `gap-x-1.5` (icon conditional) overlap on `ButtonLink` intentional, and which wins for icon spacing?
2. Should `ButtonLink` carry the same `[&_svg]` icon normalization as `Button`, or is caller-sized icon content the intended contract?
3. Is passing `className` through `buttonVariants({...})` (Button) versus alongside it intended to be equivalent for conflict resolution?
