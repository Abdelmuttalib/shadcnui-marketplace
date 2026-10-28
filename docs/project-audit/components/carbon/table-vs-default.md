# Carbon Table vs Default

## 1. Audit Metadata

- Style: carbon
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/carbon/ui/table.tsx:1-124`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Carbon tints the whole table chrome around the accent token: opaque accent
header fill, 50% accent body wash, opaque accent footer (replacing translucent
muted), accent hover/selected rows, and explicit border colors. Head/cell
metrics unchanged. No structural change (line-count delta is formatting only).

## 3. Base Classes

Wrapper/Table identical. Per-sub-component (`carbon` vs `default`):

| Part | Default | Alternative | Exact change | Classification |
|---|---|---|---|---|
| Header | `[&_tr]:border-b [&_tr]:border-b-dft-border` | `bg-cb-accent [&_tr]:border-b [&_tr]:border-b-cb-border` | Added opaque accent fill; tr border color is a swap (baseline already colored) | Fill UNVERIFIED (concern COLOR; sole opaque thead) |
| Body | `[&_tr:last-child]:border-0` | `bg-cb-accent/50 [&_tr:last-child]:border-0` | Added 50% accent wash (sole tbody tint) | UNVERIFIED (concern COLOR) |
| Footer | `border-t border-t-dft-border bg-dft-muted/50` | `border-t bg-cb-accent` (top-border color dropped) | Translucent muted → opaque accent; top color deleted | Fill UNVERIFIED (COLOR); deletion UNVERIFIED (BORDER) |
| Row | `border-b border-b-dft-border ... hover:bg-dft-muted/50 data-[state=selected]:bg-dft-muted` | `border-b border-b-cb-border ... hover:bg-cb-accent/50 data-[state=selected]:bg-cb-muted` | Prefix swap + hover muted→accent | Hover UNVERIFIED (COLOR) |
| Head | `h-12 px-4 ... text-dft-muted-foreground` | `cb` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| Cell/Caption | `p-4`, `mt-4 text-sm` | unchanged/prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Head `h-12`, cell `p-4` unchanged.

## 6. Interaction States

Hover/selected treatments per §3 (accent-based). No focus/disabled/dark classes
in either file.

## 7. DOM and Component Structure

Identical tree (div>table>thead/tbody/tfoot/tr/th/td/caption), same prop types.
Explicitly styling-only, not structural. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports (`Table, TableHeader, TableBody, TableFooter, TableHead,
TableRow, TableCell, TableCaption`) identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: accent/muted/border tokens; `--cb-radius` n/a (no radius classes).

## 12. Typography and Global Styling

Head `font-medium`, table `text-sm`, caption type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) accent-tinted table chrome (header/body/footer/hover fills) —
UNVERIFIED as a set (preserve exactly; carbon's most distinctive table
identity); (2) footer top-border color deletion — UNVERIFIED (confirm or
restore). No exceptions. (Correction 2026-10-09: row/header border colors are
swaps, not additions — the baseline already carries them.)

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm accent-tinted chrome as intended carbon language.
