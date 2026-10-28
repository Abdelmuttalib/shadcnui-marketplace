# toggle

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/toggle.tsx` |
| Source line count | 45 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`toggle.tsx` defines the `toggleVariants` `cva` table (2 variants × 3 sizes) plus a `Toggle` Radix wrapper.
Base classes cover layout, `hover:`/`focus-visible:`/`disabled:`/`data-[state=on]` states, and SVG sizing.
Defaults are `variant: "default"` and `size: "default"`.
`toggleVariants` is also consumed by `toggle-group.tsx`.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `toggleVariants` | `cva` export (base + `variants` + `defaultVariants`) | `variant: "default" \| "outline"`; `size: "default" \| "sm" \| "lg"` via `VariantProps<typeof toggleVariants>` | `defaultVariants: { variant: "default", size: "default" }` |
| `Toggle` | `React.forwardRef` wrapping `TogglePrimitive.Root` | `React.ElementRef<typeof TogglePrimitive.Root>`; `React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>`; destructures `className, variant, size` and spreads `{...props}` | `variant`/`size` default via `toggleVariants` resolution (`"default"` / `"default"` when undefined); `className` merged via `cn(toggleVariants({ variant, size, className }))` |
| `Toggle.displayName` | Assignment | — | Assigned `TogglePrimitive.Root.displayName` from source |

## 4. Variants

Base class string (quoted exactly):

`"inline-flex items-center justify-center rounded-dft-md text-sm font-medium ring-offset-dft-background transition-colors hover:bg-dft-muted hover:text-dft-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-dft-accent data-[state=on]:text-dft-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2"`

Variant table (key → exact classes, quoted):

| `variant` key | Exact classes |
|---|---|
| `default` | `"bg-transparent"` |
| `outline` | `"border border-dft-input bg-transparent hover:bg-dft-accent hover:text-dft-accent-foreground"` |

## 5. Sizes

Size table (key → exact classes, quoted; note `min-w-*` companions):

| `size` key | Exact classes |
|---|---|
| `default` | `"h-10 px-3 min-w-10"` |
| `sm` | `"h-9 px-2.5 min-w-9"` |
| `lg` | `"h-11 px-5 min-w-11"` |

## 6. Interaction States

Source-derived classes only:

- Hover: `hover:bg-dft-muted hover:text-dft-muted-foreground` (base); `hover:bg-dft-accent hover:text-dft-accent-foreground` (outline variant).
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` plus `ring-offset-dft-background`.
- Disabled: `disabled:pointer-events-none disabled:opacity-50`.
- Checked: none (`data-[state=checked]` absent).
- On (pressed): `data-[state=on]:bg-dft-accent data-[state=on]:text-dft-accent-foreground`.
- Selected/open/active: none (`data-[state=selected]`, `data-[state=open]`, `data-[state=active]` absent).
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).
- SVG: `[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`.

## 7. DOM and Component Structure

- `Toggle` renders `TogglePrimitive.Root` with `ref`, `className={cn(toggleVariants({ variant, size, className }))}`, and `{...props}` spread.
- No child primitives or context in this file; single-element wrapper.
- `Toggle.displayName = TogglePrimitive.Root.displayName;`.

## 8. Behavior

- Pressed-state styling — inferred from source: Radix sets `data-state="on"` on the root, activating the two `data-[state=on]:*` classes.
- Color transition — inferred from source: `transition-colors` suggests background/foreground animate on hover/press; duration/easing are not in source.
- Disabled non-interaction — inferred from source: `disabled:pointer-events-none` suggests pointer events are suppressed when disabled, with `disabled:opacity-50` dimming.
- SVG non-interference — inferred from source: `[&_svg]:pointer-events-none` suggests nested icons do not capture clicks; icon size is fixed at `[&_svg]:size-4`.
- No runtime/browser verification was performed.

## 9. Accessibility

Source facts + labeled inferences (Radix-delegated semantics below are inferred from primitive identity, not stated in source):

- Underlying primitive is `@radix-ui/react-toggle` (`TogglePrimitive.Root`), so pressed semantics (`aria-pressed`), keyboard operability, and focus handling come from Radix via `{...props}` passthrough.
- Focus-visible ring classes are present (see §6); no `aria-*` attributes are hardcoded in this file.
- `disabled:pointer-events-none disabled:opacity-50` reflects disabled styling; disabled behavior is Radix/native via props.
- No hardcoded labels or labelling text in source.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-toggle` as `TogglePrimitive`
- `class-variance-authority` — `cva`, `type VariantProps`
- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No `@/registry/default/*` link from this file (direction is outward: `toggle-group.tsx` imports from `@/registry/default/ui/toggle`).


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-background` | `ring-offset-dft-background` | Unresolved — token value not verified |
| `dft-muted` | `hover:bg-dft-muted` | Unresolved — token value not verified |
| `dft-muted-foreground` | `hover:text-dft-muted-foreground` | Unresolved — token value not verified |
| `dft-ring` | `focus-visible:ring-dft-ring` | Unresolved — token value not verified |
| `dft-accent` | `data-[state=on]:bg-dft-accent`; `hover:bg-dft-accent` (outline) | Unresolved — token value not verified |
| `dft-accent-foreground` | `data-[state=on]:text-dft-accent-foreground`; `hover:text-dft-accent-foreground` (outline) | Unresolved — token value not verified |
| `dft-input` | `border-dft-input` (outline) | Unresolved — token value not verified |

`rounded-dft-md` radius token is quoted verbatim in §4; its value is likewise unresolved.

## 12. Upgrade-Sensitive Areas

- The `cva` table is load-bearing and shared: `toggleVariants` is imported by `toggle-group.tsx` (see `toggle-group.md`). Any key rename (`default`/`outline`, `default`/`sm`/`lg`), class change, or `defaultVariants` change affects both files.
- Default `variant: "default"` maps to `"bg-transparent"`, so the base `hover:bg-dft-muted hover:text-dft-muted-foreground` applies; `outline` overrides hover with accent classes. Specificity/merge order between base hover and variant hover must be preserved.
- Trailing `gap-2` in the base string (after the `[&_svg]` group) spaces icon+label; removing it collapses icon/text spacing.
- `min-w-*` companions (`min-w-10`/`min-w-9`/`min-w-11`) enforce minimum widths per size; dropping them changes small-content geometry.
- No dead code observed; 45 lines.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/toggle.tsx` (45 lines) in full.
- Verified: `toggleVariants` base string, full 2-key variant table, full 3-key size table with `min-w-*`, `defaultVariants`, `Toggle` prop intersection with `VariantProps`, and `cn(toggleVariants({ variant, size, className }))` call form.
- Assumptions: `cva`/`cn` resolve as standard; Radix supplies `data-state="on"` (assumed from selector usage, not verified at runtime).

## 14. Unresolved Questions

1. What are the resolved values of `dft-muted`, `dft-muted-foreground`, `dft-accent`, `dft-accent-foreground`, `dft-input`, `dft-ring`, and `dft-background`?
2. Is the trailing `gap-2` placement (after `[&_svg]` rules) significant to class-merge order?
3. Should `Toggle` accept any props beyond Radix Root + `VariantProps` (none are added in source)?
