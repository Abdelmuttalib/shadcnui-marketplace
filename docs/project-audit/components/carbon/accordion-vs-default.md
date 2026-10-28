# Carbon Accordion vs Default

## 1. Audit Metadata

- Style: carbon
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/carbon/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Carbon restyles the trigger as an interactive row (accent hover, full
focus-visible ring + disabled states — the only accordion with either),
compacts it (`py-3` + responsive `px-2/sm:px-4/lg:px-5` mirrored on Content),
adds an item border color, and drops the medium weight + underline. Chevron
rotation retained; animations and exports unchanged.

## 3. Base Classes

Item: `border-b` → `border-b border-b-cb-border` (UNVERIFIED, BORDER — explicit
color). Trigger: `py-4 font-medium ... hover:underline` →
`px-2 py-3 ... hover:bg-cb-accent focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-inset focus-visible:ring-cb-ring disabled:pointer-events-none
disabled:opacity-50 sm:px-4 lg:px-5` — weight + underline dropped; accent hover,
inset focus ring, disabled pair, responsive padding added (UNVERIFIED set,
TYPOGRAPHY/INTERACTION/FOCUS/DIMENSION). Chevron `h-4 w-4` + `rotate-180`
retained. Content outer: same animation classes + `px-2 sm:px-4 lg:px-5`
mirroring the trigger (UNVERIFIED, DIMENSION); inner `pb-4 pt-0` unchanged.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Trigger/content padding changes in §3.

## 6. Interaction States

Hover (accent fill vs underline), focus (new ring), disabled (new), chevron
rotation retained, open/close height animations identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Item/Header/Trigger+Chevron/Content). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger` identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix expand/collapse unchanged. Added focus ring + disabled states improve
keyboard affordance surface (recorded as observed additions, not a comparative
failure claim about baseline).

## 10. Imports and Dependencies

Identical set (radix accordion, ChevronDown, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: accent/ring/border tokens.

## 12. Typography and Global Styling

Trigger drops `font-medium` (component-level, §3); Content stays `text-sm`.

## 13. Findings and Upgrade Preservation

Findings: (1) interactive-row trigger system (hover/focus/disabled/padding) —
UNVERIFIED as a set (preserve exactly; carbon's most distinctive accordion
identity); (2) item border color — UNVERIFIED.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the interactive-row system as intended carbon language.
