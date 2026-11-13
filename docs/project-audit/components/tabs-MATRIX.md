# Tabs — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; trigger/list lines verified by direct
grep per style. Baseline `registry/default/ui/tabs.tsx` (`h-10` muted `p-1`
list; `rounded-sm` trigger with ring-2/offset-2 and shadowed active fill; 4
exports). No cva anywhere. Structure/exports uniform everywhere. Reports:
`components/<style>/tabs-vs-default.md`.

| Style | List | Trigger/active | Divergences | Doc |
|---|---|---|---|---|
| carbon | unframed, no h/p (UNVERIFIED) | bordered, regular weight, border focus, top-marker active (UNVERIFIED) | redundant radius (Open) | `carbon/tabs-vs-default.md` |
| linear | framed compact + border (UNVERIFIED) | full-height bordered, offsets dropped (DIVERGENCE) | 1 | `linear/tabs-vs-default.md` |
| material | framed + 80% fill (UNVERIFIED) | `-md` bordered, `shadow-xl` active (UNVERIFIED) | stray selectors + dead border (DIVERGENCE) | `material/tabs-vs-default.md` |
| catalyst | framed tight + border (UNVERIFIED) | bordered, muted active (UNVERIFIED) | — | `catalyst/tabs-vs-default.md` |
| spectrum | bare row (UNVERIFIED) | underline tabs, ink-only active (UNVERIFIED) | — | `spectrum/tabs-vs-default.md` |
| wedges | divided frame (UNVERIFIED) | edge-to-edge + hover + inactive ink (UNVERIFIED) | — | `wedges/tabs-vs-default.md` |
| moon | framed + 80% fill (UNVERIFIED) | underlined + shadow kept (UNVERIFIED) | — | `moon/tabs-vs-default.md` |
| lucid | compact (UNVERIFIED) | `-md` bordered, input edge (UNVERIFIED) | — | `lucid/tabs-vs-default.md` |
| snow | compact + bare border (DIVERGENCE) | square-bottomed, primary active (UNVERIFIED) | offsets dropped (DIVERGENCE) | `snow/tabs-vs-default.md` |
| neon | framed bar (UNVERIFIED) | underlined + muted active (UNVERIFIED) | — | `neon/tabs-vs-default.md` |
| libelle | unmuted bar (UNVERIFIED) | wide edged + primary active (UNVERIFIED) | — | `libelle/tabs-vs-default.md` |

## Corroborated patterns

- **No two styles share a tab system**: all 11 restyle list + trigger + active
  differently — every row is UNVERIFIED per style; no set-level graduation
  available. Tabs is the most per-style-divergent component in the audit.
- **Dead/no-op classes** (carbon redundant radius, material stray selectors +
  dead border, snow trailing space): Open drift cleanup.
- **Offset removals** (linear trigger, snow trigger+content): snow joins its
  pattern; linear joins its own.
