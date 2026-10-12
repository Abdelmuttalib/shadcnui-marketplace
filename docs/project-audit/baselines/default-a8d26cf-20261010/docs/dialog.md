# dialog — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/dialog.tsx` (original: `registry/default/ui/dialog.tsx`)
- Line count: 122
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Radix Dialog wrapper exposing Root/Trigger/Portal/Close/Overlay/Content/Header/Footer/Title/Description.
Centered modal content with overlay, close button, and responsive header/footer layout.
No cva variants or size scale; animations are declarative `data-[state=open]` / `data-[state=closed]` classes only (source contains zero `data-[side]` selectors).

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Dialog` | alias | `DialogPrimitive.Root` | n/a |
| `DialogTrigger` | alias | `DialogPrimitive.Trigger` | n/a |
| `DialogPortal` | alias | `DialogPrimitive.Portal` | n/a |
| `DialogClose` | alias | `DialogPrimitive.Close` | n/a |
| `DialogOverlay` | forwardRef component | `React.ElementRef<typeof DialogPrimitive.Overlay>`, `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>` | No defaults; merges `className` |
| `DialogContent` | forwardRef component | `React.ElementRef<typeof DialogPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>`; destructures `{ className, children, ...props }` | No defaults; always renders `DialogOverlay` + close button |
| `DialogHeader` | function component | `React.HTMLAttributes<HTMLDivElement>` | No defaults |
| `DialogFooter` | function component | `React.HTMLAttributes<HTMLDivElement>` | No defaults |
| `DialogTitle` | forwardRef component | `React.ElementRef<typeof DialogPrimitive.Title>`, `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>` | No defaults |
| `DialogDescription` | forwardRef component | `React.ElementRef<typeof DialogPrimitive.Description>`, `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>` | No defaults |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. |

## 5. Sizes

No size scale. Fixed layout only: content uses `"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-dft-border bg-dft-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-dft-lg"`; close icon `"h-4 w-4"`.

## 6. Interaction States

- Open/closed: `data-[state=open]:animate-in`, `data-[state=closed]:animate-out`, `data-[state=closed]:fade-out-0`, `data-[state=open]:fade-in-0`, `data-[state=closed]:zoom-out-95`, `data-[state=open]:zoom-in-95`, `data-[state=closed]:slide-out-to-left-1/2`, `data-[state=closed]:slide-out-to-top-[48%]`, `data-[state=open]:slide-in-from-left-1/2`, `data-[state=open]:slide-in-from-top-[48%]` on content; `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0` on overlay; `data-[state=open]:bg-dft-accent data-[state=open]:text-dft-muted-foreground` on close button.
- Hover: `hover:opacity-100` (from base `opacity-70`) on close button.
- Focus: `focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2` on close button.
- Disabled: `disabled:pointer-events-none` on close button.
- Responsive: `sm:rounded-dft-lg` (content), `sm:text-left` (header, from base `text-center`), `sm:flex-row sm:justify-end sm:space-x-2` (footer, from base `flex-col-reverse`).
- Checked / selected / empty-state / dark: none present in source.

## 7. DOM and Component Structure

- Elements: `DialogPrimitive.Overlay`, `DialogPrimitive.Content`, `DialogPrimitive.Close` (+ `X` icon + `<span className="sr-only">Close</span>`), plain `div` wrappers for header/footer, `DialogPrimitive.Title`, `DialogPrimitive.Description`.
- Composition: `DialogContent` renders `<DialogPortal><DialogOverlay /><DialogPrimitive.Content>{children} + Close button</DialogPrimitive.Content></DialogPortal>`.
- `DialogHeader` is `<div className="flex flex-col space-y-1.5 text-center sm:text-left">`; `DialogFooter` is `<div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">`; `DialogTitle` base `"text-lg font-semibold leading-none tracking-tight"`; `DialogDescription` base `"text-sm text-dft-muted-foreground"`.
- Primitives: `@radix-ui/react-dialog` Root, Trigger, Portal, Close, Overlay, Content, Title, Description.

## 8. Behavior

- Overlay fade classes (`data-[state=open]:fade-in-0`, `data-[state=closed]:fade-out-0`) — inferred from source to suggest a fade effect; no browser verification.
- Content zoom/slide classes (`data-[state=closed]:zoom-out-95`, `data-[state=open]:zoom-in-95`, `data-[state=closed]:slide-out-to-left-1/2`, `data-[state=closed]:slide-out-to-top-[48%]`, `data-[state=open]:slide-in-from-left-1/2`, `data-[state=open]:slide-in-from-top-[48%]`, `duration-200`) — inferred from source to suggest an animated enter/exit; no browser verification.
- Close-button opacity transition (`transition-opacity`, `hover:opacity-100`) — inferred from source to suggest a hover fade; no browser verification.
- Portal/Focus behavior is delegated to Radix primitives — source-derived fact; no runtime claim made.

## 9. Accessibility

- Source facts only: uses Radix `Title` and `Description` primitives; close button contains `<span className="sr-only">Close</span>` and an `X` icon (`className="h-4 w-4"`); close button has `focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2`.
- No explicit `aria-*` attributes, `role`, or keyboard handlers in this file; keyboard/focus-trap behavior (if any) comes from the Radix primitive, not stated in source.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `@radix-ui/react-dialog` as `DialogPrimitive`; `lucide-react` — `X`; `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `border-dft-border` | Content base | Unresolved — definition not verified in this doc |
| `bg-dft-background` | Content base | Unresolved — definition not verified in this doc |
| `rounded-dft-lg` | Content `sm:rounded-dft-lg` | Unresolved — definition not verified in this doc |
| `rounded-dft-sm` | Close button base | Unresolved — definition not verified in this doc |
| `ring-offset-dft-background` | Close button `ring-offset-dft-background` | Unresolved — definition not verified in this doc |
| `ring-dft-ring` | Close button `focus:ring-dft-ring` | Unresolved — definition not verified in this doc |
| `bg-dft-accent` | Close button `data-[state=open]:bg-dft-accent` | Unresolved — definition not verified in this doc |
| `text-dft-muted-foreground` | Close button `data-[state=open]:text-dft-muted-foreground`; Description `"text-sm text-dft-muted-foreground"` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Arbitrary-value centering/positions quoted exactly: `"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 ... data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]"`.
- Close button class quoted exactly: `"absolute right-4 top-4 rounded-dft-sm opacity-70 ring-offset-dft-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-dft-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-dft-accent data-[state=open]:text-dft-muted-foreground"`.
- Overlay class quoted exactly: `"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"`.
- `DialogContent` always injects `<DialogOverlay />` and `<DialogPrimitive.Close>` around `{children}` — upgrades must preserve this composition.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/dialog.tsx` in full (122 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `dialog`.
- Assumptions: class strings transcribed verbatim; animation/portal semantics not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
