# alert — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/alert.tsx (equivalently registry/default/ui/alert.tsx, read-only) |
| Line count | 59 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

`cva`-based alert with two variants (`default`, `destructive`) and three exports.
Base layout positions an optional SVG icon absolutely with sibling padding compensation.
`AlertTitle` and `AlertDescription` are fixed-style typographic wrappers.
One `dark:` override exists on the destructive variant only.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `alertVariants` | `cva` table (not exported) | `variant: "default" \| "destructive"` | `variant: "default"` |
| `Alert` | `React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>` | `className`, `variant`, all div HTML attributes; renders `role="alert"` | `variant: "default"` via `defaultVariants` |
| `AlertTitle` | `React.forwardRef` rendering `<h5>`; props typed `React.HTMLAttributes<HTMLHeadingElement>` while ref typed `HTMLParagraphElement` (source quirk, see §12) | `className` + heading HTML attributes | No variant props; fixed classes |
| `AlertDescription` | `React.forwardRef` rendering `<div>`; props typed `React.HTMLAttributes<HTMLParagraphElement>` while ref typed `HTMLParagraphElement` (source quirk, see §12) | `className` + paragraph HTML attributes | No variant props; fixed classes |

## 4. Variants

Base (first `cva` argument, quoted exactly):

`"relative w-full rounded-dft-lg border border-dft-border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-dft-foreground"`

| Key | Exact classes |
|---|---|
| `default` | `"bg-dft-background text-dft-foreground"` |
| `destructive` | `"border-dft-destructive/50 text-dft-destructive dark:border-dft-destructive [&>svg]:text-dft-destructive"` |

Default variant: `variant: "default"`.

## 5. Sizes

No size scale — no `size` prop or size table. Fixed spacing only: `p-4`, icon offsets `left-4`/`top-4`, sibling compensation `pl-7` / `translate-y-[-3px]`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | Not applicable — no hover utilities in source |
| focus | Not applicable — no focus utilities in source |
| disabled | Not applicable — no disabled utilities in source |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | `dark:border-dft-destructive` on the `destructive` variant only; no other `dark:` classes |
| responsive | Not applicable — no responsive (`sm:`/`md:`) classes in source |

## 7. DOM and Component Structure

- `Alert` → `<div role="alert">` with `ref` forwarded; class = `cn(alertVariants({ variant }), className)`.
- `AlertTitle` → `<h5>` with fixed classes `"mb-1 font-medium leading-none tracking-tight"`; `ref` forwarded.
- `AlertDescription` → `<div>` with fixed classes `"text-sm [&_p]:leading-relaxed"`; `ref` forwarded.
- Icon convention is class-driven, not component-driven: arbitrary-variant selectors (`[&>svg]`, `[&>svg~*]`, `[&>svg+div]`) style a consumer-supplied `<svg>` child; no icon component is rendered by this file.
- Composition: consumer nests `AlertTitle` / `AlertDescription` (and optional svg) inside `Alert`; no internal layout components.

## 8. Behavior

- No interactions, transitions, or animations in source — the file contains no `transition-*`, `animate-*`, or state-driven classes.
- Icon layout compensation (`[&>svg~*]:pl-7`, `[&>svg+div]:translate-y-[-3px]`) — effect inferred from source (no browser verification of rendered offsets).
- NO browser claims: icon positioning, padding compensation, and dark-mode border rendering were not verified at runtime.

## 9. Accessibility

Source facts only:

- `Alert` renders `role="alert"` explicitly on the `<div>`.
- `AlertTitle` renders an `<h5>` heading element (heading hierarchy depends on consumer context; not assessed).
- No `aria-*` attributes beyond `role="alert"`; no keyboard handlers; no focus management; no label props in source.

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
| `rounded-dft-lg` (radius utility) | No `app/globals.css` entry; radius scale defined in archived `context/tailwind.config.ts` borderRadius block: `"dft-lg": "calc(var(--dft-radius))"`; `--dft-radius: 0.4rem` at `app/globals.css` line ~1136 |
| `border-dft-border` | `--dft-border` at `app/globals.css` lines ~1125 (light) / ~1732 (dark) |
| `bg-dft-background` | `--dft-background` at lines ~1109 / ~1714 |
| `text-dft-foreground` | `--dft-foreground` at lines ~1110 / ~1715 |
| `border-dft-destructive/50` (with opacity modifier) | `--dft-destructive` at lines ~1123 / ~1730 |
| `text-dft-destructive` | Same as above |
| `dark:border-dft-destructive` | Same as above (dark-mode override) |
| `[&>svg]:text-dft-foreground` / `[&>svg]:text-dft-destructive` | Foreground/destructive rows above |

## 12. Upgrade-Sensitive Areas

- `cva` table (`alertVariants`): variant keys `default` / `destructive` and base string are upgrade-sensitive; any token rename or radius-scale change alters all alerts. Base string quoted in §4.
- Arbitrary values / arbitrary variants (quoted exactly): `"[&>svg~*]:pl-7"`, `"[&>svg+div]:translate-y-[-3px]"`, `"[&>svg]:absolute"`, `"[&>svg]:left-4"`, `"[&>svg]:top-4"`, `"[&>svg]:text-dft-foreground"`, `"[&>svg]:text-dft-destructive"`, `"[&_p]:leading-relaxed"` — brittle under Tailwind arbitrary-selector handling changes; the `translate-y-[-3px]` literal is a magic number.
- Opacity modifier on a token: `"border-dft-destructive/50"` — depends on color-mix/opacity support for the CSS-variable-backed color.
- Hardcoded tokens: all `dft-*` classes listed in §11 are literal strings.
- Type quirks (quoted from source):
  - `React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>` on `AlertTitle` while rendering `<h5 ref={ref}>` — ref type (`HTMLParagraphElement`) mismatches the rendered element (`h5`).
  - `React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>` on `AlertDescription` while rendering `<div ref={ref}>` — ref type (`HTMLParagraphElement`) mismatches the rendered element (`div`).
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/alert.tsx` in full (59 lines).
- Verified each `dft-*` token against `app/globals.css` variable definitions and the archived `context/tailwind.config.ts` radius block.
- Assumptions: `cva`/`cn` resolution semantics are standard; `role="alert"` live-region behavior depends on assistive technology and was not verified.

## 14. Unresolved Questions

1. Is the `HTMLParagraphElement` ref-type mismatch on `AlertTitle` (`h5`) and `AlertDescription` (`div`) intentional, or a typing error carried from upstream?
2. Does the `translate-y-[-3px]` sibling compensation assume a specific icon size that is not enforced by this file?
