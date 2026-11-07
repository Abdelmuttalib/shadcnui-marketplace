# Wedges Menubar vs Default

## 1. Audit Metadata

- Style: wedges
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/wedges/ui/menubar.tsx:1-256`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (structural wrapper + 10 class deltas, verified)

## 2. Executive Summary

Wedges rewrites aliases as function wrappers (+`data-slot`, as linear/material),
shortens the root (`h-9`, padding dropped), removes item radii with wider
spacing, unpads both contents, moves the separator to `border/30`, and tones
Shortcut with opacity. Checkbox span gains `text-current` (radio span does not).

## 3. Base Classes

Root: `h-10` → `h-9`, `p-1` deleted (UNVERIFIED, DIMENSION).
SubTrigger/Item: radius deleted + `px-2` → `px-3` (SubTrigger keeps `py-1.5`;
Item same) + SubTrigger adds `sm:px-3` (UNVERIFIED, SHAPE/DIMENSION).
Checkbox/RadioItem: radius deleted + `pr-2` → `pr-3` (UNVERIFIED); checkbox span
adds `text-current`, radio span does not (cosmetic inconsistency, no effect
inferred — both inherit currentColor; UNVERIFIED/TECHNICAL trivia).
SubContent + Content: `p-1` deleted (both); `border-wedges-border` kept
(correctly colored — unlike linear/material bare borders). Label `px-3`.
Separator: `bg-dft-muted` → `bg-wedges-border/30` (UNVERIFIED, COLOR — 30%
border-token separator, unique in the set). Shortcut: adds `opacity-60`
(UNVERIFIED).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Function-wrapper rewrite + `data-slot` as linear (§7 of linear menubar report
applies). Otherwise identical tree. PARITY_EXPECTED with note.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace throughout (text correctly prefixed — no divergence here).

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact radius-less density + unpadded contents — UNVERIFIED;
(2) `border/30` separator — UNVERIFIED; (3) wrappers + `data-slot` — parity with
note; (4) span inconsistency — trivia, no action.

## 14. Verification

Full-file diff run; wrapper rewrite verified by direct read. Effects inferred.

## 15. Unresolved Questions

1. Confirm density set + faint separator as intended.
2. Function wrappers: shared deliberate alignment or drift (rule with linear/material)?
