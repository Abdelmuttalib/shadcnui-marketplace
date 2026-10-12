# popover — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/popover.tsx`
- Line count: 31
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Minimal Radix Popover wrapper with 3 exports: root, trigger, and portal content.
Content defaults to centered alignment with 4px side offset and fixed animation classes.
No variants or sizes; ref forwarded only on content.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Popover` | Re-export alias | `typeof PopoverPrimitive.Root` | — |
| `PopoverTrigger` | Re-export alias | `typeof PopoverPrimitive.Trigger` | — |
| `PopoverContent` | `React.forwardRef` | `React.ElementRef<typeof PopoverPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>`; destructures `{ className, align = "center", sideOffset = 4, ...props }` | `align = "center"`, `sideOffset = 4` |

Export statement: `export { Popover, PopoverContent, PopoverTrigger };`.

## 4. Variants

None — no `cva` in source.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No size scale.

## 6. Interaction States

- Open (source-derived): `"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"`.
- Closed (source-derived): `"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"`.
- Side (source-derived): `"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`.
- Hover / focus / disabled / checked / selected / active: none in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.

## 7. DOM and Component Structure

- `PopoverContent` → `<PopoverPrimitive.Portal>` wrapping `<PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn(...)} {...props} />`.
- `Popover` / `PopoverTrigger` are direct Radix aliases with no wrapper markup.
- Primitive: `@radix-ui/react-popover`.
- Display name: `PopoverContent.displayName = PopoverPrimitive.Content.displayName;` (source-derived).

## 8. Behavior

- Content renders in portal offset from trigger — inferred from source (effect inferred from `Portal` + `align` / `sideOffset` props; no browser verification).
- Content animates in/out with fade/zoom/slide by state and side — inferred from source (effects inferred from `animate-in/out`, `fade-in-0/out-0`, `zoom-in-95/out-95`, `slide-in-from-*` classes; no browser verification).
- Full content class (exact): `"z-50 w-72 rounded-dft-md border border-dft-border bg-dft-popover p-4 text-dft-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`.

## 9. Accessibility

- Source facts only: relies on Radix Popover for focus management, dismissal, and ARIA; no explicit `role`, `aria-*`, or keyboard handlers in this file.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-popover"` as `PopoverPrimitive`; `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-md` in `"... rounded-dft-md ..."`.
- `dft-border` in `"... border-dft-border ..."`.
- `dft-popover` in `"... bg-dft-popover ..."`.
- `dft-popover-foreground` in `"... text-dft-popover-foreground ..."`.

All within the single content class string quoted in Behavior. Token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Defaults (exact): `align = "center"`, `sideOffset = 4`.
- Fixed geometry (exact within class): `"z-50 w-72"` and `"p-4"`, `"shadow-md"`, `"outline-none"`.
- Arbitrary values: none beyond standard utilities in this file.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/popover.tsx` (31 lines).
- Verified: `"use client"` directive, 3 export names, `align`/`sideOffset` defaults, full content class string, `displayName` delegation, Portal nesting.
- Assumptions: none beyond source text; Radix portal/focus semantics not verified.

## 14. Unresolved Questions

None.
