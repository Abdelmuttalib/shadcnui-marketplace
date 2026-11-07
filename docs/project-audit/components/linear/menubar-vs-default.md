# Linear Menubar vs Default

## 1. Audit Metadata

- Style: linear
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/linear/ui/menubar.tsx:1-256`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (structural wrapper + 5 class deltas, verified)

## 2. Executive Summary

Linear rewrites the five primitive aliases as function wrappers (one adds
`data-slot="menubar-sub"`), shortens the root (`h-9` + `px-0.5`), strips content
borders to bare widths, and restyles Shortcut with wide tracking. Item metrics
otherwise unchanged.

## 3. Base Classes

Root: `h-10` → `h-9` + added `px-0.5` (UNVERIFIED, DIMENSION). SubContent +
Content: `border border-*-border` → bare `border` (color dropped, both) —
PARITY_DIVERGENCE, Open (concern BORDER/TECHNICAL; likely slip shared with
material's menubar contents — confirm or restore). Trigger/Item/Checkbox/Label/
Separator/text: prefix swaps (Corroborated). Shortcut: `tracking-[0.3rem]` +
muted color, opacity dropped (UNVERIFIED — linear-wide Shortcut language).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root height change in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

`MenubarMenu/Group/Portal/RadioGroup/Sub` rewritten from const aliases to
function wrappers passthroughing props; `Sub` adds `data-slot="menubar-sub"`.
Inferred: behavior-neutral refactor (same primitives, props spread through);
the `data-slot` attribute is a styling hook with no in-file consumer.
PARITY_EXPECTED with note — recorded, not flagged, since behavior is preserved
and the pattern recurs in material/wedges (see §15).

## 8. Props, Exports, and API

All 15 exports identical (wrappers preserve names). `displayname` bug retained
(shared-baseline note). PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged at source level (props spread through to the same primitives).
PARITY_EXPECTED with §3/§7 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace; content border colors absent (§3).

## 12. Typography and Global Styling

Shortcut tracking change is component-level (§3); triggers/items `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) function wrappers + `data-slot` — PARITY_EXPECTED with note
(preserve or collapse back to aliases deliberately; keep the `data-slot` if any
external selector uses it — none found in-file); (2) compact root — UNVERIFIED;
(3) colorless content borders — PARITY_DIVERGENCE/Open; (4) Shortcut —
UNVERIFIED.

## 14. Verification

Full-file diff run; wrapper rewrite verified by direct read. Effects inferred.

## 15. Unresolved Questions

1. Are the function wrappers (+20 lines) a deliberate shadcn-version alignment
   shared with material/wedges, or drift? (Behavior-neutral either way.)
2. Bare content borders: deliberate or slip?
