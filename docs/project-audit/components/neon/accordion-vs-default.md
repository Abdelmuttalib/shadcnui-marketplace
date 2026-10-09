# Neon Accordion vs Default

## 1. Audit Metadata

- Style: neon
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/neon/ui/accordion.tsx:1-66`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
icon lines verified by direct read of `neon:43-45`)

## 2. Executive Summary

Neon replaces chevron rotation with a Plus/Minus icon toggle (`group-data`
gated, `group` on Trigger), drops the underline for primary-colored hover text,
compacts to `py-3`, and adds an item border color. The ChevronDown import is
commented out; three unused icon imports (`ChevronDown`, `PlusCircle`,
`PlusSquare`) remain. Animations and exports unchanged.

## 3. Base Classes

Item: `border-b` → `border-b border-b-neon-border` (UNVERIFIED, BORDER).
Trigger: `py-4 font-medium ... hover:underline ... [&[data-state=open]>svg]:
rotate-180` → `group ... py-3 font-medium ... hover:text-neon-primary`
(underline + rotation dropped; `group` gate + primary hover added) —
UNVERIFIED set (TYPOGRAPHY/INTERACTION/DIMENSION). Content: identical
(`overflow-hidden text-sm ...`, `pb-4 pt-0`).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger `py-4` → `py-3` (§3).

## 6. Interaction States

Hover primary-text vs underline. Open state shows Minus/hides Plus via
`group-data` (§7) instead of rotating. Height animations identical. No
focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Trigger icon block (`neon:43-45`, verified): `{/* <ChevronDown ... /> */}`
commented out + `<PlusIcon ... group-data-[state=open]:hidden />` +
`<MinusIcon className="hidden ... group-data-[state=open]:block" />`.
Inferred: plus shows when closed, minus when open. Radix Item/Header/Content
structure otherwise identical — icon-swap with preserved expand/collapse
behavior. Candidate DESIGN_EXCEPTION feature (see §13).

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Icon change is decorative (chevron had no ARIA role
in either file). PARITY_EXPECTED with §7 note.

## 10. Imports and Dependencies

`import { ChevronDown, MinusIcon, PlusCircle, PlusIcon, PlusSquare, } from
"lucide-react"` — `PlusIcon`/`MinusIcon` live; `ChevronDown` (commented use),
`PlusCircle`, `PlusSquare` unused — PARITY_DIVERGENCE, Open (concern TECHNICAL;
dead imports, remove on migration). No new packages.

## 11. Token Dependencies

`neon-*`: border/primary tokens.

## 12. Typography and Global Styling

Trigger `font-medium` kept; Content `text-sm` identical.

## 13. Findings and Upgrade Preservation

Findings: (1) Plus/Minus toggle + group gate + primary hover + compact padding
— UNVERIFIED as a set (recommend DESIGN_EXCEPTION review: icon swap with
preserved behavior, as neon dots; preserve exactly pending ruling);
(2) item border color — UNVERIFIED; (3) dead icon imports — PARITY_DIVERGENCE
(remove). Migration: keep the icon block + `group` class verbatim until ruled.

## 14. Verification

Both files read fully; icon/import lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Register Plus/Minus toggle as DESIGN_EXCEPTION?
2. Confirm compact primary-hover trigger as intended.
