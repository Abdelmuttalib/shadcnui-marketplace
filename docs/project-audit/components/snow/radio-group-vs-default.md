# Snow Radio-Group vs Default

## 1. Audit Metadata

- Style: snow
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/snow/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Snow is a token swap except for one subtraction: the focus-offset width is
dropped (offset color kept, double space left behind) — the fourth snow instance
of the offset pattern. Item, indicator, and dot otherwise identical.

## 3. Base Classes

Root identical. Item (`snow:31` vs `default:31`): prefix swap only, except
`focus-visible:ring-offset-2` absent — `ring-offset-snow-background` color kept,
double space before `disabled:` is a no-op. Inferred: focus ring without offset
gap. PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; item stays 16px.

## 6. Interaction States

Hover: none. Focus per §3 (ring present, offset absent). Checked: dot only, as
baseline. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question — accessibility-relevant, pending ruling.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*`: `--snow-primary: 0% 0 0`, `--snow-ring: 89% 0.0602 258.65`.

## 12. Typography and Global Styling

Indicator and dot (`h-2.5`) unchanged (`snow:36-38`).

## 13. Findings and Upgrade Preservation

Findings: (1) missing offset width — PARITY_DIVERGENCE/Needs-designer (restore or
record as intended; do not carry silently into migration).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip (fourth snow instance)?
