# separator — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/separator.tsx`
- Line count: 31
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Single-export Radix Separator wrapper with `orientation` and `decorative` props.
Horizontal renders full-width hairline; vertical renders full-height hairline.
Uses one `dft-*` token; no cva variant or size scale exists.
Semantics delegate to the Radix primitive (source facts only).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Separator` | `React.forwardRef` wrapping `SeparatorPrimitive.Root` | `React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>` with destructured `orientation`, `decorative` | `orientation = "horizontal"`, `decorative = true` |

`Separator.displayName = SeparatorPrimitive.Root.displayName` (source fact). Props `decorative` and `orientation` are forwarded to the primitive.

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a (orientation branching is a conditional, not a `cva` variant) |

Orientation conditionals (quoted exactly): horizontal `"h-px w-full"`; vertical `"h-full w-px"`.

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a (hairline geometry `h-px`/`w-px` is fixed, not a scale) |

## 6. Interaction States

- Hover/focus/disabled/checked/open/selected: none in source.
- Dark: no `dark:` classes.
- Responsive: no `sm:`/`md:` classes.
- Present: `shrink-0` layout guard only (source class; no state implication).

## 7. DOM and Component Structure

- Single element: `SeparatorPrimitive.Root` with `ref`, `decorative`, `orientation`, merged `className`, and `{...props}`.
- Exact class string: base `"shrink-0 bg-dft-border"` plus `orientation === "horizontal" ? "h-px w-full" : "h-full w-px"`.

## 8. Behavior

- No transitions, animations, or interactions in source; element is a static rule — inferred from source (no browser verification).
- Orientation conditional selects hairline axis — source-derived fact; layout effect inferred from source.
- No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: `decorative = true` default passed to Radix primitive (hides element from accessibility tree per Radix contract — contract itself not verified here).
- `orientation` forwarded to primitive (source fact).
- No explicit ARIA, keyboard handling, focus, or labels in this file.

## 10. Imports and Dependencies

- External: `react`, `@radix-ui/react-separator` (`* as SeparatorPrimitive`).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-border` | `"shrink-0 bg-dft-border"` | unresolved (not verified against token files) |

No other `dft-*` tokens in source.

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) form: `cn("shrink-0 bg-dft-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className)`.
- Travel: n/a.
- Quirks / dead code: none observed.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/separator.tsx` in full (31 lines).
- Quoted class strings directly; did not resolve token value or Radix semantics.
- Assumptions: `cn` merges classes; Radix `decorative`/`orientation` semantics not audited.

## 14. Unresolved Questions

None.
