# Spectrum Dialog vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/spectrum/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (4 changed lines, verified)

## 2. Executive Summary

Spectrum lightens the overlay (`black/60`), renders Content on the `popover`
token with a 70% `input`-token border, and shrinks the `sm:` radius tier
(`-md`). Close, type, animations, and exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Overlay: `bg-black/80` → `bg-black/60`, no dark variant (UNVERIFIED, COLOR).
Content: `border-dft-border` → `border-spctm-input/70` (input token at 70% —
UNVERIFIED, BORDER/COLOR); `bg-dft-background` → `bg-spctm-popover`
(UNVERIFIED, COLOR); `sm:rounded-dft-lg` → `sm:rounded-spctm-md` (UNVERIFIED,
SHAPE — tier change). Close/type: prefix swaps, ring-2/offset-2 retained
(Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 notes (no failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace; `--spctm-radius: 0.4rem`. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) lighter overlay — UNVERIFIED; (2) popover-surfaced Content +
70% input border + `-md` tier — UNVERIFIED as a set. Re-apply deliberately.

## 14. Verification

Full-file diff run (4 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm overlay + popover-surface + softened border + radius tier as intended.
