# Catalyst Popover vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: popover
- Baseline source: `registry/default/ui/popover.tsx:1-31`
- Alternative source: `registry/catalyst/ui/popover.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `catalyst:22`)

## 2. Executive Summary

Catalyst popover swaps the border to the `input` token and carries the same
unprefixed `text-popover-foreground` as material — both need the joint ruling.
Otherwise identical geometry, animations, and exports.

## 3. Base Classes

Content (`catalyst:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border-dft-border` | `border-catalyst-input` | Border token `border` → `input` | Edge tied to input token | UNVERIFIED (concern COLOR) |
| `text-dft-popover-foreground` | `text-popover-foreground` | Prefix missing | As material popover §3 | PARITY_DIVERGENCE, Needs-designer (concern COLOR/TECHNICAL) — rule jointly with material/catalyst select instances |
| All else (`w-72`, `p-4`, shadow, anims, radius) | `catalyst` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-72`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. defaults. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except the unprefixed text class (§3); edge on the input token.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED; (2) unprefixed text —
PARITY_DIVERGENCE/Needs-designer (joint ruling with material + both selects).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground` + input-token border: typo cluster or convention?
