# accordion — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/accordion.tsx (equivalently registry/default/ui/accordion.tsx, read-only) |
| Line count | 58 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

Radix-based accordion with four exports (Root/Item/Trigger/Content wrappers).
No cva variants and no `dft-*` tokens; styling is fixed Tailwind utilities.
Open/close animation is driven by Radix `data-state` attributes.
Chevron rotates 180° when the item is open.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Accordion` | const alias (`AccordionPrimitive.Root`) | All `AccordionPrimitive.Root` props (inherited, not redeclared) | NO_DIFFERENCE — direct re-export, no defaults added |
| `AccordionItem` | `React.forwardRef` wrapping `AccordionPrimitive.Item` | `React.ElementRef<typeof AccordionPrimitive.Item>`, `React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>`; `className` merged via `cn` | No new defaults; base class `"border-b"` |
| `AccordionTrigger` | `React.forwardRef` wrapping `AccordionPrimitive.Trigger` inside `AccordionPrimitive.Header` | `React.ElementRef<typeof AccordionPrimitive.Trigger>`, `React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>`; `className`, `children` | No new defaults; `displayName = AccordionPrimitive.Trigger.displayName` |
| `AccordionContent` | `React.forwardRef` wrapping `AccordionPrimitive.Content` | `React.ElementRef<typeof AccordionPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>`; `className`, `children` | No new defaults; `displayName = AccordionPrimitive.Content.displayName` |

## 4. Variants

None — no `cva` in source. All styling is fixed class strings per sub-component:

| Key | Exact classes |
|---|---|
| `AccordionItem` (base) | `"border-b"` |
| `AccordionTrigger` (button) | `"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"` |
| `AccordionTrigger` (header wrapper) | `"flex"` (plain string on `AccordionPrimitive.Header`, not merged with `cn`) |
| `AccordionContent` (outer) | `"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"` (plain string, not merged) |
| `AccordionContent` (inner div) | `"pb-4 pt-0"` (merged via `cn` with incoming `className`) |
| `ChevronDown` icon | `"h-4 w-4 shrink-0 transition-transform duration-200"` |

## 5. Sizes

No size scale — no `size` prop, no size table. Fixed geometry only: `py-4` trigger padding, `h-4 w-4` icon, `pb-4 pt-0` content padding, `text-sm` content text.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | `hover:underline` on `AccordionTrigger` |
| focus | Not applicable — no focus utilities in source |
| disabled | Not applicable — no disabled utilities or props in source |
| checked | Not applicable — not a selectable control |
| open | `[&[data-state=open]>svg]:rotate-180` on trigger; `data-[state=open]:animate-accordion-down` and `data-[state=closed]:animate-accordion-up` on content |
| dark | Not applicable — no `dark:` classes in source |
| responsive | Not applicable — no responsive (`sm:`/`md:`) classes in source |

## 7. DOM and Component Structure

- `Accordion` → `AccordionPrimitive.Root` (no DOM of its own).
- `AccordionItem` → `AccordionPrimitive.Item` (`<div>`-like Radix item) with `ref` forwarded.
- `AccordionTrigger` composition: `AccordionPrimitive.Header` (`className="flex"`) > `AccordionPrimitive.Trigger` (`<button>`) > `{children}` + `<ChevronDown>` icon as trailing sibling.
- `AccordionContent` composition: `AccordionPrimitive.Content` (outer, owns open/closed animation classes) > inner `<div className={cn("pb-4 pt-0", className)}>` > `{children}`. Note: consumer `className` lands on the inner div, not the animated outer element.
- `ref` forwarding: `AccordionItem`, `AccordionTrigger`, `AccordionContent` all forward refs to the underlying Radix primitive.

## 8. Behavior

- Open/close expand/collapse is delegated to Radix Accordion primitive (single/multiple/collapsible behavior comes from `Accordion` root props; not redeclared here).
- Content enter/exit animation classes `data-[state=open]:animate-accordion-down` / `data-[state=closed]:animate-accordion-up` — effect inferred from source (no browser verification; keyframe definitions live outside this file).
- Chevron rotation via `[&[data-state=open]>svg]:rotate-180` combined with icon `transition-transform duration-200` — effect inferred from source (no browser verification).
- `transition-all` on trigger and content — effect inferred from source (no browser verification).
- NO browser claims: animation timing, easing, height interpolation, and underline rendering were not verified at runtime.

## 9. Accessibility

Source facts only:

- Semantics inherited from Radix (`Root`/`Item`/`Header`/`Trigger`/`Content` manage button/region roles, `aria-expanded`, and keyboard navigation internally); this file adds no explicit ARIA attributes.
- Keyboard: no key handlers in source; keyboard behavior (arrow keys, Home/End, Space/Enter) is provided by the Radix primitive, not verified here.
- Focus: no focus utilities or focus-management code in source.
- Labels: no label props; trigger label is whatever `children` the consumer passes.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-accordion` (as `AccordionPrimitive`)
- `lucide-react` (`ChevronDown`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.

`@/registry/default` links: none — this file imports no sibling registry component.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

No `dft-*` tokens in source. Explicit statement: NO_DIFFERENCE / not applicable — the file contains zero `dft-` class tokens and zero `var(--dft-*)` references.

Related animation utilities (`animate-accordion-up`, `animate-accordion-down`) are defined outside this file; verifiable definition location: archived `docs/project-audit/baselines/default-a8d26cf-20261010/context/tailwind.config.ts`, `keyframes` block and `animation` block (accordion-down/up, 0.2s ease-out). No `app/globals.css` token mapping applies to this component.

## 12. Upgrade-Sensitive Areas

- No `cva` tables — nothing to migrate on variant-rename upgrades.
- No arbitrary values — none in source.
- No hardcoded `dft-*` tokens — none to remap.
- Quirks (quoted exactly):
  - `className="flex"` on `AccordionPrimitive.Header` is a plain string — consumer overrides cannot merge into it (no `className` prop is accepted on the header path).
  - `className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"` on `AccordionPrimitive.Content` is a plain string — a consumer `className` passed to `AccordionContent` does NOT reach this element; it is applied to the inner `<div>` via `cn("pb-4 pt-0", className)`.
  - Icon has no `aria-hidden`: `<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />`.
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/accordion.tsx` in full (58 lines).
- Cross-checked animation token definitions in archived `context/tailwind.config.ts` (keyframes/animation blocks).
- Assumptions: Radix `data-state` attribute values (`open`/`closed`) and primitive prop forwarding behave as documented upstream; not verified at runtime. `cn` merges truthy strings; not executed.

## 14. Unresolved Questions

None.
