# Carbon Sidebar vs Default

## 1. Audit Metadata

- Style: carbon
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/carbon/ui/sidebar.tsx:1-768 (+769-1535 commented)`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
fixed wrapper:237, group:424, sizes:525-527, outline:522, dead region verified
by direct read/grep)

## 2. Executive Summary

Carbon is the most diverged sidebar: a roomier menu system (group `p-3`,
button `gap-3 p-3`, taller size ladder `h-9/h-8/h-10`), popover-surfaced base,
explicit frame/side borders, gray-950 scrim tokens in the outline shadow
function, an `md`-tier inset radius — plus **767 lines of commented-out
duplicate code (lines 769–1535, verified)**. All 11 own-style imports verified;
constants, state, keyboard, mobile behavior, and all 24 exports unchanged.

## 3. Base Classes

Frame (`carbon:237`, verified): fixed wrapper gains `border-cb-sidebar-border`;
non-floating variant drops the left-side border (keeps icon-collapse width +
right border); inner gains always-on border + per-side borders (vs default's
floating-only edges). UNVERIFIED set (BORDER).
Group (`carbon:424`, verified): `p-2` → `p-3` (UNVERIFIED, DIMENSION).
Inset: `rounded-xl` → `rounded-cb-xl` (UNVERIFIED, SHAPE).
MenuButton base (`carbon:515`, verified): `gap-2` → `gap-3`, `p-2` → `p-3`,
added `font-medium` + svg ink/hover/active colors (UNVERIFIED set).
Outline (`carbon:522`, verified): `oklch(var(--dft-sidebar-accent))` →
`hsl(var(--sidebar-border))`/`hsl(var(--sidebar-accent))`-family unprefixed
vars (kept legacy form with new color args — UNVERIFIED, COLOR/TECHNICAL).
Sizes (`carbon:525-527`, verified): `h-8/h-7/h-12` → `h-9/h-8/h-10`
(UNVERIFIED, DIMENSION — taller small sizes, shorter large).
MenuAction top offsets re-anchored per size (UNVERIFIED).
Trigger/Input/Separator/Sheet/Skeleton/Tooltip sub-imports: own-style paths
verified (no cross-style imports).

## 4. Variants

Side/variant/collapsible contract + `defaultVariants` unchanged; variant keys
identical. PARITY_EXPECTED for the contract.

## 5. Sizes

Menu-button ladder + group padding in §3. CSS vars (`16rem/3rem`) unchanged.

## 6. Interaction States

Hover/active/open fob treatments namespace-swapped (+ svg colors). Cookie,
`open`/`openMobile`, `Ctrl/Cmd+b`, mobile Sheet, skeleton randomness identical.
No dark-mode classes beyond token resolution.

## 7. DOM and Component Structure

Identical tree and context shape. PARITY_EXPECTED — except the dead region below.

## 8. Props, Exports, and API

All 24 exports in identical order; `SidebarContentProps`-equivalent types,
`useSidebar` hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

State, keyboard shortcut, tooltip delay, mobile fallback identical.
PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style Button/Input/Separator/Sheet/Skeleton/Tooltip imports verified
(`carbon:10-20`); radix/cva/lucide/react/utils identical. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: sidebar/background/border/ring/accent tokens; outline shadow uses
legacy `hsl(var(--sidebar-*))` form (§3).

## 12. Typography and Global Styling

MenuButton `font-medium` added (§3); trigger `h-7 w-7` unchanged.

## 13. Findings and Upgrade Preservation

Findings: (1) roomier menu system + taller ladder — UNVERIFIED (preserve);
(2) popover base + explicit frame borders — UNVERIFIED; (3) 767-line commented
duplicate (lines 769–1535, verified — includes stale size values at ~1293-1295)
— PARITY_DIVERGENCE, Open (TECHNICAL; dead code, delete on migration — it also
contains an older `cb-accent` hover variant that could confuse future edits).

## 14. Verification

Both files read fully; fixed/group/sizes/outline/dead-region verified by
direct read/grep. Effects inferred from source.

## 15. Unresolved Questions

1. Remove the commented duplicate region?
2. Confirm the roomier menu system as intended.
