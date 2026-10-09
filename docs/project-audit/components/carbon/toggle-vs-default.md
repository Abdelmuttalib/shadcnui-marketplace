# Carbon Toggle vs Default

## 1. Audit Metadata

- Style: carbon
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/carbon/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon's toggle keeps Default's base, on-state, focus, icons, and two of three
sizes; changes are confined to the outline variant (border token + on-state
border) and a narrower `lg` (`px-4` vs `px-5`). Structure, exports, and
`toggleVariants` name all parity.

## 3. Base Classes

Base (`carbon:10` vs `default:10`): prefix swap only — hover muted, ring-2/
offset-2, on-state accent/accent-foreground, `[&_svg]:size-4`, `gap-2` all
retained. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`carbon:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | `bg-transparent` | Identical | PARITY_EXPECTED |
| outline | `border border-dft-input bg-transparent hover:bg-dft-accent hover:text-dft-accent-foreground` | `border border-cb-border bg-transparent hover:bg-cb-accent hover:text-cb-accent-foreground data-[state=on]:border-cb-ring/5` | Border token `input` → `border`; added on-state border `cb-ring/5` (near-transparent ring-colored edge when on) | UNVERIFIED (concern BORDER/COLOR) |

## 5. Sizes

| Size | Default | Alternative (`carbon:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | identical | — | PARITY_EXPECTED |
| sm | `h-9 px-2.5 min-w-9` | identical | — | PARITY_EXPECTED |
| lg | `h-11 px-5 min-w-11` | `h-11 px-4 min-w-11` | Horizontal padding 20px → 16px | UNVERIFIED (concern DIMENSION) |

`defaultVariants` (default/default) unchanged.

## 6. Interaction States

Hover, on-state (accent), focus ring-2/offset-2, disabled, svg sizing identical.
On-state outline border (§4) is carbon's only state addition. No dark-mode classes.

## 7. DOM and Component Structure

Identical (`TogglePrimitive.Root`, `cn(toggleVariants(...))`, ref spread).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants` (same name), prop types, `displayName` identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix toggle, cva, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace; `--cb-ring` at 5% for the on-state outline border.

## 12. Typography and Global Styling

`text-sm font-medium` retained; no family change at component level (carbon page
font applies globally).

## 13. Findings and Upgrade Preservation

Findings: (1) outline border token + on-state border — UNVERIFIED; (2) narrower
lg — UNVERIFIED. Re-apply both. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
