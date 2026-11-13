# skeleton — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/skeleton.tsx`
- Line count: 15
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Single-export placeholder `div` with pulse animation and muted fill.
Accepts standard `div` attributes merged via `cn`; no props, defaults, or state.
No cva variant or size scale exists; no interaction or accessibility hooks.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Skeleton` | Function component (`div`) | `React.HTMLAttributes<HTMLDivElement>` with `className`, `...props` | None declared |

No `displayName`, no `forwardRef` in source.

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a |

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a |

## 6. Interaction States

- Hover/focus/disabled/checked/open/selected: none in source.
- Dark: no `dark:` classes. Responsive: no `sm:`/`md:` classes.
- Present: `animate-pulse` (pulse effect inferred from source only).

## 7. DOM and Component Structure

- Single `div` with merged `className` and `{...props}`.
- Exact class string: `"animate-pulse rounded-dft-md bg-dft-muted"`.

## 8. Behavior

- Pulsing placeholder via `"animate-pulse"` — inferred from source (no browser verification).
- No transitions beyond the pulse class, no interactions, no timers in source. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: no ARIA, roles, keyboard handling, focus, or labels in this file.
- Decorative placeholder semantics are not declared in source (no `aria-hidden` present — source fact).

## 10. Imports and Dependencies

- External: none — the file's sole import is `{ cn }` from `"@/lib/utils"`. Note: it references the `React` namespace type (`React.HTMLAttributes`) with no `import * as React` / `from "react"` statement (typechecks via the global/UMD React namespace), so `react` is not an import dependency here despite the type usage (source fact).
- Internal: `@/lib/utils` (`cn`).
- No `@/registry/default` links in this file.

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-muted` | `"animate-pulse rounded-dft-md bg-dft-muted"` (`bg-dft-muted`) | unresolved |
| `dft-md` (radius) | `rounded-dft-md` | unresolved |

All values unresolved (not verified against token files).

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) form: `cn("animate-pulse rounded-dft-md bg-dft-muted", className)`.
- Travel: n/a.
- Quirks / dead code: none observed.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/skeleton.tsx` in full (15 lines).
- Quoted the single class string directly; did not resolve tokens.
- Assumptions: `cn` merges classes; `animate-pulse` utility exists (not verified).

## 14. Unresolved Questions

None.
