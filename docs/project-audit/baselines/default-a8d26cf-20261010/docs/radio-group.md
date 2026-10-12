# radio-group — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/radio-group.tsx`
- Line count: 44
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Two-part Radix RadioGroup wrapper: grid root and circular item with dot indicator.
Item styling covers focus-visible ring, disabled dimming, and primary border/text.
No variants or sizes; refs forwarded on both parts.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `RadioGroup` | `React.forwardRef` | `React.ElementRef<typeof RadioGroupPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>`; `{ className, ...props }`, block body with `return` | No local defaults |
| `RadioGroupItem` | `React.forwardRef` | `React.ElementRef<typeof RadioGroupPrimitive.Item>`, `React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>`; `{ className, ...props }`, block body with `return` | No local defaults |

Export statement: `export { RadioGroup, RadioGroupItem };`.

## 4. Variants

None — no `cva` in source.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No size scale.

## 6. Interaction States

Source-derived classes only:

- Focus (source-derived): `"focus:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2"` on item.
- Disabled (source-derived): `"disabled:cursor-not-allowed disabled:opacity-50"` on item.
- Checked (source-derived): rendered via `<RadioGroupPrimitive.Indicator className="flex items-center justify-center">` containing `<Circle className="h-2.5 w-2.5 fill-current text-current" />`; no `checked:` or `data-[state=checked]:` class in source.
- Hover / open / selected / active: none in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.

## 7. DOM and Component Structure

- `RadioGroup` → `<RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />`.
- `RadioGroupItem` → `<RadioGroupPrimitive.Item ref={ref} className={cn("aspect-square h-4 w-4 rounded-full border border-dft-primary text-dft-primary ring-offset-dft-background focus:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}>` containing indicator + Circle icon.
- Indicator: `<RadioGroupPrimitive.Indicator className="flex items-center justify-center">`.
- Primitives: `@radix-ui/react-radio-group`; icon `Circle` from `lucide-react`.

## 8. Behavior

- Item shows focus ring only for keyboard focus — inferred from source (effect inferred from `focus-visible:ring-2` vs `focus:outline-none`; no browser verification).
- Disabled item dims and blocks cursor — inferred from source (effect inferred from `disabled:cursor-not-allowed disabled:opacity-50`; no browser verification).
- Dot appears when item selected — inferred from source (effect inferred from Radix `Indicator` conditional rendering; no browser verification).

## 9. Accessibility

- Source facts only: relies on Radix RadioGroup/Item for radiogroup semantics, arrow-key navigation, and checked state; no explicit `role`, `aria-checked`, or keyboard handlers in this file.
- Focus visibility is expressed via `focus-visible:` classes (source fact).
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-radio-group"` as `RadioGroupPrimitive`; `"lucide-react"` (`Circle`); `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-primary` in `"aspect-square h-4 w-4 rounded-full border border-dft-primary text-dft-primary ring-offset-dft-background focus:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"` (both `border-dft-primary` and `text-dft-primary`).
- `dft-background` in `"... ring-offset-dft-background ..."` (same string).
- `dft-ring` in `"... focus-visible:ring-dft-ring ..."` (same string).

Token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Fixed geometry (exact): root `"grid gap-2"`; item `"aspect-square h-4 w-4 rounded-full ..."`; dot `"<Circle className=\"h-2.5 w-2.5 fill-current text-current\" />"` inside `"<RadioGroupPrimitive.Indicator className=\"flex items-center justify-center\">"`.
- Ring offset width is non-token `"focus-visible:ring-offset-2"` alongside token `"ring-offset-dft-background"` — preserved exactly.
- Arbitrary values: none.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/radio-group.tsx` (44 lines).
- Verified: root/item class strings, indicator + Circle classes, block-body forwardRef form, `displayName` delegations, two-export list.
- Assumptions: none beyond source text; Radix keyboard/selection semantics not verified.

## 14. Unresolved Questions

None.
