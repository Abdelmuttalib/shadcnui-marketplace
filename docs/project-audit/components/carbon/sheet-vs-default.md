# Carbon Sheet vs Default

## 1. Audit Metadata

- Style: carbon
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/carbon/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified by direct read/grep of
  overlay:24, base/sides:34-43, Close:68, Title:111, Description)

## 2. Executive Summary

Carbon re-themes the sheet around popover surfaces and gray-950 scrims
(overlay `gray-950/60` + dark `gray-950/80`), strips side-border colors to bare
widths, and leaves three classes unprefixed (Close `rounded-sm` +
`ring-offset-background`, Title `text-foreground`). Default side (right),
durations, animations, and all 10 exports unchanged; `sheetVariants` stays
non-exported.

## 3. Base Classes

Overlay (`carbon:24`, verified): `bg-black/80` → `bg-gray-950/60` + added
`dark:bg-gray-950/80` (UNVERIFIED, COLOR — gray-950-based scrim, unique in the set).
Base (`carbon:34`): `bg-dft-background` → `bg-cb-popover` (UNVERIFIED, COLOR —
popover-surfaced sheet, as carbon dialog). Durations 300/500 + anims retained.
Sides (`carbon:38-43`): `border-b/border-t/border-r/border-l` kept but
`border-{side}-dft-border` colors dropped on all four sides (UNVERIFIED, BORDER —
width-only edges; right side keeps baseline's double space, cosmetic).
Close (`carbon:68`, verified): `rounded-dft-sm` → **`rounded-sm` (unprefixed)**;
`ring-offset-dft-background` → **`ring-offset-background` (unprefixed)**;
`focus:ring-2`/`ring-cb-ring`/`offset-2` retained — both unprefixed classes
PARITY_DIVERGENCE, Open (concern TOKEN/TECHNICAL; likely slips, confirm or
re-tokenize).
Title (`carbon:111`, verified): `text-dft-foreground` → **`text-foreground`
(unprefixed)** — PARITY_DIVERGENCE, Needs-designer (recurs with catalyst sheet
Title; joint ruling needed).
Description `text-cb-muted-foreground`, Header/Footer: prefix swaps (Corroborated).

## 4. Variants

Side system intact (top/bottom/left/right keys, slide anims per side).
`defaultVariants.side: "right"` + `side = "right"` default verified present
(all 12 files contain `side: "right"`). PARITY_EXPECTED for the variant contract;
side-border colors differ per §3.

## 5. Sizes

No size scale. `p-6`, `w-3/4`, `sm:max-w-sm` unchanged.

## 6. Interaction States

Open/close animations + durations identical. Close hover/focus/disabled
identical except §3 tokens. No dark classes except overlay (§3).

## 7. DOM and Component Structure

Identical tree (Portal + Overlay + Content + Close + X + sr-only). PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps` (Content props + `VariantProps`), all 10 exports in identical
order, `side` default `"right"` identical. `sheetVariants` non-exported const
(verified export block `carbon:129-140` — no `sheetVariants`), as baseline.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Dismissal, focus trap, slide-in positioning unchanged. Lighter scrim noted
without contrast-failure claim. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (radix dialog, cva, lucide X, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: popover bg, ring, muted/secondary tokens; `--cb-radius: 0rem`. Legacy
unprefixed `--background`/`--foreground`/default-radius via §3 classes.

## 12. Typography and Global Styling

Title type scale identical; Close icon `h-4 w-4` identical. Title color is the
§3 finding.

## 13. Findings and Upgrade Preservation

Findings: (1) gray-950 scrim + dark variant — UNVERIFIED; (2) popover base +
width-only side edges — UNVERIFIED; (3) three unprefixed classes (Close ×2,
Title ×1) — PARITY_DIVERGENCE (confirm or re-tokenize; Title jointly with
catalyst). Migration: preserve 1–2 deliberately; rule on 3 first.

## 14. Verification

Full-file diff run (8 changed lines); overlay, sides, Close, Title, Description
verified by direct read/grep. Effects inferred from source.

## 15. Unresolved Questions

1. Are the three unprefixed classes slips or convention?
2. Confirm scrim + popover-surface + width-only edges as intended.
