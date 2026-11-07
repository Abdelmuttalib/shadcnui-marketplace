# Wedges Textarea vs Default

## 1. Audit Metadata

- Style: wedges
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/wedges/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Wedges adds a 20% input-tinted fill but **deletes the entire focus ring with no
border replacement** — bare `focus-visible:outline-none` only, mirroring wedges
input. The absent focus indicator is the headline finding.

## 3. Base Classes

Baseline vs wedges: `bg-dft-background` → `bg-wedges-input/20` (UNVERIFIED,
COLOR); `ring-offset-*` + `focus-visible:ring-2/ring/offset-2` all absent with
only `focus-visible:outline-none` kept — full ring-stack deletion, no `border-*`
replacement (PARITY_DIVERGENCE, Needs-designer, FOCUS/ACCESSIBILITY); everything
else prefix swap / retained (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

## 6. Interaction States

Focus: no visible indicator (see §3). Hover/disabled/md identical.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged structurally, but the deleted focus indicator is
accessibility-relevant: divergence pending designer ruling, not a failure claim
and not covered by any owner decision.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 20% fill — UNVERIFIED; (2) deleted focus stack —
PARITY_DIVERGENCE/Needs-designer (restore a ring/border focus or record
focus-less as intended; do not carry silently).

## 14. Verification

Both files read fully. Deletion confirmed by direct read. Effects inferred.

## 15. Unresolved Questions

1. Is the absent focus indicator deliberate or a slip? If deliberate, what
   signals keyboard focus?
