# Material Radio-Group vs Default

## 1. Audit Metadata

- Style: material
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/material/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material restyles items to 20px with an `input` border, hover/focus border
recoloring, and a bare 60%-opacity ring color with no width — the visible focus
ring is removed per owner decision A (STYLE_INTENTIONAL). A ripple-halo span is
present but **commented out** (dead code). Indicator unchanged.

## 3. Base Classes

Root identical. Item (`material:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `aspect-square h-4 w-4` | `group h-5 w-5` (aspect dropped) | 20px; square enforced by equal h/w | Larger item; `group` gates the (commented) halo | Dimension UNVERIFIED; `group` without live gated child is inert — noted, not flagged alone |
| `border-dft-primary` | `border-material-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| (none) | `hover:border-material-primary`, `focus-visible:border-material-primary` | Added | Border resolves on hover/focus | UNVERIFIED (concern INTERACTION/FOCUS) |
| `focus:outline-none` | + `focus:outline-0` + `focus-visible:outline-0` | Redundant resets added | No visual change | PARITY_DIVERGENCE, Open (concern TECHNICAL) — drop on migration |
| `focus-visible:ring-2 … ring-offset-2` | `focus-visible:ring-material-ring/60` (color only, no width, no offset) | Ring/offset widths removed | Inferred: effectively no visible focus ring; border recolor is the focus signal | STYLE_INTENTIONAL, Corroborated (owner decision A; recurs in material checkbox + switch). A11y note in §9 |
| (none) | `data-[state=checked]:border-material-primary` | Added | Checked border recolor; fill comes from dot only (no item bg) | UNVERIFIED (concern COLOR) |

Disabled classes unchanged. Radius stays `rounded-full`.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover/focus recolor borders; checked = border recolor + current-color dot (no
fill wash — most minimal checked treatment in the set). Disabled identical. No
live dark-mode classes.

## 7. DOM and Component Structure

Line 36 holds a **commented-out** halo span
(`{/* <span className="absolute -inset-2.5 z-10 hidden rounded-full
bg-material-primary/15 group-hover:block group-focus-visible:block"></span> */}`) —
the checkbox/switch ripple, disabled here. Dead code: PARITY_DIVERGENCE, Open
(concern TECHNICAL) — remove on migration, or restore deliberately. Indicator and
icon unchanged (`Circle h-2.5 w-2.5 fill-current text-current`, `material:37-39`).

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Accessibility note: focus signal is border-recolor only
(ring effectively absent) — the documented cost of the intentional Material
replication; hover and focus share the same border treatment, so keyboard focus
has no distinct marker beyond the recolor. No failure claimed, no measurement made.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*`: input/primary/ring tokens. Ring token used at 60% opacity.

## 12. Typography and Global Styling

Indicator unchanged. No text.

## 13. Findings and Upgrade Preservation

Findings: (1) ring removal — STYLE_INTENTIONAL/Corroborated (preserve; do not
restore a ring); (2) 20px + input border + recolor states + checked border —
UNVERIFIED; (3) redundant outline resets — PARITY_DIVERGENCE (drop);
(4) commented halo — PARITY_DIVERGENCE (remove or deliberately restore with the
`group` gate that is already present).

## 14. Verification

Both files read fully; commented span confirmed by direct read. Effects inferred.

## 15. Unresolved Questions

1. Remove or restore the halo span?
2. Confirm dimension/border treatments as intended Material language.
