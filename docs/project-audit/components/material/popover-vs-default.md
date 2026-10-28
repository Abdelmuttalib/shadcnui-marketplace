# Material Popover vs Default

## 1. Audit Metadata

- Style: material
- Component: popover
- Baseline source: `registry/default/ui/popover.tsx:1-31`
- Alternative source: `registry/material/ui/popover.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `material:22`)

## 2. Executive Summary

Material popover is a prefix swap except for one token: Content text uses the
**unprefixed** `text-popover-foreground` instead of `text-material-popover-foreground`
— the same instance pattern as material select (both need the joint ruling).
Geometry, animations, Portal, defaults, and exports unchanged.

## 3. Base Classes

Content (`material:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `text-dft-popover-foreground` | `text-popover-foreground` | `material-` prefix missing on the text token | Inferred: resolves outside the material namespace; may fall back to inherited/unstyled text color | PARITY_DIVERGENCE, Needs-designer (concern COLOR/TECHNICAL) — likely slip; rule jointly with material select's identical instance |
| All else (rounded/border/bg, `w-72`, `p-4`, shadow, anims) | `material` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-72`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (Portal + Content, ref, `align`/`sideOffset` passthrough). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Popover`, `PopoverContent`, `PopoverTrigger`; defaults `align="center"`,
`sideOffset={4}` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (wrong-token text color is
content-legibility-relevant; pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace except the unprefixed text class (§3).

## 12. Typography and Global Styling

No size/weight classes on Content; text color is the §3 finding.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed Content text — PARITY_DIVERGENCE/Needs-designer
(confirm intended token, likely `text-material-popover-foreground`; rule jointly
with material select). Migration: do not carry the unprefixed class silently.

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground`: shared typo or shared convention (rule with select)?
