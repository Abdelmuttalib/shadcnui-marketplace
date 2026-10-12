# switch

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/switch.tsx` |
| Source line count | 29 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`Switch` is a two-part Radix Switch wrapper (`Root` + `Thumb`) with fixed track/thumb dimensions.
Checked/unchecked background and thumb translation are driven by `data-[state=*]` classes.
Focus-visible ring, disabled cursor/opacity, and `transition-colors` / `transition-transform` are hardcoded.
No `cva` variants and no size scale; customization is via `className` merge.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Switch` | `React.forwardRef` wrapping `SwitchPrimitives.Root` | `React.ElementRef<typeof SwitchPrimitives.Root>`; `React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>`; accepts `className` plus all Radix Switch Root props via `{...props}` | No component-level defaults; `className` is optional and appended via `cn(base, className)` |
| `Switch.displayName` | Assignment | — | Assigned `SwitchPrimitives.Root.displayName` from source |

No `cva` export (no `toggleVariants`/`badgeVariants`-style export) in this file.

## 4. Variants

None. No `cva` variant table is present in source.

Base Root class string (quoted exactly):

`"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dft-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-dft-primary data-[state=unchecked]:bg-dft-input"`

Thumb class string (quoted exactly):

`"pointer-events-none block h-5 w-5 rounded-full bg-dft-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"`

## 5. Sizes

No size scale. Dimensions are fixed in the base class strings:

- Root: `h-6 w-11`
- Thumb: `h-5 w-5`

## 6. Interaction States

Source-derived classes only:

- Hover: none (`hover:*` absent in source).
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dft-background` on Root.
- Disabled: `disabled:cursor-not-allowed disabled:opacity-50` on Root (Radix `disabled` prop passed through via `{...props}`).
- Checked: `data-[state=checked]:bg-dft-primary` on Root; `data-[state=checked]:translate-x-5` on Thumb.
- Unchecked: `data-[state=unchecked]:bg-dft-input` on Root; `data-[state=unchecked]:translate-x-0` on Thumb.
- Open/selected/active: none (`data-[state=open]`, `data-[state=selected]`, `data-[state=active]`, `data-[state=on]` absent).
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).

## 7. DOM and Component Structure

- `Switch` renders `SwitchPrimitives.Root` with `ref`, merged `className`, and `{...props}` spread.
- Single child: `SwitchPrimitives.Thumb` with its own fixed `className`; no `ref` forwarded to Thumb in source.
- Root carries `peer` marker class; no sibling peer-consumer is defined in this file.
- `Switch.displayName = SwitchPrimitives.Root.displayName;` is set explicitly.

## 8. Behavior

- State-to-style mapping — inferred from source: Radix sets `data-state="checked" | "unchecked"` on Root/Thumb, which activates the corresponding `data-[state=*]` Tailwind selectors.
- Color transition — inferred from source: `transition-colors` on Root suggests background color animates on state change; timing values are not in source.
- Thumb slide — inferred from source: `transition-transform` plus `data-[state=checked]:translate-x-5` vs `data-[state=unchecked]:translate-x-0` suggests horizontal translation; timing values are not in source.
- No runtime/browser verification was performed; no claim is made about actual pixels, timing, or easing.

## 9. Accessibility

Source facts + labeled inferences (Radix-delegated semantics below are inferred from primitive identity, not stated in source):

- Underlying primitive is `@radix-ui/react-switch` (`SwitchPrimitives.Root` / `SwitchPrimitives.Thumb`), so switch semantics, keyboard interaction, and focus handling come from Radix via `{...props}` passthrough.
- Focus-visible ring classes are present (see §6); no `aria-*` attributes are hardcoded in this file.
- No `<label>` association, `aria-label`, or labelling text is present in source; consumers must provide an accessible name.
- Disabled styling (`disabled:cursor-not-allowed disabled:opacity-50`) is present; disabled behavior itself is Radix/native via props.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-switch` as `SwitchPrimitives`
- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No `@/registry/default/*` link in this file.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-ring` | `focus-visible:ring-dft-ring` | Unresolved — token value not verified |
| `dft-background` | `focus-visible:ring-offset-dft-background`; `bg-dft-background` (Thumb) | Unresolved — token value not verified |
| `dft-primary` | `data-[state=checked]:bg-dft-primary` | Unresolved — token value not verified |
| `dft-input` | `data-[state=unchecked]:bg-dft-input` | Unresolved — token value not verified |

Non-token utilities (`rounded-full`, `border-transparent`, `shadow-lg`, `ring-0`, opacity/transform scaffolding) are Tailwind classes, not `dft-*` tokens.

## 12. Upgrade-Sensitive Areas

- Fixed-geometry coupling: Root `h-6 w-11` + `border-2 border-transparent` with Thumb `h-5 w-5` plus `data-[state=checked]:translate-x-5` is a hand-tuned travel distance. Any change to track/thumb size, border width, or padding requires recomputing the translate amount.
- Travel math — inference (explicit border-box accounting, labeled inference): *inferred from source* — assuming Tailwind's default `border-box` sizing, Root content-plus-padding box is `w-11` = 44 px wide; `border-2` consumes 2 px per side inside that 44 px; Thumb is `w-5` = 20 px; checked offset `translate-x-5` = 20 px. The source does not state box-sizing or pixel values; this arithmetic is inference only and was not browser-verified. Left/right inner clearance is not expressed in source (flex `items-center` with no explicit `px-*`/`justify-*`), so exact resting insets cannot be derived from source alone.
- `border-2 border-transparent` reserves border width without visible color; removing or recoloring it changes geometry and focus-ring alignment.
- No `cva` table to migrate; any future variant refactor must preserve the exact `data-[state=*]` selectors quoted in §4.
- No dead code observed; the file is 29 lines with one component and one `displayName` assignment.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/switch.tsx` (29 lines) in full.
- Verified: export list (`Switch` only), Root and Thumb exact class strings, presence/absence of `hover:` / `dark:` / responsive / `cva` / size props.
- Assumptions: `cn` behaves as a standard class merge; Radix supplies `data-state` attributes and switch behavior (assumed from import names and selector usage, not verified at runtime).

## 14. Unresolved Questions

1. What are the resolved values of `dft-ring`, `dft-background`, `dft-primary`, and `dft-input` in the active theme?
2. Does Tailwind `border-box` preflight apply at the consumption site (affects §12 travel math)?
3. Is the `peer` class consumed by any sibling selector outside this file?
