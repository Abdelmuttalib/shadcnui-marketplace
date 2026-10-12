# calendar — Default Style Baseline Audit

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | default-a8d26cf-20261010 |
| Source path | docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/calendar.tsx |
| Source line count | 70 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Read-only source audit of the verbatim copied source; no runtime or browser verification; no modification of sources |

## 2. Executive Summary

Wrapper around `react-day-picker` `DayPicker` exposing `CalendarProps` and `Calendar`.
Styling is a `classNames` map plus `buttonVariants` for nav/day buttons and `cn`-merged icons.
No `cva` table and no size scale exist in this file.
Notable source quirk: the `cell` string contains `rounded-r-dfs-md` alongside `rounded-dft-md` forms.

## 3. Exports and API table

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `CalendarProps` | Type alias | `React.ComponentProps<typeof DayPicker>` | — |
| `Calendar` | Function component | `CalendarProps` destructured as `{ className, classNames, showOutsideDays, ...props }`; sets `Calendar.displayName = "Calendar"` | `showOutsideDays = true` |
| `Calendar` (re-export) | Named export | `export { Calendar }` | — |

## 4. Variants table

No `cva` variant table is present in this source.

| Key | Exact classes |
|---|---|
| none | No `cva` defined in this file; visual variants come from `buttonVariants({ variant: "outline" })` for `nav_button` and `buttonVariants({ variant: "ghost" })` for `day`, plus the `classNames` map below (source-derived, not a local `cva`) |

`classNames` map exact strings (source-derived):

| Slot | Exact class string |
|---|---|
| root `className` | `"p-3"` merged via `cn("p-3", className)` |
| `months` | `"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"` |
| `month` | `"space-y-4"` |
| `caption` | `"flex justify-center pt-1 relative items-center"` |
| `caption_label` | `"text-sm font-medium"` |
| `nav` | `"space-x-1 flex items-center"` |
| `nav_button` | `cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100")` |
| `nav_button_previous` | `"absolute left-1"` |
| `nav_button_next` | `"absolute right-1"` |
| `table` | `"w-full border-collapse space-y-1"` |
| `head_row` | `"flex"` |
| `head_cell` | `"text-dft-muted-foreground rounded-dft-md w-9 font-normal text-[0.8rem]"` |
| `row` | `"flex w-full mt-2"` |
| `cell` | `"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-dft-accent/50 [&:has([aria-selected])]:bg-dft-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-dfs-md focus-within:relative focus-within:z-20"` |
| `day` | `cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100")` |
| `day_range_end` | `"day-range-end"` |
| `day_selected` | `"bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary hover:text-dft-primary-foreground focus:bg-dft-primary focus:text-dft-primary-foreground"` |
| `day_today` | `"bg-dft-accent text-dft-accent-foreground"` |
| `day_outside` | `"day-outside text-dft-muted-foreground aria-selected:bg-dft-accent/50 aria-selected:text-dft-muted-foreground"` |
| `day_disabled` | `"text-dft-muted-foreground opacity-50"` |
| `day_range_middle` | `"aria-selected:bg-dft-accent aria-selected:text-dft-accent-foreground"` |
| `day_hidden` | `"invisible"` |
| icons | `"h-4 w-4"` merged via `cn("h-4 w-4", className)` for `ChevronLeft` / `ChevronRight` |

Caller-supplied `classNames` are spread last (`...classNames`) and therefore override the built-ins.

## 5. Sizes table

No size scale is defined in this source.

| Size | Classes |
|---|---|
| no size scale | Fixed dimensions only: nav button `"h-7 w-7"`, head cell `"w-9"`, cell/day `"h-9 w-9"`, icons `"h-4 w-4"`, weekday label `"text-[0.8rem]"` |

## 6. Interaction States

Source-derived states (class strings quoted exactly):

