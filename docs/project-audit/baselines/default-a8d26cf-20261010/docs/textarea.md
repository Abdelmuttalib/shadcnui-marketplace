# textarea

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/textarea.tsx` |
| Source line count | 22 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`Textarea` is a single `forwardRef` wrapper around a native `textarea`.
It hardcodes a bordered input style with `min-h-[80px]`, placeholder coloring, and a focus-visible ring.
Disabled and responsive (`md:text-sm`) treatments are included.
No `cva` variants and no size scale; customization is via `className` merge.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Textarea` | `React.forwardRef` wrapping native `textarea` | `HTMLTextAreaElement`; `React.ComponentProps<"textarea">`; accepts `className` plus all native textarea props via `{...props}` | No defaults; merges the base class string below with `className`; `ref` forwarded to the `textarea` |
| `Textarea.displayName` | Assignment | — | `"Textarea"` (string literal in source) |

No `cva` export in this file.

## 4. Variants

None. No `cva` variant table is present in source.

Exact base class string (quoted):

`"flex min-h-[80px] w-full rounded-dft-md border border-dft-input bg-dft-background px-3 py-2 text-base ring-offset-dft-background placeholder:text-dft-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"`

## 5. Sizes

No size scale. Sizing is fixed in the base string: `min-h-[80px] w-full`, `px-3 py-2`, `text-base` with responsive `md:text-sm`.

## 6. Interaction States

Source-derived classes only:

- Hover: none (`hover:*` absent).
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` plus `ring-offset-dft-background`.
- Disabled: `disabled:cursor-not-allowed disabled:opacity-50`.
- Placeholder: `placeholder:text-dft-muted-foreground`.
- Checked/open/selected/active: none (`data-[state=*]` absent).
- Dark mode: none (`dark:*` absent).
- Responsive: `md:text-sm` (base `text-base` shrinks at `md` breakpoint).

## 7. DOM and Component Structure

- Single element: `<textarea ref={ref} className={cn(base, className)} {...props} />`.
- Implemented with a block body and explicit `return`; no primitives, no children composition, no context.
- `Textarea.displayName = "Textarea"`.

## 8. Behavior

- Focus-ring display — inferred from source: `focus-visible:*` classes suggest a ring appears on keyboard focus; focus behavior itself is native.
- Disabled affordance — inferred from source: `disabled:cursor-not-allowed disabled:opacity-50` suggests a not-allowed cursor and dimming when `disabled` is set; behavior is native via props.
- Responsive type step — inferred from source: `text-base` + `md:text-sm` suggests the font shrinks at/above the `md` breakpoint; breakpoint value and rendering were not verified.
- No runtime/browser verification was performed; no claim is made about actual layout, wrapping, or resizing behavior (`resize` is not set in source).

## 9. Accessibility

Source facts only:

- Native `textarea` element preserves built-in text-editing semantics and keyboard behavior.
- Focus-visible ring classes are present (see §6); no `aria-*` attributes are hardcoded.
- Placeholder styling (`placeholder:text-dft-muted-foreground`) is present; placeholder text is not a label substitute (no `label` in source).
- No `label` association, `aria-label`, `aria-invalid`, or error wiring is present; consumers must provide an accessible name.

## 10. Imports and Dependencies

External:

- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No Radix, `cva`, or `@/registry/default/*` links in this file.

## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-input` | `border-dft-input` | Unresolved — token value not verified |
| `dft-background` | `bg-dft-background`; `ring-offset-dft-background` | Unresolved — token value not verified |
| `dft-muted-foreground` | `placeholder:text-dft-muted-foreground` | Unresolved — token value not verified |
| `dft-ring` | `focus-visible:ring-dft-ring` | Unresolved — token value not verified |

`rounded-dft-md` radius token is quoted verbatim in §4; its value is likewise unresolved.

## 12. Upgrade-Sensitive Areas

- Arbitrary value `min-h-[80px]` is load-bearing for default height; Tailwind arbitrary-value handling must be preserved.
- Inverted responsive type scale (`text-base` default → `md:text-sm` at larger viewport) is unusual; a "mobile-first enlargement" refactor that flips it to `text-sm md:text-base` would change rendered output.
- `flex` on a `textarea` is present verbatim in source; removing it alters display behavior of the native control.
- No `aria-invalid` / error-border path exists; adding validation styling later must not collide with `border-dft-input`.
- No dead code observed; 22 lines, one component.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/textarea.tsx` (22 lines) in full.
- Verified: single `Textarea` export, `React.ComponentProps<"textarea">` typing, exact base class string, `displayName` literal, presence of `placeholder:` / `disabled:` / `md:text-sm` and absence of `hover:` / `dark:` / `data-[state=*]` / `cva`.
- Assumptions: `cn` merges classes; native textarea behavior applies (assumed, not verified at runtime).

## 14. Unresolved Questions

1. What are the resolved values of `dft-input`, `dft-background`, `dft-muted-foreground`, and `dft-ring`?
2. Is the `text-base` → `md:text-sm` inversion intentional?
3. Is `resize` behavior intentionally left at the browser default (no `resize-*` class in source)?
