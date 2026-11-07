# tooltip

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/tooltip.tsx` |
| Source line count | 30 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`tooltip.tsx` re-exports Radix `Provider`/`Root`/`Trigger` and wraps `Content` with a `sideOffset = 4` default.
Content carries popover-themed styling plus `animate-in`/`animate-out` and per-side slide classes.
No `cva` variants and no size scale; customization is via `className` merge.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `TooltipProvider` | Direct alias: `TooltipPrimitive.Provider` | Radix Provider props | None in this file |
| `Tooltip` | Direct alias: `TooltipPrimitive.Root` | Radix Root props | None in this file |
| `TooltipTrigger` | Direct alias: `TooltipPrimitive.Trigger` | Radix Trigger props | None in this file |
| `TooltipContent` | `React.forwardRef` wrapping `TooltipPrimitive.Content` | `React.ElementRef<typeof TooltipPrimitive.Content>`; `React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>`; destructures `className, sideOffset = 4` | `sideOffset = 4`; `className` merged via `cn(base, className)`; `ref` and `{...props}` forwarded, `sideOffset` passed explicitly |
| `TooltipContent.displayName` | Assignment | — | Assigned `TooltipPrimitive.Content.displayName` from source |

No `cva` export in this file.

## 4. Variants

None. No `cva` variant table is present in source.

`TooltipContent` base class string (quoted exactly):

`"z-50 overflow-hidden rounded-dft-md border border-dft-border bg-dft-popover px-3 py-1.5 text-sm text-dft-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`

## 5. Sizes

No size scale. Padding/text are fixed (`px-3 py-1.5 text-sm`); positioning offset is the `sideOffset = 4` prop default, not a size scale.

## 6. Interaction States

Source-derived classes only:

- Hover/focus/disabled/checked: none (`hover:*`, `focus-visible:*`, `disabled:*`, `data-[state=checked]` absent).
- Open: enter classes `animate-in fade-in-0 zoom-in-95` apply without a state qualifier; close path uses `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`.
- Selected/active: none (`data-[state=selected]`, `data-[state=active]`, `data-[state=on]` absent).
- Side: `data-[side=bottom]:slide-in-from-top-2`, `data-[side=left]:slide-in-from-right-2`, `data-[side=right]:slide-in-from-left-2`, `data-[side=top]:slide-in-from-bottom-2`.
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).

## 7. DOM and Component Structure

- `TooltipProvider`, `Tooltip`, `TooltipTrigger` are bare Radix aliases with no DOM of their own in this file.
- `TooltipContent` renders `TooltipPrimitive.Content` with `ref`, explicit `sideOffset={sideOffset}`, merged `className`, and `{...props}`.
- Expected composition (from primitive roles): `TooltipProvider` > `Tooltip` > (`TooltipTrigger` + `TooltipContent`); not enforced in this file.

## 8. Behavior

- Enter animation — inferred from source: `animate-in fade-in-0 zoom-in-95` suggests fade/zoom entry; keyframes, duration, and easing come from an animation plugin/CSS outside this file and were not verified.
- Exit animation — inferred from source: `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95` suggests fade/zoom exit when Radix sets `data-state="closed"`.
- Side-aware slide — inferred from source: the four `data-[side=*]:slide-in-from-*` classes suggest entry slides from the side opposite the trigger; Radix supplies `data-side` (assumed, not verified at runtime).
- Offset — inferred from source: `sideOffset = 4` suggests a 4-unit gap between trigger and content unless overridden; units and rendering were not verified.
- No runtime/browser verification was performed; no claim is made about actual animation, positioning, or timing.

## 9. Accessibility

Source facts + labeled inferences (Radix-delegated semantics below are inferred from primitive identity, not stated in source):

- Underlying primitives are `@radix-ui/react-tooltip` (Provider/Root/Trigger/Content), so tooltip semantics, hover/focus triggering, dismissal, and keyboard behavior come from Radix via `{...props}` passthrough.
- No `aria-*`, `role`, focus, label, or keyboard code is hardcoded in this file; no focus-visible classes are present.
- `sideOffset` and content text are the only content-side API surface in source.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-tooltip` as `TooltipPrimitive`
- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No `cva` or `@/registry/default/*` links in this file. Animation utilities (`animate-in`, `fade-in-0`, `zoom-in-95`, `slide-in-from-*`) imply an external animation setup, but no import for it appears in source.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-border` | `border-dft-border` | Unresolved — token value not verified |
| `dft-popover` | `bg-dft-popover` | Unresolved — token value not verified |
| `dft-popover-foreground` | `text-dft-popover-foreground` | Unresolved — token value not verified |

`rounded-dft-md` radius token is quoted verbatim in §4; its value is likewise unresolved. `z-50`, `shadow-md`, and animation tokens are Tailwind/plugin classes, not `dft-*` tokens.

## 12. Upgrade-Sensitive Areas

- Animation class contract is load-bearing: `"animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"` plus the four `data-[side=*]:slide-in-from-*` entries depend on an animation plugin/keyframes outside this file. Removing or upgrading that setup silently drops motion.
- Enter classes are unqualified (no `data-[state=open]`/`data-[state=delayed-open]` guard) while exit classes are gated on `data-[state=closed]`; adding an open-state guard later would change enter behavior.
- `sideOffset = 4` default is the only numeric API; changing it shifts all tooltip placements. `sideOffset` is passed explicitly (`sideOffset={sideOffset}`), so a consumer `sideOffset={0}` is honored (falsy-but-defined passthrough, unlike `||` patterns).
- `z-50` stacking and `overflow-hidden` clipping are fixed; long content is clipped rather than wrapped by any class in source.
- No dead code observed; 30 lines, four exports.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/tooltip.tsx` (30 lines) in full.
- Verified: three bare aliases, `TooltipContent` wrapper with `sideOffset = 4`, exact content class string, `displayName` assignment, presence of `data-[state=closed]` / `data-[side=*]` / animation classes and absence of `hover:` / `focus-visible:` / `dark:` / `cva`.
- Assumptions: `cn` merges classes; Radix supplies `data-state`/`data-side` attributes and tooltip interaction (assumed, not verified at runtime); animation keyframes exist elsewhere (assumed).

## 14. Unresolved Questions

1. What are the resolved values of `dft-border`, `dft-popover`, and `dft-popover-foreground`?
2. Which animation plugin/CSS provides `animate-in`, `fade-in-0`, `zoom-in-95`, and `slide-in-from-*`, and what are their durations/easings?
3. Is unqualified enter (no `data-[state=open]` guard) vs. `data-[state=closed]`-gated exit intentional?
