# Carbon Dialog vs Default

## 1. Audit Metadata

- Style: carbon
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/carbon/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (4 changed lines, verified)

## 2. Executive Summary

Carbon lightens the overlay (`black/60` + dark `black/80`), renders Content on
the `popover` token, shrinks the `sm:` radius tier (`-md`), and leaves the Close
offset color unprefixed (`ring-offset-background`). Geometry, animations, Close
icon/label, header/footer/type, and all 10 exports unchanged.

## 3. Base Classes

Overlay (`carbon:24` vs `default:24`): `bg-black/80` → `bg-black/60` + added
`dark:bg-black/80` (UNVERIFIED, COLOR — lighter scrim, dark parity with baseline).
Content (`carbon:41`): `bg-dft-background` → `bg-cb-popover` (UNVERIFIED, COLOR —
popover-surfaced dialog); `sm:rounded-dft-lg` → `sm:rounded-cb-md` (UNVERIFIED,
SHAPE — one tier smaller; note radius tier change, not just prefix).
Close (`carbon:47`, verified by direct read): `rounded-dft-sm` → `rounded-cb-sm`,
`ring-offset-dft-background` → **`ring-offset-background` (unprefixed)** with
`focus:ring-2`/`ring-cb-ring`/`offset-2` retained — PARITY_DIVERGENCE, Open
(concern TOKEN/TECHNICAL; likely slip, confirm or re-tokenize).
Border `border-cb-border`, `max-w-lg`, `p-6`, `gap-4`, `shadow-lg`,
`duration-200`, all fade/zoom/slide anims: prefix swap / retained (Corroborated).
Description `text-cb-muted-foreground`: prefix swap.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Open/close animations identical. Close hover/focus/disabled identical except the
§3 offset token. Dismissal (Radix Close/Escape/overlay-click) untouched — no
behavioral change. No dark classes except overlay (§3).

## 7. DOM and Component Structure

Identical tree (Portal + Overlay + Content + Close + X + sr-only "Close").
PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports in identical order; no prop changes. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; focus trap, labeled-by, and Close affordance retained. Lighter
overlay noted without contrast-failure claim. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (radix dialog, lucide X, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: popover bg, border, ring, muted tokens; `--cb-radius: 0rem` (square
everywhere except the `-md`/`-sm` radius utilities, which resolve via
`--cb-radius` the same way). Legacy `--background` via the Close offset (§3).

## 12. Typography and Global Styling

Title `text-lg font-semibold leading-none tracking-tight` identical; Close icon
`h-4 w-4` identical. No component-level type change.

## 13. Findings and Upgrade Preservation

Findings: (1) lighter overlay + dark variant — UNVERIFIED; (2) popover-surfaced
Content + `-md` radius tier — UNVERIFIED; (3) unprefixed Close offset —
PARITY_DIVERGENCE/Open. Migration: preserve 1–2 deliberately; confirm 3.

## 14. Verification

Full-file diff run (4 changed lines); Close line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Is the unprefixed Close offset deliberate or a slip?
2. Confirm overlay + popover-surface + radius tier as intended.
