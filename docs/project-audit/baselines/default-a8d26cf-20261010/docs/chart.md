# chart — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/chart.tsx |
| Source line count | 365 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Recharts wrapper providing `ChartContainer`, tooltip, legend, and `ChartStyle` theming via `ChartConfig` + CSS variables.
Container carries a long arbitrary-selector class string restyling recharts internals with `dft-*` tokens.
Tooltip/legend content components read config through `ChartContext`/`useChart` and a payload-config helper.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `ChartConfig` | Type alias | `{ [k: string]: { label?: React.ReactNode; icon?: React.ComponentType } & ({ color?: string; theme?: never } \| { color?: never; theme: Record<keyof typeof THEMES, string> }) }` | Verbatim per source (keyed off the `THEMES` object) |
| `ChartContainer` | `forwardRef` component | `HTMLDivElement` ref; `React.ComponentProps<"div"> & { config: ChartConfig; children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"] }`; destructures `{ id, className, children, config, ...props }`; `displayName = "Chart"` | No defaults (id optional; falls back to `useId`) |
| `ChartStyle` | Function component | `{ id: string; config: ChartConfig }`; returns `null` when no color entries | — |
| `ChartTooltip` | Re-export | `RechartsPrimitive.Tooltip` | — |
| `ChartTooltipContent` | `forwardRef` component | `HTMLDivElement` ref; `React.ComponentProps<typeof RechartsPrimitive.Tooltip> & React.ComponentProps<"div"> & { hideLabel?: boolean; hideIndicator?: boolean; indicator?: "line" \| "dot" \| "dashed"; nameKey?: string; labelKey?: string }`; `displayName = "ChartTooltip"` | `indicator = "dot"`, `hideLabel = false`, `hideIndicator = false` |
| `ChartLegend` | Re-export | `RechartsPrimitive.Legend` | — |
| `ChartLegendContent` | `forwardRef` component | `HTMLDivElement` ref; `React.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" \| "verticalAlign"> & { hideIcon?: boolean; nameKey?: string }`; `displayName = "ChartLegend"` | `hideIcon = false`, `verticalAlign = "bottom"` |
| `useChart` (internal) | Hook (not exported) | Throws `"useChart must be used within a <ChartContainer />"` when context null | — |
| `getPayloadConfigFromPayload` (internal) | Helper (not exported) | `(config: ChartConfig, payload: unknown, key: string)` | — |

`THEMES` constant (source-derived): `const THEMES = { light: "", dark: ".dark" } as const`.

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined; conditional styling is via `indicator` prop and `verticalAlign`/`nestLabel` branches, not a `cva` table |

Conditional exact strings (source-derived):

| Branch | Exact classes |
|---|---|
| Indicator `dot` | `"h-2.5 w-2.5"` |
| Indicator `line` | `"w-1"` |
| Indicator `dashed` | `"w-0 border-[1.5px] border-dashed bg-transparent"` |
| `nestLabel && dashed` | `"my-0.5"` |
| Tooltip row when `indicator === "dot"` | `"items-center"` appended to `"flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-dft-muted-foreground"` |
| Tooltip text row | `"flex flex-1 justify-between leading-none"` + `nestLabel ? "items-end" : "items-center"` |
| Legend wrapper | `"flex items-center justify-center gap-4"` + `verticalAlign === "top" ? "pb-3" : "pt-3"` |
| Legend item | `"flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-dft-muted-foreground"` |
| Legend swatch | `"h-2 w-2 shrink-0 rounded-[2px]"` with inline `backgroundColor: item.color` |
| Indicator base | `"shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"` with inline `--color-bg` / `--color-border` set to `indicatorColor` |

Container and tooltip exact strings:

