# alert-dialog — Default Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/alert-dialog.tsx (equivalently registry/default/ui/alert-dialog.tsx, read-only) |
| Line count | 141 lines |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static source read of the verbatim baseline copy; no runtime or browser verification |

## 2. Executive Summary

Radix AlertDialog wrapper with 11 exports (Root/Trigger/Portal/Overlay/Content/Header/Footer/Title/Description/Action/Cancel).
Content is a centered fixed modal reusing `buttonVariants` for Action (default) and Cancel (outline).
Open/close animations use Radix `data-state` with `animate-in/out`, fade, zoom, and slide utilities.
Header/Footer are plain-`div` layout helpers with responsive alignment.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `AlertDialog` | const alias (`AlertDialogPrimitive.Root`) | Inherited Radix Root props | NO_DIFFERENCE — no defaults added |
| `AlertDialogTrigger` | const alias (`AlertDialogPrimitive.Trigger`) | Inherited Radix Trigger props | NO_DIFFERENCE — no defaults added |
| `AlertDialogPortal` | const alias (`AlertDialogPrimitive.Portal`) | Inherited Radix Portal props | NO_DIFFERENCE — no defaults added |
| `AlertDialogOverlay` | `React.forwardRef` wrapping `AlertDialogPrimitive.Overlay` | `React.ElementRef<typeof AlertDialogPrimitive.Overlay>`, `React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>` | Fixed overlay classes; `displayName = AlertDialogPrimitive.Overlay.displayName` |
| `AlertDialogContent` | `React.forwardRef` wrapping `AlertDialogPrimitive.Content` inside `AlertDialogPortal` + `AlertDialogOverlay` | `React.ElementRef<typeof AlertDialogPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>` | Renders Portal + Overlay internally; `displayName = AlertDialogPrimitive.Content.displayName` |
| `AlertDialogHeader` | function component (`React.HTMLAttributes<HTMLDivElement>`) | `className` + div attributes | Fixed header classes; `displayName = "AlertDialogHeader"` |
| `AlertDialogFooter` | function component (`React.HTMLAttributes<HTMLDivElement>`) | `className` + div attributes | Fixed footer classes; `displayName = "AlertDialogFooter"` |
| `AlertDialogTitle` | `React.forwardRef` wrapping `AlertDialogPrimitive.Title` | Element/props of Radix Title | Fixed `"text-lg font-semibold"`; Radix displayName |
| `AlertDialogDescription` | `React.forwardRef` wrapping `AlertDialogPrimitive.Description` | Element/props of Radix Description | Fixed `"text-sm text-dft-muted-foreground"`; Radix displayName |
| `AlertDialogAction` | `React.forwardRef` wrapping `AlertDialogPrimitive.Action` | Element/props of Radix Action | Styled with `buttonVariants()` (default variant); Radix displayName |
| `AlertDialogCancel` | `React.forwardRef` wrapping `AlertDialogPrimitive.Cancel` | Element/props of Radix Cancel | Styled with `buttonVariants({ variant: "outline" })` plus `"mt-2 sm:mt-0"`; Radix displayName |

## 4. Variants

None — no `cva` in this file. Variant styling is inherited from the imported `buttonVariants` (Action = default call, Cancel = `outline`). Fixed class strings per sub-component:

| Key | Exact classes |
|---|---|
| Overlay | `"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"` |
| Content | `"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-dft-border bg-dft-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-dft-lg"` |
| Header | `"flex flex-col space-y-2 text-center sm:text-left"` |
| Footer | `"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"` |
| Title | `"text-lg font-semibold"` |
| Description | `"text-sm text-dft-muted-foreground"` |
| Action | `buttonVariants()` (default) merged via `cn` |
| Cancel | `buttonVariants({ variant: "outline" })` + `"mt-2 sm:mt-0"` merged via `cn` |

## 5. Sizes

No size scale — no `size` prop or size table. Fixed geometry only: content `max-w-lg`, `p-6`, `gap-4`; overlay `inset-0`; centering via `left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`.

## 6. Interaction States

| State | Source evidence |
|---|---|
| hover | Not applicable in this file — hover styles live inside the imported `buttonVariants`, not redeclared here |
| focus | Not applicable — no focus utilities in this file (focus handling delegated to Radix + buttonVariants) |
| disabled | Not applicable — no disabled utilities in this file |
| checked | Not applicable — not a selectable control |
| open | `data-[state=open]:animate-in`, `data-[state=open]:fade-in-0`, `data-[state=open]:zoom-in-95`, `data-[state=open]:slide-in-from-left-1/2`, `data-[state=open]:slide-in-from-top-[48%]` (content); `data-[state=open]:animate-in`, `data-[state=open]:fade-in-0` (overlay); closed counterparts with `animate-out`/`fade-out-0`/`zoom-out-95`/`slide-out-to-left-1/2`/`slide-out-to-top-[48%]` |
| dark | Not applicable — no `dark:` classes in source |
| responsive | `sm:rounded-dft-lg` (content); `sm:text-left` (header); `sm:flex-row sm:justify-end sm:space-x-2` + `sm:mt-0` (footer/cancel) |

## 7. DOM and Component Structure

