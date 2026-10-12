# form — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/form.tsx` (original: `registry/default/ui/form.tsx`)
- Line count: 179
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

React-hook-form wrapper providing `Form`, `FormField`, `useFormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`.
Field/item IDs are derived via contexts plus `useId` and wired to `aria-describedby`/`aria-invalid`.
No cva variants, sizes, or animation classes; error styling is conditional `dft-destructive` classes.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Form` | alias | `FormProvider` (react-hook-form) | n/a |
| `FormFieldContextValue<TFieldValues, TName>` | type (not exported) | `{ name: TName }` with `TFieldValues extends FieldValues = FieldValues`, `TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>` | Generic defaults `FieldValues`, `FieldPath<TFieldValues>` |
| `FormFieldContext` | context (not exported) | `React.createContext<FormFieldContextValue>({} as FormFieldContextValue)` | Cast empty object |
| `FormField<TFieldValues, TName>` | function component (exported) | `ControllerProps<TFieldValues, TName>`; provides `<FormFieldContext.Provider value={{ name: props.name }}><Controller {...props} /></FormFieldContext.Provider>` | Generic defaults as above |
| `useFormField` | hook (exported) | No args; reads `FormFieldContext`, `FormItemContext`, `useFormContext()` (`getFieldState`, `formState`); returns `{ id, name, formItemId, formDescriptionId, formMessageId, ...fieldState }` | n/a |
| `FormItemContextValue` | type (not exported) | `{ id: string }` | n/a |
| `FormItemContext` | context (not exported) | `React.createContext<FormItemContextValue>({} as FormItemContextValue)` | Cast empty object |
| `FormItem` | forwardRef component | `HTMLDivElement`, `React.HTMLAttributes<HTMLDivElement>`; creates `id = React.useId()` and provides `FormItemContext` | Wrapper class `"space-y-2"` |
| `FormLabel` | forwardRef component | `React.ElementRef<typeof LabelPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>`; uses `{ error, formItemId } = useFormField()` | Conditional `error && "text-dft-destructive"`; `htmlFor={formItemId}` |
| `FormControl` | forwardRef component | `React.ElementRef<typeof Slot>`, `React.ComponentPropsWithoutRef<typeof Slot>`; uses `{ error, formItemId, formDescriptionId, formMessageId }` | `id={formItemId}`, `aria-describedby={!error ? formDescriptionId : formDescriptionId + " " + formMessageId}`, `aria-invalid={!!error}` |
| `FormDescription` | forwardRef component | `HTMLParagraphElement`, `React.HTMLAttributes<HTMLParagraphElement>`; uses `{ formDescriptionId }` | `id={formDescriptionId}`, class `"text-sm text-dft-muted-foreground"` |
| `FormMessage` | forwardRef component | `HTMLParagraphElement`, `React.HTMLAttributes<HTMLParagraphElement>` + `{ children }`; uses `{ error, formMessageId }`; `body = error ? String(error?.message) : children`; returns `null` when `!body` | `id={formMessageId}`, class `"text-sm font-medium text-dft-destructive"` |

ID scheme (source-derived): `id` from `React.useId()`; `formItemId = `${id}-form-item``; `formDescriptionId = `${id}-form-item-description``; `formMessageId = `${id}-form-item-message``.

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. Error styling is a conditional class, not a variant. |

## 5. Sizes

No size scale. Fixed classes only: `"space-y-2"`, `"text-sm text-dft-muted-foreground"`, `"text-sm font-medium text-dft-destructive"`.

## 6. Interaction States

- Error: `error && "text-dft-destructive"` on `FormLabel`; `aria-invalid={!!error}` and expanded `aria-describedby` on `FormControl`; `FormMessage` renders error text when present, else `children`, else `null`.
- Hover / focus / disabled / checked / open / selected / empty-state / dark / responsive: none present in source.

## 7. DOM and Component Structure

- Elements: `FormProvider` (aliased), `Controller` inside context provider, `div` (`FormItem`), `Label` (from `@/registry/default/ui/label`) for `FormLabel`, `Slot` (Radix) for `FormControl`, `p` for `FormDescription`/`FormMessage`.
- Composition: `FormField` > `FormFieldContext.Provider` > `Controller`; `FormItem` > `FormItemContext.Provider` > `div`; `FormLabel` sets `htmlFor={formItemId}`; `FormControl` sets `id`/`aria-*` on `Slot`; `FormDescription`/`FormMessage` set matching `id`s on `p` elements.
- Primitives: `@radix-ui/react-label` (`LabelPrimitive.Root`), `@radix-ui/react-slot` (`Slot`), `react-hook-form` (`Controller`, `FormProvider`, `useFormContext`).

## 8. Behavior

- `FormMessage` conditional quoted exactly: `const body = error ? String(error?.message) : children;` followed by `if (!body) { return null; }` — source-derived fact; any show/hide effect is inferred from source only, with no browser verification.
- `FormControl` id/aria wiring — source-derived fact; any assistive-technology effect is inferred from source only, with no browser verification.
- Guard quoted exactly: `if (!fieldContext) { throw new Error("useFormField should be used within <FormField>"); }` — source-derived fact; note `fieldContext` defaults to a cast empty object so the guard is falsy-safe only per source text, with no runtime claim.
- No transitions or animations in source; no animation effect is claimed.

## 9. Accessibility

- Source facts only: `FormControl` sets `id={formItemId}`, `aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}`, `aria-invalid={!!error}`; `FormLabel` sets `htmlFor={formItemId}`; `FormDescription` sets `id={formDescriptionId}`; `FormMessage` sets `id={formMessageId}`.
- Labels: `FormLabel` renders internal `Label`; association is via `htmlFor`/`id` in source.
- Keyboard/focus: no keyboard handlers or focus management in source; error text comes from `String(error?.message)` or `children`.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `@radix-ui/react-label` as `LabelPrimitive`; `@radix-ui/react-slot` — `Slot`; `react`; `react-hook-form` — `Controller`, `ControllerProps`, `FieldPath`, `FieldValues`, `FormProvider`, `useFormContext`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: `@/registry/default/ui/label` (exact path) — `Label` used by `FormLabel`.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `text-dft-destructive` | `FormLabel` conditional `error && "text-dft-destructive"`; `FormMessage` `"text-sm font-medium text-dft-destructive"` | Unresolved — definition not verified in this doc |
| `text-dft-muted-foreground` | `FormDescription` `"text-sm text-dft-muted-foreground"` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Context defaults are cast empty objects, quoted exactly: `React.createContext<FormFieldContextValue>({} as FormFieldContextValue)` and `React.createContext<FormItemContextValue>({} as FormItemContextValue)`.
- `useFormField` guards `fieldContext` first (`if (!fieldContext) throw ...`), then dereferences `itemContext` via `const { id } = itemContext;` — order is source-exact and upgrade-sensitive.
- ARIA join quoted exactly: `aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}` and `aria-invalid={!!error}`.
- Message fallback quoted exactly: `const body = error ? String(error?.message) : children;` with `if (!body) { return null; }`.
- Label error toggle quoted exactly: `className={cn(error && "text-dft-destructive", className)}`.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/form.tsx` in full (179 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `form`.
- Assumptions: contexts/IDs transcribed verbatim; hook behavior not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

1. Why does `useFormField` check `if (!fieldContext)` when `FormFieldContext` defaults to a cast empty object (truthy)? Source text only; no runtime investigation performed.