| Element | Exact classes |
|---|---|
| `ChartContainer` div | `"flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-dft-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-dft-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-dft-border [&_.recharts-radial-bar-dft-background-sector]:fill-dft-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-dft-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none"` |
| `ChartTooltipContent` root | `"grid min-w-[8rem] items-start gap-1.5 rounded-dft-lg border border-dft-border border-dft-border/50 bg-dft-background px-2.5 py-1.5 text-xs shadow-xl"` |
| Tooltip label | `"font-medium"` merged with `labelClassName` |
| Tooltip name | `"text-dft-muted-foreground"` (inside `"grid gap-1.5"`) |
| Tooltip value | `"font-mono font-medium tabular-nums text-dft-foreground"` |

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed sizing only: `"text-xs"`, `"aspect-video"`, `"min-w-[8rem]"`, `"h-2.5 w-2.5"`, `"h-2 w-2"`; SVG constraints `"[&>svg]:h-2.5 [&>svg]:w-2.5"` and `"[&>svg]:h-3 [&>svg]:w-3"` |

## 6. Interaction States

- Hover / focus / disabled / checked / open: no hover, focus, disabled, checked, or open state classes are present in this file.
- Dark: theming is via the `THEMES` map (`light: ""`, `dark: ".dark"`) generating `[data-chart=<id>]` CSS-variable rules in `ChartStyle`; no `dark:` Tailwind class is present.
- Responsive: `RechartsPrimitive.ResponsiveContainer` wraps children; no responsive Tailwind (`sm:`/`md:`) class is present.
- Active: tooltip renders only `if (!active || !payload?.length) return null`; legend renders only `if (!payload?.length) return null` (source-derived conditionals).

## 7. DOM and Component Structure

- `ChartContainer` renders `ChartContext.Provider` → `<div data-chart={chartId}>` → `<ChartStyle id config>` + `<RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>`; `chartId` is `` `chart-${id || uniqueId.replace(/:/g, "")}` ``.
- `ChartStyle` renders a `<style dangerouslySetInnerHTML>` block generating per-theme `--color-<key>` rules, or `null` when no config entry has `theme` or `color`.
- `ChartTooltipContent` renders tooltip label div plus a `"grid gap-1.5"` list of payload rows (icon or indicator swatch + name + formatted value); uses `formatter`, `labelFormatter`, `hideLabel`, `hideIndicator`, `indicator`, `nameKey`, `labelKey` props.
- `ChartLegendContent` renders a flex wrapper of legend entries (icon or color swatch + label).
- Primitives: `recharts` (`ResponsiveContainer`, `Tooltip`, `Legend`); no Radix/cmdk/embla primitives.

## 8. Behavior

- `chartId` derivation strips colons from `useId` output (inferred from source — `uniqueId.replace(/:/g, "")`; no browser verification).
- `ChartStyle` CSS-variable generation per theme/prefix is an inferred styling effect from source (inferred from source; no browser verification).
- `getPayloadConfigFromPayload` key-resolution (direct key → nested `payload[key]` → config fallback) is inferred logic from source (inferred from source; no browser verification).
- `nestLabel` (`payload.length === 1 && indicator !== "dot"`) moves the label inside the row (inferred from source — conditional rendering; no browser verification).
- Value formatting via `item.value.toLocaleString()` is an inferred display effect from source (inferred from source; no browser verification).
- Recharts selectors (e.g. `[&_.recharts-sector]:outline-none`) restyling chart internals are inferred visual effects from source (inferred from source; no browser verification).
- No CSS transitions or animations are declared in this file (source-derived fact — no `transition-*` / `animate-*` strings present).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- No `role`, `aria-*` attribute, keyboard handler, focus-management, or label association is present in this file.
- Tooltip/legend content is plain `<div>` markup; chart semantics come from `recharts` and are not verifiable from this source.
- `useChart`/`getPayloadConfigFromPayload` provide no accessibility affordances in source.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `React` | External | `react` |
| `RechartsPrimitive` | External | `recharts` |
| `cn` | Internal | `@/lib/utils` |

