# Catalyst Menubar vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/catalyst/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (10 changed lines, verified)

## 2. Executive Summary

Catalyst drops the root height (`h-10` gone) with tight `p-0.5` padding, widens
item spacing, tightens contents (`p-0.5`) on `input`-token borders with
unprefixed text, and tones Shortcut to `/60`. Const-alias structure retained
(unlike linear/material/wedges).

## 3. Base Classes

Root: `h-10` deleted (height now content-driven) + `p-1` → `p-0.5`
(UNVERIFIED, DIMENSION). SubTrigger/Item: `px-2 py-1.5` → `px-2.5 py-2`
(UNVERIFIED). Checkbox/RadioItem: `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-2.5`
(UNVERIFIED). SubContent + Content: `border-dft-border` →
`border-catalyst-input` (UNVERIFIED, COLOR); `p-1` → `p-0.5` (UNVERIFIED);
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed, both)**
— PARITY_DIVERGENCE, Needs-designer (joint ruling). Label `px-2.5 py-2`
(UNVERIFIED). Separator swap. Shortcut: adds `/60` to muted color (UNVERIFIED).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical (const aliases — no function rewrite here). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed Content texts (§3); edges on the input token.

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) height-less tight root + spacing set — UNVERIFIED; (2) unprefixed
texts ×2 — PARITY_DIVERGENCE/Needs-designer (joint ruling); (3) Shortcut tone —
UNVERIFIED.

## 14. Verification

Full-file diff run (10 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Is the height-less root (`h-10` deleted, not replaced) deliberate?
2. Unprefixed texts: rule jointly with the catalyst set.
