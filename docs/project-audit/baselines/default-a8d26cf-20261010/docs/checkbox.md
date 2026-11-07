# checkbox — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/checkbox.tsx |
| Source line count | 30 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Single Radix `CheckboxPrimitive.Root` wrapper with an indicator containing a `Check` icon.
One fixed class string covers base, focus, disabled, and checked states via `dft-*` tokens.
No `cva`, variants, or size scale exist in this file.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Checkbox` | `forwardRef` component | Ref: `React.ElementRef<typeof CheckboxPrimitive.Root>`; Props: `React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>`; `displayName = CheckboxPrimitive.Root.displayName` | No defaults in this file (checked/disabled logic inherited from Radix) |

Single named export via `export { Checkbox }`.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; the root has one fixed class string (see below) |

Root exact class string (source-derived):

`"peer h-4 w-4 shrink-0 rounded-dft-sm border border-dft-primary ring-offset-dft-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-dft-primary data-[state=checked]:text-dft-primary-foreground"`

Indicator exact strings (source-derived): wrapper `"flex items-center justify-center text-current"`; icon `"h-4 w-4"` on `<Check>`.

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed sizing only: root `"h-4 w-4"`, icon `"h-4 w-4"` |

## 6. Interaction States

Source-derived states (class strings quoted exactly):

- Focus: `"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2"` plus `"ring-offset-dft-background"`.
- Disabled: `"disabled:cursor-not-allowed disabled:opacity-50"` (styling only; disabled logic from Radix).
- Checked: `"data-[state=checked]:bg-dft-primary data-[state=checked]:text-dft-primary-foreground"` (styling keyed on Radix `data-state`).
- Hover: no `hover:` class is present in this file.
- Open: no open-state class is present in this file.
- Dark: no `dark:` class is present in this file.
- Responsive: no responsive (`sm:`/`md:`) class is present in this file.

## 7. DOM and Component Structure

- Root: `<CheckboxPrimitive.Root>` (Radix `@radix-ui/react-checkbox`) with forwarded ref, merged className, and `{...props}` spread.
- Child: `<CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">` wrapping `<Check className="h-4 w-4">` (lucide).
- Composition: single self-contained component; no context, no sibling subcomponents in this file.
- `Checkbox.displayName = CheckboxPrimitive.Root.displayName` (source-derived assignment).

## 8. Behavior

- Checked appearance change (`data-[state=checked]:bg-...` / `text-...`) is an inferred visual effect from source (inferred from source; no browser verification).
- Focus-ring display on keyboard focus (`focus-visible:ring-2`) is an inferred visual effect from source (inferred from source; no browser verification).
- Disabled cursor/opacity change is an inferred visual effect from source (inferred from source; no browser verification).
- Indicator mounting/unmounting with check state is inherited from Radix `Indicator` (inferred from source — primitive composition; no browser verification).
- No transitions or animations are declared in this file (source-derived fact — no `transition-*` / `animate-*` strings present).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- Checkbox semantics, keyboard handling, and `data-state`/`aria-checked` management are inherited from Radix `CheckboxPrimitive.Root` / `Indicator`; no explicit ARIA attribute is added in this file.
- Focus visibility styling is provided via `focus-visible:` classes (source-derived fact; focus behavior itself comes from the browser/Radix).
- No `label` association or descriptive text is present in this file; labeling is a caller responsibility.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `CheckboxPrimitive` | External | `@radix-ui/react-checkbox` |
| `Check` | External | `lucide-react` |
| `React` | External | `react` |
| `cn` | Internal | `@/lib/utils` |

No internal `@/registry/default` links are present in this file.

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-sm` (radius) | `"rounded-dft-sm"` | Unresolved — token value not verified |
| `dft-primary` | `"border-dft-primary"`, `"data-[state=checked]:bg-dft-primary"` | Unresolved — token value not verified |
| `dft-background` | `"ring-offset-dft-background"` | Unresolved — token value not verified |
| `dft-ring` | `"focus-visible:ring-dft-ring"` | Unresolved — token value not verified |
| `dft-primary-foreground` | `"data-[state=checked]:text-dft-primary-foreground"` | Unresolved — token value not verified |

Hardcoded (non-token) utilities in the same string: `"peer"`, `"h-4 w-4"`, `"shrink-0"`, `"border"`, `"focus-visible:ring-offset-2"`, `"disabled:cursor-not-allowed"`, etc. (source-derived).

## 12. Upgrade-Sensitive Areas

- No `cva` table and no arbitrary values are present; upgrade surface is the five `dft-*` tokens above plus the Radix `data-[state=checked]` contract.
- `peer` class is present without any peer-checked consumer in this file — dead hook unless callers use `peer-*` selectors against it.
- Hardcoded pairing of `border-dft-primary` with checked `bg-dft-primary` assumes token contrast; verify on theme change.
- `React.forwardRef` + `ElementRef`/`ComponentPropsWithoutRef` typing is legacy-pattern sensitive under future React versions.
- Radix `@radix-ui/react-checkbox` API (`Root`, `Indicator`, `data-state`) is the primary upgrade surface.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/checkbox.tsx` (30 lines total), read-only; no edits made.
- Verified by inspection: export list, ref/prop typing, exact root/indicator/icon class strings, `displayName` assignment, absence of `cva` and `dark:`/`hover:` classes.
- Assumptions: `cn` merges caller classes; Radix provides checkbox state semantics. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. What are the resolved values of `dft-sm`, `dft-primary`, `dft-background`, `dft-ring`, and `dft-primary-foreground` (not verified in this audit)?
2. Is the `peer` class intentionally exposed for caller use (no in-file consumer found)?
