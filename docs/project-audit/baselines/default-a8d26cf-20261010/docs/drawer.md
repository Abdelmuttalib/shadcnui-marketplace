# drawer — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/drawer.tsx` (original: `registry/default/ui/drawer.tsx`)
- Line count: 118
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Vaul-based bottom drawer exposing Root/Trigger/Portal/Close/Overlay/Content/Header/Footer/Title/Description.
`Drawer` defaults `shouldScaleBackground` to true with a drag-handle affordance.
No cva variants or size scale; no declarative animation classes in source.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Drawer` | function component | `React.ComponentProps<typeof DrawerPrimitive.Root>` with `shouldScaleBackground` | `shouldScaleBackground = true` |
| `DrawerTrigger` | alias | `DrawerPrimitive.Trigger` | n/a |
| `DrawerPortal` | alias | `DrawerPrimitive.Portal` | n/a |
| `DrawerClose` | alias | `DrawerPrimitive.Close` | n/a |
| `DrawerOverlay` | forwardRef component | `React.ElementRef<typeof DrawerPrimitive.Overlay>`, `React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>` | No defaults; merges `className` |
| `DrawerContent` | forwardRef component | `React.ElementRef<typeof DrawerPrimitive.Content>`, `React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>`; destructures `{ className, children, ...props }` | No defaults; always renders overlay + handle |
| `DrawerHeader` | function component | `React.HTMLAttributes<HTMLDivElement>` | No defaults |
| `DrawerFooter` | function component | `React.HTMLAttributes<HTMLDivElement>` | No defaults |
| `DrawerTitle` | forwardRef component | `React.ElementRef<typeof DrawerPrimitive.Title>`, `React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>` | No defaults |
| `DrawerDescription` | forwardRef component | `React.ElementRef<typeof DrawerPrimitive.Description>`, `React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>` | No defaults |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. |

## 5. Sizes

No size scale. Fixed layout only: content `"fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-dft-border bg-dft-background"`; handle `"mx-auto mt-4 h-2 w-[100px] rounded-full bg-dft-muted"`.

## 6. Interaction States

- Open/closed: no `data-[state]` classes in source.
- Hover / focus / disabled / checked / selected / empty-state / dark: none present in source.
- Responsive: `sm:text-left` on header (from base `"grid gap-1.5 p-4 text-center sm:text-left"`); no other responsive prefixes.

## 7. DOM and Component Structure

- Elements: `DrawerPrimitive.Root` (via `Drawer`), `DrawerPrimitive.Overlay`, `DrawerPrimitive.Content` with injected `<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-dft-muted" />` handle before `{children}`, plain `div` wrappers for header (`"grid gap-1.5 p-4 text-center sm:text-left"`) and footer (`"mt-auto flex flex-col gap-2 p-4"`), `DrawerPrimitive.Title` (`"text-lg font-semibold leading-none tracking-tight"`), `DrawerPrimitive.Description` (`"text-sm text-dft-muted-foreground"`).
- Composition: `DrawerContent` renders `<DrawerPortal><DrawerOverlay /><DrawerPrimitive.Content>handle + children</DrawerPrimitive.Content></DrawerPortal>`.
- Primitives: `vaul` — `Drawer as DrawerPrimitive` (Root, Trigger, Portal, Close, Overlay, Content, Title, Description).

## 8. Behavior

- Background scaling via `shouldScaleBackground={shouldScaleBackground}` — source-derived fact; visual scaling effect is inferred from source only, with no browser verification.
- Bottom-sheet positioning from `fixed inset-x-0 bottom-0` classes — source-derived fact; slide/drag behavior (if any) is delegated to `vaul` and is inferred from source only, with no browser verification.
- No transition/animation classes in source; no animation effect is claimed.

## 9. Accessibility

- Source facts only: uses Vaul `Title` and `Description` primitives; no explicit `aria-*` attributes, roles, labels, focus, or keyboard handlers in this file.
- Any focus-trap / keyboard / screen-reader behavior comes from the `vaul` primitive, not stated in source.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `vaul` — `Drawer as DrawerPrimitive`; `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `border-dft-border` | Content `"fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-dft-border bg-dft-background"` | Unresolved — definition not verified in this doc |
| `bg-dft-background` | Content base above | Unresolved — definition not verified in this doc |
| `bg-dft-muted` | Handle `"mx-auto mt-4 h-2 w-[100px] rounded-full bg-dft-muted"` | Unresolved — definition not verified in this doc |
| `text-dft-muted-foreground` | Description `"text-sm text-dft-muted-foreground"` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Default-prop quirk quoted exactly: `shouldScaleBackground = true` in `({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>)`.
- Arbitrary values quoted exactly: `rounded-t-[10px]` in content base; `w-[100px]` in `"mx-auto mt-4 h-2 w-[100px] rounded-full bg-dft-muted"`.
- Handle is always rendered: `<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-dft-muted" />` before `{children}` — upgrades must preserve order.
- No `data-[state]` animation hooks — do not assume parity with dialog/sheet animation classes.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/drawer.tsx` in full (118 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `drawer`.
- Assumptions: class strings transcribed verbatim; `vaul` runtime semantics not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
