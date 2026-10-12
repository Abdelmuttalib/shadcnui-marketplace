# collapsible — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/collapsible.tsx |
| Source line count | 11 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Three direct Radix re-exports (`Root`, `CollapsibleTrigger`, `CollapsibleContent`) with no wrapper, classes, or props.
No `cva`, variants, sizes, states, tokens, or internal imports exist in this file.
All rendering, styling, and behavior come from `@radix-ui/react-collapsible`.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Collapsible` | Direct alias | `CollapsiblePrimitive.Root` | Inherited from Radix (not specified here) |
| `CollapsibleTrigger` | Direct alias | `CollapsiblePrimitive.CollapsibleTrigger` | Inherited from Radix (not specified here) |
| `CollapsibleContent` | Direct alias | `CollapsiblePrimitive.CollapsibleContent` | Inherited from Radix (not specified here) |

All three symbols are named exports via `export { Collapsible, CollapsibleContent, CollapsibleTrigger }`. No `displayName` is set in this file.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined and no class strings of any kind are present in this file |

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | No class strings of any kind are present in this file |

## 6. Interaction States

No interaction-state classes of any kind are present in this source.

| State | Source fact |
|---|---|
| hover | Absent — no classes present |
| focus | Absent — no classes present |
| disabled | Absent — no classes present |
| checked/open | Absent — no classes present (open semantics inherited from Radix, not styled here) |
| dark | No `dark:` class present |
| responsive | No responsive class present |

## 7. DOM and Component Structure

- No DOM elements are declared in this file; structure is entirely inherited from Radix primitives.
- Aliases (source-derived): `Collapsible = CollapsiblePrimitive.Root`; `CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger`; `CollapsibleContent = CollapsiblePrimitive.CollapsibleContent`.
- No composition, context, or wrapper logic exists in this file; callers compose the three exports directly.

## 8. Behavior

- Expand/collapse interaction is inherited from Radix `Root`/`Trigger`/`Content` (inferred from source — direct alias re-export; no browser verification).
- No transitions, animations, or state-driven visual changes are declared in this file (source-derived fact — no `transition-*`, `animate-*`, or `data-[...]` strings present; no browser verification).
- No prop defaults, event handlers, or effects exist in this file (source-derived fact).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- No `role`, `aria-*` attribute, keyboard handler, focus management, or label is added in this file.
- Trigger/content semantics (button behavior, `aria-expanded`, region association) are inherited from `@radix-ui/react-collapsible` and are not verifiable from this source.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `CollapsiblePrimitive` | External | `@radix-ui/react-collapsible` |

No `react`, `@/lib/utils`, or internal `@/registry/default` imports are present in this file.

## 11. Token Dependencies

No `dft-*` token is present in this source (source-derived inspection fact — the file contains no class strings).

| Token | Status |
|---|---|
| (none) | No `dft-*` tokens found; no styling declared in this file |

## 12. Upgrade-Sensitive Areas

- No `cva` table, arbitrary values, hardcoded tokens, or class strings exist — nothing local to migrate.
- Entire upgrade surface is the `@radix-ui/react-collapsible` API (`Root`, `CollapsibleTrigger`, `CollapsibleContent` prop/behavior contracts).
- No `displayName` overrides are set here, so DevTools naming follows Radix defaults.
- No quirks, typos, or dead code were found in this source (source-derived inspection fact).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/collapsible.tsx` (11 lines total), read-only; no edits made.
- Verified by inspection: the `"use client"` directive, the single Radix import, the three alias assignments, the export block, and the absence of classes, types, and internal imports.
- Assumptions: Radix provides open/close semantics. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

None.
