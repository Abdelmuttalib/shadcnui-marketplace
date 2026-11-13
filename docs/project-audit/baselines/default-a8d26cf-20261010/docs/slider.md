# slider — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/slider.tsx`
- Line count: 28
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Single-export Radix Slider wrapper rendering one track, range, and thumb.
Track/range/thumb carry fixed `dft-*` fills with focus and disabled styles.
No cva variant or size scale exists; single-thumb structure only.
All runtime conduct derives from Radix primitives (source facts only).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Slider` | `React.forwardRef` wrapping `SliderPrimitive.Root` | `React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>` with `className`, `...props` | None declared |

`Slider.displayName = SliderPrimitive.Root.displayName` (source fact).

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a |

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a (track `h-2`, thumb `h-5 w-5` are fixed, not a scale) |

## 6. Interaction States

- Hover: none in source.
- Focus: thumb `"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2"` (paired with `ring-offset-dft-background`).
- Disabled: thumb `"disabled:pointer-events-none disabled:opacity-50"`.
- Checked/open/selected: none in source.
- Dark: no `dark:` classes. Responsive: no `sm:`/`md:` classes.
- Present: thumb `"transition-colors"` (effect inferred from source).

## 7. DOM and Component Structure

- Elements: `SliderPrimitive.Root` > `SliderPrimitive.Track` > `SliderPrimitive.Range`, plus a single `SliderPrimitive.Thumb` sibling after the track.
- Exact class strings:
  - Root: `"relative flex w-full touch-none select-none items-center"`
  - Track: `"relative h-2 w-full grow overflow-hidden rounded-full bg-dft-secondary"`
  - Range: `"absolute h-full bg-dft-primary"`
  - Thumb: `"block h-5 w-5 rounded-full border-2 border-dft-primary bg-dft-background ring-offset-dft-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"`

## 8. Behavior

- Thumb color transition via `"transition-colors"` — inferred from source (no browser verification).
- Drag/value behavior delegated to Radix `Root`/`Thumb` (import only; not audited) — source fact with effect inferred from source.
- Disabled thumb blocks pointer events and dims via `disabled:pointer-events-none disabled:opacity-50` — inferred from source.
- No animations, timers, or imperative logic in source. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: no explicit ARIA attributes, keyboard handlers, or labels in this file; slider semantics and keyboard support come from `@radix-ui/react-slider` (not inspected beyond import).
- Focus: `focus-visible` ring classes on thumb (visual source facts only).
- No `aria-*`, `tabIndex`, or `sr-only` text in source.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-slider` (`* as SliderPrimitive`).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-secondary` | track `bg-dft-secondary` | unresolved |
| `dft-primary` | range `bg-dft-primary`; thumb `border-dft-primary` | unresolved |
| `dft-background` | thumb `bg-dft-background`, `ring-offset-dft-background` | unresolved |
| `dft-ring` | thumb `focus-visible:ring-dft-ring` | unresolved |

All values unresolved (not verified against token files).

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) form: `cn("relative flex w-full touch-none select-none items-center", className)` (root only; track/range/thumb classes are literals).
- Travel: n/a.
- Quirks / dead code: single hardcoded `SliderPrimitive.Thumb` — multi-thumb configurations are not represented in source (source-derived observation, no behavior claim).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/slider.tsx` in full (28 lines).
- Quoted all four class strings directly; did not resolve tokens or Radix behavior.
- Assumptions: `cn` merges classes; Radix supplies slider semantics (not audited).

## 14. Unresolved Questions

None.