No internal `@/registry/default` links are present in this file.

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-muted-foreground` | Container tick selector; tooltip row `[&>svg]:text-dft-muted-foreground`; tooltip name `"text-dft-muted-foreground"`; legend `[&>svg]:text-dft-muted-foreground` | Unresolved — token value not verified |
| `dft-border` | `[&_.recharts-curve.recharts-tooltip-cursor]:stroke-dft-border`; `[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-dft-border`; tooltip `"border-dft-border border-dft-border/50"` | Unresolved — token value not verified |
| `dft-muted` | `[&_.recharts-radial-bar-dft-background-sector]:fill-dft-muted`; `[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-dft-muted` | Unresolved — token value not verified |
| `dft-background` | Tooltip `"bg-dft-background"` | Unresolved — token value not verified |
| `dft-foreground` | Tooltip value `"text-dft-foreground"` | Unresolved — token value not verified |
| `dft-lg` (radius) | Tooltip `"rounded-dft-lg"` | Unresolved — token value not verified |

Non-`dft` hardcoded forms in the same string (source-derived): `stroke-border/50`, `stroke-border`, `stroke-transparent` — these reference the default `border` palette, not `dft-border`.

## 12. Upgrade-Sensitive Areas

- No `cva` table; the container's long arbitrary-selector string is the main upgrade surface — it pins recharts internal class/attribute selectors (`recharts-cartesian-axis-tick_text`, `recharts-cartesian-grid_line[stroke='#ccc']`, `recharts-curve.recharts-tooltip-cursor`, `recharts-dot[stroke='#fff']`, `recharts-layer`, `recharts-polar-grid_[stroke='#ccc']`, `recharts-radial-bar-dft-background-sector`, `recharts-rectangle.recharts-tooltip-cursor`, `recharts-reference-line_[stroke='#ccc']`, `recharts-sector[stroke='#fff']`, `recharts-sector`, `recharts-surface`).
- Quirk — mangled selector, quoted exactly: `"[&_.recharts-radial-bar-dft-background-sector]:fill-dft-muted"` — upstream recharts uses `recharts-radial-bar-background-sector`; the `dft-` infix means this selector may never match.
- Mixed token namespaces in one string: `stroke-border/50` and `stroke-border` (non-`dft`) alongside `stroke-dft-border` — inconsistent; verify intended palette.
- Arbitrary values: `"min-w-[8rem]"`, `"border-[--color-border]"`, `"bg-[--color-bg]"`, `"border-[1.5px]"`, `"rounded-[2px]"` — verify Tailwind arbitrary-value handling on upgrade.
- `dangerouslySetInnerHTML` CSS generation with `--color-<key>` variable names is injection-shaped; config keys flow into CSS text (source-derived fact).
- Hardcoded `chart-` id prefix, `":"` stripping, `data-chart` attribute contract, and `THEMES` (`{ light: "", dark: ".dark" }`) coupling to a `.dark` class strategy are upgrade-sensitive.
- Display-name mismatch (source-derived): `ChartContainer.displayName = "Chart"` while the export is `ChartContainer`.
- Keying choices `key={item.dataKey}` (tooltip rows) and `key={item.value}` (legend rows) risk collisions on upgrade.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/chart.tsx` (365 lines total), read-only; no edits made.
- Verified by inspection: exports, `ChartConfig`/`THEMES` shapes, container/tooltip/legend class strings, conditional branches, `ChartStyle` generation, helper logic, absence of `cva`.
- Assumptions: `recharts` exposes `ResponsiveContainer`/`Tooltip`/`Legend` with the internal class names referenced; `cn` merges classes. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. Is `[&_.recharts-radial-bar-dft-background-sector]` a typo for the upstream `recharts-radial-bar-background-sector` selector?
2. Are `stroke-border/50` and `stroke-border` intended to be `stroke-dft-border` variants?
3. What are the resolved values of the `dft-*` tokens (not verified in this audit)?
4. Which `recharts` version's internal class/attribute names does the container string target?
