# typography

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/typography.tsx` |
| Source line count | 138 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only, including the full variant table; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`typography.tsx` defines `typographyVariants` (`variant: "<size>/<weight>"`, 60 keys) and a polymorphic `Typography` renderer.
The `cva` default is `variant: "md/normal"` but the component parameter default is `variant = "base/normal"` (mismatch).
Rendering always prepends `text-balance` and merges `typographyVariants({ variant })` with consumer `className`.
Sizes double as the responsive type scale; no separate size axis exists.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `typographyVariants` | `cva` export (base + single `variants.variant` map + `defaultVariants`) | `variant?: \`${FontSize}/${FontWeight}\`` where `FontSize = "xs" \| "sm" \| "base" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl"` (12 members) and `FontWeight = "normal" \| "medium" \| "semibold" \| "bold" \| "extrabold"` (5 members); 12 × 5 = 60 keys, verified by reading the full table in source | `defaultVariants: { variant: "md/normal" }` |
| `Typography` | Function component (not `forwardRef`; no `ref` handling) | `TypographyProps extends React.HTMLAttributes<HTMLElement> & VariantProps<typeof typographyVariants>` with `as?: React.ElementType` and `variant?: \`${FontSize}/${FontWeight}\``; destructures `as = "p"`, `variant = "base/normal"`, `className`, `...props` | `as = "p"`; `variant = "base/normal"` — differs from `typographyVariants` `defaultVariants` `"md/normal"` (default-mismatch quirk, see §12) |
| `TypographyProps` | Exported type (`interface TypographyProps …`) | As above | — |

Render form (quoted structure): `<Comp className={cn("text-balance", typographyVariants({ variant }), className)} {...props} />` with `const Comp = as;`.

## 4. Variants

Single `variant` axis with 60 keys (`<FontSize>/<FontWeight>`). Base class string (quoted exactly, including double space):

`"font-normal  text-dft-foreground"`

Full 60-key matrix — asserted only after reading every entry of the variant table in source (12 sizes × 5 weights = 60). Summary by size (each size has all five weights `normal, medium, semibold, bold, extrabold` with the stated size/weight classes; weight suffix maps to `font-normal | font-medium | font-semibold | font-bold | font-extrabold`):

| Size group | Keys (5 each) | Base size classes per key (weight part appended) |
|---|---|---|
| `xs` | `xs/normal`, `xs/medium`, `xs/semibold`, `xs/bold`, `xs/extrabold` | `"text-xs font-<weight>"` (no breakpoint) |
| `sm` | `sm/normal`, `sm/medium`, `sm/semibold`, `sm/bold`, `sm/extrabold` | `"text-xs font-<weight> sm:text-sm"` |
| `base` | `base/normal`, `base/medium`, `base/semibold`, `base/bold`, `base/extrabold` | `"text-sm font-<weight> sm:text-md"` |
| `md` | `md/normal`, `md/medium`, `md/semibold`, `md/bold`, `md/extrabold` | `"text-sm font-<weight> md:text-md"` |
| `lg` | `lg/normal`, `lg/medium`, `lg/semibold`, `lg/bold`, `lg/extrabold` | `"text-md font-<weight> md:text-lg"` |
| `xl` | `xl/normal`, `xl/medium`, `xl/semibold`, `xl/bold`, `xl/extrabold` | `"text-lg font-<weight> md:text-xl"` |
| `2xl` | `2xl/normal`, `2xl/medium`, `2xl/semibold`, `2xl/bold`, `2xl/extrabold` | `"text-lg font-<weight> sm:text-xl md:text-2xl"` |
| `3xl` | `3xl/normal`, `3xl/medium`, `3xl/semibold`, `3xl/bold`, `3xl/extrabold` | `"text-xl font-<weight> sm:text-2xl md:text-3xl"` |
| `4xl` | `4xl/normal`, `4xl/medium`, `4xl/semibold`, `4xl/bold`, `4xl/extrabold` | `"text-2xl font-<weight> sm:text-3xl md:text-4xl"` |
| `5xl` | `5xl/normal`, `5xl/medium`, `5xl/semibold`, `5xl/bold`, `5xl/extrabold` | `"text-3xl font-<weight> sm:text-4xl md:text-5xl"` |
| `6xl` | `6xl/normal`, `6xl/medium`, `6xl/semibold`, `6xl/bold`, `6xl/extrabold` | `"text-4xl font-<weight> sm:text-5xl md:text-6xl"` |
| `7xl` | `7xl/normal`, `7xl/medium`, `7xl/semibold`, `7xl/bold`, `7xl/extrabold` | `"text-5xl font-<weight> sm:text-6xl md:text-7xl"` |

Representative exact entries (quoted): `"xs/normal": "text-xs font-normal"`; `"sm/bold": "text-xs font-bold sm:text-sm"`; `"base/normal": "text-sm font-normal sm:text-md"`; `"md/normal": "text-sm font-normal md:text-md"`; `"7xl/extrabold": "text-5xl font-extrabold sm:text-6xl md:text-7xl"`. All 60 entries follow the pattern above; the full verbatim list was read in source (138-line file).

## 5. Sizes

The `variant` size prefix is the type scale (12 steps: `xs, sm, base, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl`); there is no separate `size` prop. Behavior per group:

- `xs`: fixed `text-xs` at all viewports.
- `sm`–`7xl`: mobile-first step-ups via `sm:*` and/or `md:*` qualifiers (see §4 table; e.g. `base` renders `text-sm` below `sm` and `sm:text-md` at/above it).
- Non-standard steps `text-md` appear as both base and breakpoint targets (`sm:text-md`, `text-md`, `md:text-md`, `md:text-lg` inputs); `text-md` is not a default Tailwind size and must be theme-defined (unresolved, see §11/§14).

