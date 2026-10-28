# sonner — Default Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sonner.tsx`
- Line count: 32
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static audit of the verbatim baseline copy; no edits to sources; no runtime or browser verification.

## 2. Executive Summary

Single-export `Toaster` passthrough over `sonner`'s `Sonner` with theme from `next-themes`.
Props type `ToasterProps` mirrors `Sonner` props; all extra props spread through.
Toast/description/action/cancel styling uses grouped `dft-*` classes with a `ts-expect-error` guard.
No cva variant or size scale exists; no browser verification.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `ToasterProps` | Type alias (NOT exported — source fact) | `React.ComponentProps<typeof Sonner>` | n/a |
| `Toaster` | Function component wrapping `Sonner` | `( { ...props }: ToasterProps )` — full passthrough plus hardcoded `theme`, `className`, `toastOptions` | `theme = "system"` via `const { theme = "system" } = useTheme();`; cast `theme as ToasterProps["theme"]` |

`Toaster` spreads `{...props}` last (after `theme`, `className`, and `toastOptions`), so caller props win on conflicts *including* the explicit `theme`/`className`/`toastOptions` positions (source order fact; precedence inferred from source).

## 4. Variants

None — no `cva` variant scale in source.

| Key | Classes |
|---|---|
| none | n/a |

## 5. Sizes

No size scale in source.

| Key | Classes |
|---|---|
| no size scale | n/a |

## 6. Interaction States

- Hover/focus/disabled/checked/open/selected: none in source.
- Dark: no `dark:` classes; dark-mode support is via `theme` passthrough from `useTheme()` (`"system"` default) — source fact, effect inferred from source.
- Responsive: no `sm:`/`md:` classes.
- Present: group-scoped styling hooks `toaster`, `group`, `toast` (see section 7); no state selectors.

## 7. DOM and Component Structure

- Elements: `Sonner` (from `"sonner"`) rendered with `theme`, `className="toaster group"`, `toastOptions.classNames`, and `{...props}`.
- `toastOptions.classNames` (quoted exactly):
  - toast: `"group toast group-[.toaster]:bg-dft-background group-[.toaster]:text-dft-foreground group-[.toaster]:border-dft-border group-[.toaster]:shadow-lg"`
  - description: `"group-[.toast]:text-dft-muted-foreground"`
  - actionButton: `"group-[.toast]:bg-dft-primary group-[.toast]:text-dft-primary-foreground"`
  - cancelButton: `"group-[.toast]:bg-dft-muted group-[.toast]:text-dft-muted-foreground"`
- Theme plumbing: `const { theme = "system" } = useTheme();` then `theme={theme as ToasterProps["theme"]}` (quoted exactly).

## 8. Behavior

- Full prop passthrough `{...props}` to `Sonner` — source fact; passthrough effect inferred from source (no browser verification).
- Theme follows `next-themes` `useTheme()` with `"system"` fallback — source fact; theming effect inferred from source.
- Group selectors (`group-[.toaster]:*`, `group-[.toast]:*`) scope toast styling under the `toaster group` root — inferred from source.
- No transitions, animations, timers, or imperative logic in this file. No runtime/browser verification performed.

## 9. Accessibility

- Source facts only: no ARIA, roles, keyboard handling, focus management, or labels in this file; toast accessibility comes from `sonner` (not inspected beyond import).
- No `aria-*`, `tabIndex`, `sr-only`, or focus classes in source.

## 10. Imports and Dependencies

- External: `react` (types via `React.ComponentProps`), `next-themes` (`useTheme`), `sonner` (`Toaster as Sonner`).
- Internal: none (`cn` not used; no `@/lib/utils` or `@/registry/default` links).

## 11. Token Dependencies

| Token | Usage | Resolved value |
|---|---|---|
| `dft-background` | toast `group-[.toaster]:bg-dft-background` | unresolved |
| `dft-foreground` | toast `group-[.toaster]:text-dft-foreground` | unresolved |
| `dft-border` | toast `group-[.toaster]:border-dft-border` | unresolved |
| `dft-muted-foreground` | description `group-[.toast]:text-dft-muted-foreground`; cancel `group-[.toast]:text-dft-muted-foreground` | unresolved |
| `dft-primary` | action `group-[.toast]:bg-dft-primary` | unresolved |
| `dft-primary-foreground` | action `group-[.toast]:text-dft-primary-foreground` | unresolved |
| `dft-muted` | cancel `group-[.toast]:bg-dft-muted` | unresolved |

All values unresolved (not verified against token files).

## 12. Upgrade-Sensitive Areas

- Shadow-function (`cn`) forms: none — `cn` is not imported or used in this file (source fact).
- Travel: n/a.
- Quirks / dead code (quoted exactly):
  - `// @ts-expect-error - TODO: fix types` above `classNames:` (suppresses the type error on the `toastOptions` override — inferred from source).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/sonner.tsx` in full (32 lines).
- Quoted `ToasterProps`, theme plumbing, and all four `classNames` strings directly; confirmed `ToasterProps` absent from the export block (`export { Toaster };` only).
- Assumptions: `useTheme` and `Sonner` behave per their packages (not audited); token values not resolved.

## 14. Unresolved Questions

None.
