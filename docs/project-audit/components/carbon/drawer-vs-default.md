# Carbon Drawer vs Default

## 1. Audit Metadata

- Style: carbon
- Component: drawer
- Baseline source: `registry/default/ui/drawer.tsx:1-118`
- Alternative source: `registry/carbon/ui/drawer.tsx:1-121`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
overlay:32, content:46, handle verified by direct grep)

## 2. Executive Summary

Carbon lightens the overlay (`black/60` + dark `gray-950/80` — sole dark
variant), drops the Content border color (bare `border`), and swaps the rest.
Handle, Header/Footer/Title, `shouldScaleBackground`, direction, and exports
unchanged.

## 3. Base Classes

Overlay (`carbon:32`, verified): `bg-black/80` → `bg-black/60` + added
`dark:bg-gray-950/80` (UNVERIFIED, COLOR — gray-950-based scrim, as carbon
sheet). Content (`carbon:46`, verified): `border border-dft-border` → bare
`border` (color dropped — PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely
slip shared with linear/material/catalyst/wedges drawer contents — confirm or
restore); `bg-cb-background`, `rounded-t-[10px]`, `mt-24` retained. Handle
`bg-cb-muted`: swap. Description `text-cb-muted-foreground`: swap.

## 4. Variants

Not applicable — no cva variants; bottom-only sheet in both files.

## 5. Sizes

No size scale. `mt-24`, handle `h-2 w-[100px]` unchanged.

## 6. Interaction States

Vaul open/close behavior identical (`shouldScaleBackground=true` retained). No
dark classes except overlay (§3).

## 7. DOM and Component Structure

Identical tree (Portal + Overlay + Content + handle). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports, `Root` props, `forwardRef`s, `displayName`s identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Vaul direction/scaling/dismissal unchanged. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (vaul, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace except bare Content border (§3).

## 12. Typography and Global Styling

Title `text-lg font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) lighter scrim + dark variant — UNVERIFIED; (2) colorless Content
border — PARITY_DIVERGENCE/Open (confirm or restore).

## 14. Verification

Both files read fully; overlay/content/handle lines verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Bare Content border: deliberate or slip (rule with the 4-style set)?
