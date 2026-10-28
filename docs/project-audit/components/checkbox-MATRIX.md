# Checkbox — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/checkbox.tsx`
(16px box, `rounded-dft-sm`, `border-dft-primary`, offset-2, checked bg+text only,
lucide `Check h-4 w-4`). Effects inferred from source. Reports:
`components/<style>/checkbox-vs-default.md`.

| Style | Box | Radius | Resting border | Checked rendering | Indicator/icon | Focus | States/tokens | Doc |
|---|---|---|---|---|---|---|---|---|
| moon | 18px (UNVERIFIED) | token `-sm` | primary (swap) | fill+ink (as base) | Check 16px | = ring-2/offset-2 | — | `moon/checkbox-vs-default.md` |
| carbon | 20px (UNVERIFIED) | `cb-md` (square) | legacy `border-foreground` (UNVERIFIED) | legacy `bg-foreground`/`text-background` (UNVERIFIED) | Check 16px | offset-1 (UNVERIFIED) | — | `carbon/checkbox-vs-default.md` |
| linear | 20px (UNVERIFIED) | `-sm` swap | `foreground/40` + hover/focus/checked border states (UNVERIFIED) | + checked border (UNVERIFIED) | Check 16px | ring-2, **offset width dropped (DIVERGENCE)** | — | `linear/checkbox-vs-default.md` |
| material | 20px (UNVERIFIED) | `-sm` swap | `input` + hover border + `bg-background` (UNVERIFIED) | + checked border (UNVERIFIED) | Check 16px | **ring removed (INTENTIONAL, owner A)** | halo span (exception candidate) | `material/checkbox-vs-default.md` |
| catalyst | 18px (UNVERIFIED) | `-sm` swap | `input` + `bg-muted` (UNVERIFIED) | + checked border (UNVERIFIED) | Check 12×16 (UNVERIFIED) | = | — | `catalyst/checkbox-vs-default.md` |
| spectrum | 16px | `-sm` swap | `border-2 input` (UNVERIFIED) | + checked border (UNVERIFIED) | Check 14px (UNVERIFIED) | = | — | `spectrum/checkbox-vs-default.md` |
| wedges | 18px (UNVERIFIED) | `-md` swap | `border-2 input`, transparent, dark border (UNVERIFIED) | + checked border + dark override (UNVERIFIED) | Check 16px | = (+transparent reservation) | stray `// </div>` + inert `relative` (DIVERGENCE) | `wedges/checkbox-vs-default.md` |
| lucid | 16px | `-sm` swap | `input` (UNVERIFIED) | + checked border (UNVERIFIED) | Check 16px | = | — | `lucid/checkbox-vs-default.md` |
| snow | 18px (UNVERIFIED) | `rounded-[5px]` literal (UNVERIFIED) | `border`-token edge (UNVERIFIED) | + checked border (UNVERIFIED) | Check 12×16 (UNVERIFIED) | ring-2, **offset width dropped (DIVERGENCE)** | — | `snow/checkbox-vs-default.md` |
| neon | 16px | `-sm` swap | `input` + `bg-input/40` tint (UNVERIFIED) | + checked border (UNVERIFIED) | **6px dot span, Check commented out (EXCEPTION, owner B)** | = | dead `Check`+`Dot` imports (DIVERGENCE) | `neon/checkbox-vs-default.md` |
| libelle | 20px (UNVERIFIED) | `rounded-[4px]` literal (UNVERIFIED) | primary (swap) | fill+ink (as base) | Check 12px (UNVERIFIED) | = | — | `libelle/checkbox-vs-default.md` |

## Corroborated patterns

- **Checked-border addition** (all except moon/libelle/default): border recolor on
  checked is near-universal — candidate for graduation to STYLE_INTENTIONAL once
  reviewed as a set; each report keeps UNVERIFIED until then.
- **20px boxes** (carbon/linear/material/libelle) vs **18px** (moon/catalyst/wedges/snow)
  vs **16px** (default/lucid/spectrum/neon).
- **Offset-width removal** (linear, snow): PARITY_DIVERGENCE in both, Needs-designer.
- **Ring removal** (material only): STYLE_INTENTIONAL per owner decision A.
- **Dot indicator** (neon only): DESIGN_EXCEPTION per owner decision B.
