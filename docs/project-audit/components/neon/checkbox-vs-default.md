# Neon Checkbox vs Default

## 1. Audit Metadata

- Style: neon
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/neon/ui/checkbox.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon keeps the 16px box and full focus stack but renders the checked state as a
**dot** (`span h-1.5 w-1.5`) instead of the lucide Check — owner decision B,
documented here as a design exception with a dead `Check` import and an unused
`Dot` import as accompanying drift. Resting face is a translucent `bg-neon-input/40`
with an `input` border; checked border added.

## 3. Base Classes

Baseline Root (`default:16`) vs neon Root (`neon:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border-dft-primary` | `border-neon-input` | Primary → input resting border | Neutral edge | UNVERIFIED (concern COLOR) |
| (none) | `bg-neon-input/40` | Added translucent resting fill (only checkbox with one) | Tinted resting face | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-neon-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| `h-4 w-4`, radius `-sm`, ring-2/offset-2, checked bg/text, disabled | `neon` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; box unchanged. Indicator content is a 6px dot (§7).

## 6. Interaction States

Hover: none. Focus: identical ring-2/offset-2. Checked: fill + recolor + border;
glyph is a dot, not a check (§7). Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Indicator identical except content (`neon:21-26`): `{/* <Check className="h-4 w-4" /> */}`
commented out, replaced by `<span className="h-1.5 w-1.5 bg-neon-primary-foreground">`.
Inferred: 6px square dot in `primary-foreground` on the checked fill. Radix
`Indicator` (conditional render on state), refs, merge order unchanged — the
state-conditional rendering behavior is preserved; only the glyph differs.

## 8. Props, Exports, and API

`Checkbox` export, props, `displayName` identical. PARITY_EXPECTED for API.

## 9. Behavior and Accessibility

Established from source (no browser/runtime check): Radix `Root`/`Indicator`
primitives retained, so keyboard interaction is unchanged at source level, and —
by inference — `data-state`/`aria-checked` exposure flows through Radix unchanged
(no ARIA attributes in either file to diverge). Indicator visibility: the dot
renders inside `Indicator`, which only mounts content when checked — inferred:
dot visible exactly when the box is checked. Contrast between dot
(`primary-foreground`) and fill (`primary`) is not measured — no pass/fail claimed.

## 10. Imports and Dependencies

`import { Check, Dot } from "lucide-react"` (`neon:4`) vs `import { Check }`:
`Dot` is never used in the file and `Check` is now referenced only by the comment —
both dead. PARITY_DIVERGENCE, Open (concern TECHNICAL): remove both imports on
migration (or restore the icon). No new dependencies.

## 11. Token Dependencies

`neon-*`: `--neon-primary: 63.01% 0.1238 162.83` (green fill), primary-foreground
dot. Resting fill uses `--neon-input` at 40%.

## 12. Typography and Global Styling

No text. Glyph swap documented in §7 (not a font issue).

## 13. Findings and Upgrade Preservation

Findings: (1) dot indicator — DESIGN_EXCEPTION (owner decision B; protocol:
necessity = neon dot language, stated by owner; behavior established unchanged at
source level per §9 — registered in `DESIGN_EXCEPTIONS.md` under Approved
exceptions); (2) translucent resting fill +
input border + checked border — UNVERIFIED; (3) dead `Check`/`Dot` imports —
PARITY_DIVERGENCE (remove). Migration: preserve dot span + checked fill exactly;
clean imports.

## 14. Verification

Both files read fully. Dead-import claim verified by searching the file for other
`Check`/`Dot` references (none outside line 4 and the comment). Effects inferred.

## 15. Unresolved Questions

1. ~~Register dot indicator as approved DESIGN_EXCEPTION?~~ Done — see `DESIGN_EXCEPTIONS.md` (Approved exceptions).
2. Confirm resting tint + input border as intended neon language.
