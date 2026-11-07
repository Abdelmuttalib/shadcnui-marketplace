# tabs

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/tabs.tsx` |
| Source line count | 55 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`tabs.tsx` re-exports Radix `Root` as `Tabs` and wraps `List`, `Trigger`, and `Content`.
`TabsList` is a muted pill container; `TabsTrigger` styles the active tab via `data-[state=active]`.
`TabsContent` carries top margin and a focus-visible ring.
No `cva` variants and no size scale; customization is via `className` merge.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Tabs` | Direct alias: `TabsPrimitive.Root` | Radix Tabs Root props (no wrapper, no added `className` handling) | None in this file |
| `TabsList` | `React.forwardRef` wrapping `TabsPrimitive.List` | `React.ElementRef<typeof TabsPrimitive.List>`; `React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>` | No defaults; merges `cn("inline-flex h-10 items-center justify-center rounded-dft-md bg-dft-muted p-1 text-dft-muted-foreground", className)` |
| `TabsTrigger` | `React.forwardRef` wrapping `TabsPrimitive.Trigger` | `React.ElementRef<typeof TabsPrimitive.Trigger>`; `React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>` | No defaults; merges the active-state class string below |
| `TabsContent` | `React.forwardRef` wrapping `TabsPrimitive.Content` | `React.ElementRef<typeof TabsPrimitive.Content>`; `React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>` | No defaults; merges `cn("mt-2 ring-offset-dft-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2", className)` |

`displayName` for List/Trigger/Content is assigned from the corresponding `TabsPrimitive.*.displayName`. No `cva` export in this file.

## 4. Variants

None. No `cva` variant table is present in source.

Exact base class strings (quoted):

- `TabsList`: `"inline-flex h-10 items-center justify-center rounded-dft-md bg-dft-muted p-1 text-dft-muted-foreground"`
- `TabsTrigger`: `"inline-flex items-center justify-center whitespace-nowrap rounded-dft-sm px-3 py-1.5 text-sm font-medium ring-offset-dft-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-dft-background data-[state=active]:text-dft-foreground data-[state=active]:shadow-sm"`
- `TabsContent`: `"mt-2 ring-offset-dft-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2"`

## 5. Sizes

No size scale. Heights/padding are fixed (`h-10` on List; `px-3 py-1.5 text-sm` on Trigger; `mt-2` on Content).

## 6. Interaction States

Source-derived classes only:

- Hover: none (`hover:*` absent).
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` on Trigger and Content; Trigger and Content also carry `ring-offset-dft-background`.
- Disabled: `disabled:pointer-events-none disabled:opacity-50` on Trigger only.
- Checked/open: none (`data-[state=checked]`, `data-[state=open]` absent).
- Selected: none (`data-[state=selected]` absent).
- Active: `data-[state=active]:bg-dft-background data-[state=active]:text-dft-foreground data-[state=active]:shadow-sm` on Trigger.
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).

## 7. DOM and Component Structure

- `Tabs` is `TabsPrimitive.Root` (no DOM of its own in this file).
- `TabsList` → `TabsPrimitive.List`; `TabsTrigger` → `TabsPrimitive.Trigger`; `TabsContent` → `TabsPrimitive.Content`.
- Each wrapper forwards `ref` and spreads `{...props}` onto its Radix primitive.
- Expected composition (from primitive roles): `Tabs` > `TabsList` > `TabsTrigger`, plus `TabsContent` siblings; not enforced in this file.

## 8. Behavior

- Active-tab styling — inferred from source: Radix sets `data-state="active"` on the selected Trigger, activating the three `data-[state=active]:*` classes.
- Transition — inferred from source: `transition-all` on Trigger suggests all changed properties animate on activation; duration/easing are not in source.
- Focus-ring display — inferred from source: `focus-visible:*` classes suggest a ring appears on keyboard focus; focus behavior itself comes from Radix/native.
- No runtime/browser verification was performed; no claim is made about animation timing or focus behavior.

## 9. Accessibility

Source facts + labeled inferences (Radix-delegated semantics below are inferred from primitive identity, not stated in source):

- Underlying primitives are `@radix-ui/react-tabs` (Root/List/Trigger/Content), so tab semantics, arrow-key navigation, and selection come from Radix via `{...props}` passthrough.
- Focus-visible ring classes are present on Trigger and Content (see §6); no `aria-*` attributes are hardcoded in this file.
- `disabled:pointer-events-none disabled:opacity-50` on Trigger reflects disabled styling; disabled behavior is Radix/native via props.
- No hardcoded labels, `tabIndex`, or roving-tabindex code in source.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-tabs` as `TabsPrimitive`
- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No `@/registry/default/*` link in this file.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-muted` | `bg-dft-muted` (List) | Unresolved — token value not verified |
| `dft-muted-foreground` | `text-dft-muted-foreground` (List) | Unresolved — token value not verified |
| `dft-background` | `ring-offset-dft-background` (Trigger, Content); `data-[state=active]:bg-dft-background` (Trigger) | Unresolved — token value not verified |
| `dft-ring` | `focus-visible:ring-dft-ring` (Trigger, Content) | Unresolved — token value not verified |
| `dft-foreground` | `data-[state=active]:text-dft-foreground` (Trigger) | Unresolved — token value not verified |

`rounded-dft-md` / `rounded-dft-sm` radius tokens are quoted verbatim in §4; their values are likewise unresolved.

## 12. Upgrade-Sensitive Areas

- Active-state selectors are load-bearing: `"data-[state=active]:bg-dft-background data-[state=active]:text-dft-foreground data-[state=active]:shadow-sm"`. Any Radix `data-state` rename or class refactor breaks active-tab styling.
- `Tabs` is a bare alias (`const Tabs = TabsPrimitive.Root;`) with no `className` merge; adding styling must not break the alias type.
- `transition-all` on Trigger animates every changed property; narrowing to `transition-colors`/`transition-shadow` would change behavior.
- Fixed container height `h-10` + `p-1` on List couples with Trigger `py-1.5`; Trigger content that exceeds the row will overflow (no truncation class in source).
- No dead code observed; 55 lines, four exports.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/tabs.tsx` (55 lines) in full.
- Verified: `Tabs` alias form, exact class strings for List/Trigger/Content, `displayName` assignments, presence of `data-[state=active]` / `focus-visible:` / `disabled:` and absence of `hover:` / `dark:` / responsive / `cva`.
- Assumptions: `cn` merges classes; Radix supplies `data-state` attributes and tab keyboard behavior (assumed from import names, not verified at runtime).

## 14. Unresolved Questions

1. What are the resolved values of `dft-muted`, `dft-muted-foreground`, `dft-background`, `dft-ring`, and `dft-foreground`?
2. Is the bare `Tabs = TabsPrimitive.Root` alias (no `className` merge) intentional?
3. Is `transition-all` on Trigger intentional, or should it be scoped to colors/shadow?
