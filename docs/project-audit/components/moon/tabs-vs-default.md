# Moon Tabs vs Default

## 1. Audit Metadata

- Style: moon
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/moon/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Moon frames the list (border, `overflow-hidden`, 80% muted fill, dropped `p-1`)
and adds underlined triggers (`border-b-2` + muted edge) with a foreground-ink
active underline — keeping `h-10` and `shadow-sm`. Content unchanged. Structure
and exports unchanged.

## 3. Base Classes

List: `p-1` dropped; `border border-moon-border`, `overflow-hidden`,
`bg-dft-muted` → `bg-moon-muted/80` added (UNVERIFIED set, BORDER/COLOR).
Trigger: `rounded-dft-sm` kept; `border-b-2 border-b-moon-border` added;
`py-1.5` → `py-2`; active `bg-dft-background` → `bg-moon-background` +
`border-b-moon-foreground` added, `shadow-sm` kept (UNVERIFIED set). Ring-2/
offset-2 retained. Content: prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3 (`h-10` kept).

## 6. Interaction States

Active underline+fill per §3; hover absent in both files; disabled identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed list + underlined triggers — UNVERIFIED as a set
(preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the framed/underlined system as intended.
