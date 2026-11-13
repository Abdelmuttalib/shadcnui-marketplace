# Design Exceptions Register

Structural implementations permitted because they are necessary to reproduce a
design system — each requiring (1) documented necessity with evidence beyond the
style name, and (2) verified public behavior + accessibility. Anything not
registered here that breaks API/behavior parity is `PARITY_DIVERGENCE`.

## Candidate queue (not yet audited — do not treat as approved)

- slider, select: enter the protocol from the start (interaction-critical
  primitives where design systems commonly diverge). (checkbox, radio-group,
  switch, toggle cleared Batch 1 — see below; toggle-group needed no protocol.)

## Owner-confirmed decisions (Batch 1, 2026-10-09)

- Material focus-ring removal (checkbox `registry/material/ui/checkbox.tsx:16`,
  radio-group `:31`, switch `:14`): STYLE_INTENTIONAL, corroborated across three
  components. Not filed as an exception (no structural break — pure class
  restyle); listed here for traceability.
- Neon dot indicators (checkbox `registry/neon/ui/checkbox.tsx:21-26`,
  radio-group `registry/neon/ui/radio-group.tsx:36-39`): documented as design
  exceptions per owner decision B. Protocol check: Radix `Indicator`
  state-conditional rendering retained in both files, so keyboard interaction and
  `data-state`/`aria-checked` exposure flow through Radix unchanged; no ARIA
  attributes exist in baseline or alternative to diverge; dot mounts only when
  checked (Indicator semantics, inferred). Contrast unmeasured — open item, not
  a failure claim. Full investigations: `components/neon/checkbox-vs-default.md`
  §7/§9/§13, `components/neon/radio-group-vs-default.md` §7/§9/§13.

## Further candidates from Batch 1 (protocol review pending)

- Material halo spans (checkbox `:21`, switch `:25`): decorative `group`-gated
  ripple wash; behavior verified unchanged. Register on batch review.
- Libelle switch CheckIcon (`registry/libelle/ui/switch.tsx:4,26`): decorative
  state-gated icon + oversized thumb; travel geometry still Needs verification —
  register only after travel is ruled.
- Linear/spectrum filled-disc radio indicators: same design language in two
  styles; if ruled intentional as a set, file jointly.

## Approved exceptions

Neon checkbox dot indicator and neon radio-group dot indicator (owner decision B;
protocol evidence above). Anything else breaking API/behavior parity remains
`PARITY_DIVERGENCE` until registered here.
