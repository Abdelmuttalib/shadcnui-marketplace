# Neon Radio-Group vs Default

## 1. Audit Metadata

- Style: neon
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/neon/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon restyles the item to a rounded-square (`rounded-neon-md`) translucent
`bg-neon-input/40` face with an `input` border and added checked border, and
renders the selected state as a **dot** (`span h-2 w-2`) instead of the lucide
Circle — owner decision B, documented as a design exception. Ring-2/offset-2
retained. `Circle` import retained but commented out at use site.

## 3. Base Classes

Root identical. Item (`neon:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `rounded-full` | `rounded-neon-md` | Circle → square utility (square via `--neon-radius: 0rem`) | Only non-round radio item in the system | UNVERIFIED (concern SHAPE) |
| `border-dft-primary` | `border-neon-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| (none) | `bg-neon-input/40` | Added translucent resting fill (mirrors neon checkbox) | Tinted face | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-neon-primary` | Added | Checked border matches | UNVERIFIED (concern COLOR) |
| text/ring-2/offset-2/disabled | `neon` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; item stays 16px. Indicator content is an 8px square dot (§7).

## 6. Interaction States

Hover: none. Focus: identical ring-2/offset-2. Checked: border recolor + dot
(§7); no fill wash. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Indicator identical except content (`neon:36-39`): `{/* <Circle className="h-2.5
w-2.5 fill-current text-current" /> */}` commented out, replaced by `<span
className="h-2 w-2 bg-neon-primary">`. Inferred: 8px square dot (no
`rounded-full`, no `fill-current`) in primary color. Radix `Indicator`
state-conditional rendering preserved; only the glyph differs. Note the dot
lacks `rounded-full`, so it renders square — recorded as observed fact; whether
the squareness is deliberate is unresolved (see §15.2).

## 8. Props, Exports, and API

`RadioGroup`, `RadioGroupItem` exports, props, `displayName`s identical.
PARITY_EXPECTED for API.

## 9. Behavior and Accessibility

Established from source (no browser/runtime check): Radix `Item`/`Indicator`
primitives retained, so keyboard interaction is unchanged at source level, and —
by inference — state exposure flows through Radix unchanged (no ARIA attributes
in either file to diverge). Indicator visibility: dot mounts only when the item
is checked (Radix `Indicator` semantics) — inferred. Dot/fill contrast
unmeasured — no claim.

## 10. Imports and Dependencies

`import { Circle } from "lucide-react"` (`neon:4`) retained at top but the only
use is commented out — effectively dead. PARITY_DIVERGENCE, Open (concern
TECHNICAL): remove the import (or restore the icon). No new dependencies.

## 11. Token Dependencies

`neon-*`: `--neon-primary: 63.01% 0.1238 162.83` (dot + checked border),
`--neon-input` at 40% (resting fill), `--neon-radius: 0rem` (square item).

## 12. Typography and Global Styling

No text. Glyph swap per §7.

## 13. Findings and Upgrade Preservation

Findings: (1) dot indicator — DESIGN_EXCEPTION (owner decision B; behavior
established unchanged at source level per §9 — registered in
`DESIGN_EXCEPTIONS.md` under Approved exceptions); (2) square item + translucent
face + checked border — UNVERIFIED; (3) dead `Circle` import — PARITY_DIVERGENCE
(remove). Migration: preserve dot span + square utility + fills exactly; clean
the import.

## 14. Verification

Both files read fully. Dead-import claim verified (no other `Circle` reference
outside line 4 and the comment). Effects inferred.

## 15. Unresolved Questions

1. ~~Register dot indicator as approved DESIGN_EXCEPTION?~~ Done — see `DESIGN_EXCEPTIONS.md` (Approved exceptions).
2. Is the dot's squareness (no `rounded-full`) deliberate, or should it be round?
3. Confirm square item + resting tint as intended neon language.
