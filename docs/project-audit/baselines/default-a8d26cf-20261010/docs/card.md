# card — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/card.tsx |
| Source line count | 86 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Six `forwardRef` div wrappers (`Card`, `Header`, `Title`, `Description`, `Content`, `Footer`) with fixed class strings.
No `cva`, variants, sizes, primitives, or state selectors exist in this file.
Styling is static composition with `cn`-appended caller `className` and `dft-*` border/surface/text tokens.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Card` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "Card"` | No defaults |
| `CardHeader` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "CardHeader"` | No defaults |
| `CardTitle` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "CardTitle"` | No defaults |
| `CardDescription` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "CardDescription"` | No defaults |
| `CardContent` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "CardContent"` | No defaults |
| `CardFooter` | `forwardRef` component | `HTMLDivElement` ref; `React.HTMLAttributes<HTMLDivElement>` props; `displayName = "CardFooter"` | No defaults |

All six symbols are named exports via a single `export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }` block.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; each subcomponent has one fixed class string (see Exports/Structure sections) |

Fixed class strings (source-derived):

| Component | Exact classes |
|---|---|
| `Card` | `"rounded-dft-lg border border-dft-border bg-dft-card text-dft-card-foreground shadow-sm"` |
| `CardHeader` | `"flex flex-col space-y-1.5 p-6"` |
| `CardTitle` | `"text-2xl font-semibold leading-none tracking-tight"` |
| `CardDescription` | `"text-sm text-dft-muted-foreground"` |
| `CardContent` | `"p-6 pt-0"` |
| `CardFooter` | `"flex items-center p-6 pt-0"` |

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed type/spacing only: `"text-2xl"`, `"text-sm"`, `"p-6"`, `"pt-0"`, `"space-y-1.5"` |

## 6. Interaction States

No hover, focus, disabled, checked, open, selected, dark, or responsive state classes are present in this source.

| State | Source fact |
|---|---|
| hover | Absent |
| focus | Absent |
| disabled | Absent |
| checked/open | Absent |
| dark | No `dark:` class present |
| responsive | No responsive (`sm:`/`md:`) class present |

## 7. DOM and Component Structure

- Each export renders a plain `<div>` with a forwarded `ref`, `cn(<fixed classes>, className)`, and `{...props}` spread.
- No Radix, cmdk, recharts, embla, or other UI primitives are used; no composition or context in this file.
- Intended composition (source-derived from export names only): `Card` as container with `CardHeader` (`CardTitle` + `CardDescription`) followed by `CardContent` and `CardFooter`; nesting is a caller concern, not enforced in source.
- Each component sets an explicit `displayName` matching its export name.

## 8. Behavior

- Caller `className` is appended after the fixed classes via `cn` (inferred from source — `cn` merge; no browser verification).
- Extra props (including event handlers) are spread onto the underlying `<div>` (inferred from source — `{...props}` pass-through; no browser verification).
- No transitions, animations, or state-driven visual changes are declared in this file (source-derived fact — no `transition-*`, `animate-*`, or `data-[...]` strings present; no browser verification).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- No `role`, `aria-*` attribute, keyboard handler, focus management, or label association is present in this file.
- `CardTitle` and `CardDescription` are plain `<div>` elements, not heading or paragraph elements, in the source.
- Heading hierarchy and landmark semantics are caller responsibilities and are not verifiable from this source.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `React` | External | `react` |
| `cn` | Internal | `@/lib/utils` |

No internal `@/registry/default` links are present in this file. No external UI libraries are used.

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-lg` (radius) | `Card`: `"rounded-dft-lg"` | Unresolved — token value not verified |
| `dft-border` | `Card`: `"border-dft-border"` | Unresolved — token value not verified |
| `dft-card` | `Card`: `"bg-dft-card"` | Unresolved — token value not verified |
| `dft-card-foreground` | `Card`: `"text-dft-card-foreground"` | Unresolved — token value not verified |
| `dft-muted-foreground` | `CardDescription`: `"text-dft-muted-foreground"` | Unresolved — token value not verified |

Remaining classes (`border`, `shadow-sm`, `flex`, `p-6`, `text-2xl`, etc.) are hardcoded Tailwind utilities (source-derived).

## 12. Upgrade-Sensitive Areas

- No `cva` table and no arbitrary values are present; upgrade surface is the five hardcoded `dft-*` tokens above.
- Fixed spacing/typography (`"p-6 pt-0"`, `"space-y-1.5"`, `"text-2xl font-semibold leading-none tracking-tight"`, `"shadow-sm"`) will not track design-token changes automatically.
- `React.forwardRef` usage is legacy-pattern sensitive under future React versions; behavior change would affect all six components identically.
- No quirks, typos, or dead code were found in this source (source-derived inspection fact).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/card.tsx` (86 lines total), read-only; no edits made.
- Verified by inspection: all six exports, `forwardRef` signatures, exact class strings, `displayName` assignments, absence of `cva`, state selectors, and primitives.
- Assumptions: `cn` appends caller classes; `React.HTMLAttributes<HTMLDivElement>` props spread onto `<div>`. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. What are the resolved values of `dft-lg`, `dft-border`, `dft-card`, `dft-card-foreground`, and `dft-muted-foreground` (not verified in this audit)?
2. Is there an intended heading level for `CardTitle` (source uses `<div>`; no semantic mapping verified)?