## 6. Interaction States

Source-derived classes only:

- Hover/focus/disabled/checked/open/selected/active: none (`hover:*`, `focus-visible:*`, `disabled:*`, `data-[state=*]` absent).
- Dark mode: none (`dark:*` absent).
- Responsive: present throughout — `sm:text-sm`, `sm:text-md`, `md:text-md`, `sm:text-xl`, `md:text-2xl`, `sm:text-2xl`, `md:text-3xl`, `sm:text-3xl`, `md:text-4xl`, `sm:text-4xl`, `md:text-5xl`, `sm:text-5xl`, `md:text-lg`, `md:text-xl`, `md:text-6xl`, `sm:text-6xl`, `md:text-7xl` (per-key; see §4 — 17 unique responsive tokens).
- Text wrapping: unconditional `text-balance` on every render (not a state).

## 7. DOM and Component Structure

- `Typography({ as = "p", variant = "base/normal", className, ...props })` sets `const Comp = as;` and renders `<Comp className={cn("text-balance", typographyVariants({ variant }), className)} {...props} />`.
- Polymorphic element via `as` prop (`React.ElementType`, default `"p"`); no `forwardRef`, so `ref` cannot be passed through this component (a `ref` in props would spread onto the DOM element only if React permits it for the chosen tag — not wired in source).
- No primitives, no context, no children-specific handling.

## 8. Behavior

- Responsive type step-up — inferred from source: `sm:*`/`md:*` classes suggest the font size increases at the `sm`/`md` breakpoints per §4; breakpoint pixel values and rendering were not verified.
- Balanced wrapping — inferred from source: hardcoded `text-balance` suggests wrapped headings/paragraphs balance line lengths; rendering was not verified.
- Variant resolution — inferred from source: `typographyVariants({ variant })` maps the `variant` prop to its class string, with `className` appended after (consumer classes merge last via `cn`).
- No runtime/browser verification was performed; no claim is made about line-breaking, legibility, or breakpoint behavior.

## 9. Accessibility

Source facts only:

- No ARIA, role, focus, keyboard, or label code is present in source.
- Semantic element choice is delegated to the consumer via `as` (default `"p"`); heading hierarchy (`h1`–`h6`) correctness is a consumer responsibility.
- `text-balance` affects visual wrapping only; no semantic or screen-reader claim is made in source.

## 10. Imports and Dependencies

External:

- `class-variance-authority` — `cva`, `type VariantProps`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No `react` import, no Radix, no `@/registry/default/*` links in this file. (`React.HTMLAttributes`, `React.ElementType` are referenced as types without a runtime import.)

## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-foreground` | Base: `text-dft-foreground` (applies to every variant alongside the per-key classes) | Unresolved — token value not verified |

`text-md` (and `sm:text-md` / `md:text-md`) size steps are non-default Tailwind names; their definitions are unresolved — not verified in this audit. Per-key `text-xs`–`text-7xl` and `font-*` utilities are Tailwind classes, not `dft-*` tokens.

## 12. Upgrade-Sensitive Areas

- Default-mismatch quirk — quote exactly: `defaultVariants` declares `variant: "md/normal"` while the component signature declares `variant = "base/normal"`. Because `Typography` always passes an explicit `variant` (`typographyVariants({ variant })` with the destructured default), the `cva` `defaultVariants` `"md/normal"` is unreachable through normal `Typography` usage (it applies only to direct `typographyVariants({})` / `typographyVariants({ variant: undefined })` calls). Standardizing on one default changes rendered output: `"md/normal"` = `"text-sm font-normal md:text-md"` vs `"base/normal"` = `"text-sm font-normal sm:text-md"` (breakpoint differs: `md:` vs `sm:`).
- 60-key `cva` table: any size/weight rename, class edit, or Tailwind upgrade affecting `text-md` or `sm:`/`md:` breakpoint values changes up to 60 combinations. The `sm` size group (`"text-xs … sm:text-sm"`) vs `xs` group (`"text-xs …"`, no breakpoint) differ by exactly one qualifier — easy to conflate.
- Base string double space — quote exactly: `cva("font-normal  text-dft-foreground", …)` contains two spaces between `font-normal` and `text-dft-foreground`. Harmless under whitespace splitting, but byte-exact comparisons or snapshots will differ if normalized.
- Unconditional `"text-balance"` in the render call cannot be disabled via props (only overridden through `className` merge order).
- No `forwardRef`: adding ref-forwarding later changes the component type signature.
- No dead code observed; the only indirection is the `Comp = as` alias.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/typography.tsx` (138 lines) in full, including every variant-table entry; counted 12 `FontSize` members × 5 `FontWeight` members = 60 `"<size>/<weight>"` keys and confirmed each key's presence in the `variant` map before asserting the 60-key matrix.
- Verified: `FontSize`/`FontWeight` unions, `TypographyProps` interface, base string with double space, `defaultVariants: { variant: "md/normal" }`, function default `variant = "base/normal"`, `as = "p"`, `cn("text-balance", typographyVariants({ variant }), className)` render form, named exports `Typography`, `typographyVariants`, `TypographyProps`.
- Assumptions: `cva`/`cn` resolve as standard; `text-md` and breakpoint values are theme-defined (assumed, not verified).

## 14. Unresolved Questions

1. What is the resolved value of `dft-foreground`, and where are `text-md` and the `sm:`/`md:` breakpoints defined?
2. Which default is canonical — `typographyVariants` `"md/normal"` or `Typography` `"base/normal"`?
3. Is the double space in `"font-normal  text-dft-foreground"` intentional or a typo to normalize?
4. Should `Typography` forward refs, and is the missing `react` runtime import (types-only usage) acceptable under the repo's JSX transform?
