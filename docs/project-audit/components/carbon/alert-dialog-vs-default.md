# Carbon Alert-Dialog vs Default

## 1. Audit Metadata

- Style: carbon
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/carbon/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed lines, verified by direct read/grep of
  import:7, overlay:21, content:39, cancel:120, description)

## 2. Executive Summary

Carbon lightens the overlay (`black/60` + dark `black/80`), renders borderless
Content on the `popover` token, and — uniquely — maps Cancel to the
`secondary` button variant instead of `outline`. Own-style `buttonVariants`
import verified (no cross-style import).

## 3. Base Classes

Overlay (`carbon:21`, verified): `bg-black/80` → `bg-black/60` + added
`dark:bg-black/80` (UNVERIFIED, COLOR).
Content (`carbon:39`, verified): `border border-dft-border` deleted (borderless)
+ `bg-dft-background` → `bg-cb-popover` (UNVERIFIED, BORDER/COLOR);
`sm:rounded-cb-lg` prefix swap (Corroborated). Geometry/anims unchanged.
Action (`carbon:107`): `buttonVariants()` default — unchanged. Cancel
(`carbon:120`, verified): `buttonVariants({ variant: "outline" })` →
`buttonVariants({ variant: "secondary" })` (UNVERIFIED, INTERACTION — sole
Cancel-variant remap in the set; Cancel renders filled secondary instead of
outline). `"mt-2 sm:mt-0"` retained.
Header/Footer/Title/Description: prefix swaps (Corroborated).

## 4. Variants

No cva variants in this file; button-variant mapping via import (§3, §10).

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel hover/focus flow through carbon
`buttonVariants` (own-style import — carbon button's focus/border treatments
apply automatically). No dark classes except overlay (§3).

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Dismissal (Cancel/Escape/overlay) unchanged. Cancel's filled-vs-outline
treatment is a visual affordance change, not a behavior change. PARITY_EXPECTED
with §3 notes.

## 10. Imports and Dependencies

`import { buttonVariants } from "@/registry/carbon/ui/button"` (`carbon:7`,
verified) — own-style sourcing, correct wiring (no cross-style import).
Remaining imports identical. PARITY_EXPECTED (the import path itself is
expected namespacing, not a finding).

## 11. Token Dependencies

`cb-*` namespace; `--cb-radius: 0rem`. Cancel styling resolves through carbon
button tokens (secondary fill, carbon focus).

## 12. Typography and Global Styling

Title/description type identical (namespace tokens only).

## 13. Findings and Upgrade Preservation

Findings: (1) lighter overlay + dark variant — UNVERIFIED; (2) borderless
popover-surfaced Content — UNVERIFIED; (3) Cancel→secondary remap —
UNVERIFIED (preserve exactly; do not "correct" to outline — this is carbon's
most distinctive alert-dialog choice). Migration: keep the own-style import
path; re-point at the new carbon button module.

## 14. Verification

Full-file diff run (5 changed lines); import, overlay, content, cancel, and
description lines verified by direct read/grep. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm Cancel-secondary mapping + borderless popover Content as intended.
