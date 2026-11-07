# label — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/label.tsx`
- Line count: 26
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Single `Label` wrapper over `LabelPrimitive.Root` with one shared `labelVariants` base class.
No variant or size scales; styling is `cn(labelVariants(), className)` passthrough.
Peer-disabled styling only; ref forwarded; displayName delegated to primitive.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `labelVariants` | `cva` result (not exported) | No variant keys; base only | — |
| `Label` | `React.forwardRef` component | `React.ElementRef<typeof LabelPrimitive.Root>` ref; `React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>` props; destructures `{ className, ...props }` | No local defaults; `className` merged via `cn(labelVariants(), className)` |

Export statement in source: `export { Label };`.

## 4. Variants

No variant keys. Base string only via `cva`:

| Key | Exact classes |
| --- | --- |
| base (`labelVariants()`) | `"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"` |

## 5. Sizes

No size scale.

## 6. Interaction States

- Disabled (peer-based, source-derived): `"peer-disabled:cursor-not-allowed peer-disabled:opacity-70"` — applies when a preceding peer is disabled.
- Hover: none in source.
- Focus: none in source.
- Checked / open / selected / active: none in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.

## 7. DOM and Component Structure

- Element: `<LabelPrimitive.Root>` with forwarded `ref`, computed `className`, and spread `{...props}`.
- Primitive: `@radix-ui/react-label` `LabelPrimitive.Root`.
- Composition: flat single-element wrapper; no children transformation; no portal; no indicator.
- Display name: `Label.displayName = LabelPrimitive.Root.displayName;` (source-derived).

## 8. Behavior

- Class merging via `cn(labelVariants(), className)` — source-derived fact.
- Ref forwarding to Radix root — source-derived fact.
- Disabled cursor/opacity change when peer disabled — inferred from source (effect inferred from `peer-disabled:` classes; no browser verification).

## 9. Accessibility

- Source facts only: renders Radix `LabelPrimitive.Root`; forwards all props including `htmlFor`; no explicit `aria-*`, `role`, keyboard handler, or focus management in this file.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-label"` as `LabelPrimitive`; `"class-variance-authority"` (`cva`, `type VariantProps`); `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

No `dft-*` tokens present in source. All classes are non-token Tailwind utilities (`text-sm`, `font-medium`, `leading-none`, `peer-disabled:*`). Unresolved: none — verified by full 26-line read.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- `labelVariants` defined with base only and no `variants` / `defaultVariants` keys — call site is always `labelVariants()` with no arguments.
- `Label.displayName = LabelPrimitive.Root.displayName;` delegates to primitive; value not verified here and may be `undefined` — source-derived quirk, no runtime claim.
- Arbitrary values: none.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/label.tsx` (26 lines).
- Verified: `"use client"` directive, imports, `labelVariants` base string, `Label` forwardRef signature, `cn` call, `displayName` assignment, export list.
- Assumptions: none beyond source text; `cn` behavior not verified here; Radix prop semantics not verified here.

## 14. Unresolved Questions

None.
