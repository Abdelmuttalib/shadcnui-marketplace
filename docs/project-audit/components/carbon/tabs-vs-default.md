# Carbon Tabs vs Default

## 1. Audit Metadata

- Style: carbon
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/carbon/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
list:17 + trigger:32 verified by direct read)

## 2. Executive Summary

Carbon rebuilds the tab row: un-sized list (no `h-10`/`p-1`) and a bordered
trigger (`border-2 transparent`, regular weight) whose focus is border-color
(`focus:border-cb-ring`, transparent outline) instead of a ring, with a
`border-t-cb-ring` active marker. Content unchanged. Structure and exports
unchanged.

## 3. Base Classes

List (`carbon:17`, verified): `h-10` + `p-1` dropped; `rounded-cb-md`,
`bg-cb-muted`, `text-cb-muted-foreground` swapped (UNVERIFIED, DIMENSION —
unframed list, height content-driven).
Trigger (`carbon:32`, verified): `rounded-dft-sm` → `rounded-cb-md`;
`border-2 border-transparent` added; `py-1.5` → `py-2`; `font-medium` →
`font-normal` (UNVERIFIED, SHAPE/DIMENSION/TYPOGRAPHY); `ring-offset-*` +
`focus-visible:ring-2/ring/offset-2` deleted, replaced by `focus:border-cb-ring
focus:outline-transparent focus-visible:border-cb-ring
focus-visible:outline-transparent` (UNVERIFIED, FOCUS — border-color focus, no
halo); active: `bg-dft-background` → `bg-cb-accent` + added
`border-t-cb-ring` + redundant `active:rounded-cb-md` (UNVERIFIED, COLOR —
top-edge active marker; redundant radius is a no-op duplicate, PARITY_DIVERGENCE/
Open TECHNICAL trivia).
Content: prefix swap (Corroborated).

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active marker + border focus per §3; hover absent in both files; disabled
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Root/List/Trigger/Content). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Tab selection semantics unchanged. Focus visibility rests on border recolor —
recorded UNVERIFIED with accessibility relevance, not a failure claim and not
owner-decided.

## 10. Imports and Dependencies

Identical set (radix tabs, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: accent/ring/border/muted tokens.

## 12. Typography and Global Styling

Trigger `font-normal` (+active medium) is component-level (§3); `text-sm` kept.

## 13. Findings and Upgrade Preservation

Findings: (1) unframed list + bordered trigger + border focus + active marker —
UNVERIFIED as a set (preserve exactly); (2) redundant active radius —
PARITY_DIVERGENCE/Open (drop the duplicate).

## 14. Verification

Both files read fully; list/trigger lines verified by direct read. Effects
inferred from source.

## 15. Unresolved Questions

1. Is border-color focus (no halo) intended for tabs?
2. Confirm the active-marker treatment as intended.
