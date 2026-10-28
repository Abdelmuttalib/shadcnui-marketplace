# hover-card — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/hover-card.tsx` (original: `registry/default/ui/hover-card.tsx`)
- Line count: 29
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Minimal Radix HoverCard wrapper with Root, Trigger, and Content.
Content defaults to `align="center"` and `sideOffset=4` with popover styling.
No cva variants or size scale; state/side animation hooks are declarative classes only.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `HoverCard` | alias | `HoverCardPrimitive.Root` | n/a |
| `HoverCardTrigger` | alias | `HoverCardPrimitive.Trigger` | n/a |
| `HoverCardContent` | forwardRef component | `React.ElementRef<typeof HoverCardPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>`; destructures `{ className, align = "center", sideOffset = 4, ...props }` | `align = "center"`, `sideOffset = 4` |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. |

## 5. Sizes

No size scale. Fixed geometry only: `"z-50 w-64 rounded-dft-md border border-dft-border bg-dft-popover p-4 text-dft-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`.

## 6. Interaction States

- Open/closed: `data-[state=open]:animate-in`, `data-[state=closed]:animate-out`, `data-[state=closed]:fade-out-0`, `data-[state=open]:fade-in-0`, `data-[state=closed]:zoom-out-95`, `data-[state=open]:zoom-in-95`.
- Side: `data-[side=bottom]:slide-in-from-top-2`, `data-[side=left]:slide-in-from-right-2`, `data-[side=right]:slide-in-from-left-2`, `data-[side=top]:slide-in-from-bottom-2`.
- Hover / focus / disabled / checked / selected / empty-state / dark / responsive: none present in source.

## 7. DOM and Component Structure

- Elements: `HoverCardPrimitive.Content` directly rendered with `ref`, `align`, `sideOffset`, merged `className`, and `{...props}`.
- Composition: flat wrapper; no Portal, overlay, or nested subcomponents in source.
- Primitives: `@radix-ui/react-hover-card` — Root, Trigger, Content.

## 8. Behavior

- Open/close animation classes (`animate-in`/`animate-out`, `fade-in-0`/`fade-out-0`, `zoom-in-95`/`zoom-out-95`) — inferred from source to suggest animated enter/exit; no browser verification.
- Side-based slide classes (`data-[side=*]:slide-in-from-*`) — inferred from source to suggest direction-aware entry; no browser verification.
- Hover triggering itself is delegated to the Radix primitive — source-derived fact; no runtime interaction claimed.

## 9. Accessibility

- Source facts only: `outline-none` on content; no explicit `aria-*`, `role`, labels, focus, or keyboard handlers in this file.
- Any hover/focus/keyboard semantics come from the Radix primitive, not stated in source.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `@radix-ui/react-hover-card` as `HoverCardPrimitive`; `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `rounded-dft-md` | Content base `rounded-dft-md` | Unresolved — definition not verified in this doc |
| `border-dft-border` | Content `border border-dft-border` | Unresolved — definition not verified in this doc |
| `bg-dft-popover` | Content `bg-dft-popover` | Unresolved — definition not verified in this doc |
| `text-dft-popover-foreground` | Content `text-dft-popover-foreground` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Defaults quoted exactly: `({ className, align = "center", sideOffset = 4, ...props }, ref)`.
- Full content class quoted exactly: `"z-50 w-64 rounded-dft-md border border-dft-border bg-dft-popover p-4 text-dft-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"`.
- Fixed `w-64` width — upgrades changing width affect card layout; no responsive override in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/hover-card.tsx` in full (29 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `hover-card`.
- Assumptions: props/defaults transcribed verbatim; Radix behavior not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
