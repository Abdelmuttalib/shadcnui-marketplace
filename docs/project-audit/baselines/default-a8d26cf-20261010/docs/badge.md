# badge — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/badge.tsx (equivalently registry/default/ui/badge.tsx, read-only) |
| Line count | 36 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

`cva`-based badge with four variants (`default`, `secondary`, `destructive`, `outline`).
Single `div`-rendering `Badge` function component plus exported `badgeVariants`.
Pill shape with token-driven colors, per-variant hover darkening, and focus-ring utilities.
No size scale; geometry is fixed in the base string.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `badgeVariants` | `cva` table (exported) | `variant: "default" \| "secondary" \| "destructive" \| "outline"` | `variant: "default"` |
| `BadgeProps` | exported interface (`React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>`) | `className`, `variant`, all div HTML attributes | Inherits `defaultVariants` default |
| `Badge` | function component (`BadgeProps`) rendering `<div>` | `className`, `variant`, spread `...props` | `variant: "default"` via `badgeVariants({ variant })` resolution |

## 4. Variants

Base (first `cva` argument, quoted exactly):

`"inline-flex items-center rounded-full border border-dft-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2"`

| Key | Exact classes |
|---|---|
| `default` | `"border-transparent bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/80"` |
| `secondary` | `"border-transparent bg-dft-secondary text-dft-secondary-foreground hover:bg-dft-secondary/80"` |
| `destructive` | `"border-transparent bg-dft-destructive text-dft-destructive-foreground hover:bg-dft-destructive/80"` |
| `outline` | `"text-dft-foreground"` |

Default variant: `variant: "default"`.

## 5. Sizes

No size scale — no `size` prop or size table. Explicit statement: no size scale. Fixed geometry in base: `px-2.5 py-0.5 text-xs`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | `hover:bg-dft-primary/80` (default), `hover:bg-dft-secondary/80` (secondary), `hover:bg-dft-destructive/80` (destructive); none on `outline` |
| focus | `focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2` in base (applies to all variants) |
| disabled | Not applicable — no disabled utilities in source |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | Not applicable — no `dark:` classes in source |
| responsive | Not applicable — no responsive (`sm:`/`md:`) classes in source |

## 7. DOM and Component Structure

- Single node: `Badge` → `<div className={cn(badgeVariants({ variant }), className)} {...props} />`.
- No `forwardRef` in source — refs cannot be attached via the `ref` prop (function component without ref forwarding).
- No sub-components; pill shape comes from `rounded-full` in the base string.
- `badgeVariants` is exported for reuse by consumers.

## 8. Behavior

- `transition-colors` in base — color-transition effect inferred from source (no browser verification).
- Per-variant hover background darkening (`/80` opacity variants) — effect inferred from source (no browser verification).
- Focus ring (`focus:ring-2`) — effect inferred from source; note the badge `<div>` is not natively focusable without a consumer `tabIndex`, so the ring applies only when focus is achievable — inferred from source (no browser verification).
- NO browser claims: hover, transition timing, and focus-ring rendering were not verified at runtime.

## 9. Accessibility

Source facts only:

- No ARIA attributes, roles, keyboard handlers, or label props in source.
- The rendered `<div>` is non-interactive and non-focusable by default; focus-ring classes exist but no `tabIndex` is set here.
- Text-size class is `text-xs`; no accessibility assertion is made beyond quoting the source.

## 10. Imports and Dependencies

External:

- `class-variance-authority` (`cva`, `VariantProps`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.

`@/registry/default` links: none — this file imports no sibling registry component.

## 11. Token Dependencies

| `dft-*` token (as used) | `app/globals.css` definition location (verifiable) |
|---|---|
| `border-dft-border` (base) | `--dft-border` at `app/globals.css` lines ~1125 (light) / ~1732 (dark) |
| `focus:ring-dft-ring` (base) | `--dft-ring` at lines ~1127 / ~1734 |
| `bg-dft-primary` / `hover:bg-dft-primary/80` | `--dft-primary` at lines ~1115 / ~1720 |
| `text-dft-primary-foreground` | `--dft-primary-foreground` at lines ~1116 / ~1721 |
| `bg-dft-secondary` / `hover:bg-dft-secondary/80` | `--dft-secondary` at lines ~1117 / ~1722 |
| `text-dft-secondary-foreground` | `--dft-secondary-foreground` at lines ~1118 / ~1723 |
| `bg-dft-destructive` / `hover:bg-dft-destructive/80` | `--dft-destructive` at lines ~1123 / ~1730 |
| `text-dft-destructive-foreground` | `--dft-destructive-foreground` at lines ~1124 / ~1731 |
| `text-dft-foreground` (outline) | `--dft-foreground` at lines ~1110 / ~1715 |
| `border-transparent` | Tailwind default (not a `dft-*` token) |

`rounded-full` is a non-theme shape utility — unaffected by `--dft-radius`.

## 12. Upgrade-Sensitive Areas

- `cva` table (`badgeVariants`): variant keys and all four variant strings plus the base string are upgrade-sensitive; token renames or palette changes restyle every badge.
- Arbitrary values: none in source.
- Hardcoded tokens: all `dft-*` classes listed in §11 are literal strings; opacity-modified hovers (`hover:bg-dft-primary/80`, `hover:bg-dft-secondary/80`, `hover:bg-dft-destructive/80`) depend on color-mix/opacity support for CSS-variable-backed colors.
- Quirks: `Badge` is a plain function component with no `forwardRef` (unlike most audited components); `outline` variant sets only `text-dft-foreground` and inherits the base `border-dft-border` border (it does not reset border color to anything else).
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/badge.tsx` in full (36 lines).
- Verified each `dft-*` token against `app/globals.css` variable definitions.
- Assumptions: `cva` default-variant resolution and `cn` merge order are standard; not executed. Focus-ring visibility presumes focusability supplied by the consumer where needed.

## 14. Unresolved Questions

1. Is the missing `forwardRef` on `Badge` intentional (div-only usage), or an inconsistency versus the ref-forwarding components?
2. Should the `outline` variant explicitly set a border color, or is inheriting base `border-dft-border` the intended design?
