# Neon Tabs vs Default

## 1. Audit Metadata

- Style: neon
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/neon/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Neon frames the list (border, dropped `h-10`/`bg`/`p-1`) and adds underlined
triggers (`border-b-2` + muted edge) with a muted-fill active state carrying a
primary underline, dropping the shadow. Content unchanged. Structure and
exports unchanged.

## 3. Base Classes

List: `h-10` + `bg-dft-muted` + `p-1` dropped; `border border-neon-border`
added (UNVERIFIED set, DIMENSION/BORDER — unframed-height bordered bar).
Trigger: `rounded-dft-sm` kept; `border-b-2 border-b-neon-border` added;
`py-1.5` → `py-2`; active `bg-dft-background` → `bg-neon-muted/70` +
`border-b-neon-primary` added, `shadow-sm` dropped (UNVERIFIED set). Ring-2/
offset-2 retained. Content: prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active treatment per §3; hover absent in both files; disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace only.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed list + underlined triggers + muted active — UNVERIFIED
as a set (preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the framed/underlined system as intended.
