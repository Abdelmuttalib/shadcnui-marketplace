# resizable — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/resizable.tsx`
- Line count: 45
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Thin wrapper over `react-resizable-panels` with group, panel, and handle exports.
Handle supports optional grip visual and rewrites layout for vertical orientation.
No variants or sizes; direction handled purely through data-attribute classes.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `ResizablePanelGroup` | Function component | `React.ComponentProps<typeof ResizablePrimitive.PanelGroup>`; `{ className, ...props }` | No local defaults |
| `ResizablePanel` | Re-export alias | `typeof ResizablePrimitive.Panel` | — |
| `ResizableHandle` | Function component | `React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }`; destructures `{ withHandle, className, ...props }` | `withHandle` undefined (falsy) → no grip rendered |

Export statement: `export { ResizableHandle, ResizablePanel, ResizablePanelGroup };`.

## 4. Variants

None — no `cva` in source.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No size scale.

## 6. Interaction States

- Focus-visible (source-derived): `"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-dft-ring focus-visible:ring-offset-1"` on handle.
- Direction (source-derived): `"data-[panel-group-direction=vertical]:flex-col"` on group; `"data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0"` plus `"[&[data-panel-group-direction=vertical]>div]:rotate-90"` on handle.
- Hover / disabled / checked / open / selected / active: none in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.

## 7. DOM and Component Structure

- `ResizablePanelGroup` → `<ResizablePrimitive.PanelGroup className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)} {...props} />`.
- `ResizablePanel` → direct alias of `ResizablePrimitive.Panel`.
- `ResizableHandle` → `<ResizablePrimitive.PanelResizeHandle className={cn(...)} {...props}>` with conditional `{withHandle && (<div className="z-10 flex h-4 w-3 items-center justify-center rounded-dft-sm border border-dft-border bg-dft-border"><GripVertical className="h-2.5 w-2.5" /></div>)}`.
- Primitives: `react-resizable-panels`; icon `GripVertical` from `lucide-react`.

## 8. Behavior

- Group lays out horizontally, stacking vertically when direction is vertical — inferred from source (effect inferred from `"flex ..."` + `"data-[panel-group-direction=vertical]:flex-col"`; no browser verification).
- Handle hit-area extends via `after:` pseudo-element and reorients for vertical groups — inferred from source (effects inferred from `"after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2"` and vertical `after:` overrides; no browser verification).
- Grip icon rotates in vertical orientation — inferred from source (effect inferred from `"[&[data-panel-group-direction=vertical]>div]:rotate-90"`; no browser verification).
- Focus ring appears on keyboard focus of handle — inferred from source (effect inferred from `focus-visible:ring-1` classes; no browser verification).

## 9. Accessibility

- Source facts only: relies on `react-resizable-panels` for keyboard resizing, ARIA roles, and focus; no explicit `role`, `aria-*`, or keyboard handlers in this file; handle focus visibility expressed via `focus-visible:` classes.
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"lucide-react"` (`GripVertical`); `"react-resizable-panels"` as `ResizablePrimitive`; `"react"` types via `React.ComponentProps` (no `import * as React` line in source).
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-border` in handle base `"relative flex w-px items-center justify-center bg-dft-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-dft-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90"` (via `bg-dft-border`) and in grip `"z-10 flex h-4 w-3 items-center justify-center rounded-dft-sm border border-dft-border bg-dft-border"` (via `border-dft-border` and `bg-dft-border`).
- `dft-ring` in handle base `"... focus-visible:ring-dft-ring ..."` (same long string).
- `dft-sm` in grip `"... rounded-dft-sm ..."` (same grip string).

Token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- No `React` value import in source despite `React.ComponentProps` type usage — relies on ambient/global `React` types; preserved exactly.
- Conditional grip (exact): `{withHandle && (<div className="z-10 flex h-4 w-3 items-center justify-center rounded-dft-sm border border-dft-border bg-dft-border"><GripVertical className="h-2.5 w-2.5" /></div>)}`.
- Complex selector (exact): `"[&[data-panel-group-direction=vertical]>div]:rotate-90"`.
- `after:` hit-area geometry (exact): `"after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2"` with vertical overrides `"data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0"`.
- Non-token offset (exact): `"focus-visible:ring-offset-1"`.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/resizable.tsx` (45 lines).
- Verified: group/handle class strings, `withHandle?: boolean` type, conditional grip block, missing React import, three-export list.
- Assumptions: none beyond source text; panel library runtime semantics not verified.

## 14. Unresolved Questions

1. Is reliance on global `React` types without a React import intentional for this baseline?
2. Should the grip `div` be reachable for styling given the `rotate-90` selector targets `>div`?