- `AlertDialogContent` renders `AlertDialogPortal` > (`AlertDialogOverlay` + `AlertDialogPrimitive.Content`); the overlay is always rendered with the content — consumers cannot opt out via props in this file.
- Overlay → Radix `Overlay` (`<div>`-like) with `ref` forwarded.
- Content → Radix `Content` (`role="alertdialog"` supplied by Radix) centered with fixed positioning + translate utilities; `ref` forwarded.
- `AlertDialogHeader` / `AlertDialogFooter` → plain `<div>`s (function components, no `forwardRef`).
- `AlertDialogTitle` → Radix `Title`; `AlertDialogDescription` → Radix `Description`; both forward refs.
- `AlertDialogAction` → Radix `Action`; `AlertDialogCancel` → Radix `Cancel`; both forward refs and carry button styling.
- Expected composition: `AlertDialog` > `AlertDialogTrigger` + `AlertDialogContent` > (`AlertDialogHeader` > Title + Description) + (`AlertDialogFooter` > Cancel + Action).

## 8. Behavior

- Modal open/close, focus trapping, Escape handling, and portal mounting are delegated to the Radix AlertDialog primitive — no logic in this file.
- Overlay fade (`fade-in-0`/`fade-out-0` with `animate-in`/`animate-out`) — effect inferred from source (no browser verification).
- Content combined fade + zoom (`zoom-in-95`/`zoom-out-95`) + slide (`slide-in-from-*`/`slide-out-to-*`) with `duration-200` — effect inferred from source (no browser verification).
- `bg-black/80` scrim — dimming effect inferred from source (no browser verification).
- NO browser claims: animation timing, transform centering, stacking (`z-50`), and responsive reflow were not verified at runtime.

## 9. Accessibility

Source facts only:

- Dialog semantics (`role="alertdialog"`, `aria-modal`, labelled-by/described-by wiring, focus trap, Escape-to-dismiss semantics) come from the Radix primitive; this file adds no explicit ARIA attributes.
- `AlertDialogTitle` and `AlertDialogDescription` provide the Radix Title/Description nodes used for accessible naming/description when composed correctly by the consumer.
- Keyboard: no key handlers in source; keyboard behavior is Radix-provided, not verified here.
- Focus: no focus utilities or focus-management code in this file.

## 10. Imports and Dependencies

External:

- `@radix-ui/react-alert-dialog` (as `AlertDialogPrimitive`)
- `react`

Internal:

- `@/lib/utils` (`cn`) — exact path as written in source.
- `@/registry/default/ui/button` (`buttonVariants`) — exact path as written in source.


Directives:

- `"use client";` (source line 1) — client-component boundary; relevant to any React Server Component migration.
## 11. Token Dependencies

| `dft-*` token (as used) | `app/globals.css` definition location (verifiable) |
|---|---|
| `border-dft-border` | `--dft-border` at `app/globals.css` lines ~1125 (light) / ~1732 (dark) |
| `bg-dft-background` | `--dft-background` at lines ~1109 / ~1714 |
| `text-dft-muted-foreground` | `--dft-muted-foreground` at lines ~1120 / ~1725 |
| `sm:rounded-dft-lg` (radius utility) | No `app/globals.css` entry; defined in archived `context/tailwind.config.ts` borderRadius block: `"dft-lg": "calc(var(--dft-radius))"`; `--dft-radius: 0.4rem` at `app/globals.css` line ~1136 |
| Button-derived tokens (`bg-dft-primary`, `border-dft-input`, `bg-dft-accent`, etc. via `buttonVariants()`) | Resolved in button baseline, not redeclared here; underlying variables verifiable at `app/globals.css` lines ~1109–~1128 (light) / ~1714–~1734 (dark) |

Non-`dft` hardcoded color: `bg-black/80` (Tailwind default palette, not a `dft-*` token).

## 12. Upgrade-Sensitive Areas

- No `cva` tables in this file — but tight coupling to `buttonVariants` from `@/registry/default/ui/button`: any change to button's `cva` keys, defaults, or token classes silently restyles `AlertDialogAction`/`AlertDialogCancel`.
- Arbitrary values (quoted exactly): `"left-[50%]"`, `"top-[50%]"`, `"translate-x-[-50%]"`, `"translate-y-[-50%]"`, `"data-[state=closed]:slide-out-to-top-[48%]"`, `"data-[state=open]:slide-in-from-top-[48%]"` — centering/slide math depends on these literals; the `48%` vs `50%` asymmetry is a carried quirk.
- Hardcoded tokens: `border-dft-border`, `bg-dft-background`, `text-dft-muted-foreground`, `sm:rounded-dft-lg`, `bg-black/80` (all quoted in §4).
- Quirks: `AlertDialogHeader` and `AlertDialogFooter` are plain function components without `forwardRef` (unlike every other ref-forwarding export); `AlertDialogFooter` sets `displayName` on a non-`forwardRef` function. Cancel spacing `"mt-2 sm:mt-0"` assumes footer direction flip.
- Dead code: none observed in source.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/alert-dialog.tsx` in full (141 lines).
- Verified `dft-*` tokens against `app/globals.css` and the archived `context/tailwind.config.ts` radius block; verified the `buttonVariants` import path string as written in source (button file contents documented separately).
- Assumptions: Radix `data-state` values, portal behavior, and `tailwindcss-animate` (`animate-in/out`, `fade-*`, `zoom-*`, `slide-*`) utilities resolve at build time; not executed or rendered.

## 14. Unresolved Questions

1. Is the `48%` (slide) vs `50%` (positioning) asymmetry in the content animation classes intentional?
2. Should `AlertDialogHeader`/`AlertDialogFooter` forward refs for consistency with the other exports?
