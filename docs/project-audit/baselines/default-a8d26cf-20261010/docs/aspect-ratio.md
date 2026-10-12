# aspect-ratio — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/aspect-ratio.tsx (equivalently registry/default/ui/aspect-ratio.tsx, read-only) |
| Line count | 7 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

Single-export direct alias of the Radix AspectRatio Root primitive.
No props, classes, variants, sizes, or logic are added in this file.
Aspect behavior (ratio prop, sizing) is entirely inherited from Radix.
Smallest file in the audited set (7 lines).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `AspectRatio` | const alias (`AspectRatioPrimitive.Root`) | All `AspectRatioPrimitive.Root` props (inherited, notably `ratio`; not redeclared in this file) | NO_DIFFERENCE — direct re-export, no defaults added |

## 4. Variants

None — no `cva` in source. No class strings of any kind in source. Explicit statement: none.

## 5. Sizes

No size scale — no `size` prop or size table. Sizing is consumer-driven via the inherited Radix `ratio` prop and container width; not declared here.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | Not applicable — no classes or handlers in source |
| focus | Not applicable — no classes or handlers in source |
| disabled | Not applicable — no classes or handlers in source |
| checked | Not applicable — not a selectable control |
| open | Not applicable — no open/closed state in source |
| dark | Not applicable — no `dark:` classes in source |
| responsive | Not applicable — no responsive classes in source |

## 7. DOM and Component Structure

- Single node: `AspectRatio` → `AspectRatioPrimitive.Root`, which renders the Radix aspect-ratio wrapper `<div>` with the padding-based ratio technique (technique detail is Radix-internal, not stated in this file).
- No composition, no children wrappers, no `ref` forwarding code, no `displayName` assignment in source.

## 8. Behavior

- No interactions, transitions, or animations in source — the file contains no handlers, no `transition-*`, and no `animate-*` classes.
- Ratio enforcement (width-to-height preservation) is delegated to the Radix primitive — effect inferred from source (no browser verification).
- NO browser claims: rendered aspect preservation, intrinsic sizing, and overflow behavior were not verified at runtime.

## 9. Accessibility

Source facts only:

- No ARIA attributes, roles, keyboard handlers, focus management, or label props in source.
- Accessibility characteristics are whatever the Radix primitive and consumer content provide; nothing is added or asserted here.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-aspect-ratio` (as `AspectRatioPrimitive`)

Internal: none — no `@/lib/utils`, no `@/registry/default` links.

## 11. Token Dependencies

None. Explicit statement: NO_DIFFERENCE / not applicable — the file contains zero `dft-*` class tokens and zero `var(--dft-*)` references, so no `app/globals.css` definition location applies.

## 12. Upgrade-Sensitive Areas

- No `cva` tables — not applicable.
- No arbitrary values — none in source.
- No hardcoded tokens — none in source.
- Quirks: `"use client"` directive is present though the file defines no hooks or event handlers — retained as a client-boundary marker for consumers passing interactive children.
- Dead code: none observed in source (the file is a pure re-export).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/aspect-ratio.tsx` in full (7 lines).
- Assumptions: the Radix `ratio` prop contract and rendering technique are upstream behavior, not verified here. No token lookup was required (no tokens present).

## 14. Unresolved Questions

None.
