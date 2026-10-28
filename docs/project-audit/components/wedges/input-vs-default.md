# Wedges Input vs Default

## 1. Audit Metadata

- Style: wedges
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/wedges/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Wedges shortens to `h-9` with a 20% input-tinted fill but **removes the entire
focus ring with no border replacement** — bare `focus-visible:outline-none`
only. Disabled opacity softens to 60%. The focus deletion is the headline
finding.

## 3. Base Classes

Baseline vs wedges:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-10` | `h-9` | 40px → 36px | Shorter field | UNVERIFIED (concern DIMENSION) |
| `bg-dft-background` | `bg-wedges-input/20` | Opaque → 20% tint | Lightly tinted face | UNVERIFIED (concern COLOR) |
| `ring-offset-dft-background` | (absent) | Offset layer dropped | — | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| `focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` | (all absent; only `focus-visible:outline-none` kept) | Full ring stack deleted, no `border-*` replacement | Inferred: keyboard focus shows no visible indicator | PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY) |
| `disabled:opacity-50` | `disabled:opacity-60` | 50% → 60% | Stronger disabled presence | UNVERIFIED (concern INTERACTION) |
| Border-input, file/placeholder/md | prefix swap / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single height change in §3.

## 6. Interaction States

Focus: none visible (see §3). Hover: none. Disabled opacity differs (§3). No
invalid-state handling in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged structurally, but the deleted focus indicator is accessibility-relevant:
recorded as divergence pending designer ruling, not a failure claim and not
covered by any owner decision (decision A covers checkbox/radio/switch only).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + 20% fill + 60% disabled — UNVERIFIED; (2) deleted focus
stack — PARITY_DIVERGENCE/Needs-designer (restore a ring/border focus or record
focus-less as intended; do not carry silently into migration).

## 14. Verification

Both files read fully. Deletion confirmed by direct read (no `ring`/`border-`
focus classes present). Effects inferred.

## 15. Unresolved Questions

1. Is the absent focus indicator deliberate or a slip? If deliberate, what
   signals keyboard focus?
