# Spectrum Accordion vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: accordion
- Baseline source: `registry/default/ui/accordion.tsx:1-58`
- Alternative source: `registry/spectrum/ui/accordion.tsx:1-58`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
trigger:31, icon:36, import:4 verified by direct grep)

## 2. Executive Summary

Spectrum restructures the trigger: leading `ChevronRight` replaces the trailing
`ChevronDown`, layout flips from `justify-between` to `gap-2`, open rotation is
`rotate-90` (not 180), and hover uses unprefixed `bg-accent`. The unused
`ChevronDown` import is retained. Item border and Content animations unchanged.

## 3. Base Classes

Item: `border-b` unchanged. Trigger (`spectrum:31`, verified): `flex flex-1
items-center justify-between ... hover:underline ... [&[data-state=open]>svg]:
rotate-180` → `flex flex-1 items-center gap-2 ... hover:bg-accent ...
[&[data-state=open]>svg]:rotate-90` + `px-3 py-2` — layout flip + unprefixed
hover + quarter rotation (PARITY_DIVERGENCE, Needs-designer for the unprefixed
`hover:bg-accent` — joint ruling; layout/rotation UNVERIFIED as design).
Content outer: `px-3` added (UNVERIFIED); inner `pb-4 pt-0` unchanged.
Animations identical.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/content padding changes in §3.

## 6. Interaction States

Hover fill (unprefixed) vs underline. Chevron rotation 90° vs 180° (§7). No
focus/disabled additions. No dark-mode classes.

## 7. DOM and Component Structure

Trigger icon: trailing `<ChevronDown>` → leading `<ChevronRight>` (`spectrum:36`,
verified) — icon component + position both change while rotation semantics
adapt (90° suits a right chevron). Structure otherwise identical (Item/Header/
Trigger/Content). PARITY_EXPECTED for structure; the icon swap itself is
UNVERIFIED as design (sole instance in the set).

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix expand/collapse unchanged. PARITY_EXPECTED with §3/§7 notes.

## 10. Imports and Dependencies

`import { ChevronDown, ChevronRight } from "lucide-react"` (`spectrum:4`,
verified) with `ChevronDown` now unused — PARITY_DIVERGENCE, Open (concern
TECHNICAL; dead import, remove on migration unless the icon is restored). No
new packages.

## 11. Token Dependencies

`spctm-*` namespace (unused here beyond Content padding context); hover uses
legacy unprefixed `bg-accent`. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Trigger `font-medium` kept; Content `text-sm` (no muted override here).

## 13. Findings and Upgrade Preservation

Findings: (1) leading-ChevronRight + gap layout + 90° rotation — UNVERIFIED as
a set (preserve exactly; spectrum's most distinctive accordion identity);
(2) unprefixed hover — PARITY_DIVERGENCE/Needs-designer (joint ruling);
(3) dead `ChevronDown` import — PARITY_DIVERGENCE/Open (remove).

## 14. Verification

Both files read fully; trigger/icon/import lines verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the leading-chevron design as intended.
2. `hover:bg-accent`: rule jointly with the unprefixed set.
