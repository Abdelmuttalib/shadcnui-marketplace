# input-otp — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/input-otp.tsx` (original: `registry/default/ui/input-otp.tsx`)
- Line count: 71
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

OTP input wrapper around `input-otp` primitives (`OTPInput`, `OTPInputContext`) with Group/Slot/Separator parts.
Slots read `char`/`hasFakeCaret`/`isActive` from context and render a caret indicator.
No cva variants or size scale; disabled/active styling is declarative classes only.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `InputOTP` | forwardRef component | `React.ElementRef<typeof OTPInput>`, `React.ComponentPropsWithoutRef<typeof OTPInput>`; destructures `{ className, containerClassName, ...props }`; passes `containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}`, `className={cn("disabled:cursor-not-allowed", className)}`; `displayName = "InputOTP"` | No defaults beyond `cn` merge |
| `InputOTPGroup` | forwardRef component | `React.ElementRef<"div">`, `React.ComponentPropsWithoutRef<"div">`; `displayName = "InputOTPGroup"` | Wrapper class `"flex items-center"` |
| `InputOTPSlot` | forwardRef component | `React.ElementRef<"div">`, `React.ComponentPropsWithoutRef<"div"> & { index: number }`; destructures `{ index, className, ...props }`; reads `React.useContext(OTPInputContext)` → `const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]`; `displayName = "InputOTPSlot"` | Conditional `isActive && "z-10 ring-2 ring-dft-ring ring-offset-dft-background"` |
| `InputOTPSeparator` | forwardRef component | `React.ElementRef<"div">`, `React.ComponentPropsWithoutRef<"div">`; renders `<div ref={ref} role="separator" {...props}><Dot /></div>`; `displayName = "InputOTPSeparator"` | No defaults |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. `isActive` is a runtime context flag, not a cva variant. |

## 5. Sizes

No size scale. Fixed geometry only: slots `"relative flex h-10 w-10 items-center justify-center border-y border-r border-dft-input text-sm transition-all first:rounded-l-dft-md first:border-l last:rounded-r-dft-md"`; caret `"animate-caret-blink h-4 w-px bg-dft-foreground duration-1000"`.

## 6. Interaction States

- Active: `isActive && "z-10 ring-2 ring-dft-ring ring-offset-dft-background"` on `InputOTPSlot`.
- Disabled: `has-[:disabled]:opacity-50` on container (`"flex items-center gap-2 has-[:disabled]:opacity-50"`); `disabled:cursor-not-allowed` on `OTPInput` (`"disabled:cursor-not-allowed"`).
- Caret: when `hasFakeCaret`, renders `<div className="pointer-events-none absolute inset-0 flex items-center justify-center"><div className="animate-caret-blink h-4 w-px bg-dft-foreground duration-1000" /></div>` plus `{char}`.
- First/last: `first:rounded-l-dft-md first:border-l last:rounded-r-dft-md`.
- Hover / focus / checked / open / selected / empty-state / dark / responsive: none present in source.

## 7. DOM and Component Structure

- Elements: `OTPInput` (from `input-otp`), plain `div` wrappers for group/slot/separator, `Dot` icon (lucide) inside separator.
- Composition: `InputOTP` > `OTPInput`; `InputOTPGroup` > `div className="flex items-center"`; `InputOTPSlot` > `div` with `{char}` + conditional caret overlay; `InputOTPSeparator` > `<div role="separator"><Dot /></div>` (`<Dot />` carries no `className`, so it renders at lucide's default 24px size — source fact, upgrade-sensitive if lucide defaults change).
- Context: `OTPInputContext` consumed via `React.useContext(OTPInputContext)` with indexed access `inputOTPContext.slots[index]`.
- Full slot base quoted exactly: `"relative flex h-10 w-10 items-center justify-center border-y border-r border-dft-input text-sm transition-all first:rounded-l-dft-md first:border-l last:rounded-r-dft-md"`.

## 8. Behavior

- `transition-all` on slots — inferred from source to suggest animated change on active-state toggling; no browser verification.
- Caret blink classes (`animate-caret-blink`, `duration-1000`) — inferred from source to suggest a blinking caret; no browser verification.
- Active ring (`ring-2 ring-dft-ring ring-offset-dft-background`, `z-10`) — inferred from source to suggest highlighting of the active slot; no browser verification.
- Disabled opacity/cursor classes (`has-[:disabled]:opacity-50`, `disabled:cursor-not-allowed`) — inferred from source to suggest dimmed/non-interactive appearance; no browser verification.

## 9. Accessibility

- Source facts only: separator uses `role="separator"`; disabled styling hooks (`has-[:disabled]`, `disabled:`) without explicit `aria-disabled` in this file.
- No explicit `aria-*` (other than implied native input semantics inside `OTPInput`), labels, focus management, or keyboard handlers in this file; input semantics are delegated to `input-otp`.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `input-otp` — `OTPInput`, `OTPInputContext`; `lucide-react` — `Dot`; `react`.
- Internal: `@/lib/utils` — `cn`.
- Internal `@/registry/default`: none.
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `border-dft-input` | Slot `border-y border-r border-dft-input` | Unresolved — definition not verified in this doc |
| `rounded-l-dft-md` | Slot `first:rounded-l-dft-md` | Unresolved — definition not verified in this doc |
| `rounded-r-dft-md` | Slot `last:rounded-r-dft-md` | Unresolved — definition not verified in this doc |
| `ring-dft-ring` | Slot active `ring-2 ring-dft-ring` | Unresolved — definition not verified in this doc |
| `ring-offset-dft-background` | Slot active `ring-offset-dft-background` | Unresolved — definition not verified in this doc |
| `bg-dft-foreground` | Caret `"animate-caret-blink h-4 w-px bg-dft-foreground duration-1000"` | Unresolved — definition not verified in this doc |

## 12. Upgrade-Sensitive Areas

- Slot context access quoted exactly: `const inputOTPContext = React.useContext(OTPInputContext);` and `const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];` — no bounds/null guard in source; upgrades to `input-otp` slot shape are breaking.
- Prop quirk: `InputOTP` destructures `containerClassName` separately from `className` and merges each with distinct bases: `"flex items-center gap-2 has-[:disabled]:opacity-50"` vs `"disabled:cursor-not-allowed"`.
- `index` is required (`& { index: number }`) with no default.
- Arbitrary/conditional classes quoted exactly: `"has-[:disabled]:opacity-50"`, `isActive && "z-10 ring-2 ring-dft-ring ring-offset-dft-background"`, `"animate-caret-blink h-4 w-px bg-dft-foreground duration-1000"`, `"pointer-events-none absolute inset-0 flex items-center justify-center"`.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/input-otp.tsx` in full (71 lines).
- Cross-checked export list and line count against `MANIFEST.json` entry for `input-otp`.
- Assumptions: context fields and class strings transcribed verbatim; `input-otp` runtime not executed; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