- Hover: `"hover:opacity-100"` on `nav_button`; `"hover:bg-dft-primary hover:text-dft-primary-foreground"` on `day_selected`.
- Focus: `"focus:bg-dft-primary focus:text-dft-primary-foreground"` on `day_selected`; `"focus-within:relative focus-within:z-20"` on `cell`.
- Disabled: `"text-dft-muted-foreground opacity-50"` on `day_disabled` (styling only; disabled logic comes from `DayPicker`).
- Selected / range: `"aria-selected:opacity-100"` on `day`; `day_selected`, `day_range_middle` (`"aria-selected:bg-dft-accent aria-selected:text-dft-accent-foreground"`), `day_outside` (`"aria-selected:bg-dft-accent/50 aria-selected:text-dft-muted-foreground"`), and `cell` `[&:has([aria-selected])]` / `[&:has([aria-selected].day-range-end)]` / `[&:has([aria-selected].day-outside)]` selectors.
- Outside / hidden / today: `day_outside` includes `"day-outside text-dft-muted-foreground ..."`; `day_hidden` is `"invisible"`; `day_today` is `"bg-dft-accent text-dft-accent-foreground"`.
- Dark: no `dark:` class is present in this file.
- Responsive: `"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"` on `months` (stack on base, row from `sm:`).

## 7. DOM and Component Structure

- Root element in this file is `<DayPicker>` from `react-day-picker`; all DOM below it is rendered by that library.
- This file passes `showOutsideDays`, `className`, `classNames`, `components`, and `{...props}` through to `DayPicker`.
- Custom `components` map: `IconLeft` renders `<ChevronLeft>` and `IconRight` renders `<ChevronRight>`, each with `cn("h-4 w-4", className)` and prop spread.
- Composition: `Calendar` is a single function component; `Calendar.displayName = "Calendar"`.
- `classNames` keys target DayPicker slots (`months`, `month`, `caption`, `caption_label`, `nav`, `nav_button`, `nav_button_previous`, `nav_button_next`, `table`, `head_row`, `head_cell`, `row`, `cell`, `day`, `day_range_end`, `day_selected`, `day_today`, `day_outside`, `day_disabled`, `day_range_middle`, `day_hidden`).

## 8. Behavior

- Outside-day rendering is controlled by the `showOutsideDays` prop (default `true`) passed to `DayPicker` (inferred from source — prop pass-through; no browser verification).
- Caller `classNames` override built-ins because `...classNames` is spread last in the object literal (inferred from source — object spread ordering; no browser verification).
- Caller `className` is appended after `"p-3"` via `cn` (inferred from source — `cn` merge; no browser verification).
- Hover opacity change on nav buttons (`opacity-50` → `hover:opacity-100`) is an inferred visual effect from source (inferred from source; no browser verification).
- Selected/range/today/outside/disabled appearance changes described under Interaction States are inferred visual effects from source (inferred from source; no browser verification).
- No transitions or animations are declared in this file (source-derived fact — no `transition-*` / `animate-*` strings present).

## 9. Accessibility

Source facts only; no runtime or screen-reader verification:

- `aria-selected`-based selectors are used for styling (`aria-selected:opacity-100`, `aria-selected:bg-...`, `[&:has([aria-selected])]` forms); these reflect attributes rendered by `DayPicker`, not ARIA attributes added in this file.
- No `role`, `aria-*` attribute, keyboard handler, focus-management, or label text is added in this file.
- Keyboard, focus order, and labeling behavior are inherited from `react-day-picker` and are not verifiable from this source.

## 10. Imports and Dependencies

| Import | Kind | Exact path / specifier |
|---|---|---|
| `ChevronLeft, ChevronRight` | External | `lucide-react` |
| `React` | External | `react` |
| `DayPicker` | External | `react-day-picker` |
| `cn` | Internal | `@/lib/utils` |
| `buttonVariants` | Internal | `@/registry/default/ui/button` |

Internal link with exact path: `calendar.tsx` → `buttonVariants` from `@/registry/default/ui/button` (used for `nav_button` with `variant: "outline"` and `day` with `variant: "ghost"`).

