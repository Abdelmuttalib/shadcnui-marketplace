# Spectrum Menubar vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/spectrum/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (10 changed lines, verified)

## 2. Executive Summary

Spectrum compacts the root (`h-9`, `px-1`), tightens trigger padding (`py-1`),
widens item spacing (`px-3 py-2`, checkbox `pr-3`), narrows contents to
vertical-only (`py-1`), and softens the Content edge to `input/60`. Text stays
correctly prefixed. (Prefix `spctm`.)

## 3. Base Classes

Root: `h-10` → `h-9`, `p-1` → `px-1` (UNVERIFIED, DIMENSION). Trigger: `py-1.5`
→ `py-1` (UNVERIFIED). SubTrigger/Item: `px-2 py-1.5` → `px-3 py-2`
(UNVERIFIED). Checkbox/RadioItem: `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-3`
(UNVERIFIED). SubContent: `p-1` → `py-1` (UNVERIFIED). Content:
`border-spctm-border` → `border-spctm-input/60` + `p-1` → `py-1` (UNVERIFIED,
COLOR/DIMENSION — note SubContent keeps the `border` token while Content uses
`input/60`: inconsistent edge tokens within the file, recorded as observed
fact, UNVERIFIED whether deliberate). Label `px-3` (UNVERIFIED).
Separator/Shortcut/text: prefix swaps, correctly prefixed (Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/trigger/item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical (const aliases). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*`; Content edge uses input at 60% while SubContent uses the border
token (§3). Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact density + vertical-only contents — UNVERIFIED;
(2) split content-edge tokens — UNVERIFIED (confirm one token or justify both,
as wedges dropdown).

## 14. Verification

Full-file diff run (10 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. SubContent `border` vs Content `input/60`: deliberate distinction or slip?
