# input — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/input.tsx` (original: `registry/default/ui/input.tsx`)
- Line count: 22
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Single `Input` forwardRef wrapper around a native `<input>`.
Forwards `type`, `className`, `ref`, and all `React.ComponentProps<"input">`.
No cva variants or size scale; state styling is declarative Tailwind selectors only.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Input` | forwardRef component (exported) | `HTMLInputElement`, `React.ComponentProps<"input">`; destructures `{ className, type, ...props }`; renders `<input type={type} className={cn(...)} ref={ref} {...props} />`; `displayName = "Input"` | No defaults in source |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. |

## 5. Sizes

No size scale. Fixed geometry only within base class: `h-10`, `w-full`, `px-3 py-2`, `text-base` / `md:text-sm`.

## 6. Interaction States

- Focus-visible: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2`.
- Disabled: `disabled:cursor-not-allowed disabled:opacity-50`.
- Placeholder: `placeholder:text-dft-muted-foreground`.
- File input: `file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-dft-foreground`.
- Responsive: `md:text-sm` (from base `text-base`).
- Hover / checked / open / selected / empty-state / dark: none present in source.

## 7. DOM and Component Structure

- Element: native `<input>` with `type={type}`, merged `className`, `ref`, and `{...props}` spread.
- Composition: flat single-element wrapper; no primitives, subcomponents, or slots.
- Full base class quoted exactly: `"flex h-10 w-full rounded-dft-md border border-dft-input bg-dft-background px-3 py-2 text-base ring-offset-dft-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-dft-foreground placeholder:text-dft-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"`.

## 8. Behavior

- Focus ring classes (`focus-visible:ring-2`, `focus-visible:ring-dft-ring`, `focus-visible:ring-offset-2`, `focus-visible:outline-none`) — inferred from source to suggest a visible focus indicator; no browser verification.
- Disabled classes (`disabled:cursor-not-allowed disabled:opacity-50`) — inferred from source to suggest a dimmed/non-interactive appearance; no browser verification.
- No transitions or animations in source beyond static selectors; no motion claimed.

## 9. Accessibility

- Source facts only: `focus-visible:outline-none` paired with `focus-visible:ring-2`; `disabled:` styles; native `type` passthrough.
- No explicit `aria-*`, `role`, `<label>`, or keyboard handlers in this file; labeling is the consumer's responsibility via props spread.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `rounded-dft-md` | `rounded-dft-md` | Unresolved — definition not verified in this doc |
| `border-dft-input` | `border border-dft-input` | Unresolved — definition not verified in this doc |
| `bg-dft-background` | `bg-dft-background` | Unresolved — definition not verified in this doc |
| `ring-offset-dft-background` | `ring-offset-dft-background`, `focus-visible:ring-offset-2` context | Unresolved — definition not verified in this doc |
| `text-dft-foreground` | `file:text-dft-foreground` | Unresolved — definition not verified in this doc |
| `text-dft-muted-foreground` | `placeholder:text-dft-muted-foreground` | Unresolved — definition not verified in this doc |
| `ring-dft-ring` | `focus-visible:ring-dft-ring` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Prop spread order is source-exact: `type={type}` then `className={cn(...)}` then `ref={ref}` then `{...props}` — consumer props can override earlier attributes.
- `type` is destructured but passed through unchanged: `type={type}` with no default.
- Arbitrary/responsive details quoted exactly: `md:text-sm` breakpoint shift; `file:` selectors `"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-dft-foreground"`.
- No `cva`; do not introduce variant/size APIs without consumer migration.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/input.tsx` in full (22 lines).
- Cross-checked export and line count against `MANIFEST.json` entry for `input`.
- Assumptions: class string transcribed verbatim; rendering/focus behavior not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