## 11. Token Dependencies

Each `dft-*` token found in exact class strings; values not verified in this audit (unresolved where not verified):

| Token | Found in | Status |
|---|---|---|
| `dft-muted-foreground` | `head_cell`, `day_outside`, `day_disabled` | Unresolved — token value not verified |
| `dft-accent` | `cell` (`bg-dft-accent`, `bg-dft-accent/50`), `day_today`, `day_outside` (`aria-selected:bg-dft-accent/50`), `day_range_middle` | Unresolved — token value not verified |
| `dft-primary` | `day_selected` (`bg-dft-primary`, `hover:bg-dft-primary`, `focus:bg-dft-primary`) | Unresolved — token value not verified |
| `dft-primary-foreground` | `day_selected` | Unresolved — token value not verified |
| `dft-accent-foreground` | `day_today`, `day_range_middle` | Unresolved — token value not verified |
| `dft-md` (radius) | `head_cell` (`rounded-dft-md`) | Unresolved — token value not verified |
| `dfs-md` in `rounded-r-dfs-md` | `cell` (`last:[&:has([aria-selected])]:rounded-r-dfs-md`) | Unresolved — appears to be a typo; token not verified, see Upgrade-Sensitive Areas |

Non-`dft` radius `rounded-r-md` and `rounded-l-md` in `cell` selectors are hardcoded Tailwind defaults (source-derived).

## 12. Upgrade-Sensitive Areas

- No `cva` table to migrate; styling is a flat `classNames` object plus `buttonVariants` calls — changes to `buttonVariants` (at `@/registry/default/ui/button`) will silently restyle nav/day buttons.
- Arbitrary value: `"text-[0.8rem]"` in `head_cell` — verify Tailwind arbitrary-value handling on upgrade.
- Complex arbitrary selectors in `cell`: `"[&:has([aria-selected].day-range-end)]:rounded-r-md"`, `"[&:has([aria-selected].day-outside)]:bg-dft-accent/50"`, `"[&:has([aria-selected])]:bg-dft-accent"`, `"first:[&:has([aria-selected])]:rounded-l-md"`, `"last:[&:has([aria-selected])]:rounded-r-dfs-md"` — fragile against `react-day-picker` DOM/attribute changes and Tailwind `:has()` support.
- Quirk — possible typo, quoted exactly: `"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-dft-accent/50 [&:has([aria-selected])]:bg-dft-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-dfs-md focus-within:relative focus-within:z-20"` — note `rounded-r-dfs-md` (with `dfs`) versus `rounded-dft-md` elsewhere.
- Hardcoded (non-token) classes mixed with tokens: `"p-3"`, `"h-7 w-7 bg-transparent p-0 opacity-50"`, `"absolute left-1"`, `"absolute right-1"`, `"h-9 w-9"`, `"invisible"`, `"day-range-end"`, `"day-outside"`.
- `react-day-picker` slot-key contract (`months`, `caption_label`, `day_range_middle`, etc.) is upgrade-sensitive; renamed/removed slots would silently drop styling.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/calendar.tsx` (70 lines total), read-only; no edits made.
- Verified by inspection: export list, prop signature and default, `classNames`/`components` pass-through, exact class strings, `buttonVariants` call sites, absence of `cva` and `dark:` classes.
- Assumptions: `cn` merges class strings; `buttonVariants` resolves variants from `@/registry/default/ui/button`; `DayPicker` renders the documented slots and `aria-selected` attributes. No runtime, visual, or browser verification was performed.

## 14. Unresolved Questions

1. Is `rounded-r-dfs-md` in the `cell` string an intentional token or a typo for `rounded-r-dft-md`?
2. What are the resolved values of the `dft-*` color/radius tokens (not verified in this audit)?
3. Which `react-day-picker` version's slot names and `aria-selected` DOM does this `classNames` map target?
