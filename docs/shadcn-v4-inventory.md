# shadcn/ui Upstream Inventory (v4 registry, fetched 2026-10-12)

Source of truth: https://ui.shadcn.com/r/index.json (63 `registry:ui` items) +
`apps/v4/registry/new-york-v4/ui` from github.com/shadcn-ui/ui (61 files).
Destination namespace: `registry/default-v4/`. Existing `registry/default/` untouched.

Staged: 55 components + `hooks/use-mobile.tsx` + `lib/utils.ts`. Deferred: 6.

| Component | Upstream id | Destination | Dependencies | Status |
|---|---|---|---|---|
| accordion | accordion | `registry/default-v4/ui/accordion.tsx` | — | staged |
| alert | alert | `registry/default-v4/ui/alert.tsx` | — | staged |
| alert-dialog | alert-dialog | `registry/default-v4/ui/alert-dialog.tsx` | reg:button | staged |
| aspect-ratio | aspect-ratio | `registry/default-v4/ui/aspect-ratio.tsx` | — | staged |
| attachment | attachment | `registry/default-v4/ui/attachment.tsx` | reg:button | staged |
| avatar | avatar | `registry/default-v4/ui/avatar.tsx` | — | staged |
| badge | badge | `registry/default-v4/ui/badge.tsx` | — | staged |
| breadcrumb | breadcrumb | `registry/default-v4/ui/breadcrumb.tsx` | — | staged |
| bubble | bubble | `registry/default-v4/ui/bubble.tsx` | — | staged |
| button | button | `registry/default-v4/ui/button.tsx` | — | staged |
| button-group | button-group | `registry/default-v4/ui/button-group.tsx` | reg:separator | staged |
| calendar | calendar | — | react-day-picker@latest, date-fns, reg:button | DEFERRED — upstream uses react-day-picker v9 APIs (getDefaultClassNames, DayButton); installed 8.10.1 — deferred pending dep upgrade |
| card | card | `registry/default-v4/ui/card.tsx` | — | staged |
| carousel | carousel | `registry/default-v4/ui/carousel.tsx` | embla-carousel-react, reg:button | staged |
| chart | chart | — | recharts@3.8.0, reg:card | DEFERRED — upstream uses recharts v3 API (TooltipValueType); installed 2.15.1 — deferred pending dep upgrade |
| checkbox | checkbox | `registry/default-v4/ui/checkbox.tsx` | — | staged |
| collapsible | collapsible | `registry/default-v4/ui/collapsible.tsx` | — | staged |
| combobox | combobox | — | @base-ui/react, reg:button, reg:input-group | DEFERRED — needs @base-ui/react (not installed; React-18 compatible per peers but new dep — deferred) |
| command | command | `registry/default-v4/ui/command.tsx` | cmdk, reg:dialog, reg:input-group | staged |
| context-menu | context-menu | `registry/default-v4/ui/context-menu.tsx` | — | staged |
| dialog | dialog | `registry/default-v4/ui/dialog.tsx` | reg:button | staged |
| direction | direction | `registry/default-v4/ui/direction.tsx` | @base-ui/react | staged |
| drawer | drawer | `registry/default-v4/ui/drawer.tsx` | @base-ui/react | staged |
| dropdown-menu | dropdown-menu | `registry/default-v4/ui/dropdown-menu.tsx` | — | staged |
| empty | empty | `registry/default-v4/ui/empty.tsx` | — | staged |
| field | field | `registry/default-v4/ui/field.tsx` | reg:label, reg:separator | staged |
| form | form | `registry/default-v4/ui/form.tsx` | — | staged |
| hover-card | hover-card | `registry/default-v4/ui/hover-card.tsx` | — | staged |
| input | input | `registry/default-v4/ui/input.tsx` | — | staged |
| input-group | input-group | `registry/default-v4/ui/input-group.tsx` | reg:button, reg:input, reg:textarea | staged |
| input-otp | input-otp | `registry/default-v4/ui/input-otp.tsx` | input-otp | staged |
| item | item | `registry/default-v4/ui/item.tsx` | reg:separator | staged |
| kbd | kbd | `registry/default-v4/ui/kbd.tsx` | — | staged |
| label | label | `registry/default-v4/ui/label.tsx` | — | staged |
| marker | marker | `registry/default-v4/ui/marker.tsx` | — | staged |
| menubar | menubar | `registry/default-v4/ui/menubar.tsx` | reg:dropdown-menu | staged |
| message | message | `registry/default-v4/ui/message.tsx` | — | staged |
| message-scroller | message-scroller | — | @shadcn/react, reg:button | DEFERRED — needs @base-ui/react + @shadcn/react (not installed — deferred) |
| native-select | native-select | `registry/default-v4/ui/native-select.tsx` | — | staged |
| navigation-menu | navigation-menu | `registry/default-v4/ui/navigation-menu.tsx` | — | staged |
| pagination | pagination | `registry/default-v4/ui/pagination.tsx` | reg:button | staged |
| popover | popover | `registry/default-v4/ui/popover.tsx` | — | staged |
| progress | progress | `registry/default-v4/ui/progress.tsx` | — | staged |
| questionnaire | questionnaire | — | @shadcn/react, reg:button | DEFERRED — needs @shadcn/react (not installed) |
| radio-group | radio-group | `registry/default-v4/ui/radio-group.tsx` | — | staged |
| resizable | resizable | — | react-resizable-panels | DEFERRED — upstream uses react-resizable-panels v3 API (Group/Separator); installed 2.1.7 — deferred pending dep upgrade |
| scroll-area | scroll-area | `registry/default-v4/ui/scroll-area.tsx` | — | staged |
| select | select | `registry/default-v4/ui/select.tsx` | — | staged |
| separator | separator | `registry/default-v4/ui/separator.tsx` | — | staged |
| sheet | sheet | `registry/default-v4/ui/sheet.tsx` | reg:button | staged |
| sidebar | sidebar | `registry/default-v4/ui/sidebar.tsx` | reg:button, reg:input, reg:separator, reg:sheet, reg:skeleton, reg:tooltip, reg:use-mobile | staged |
| skeleton | skeleton | `registry/default-v4/ui/skeleton.tsx` | — | staged |
| slider | slider | `registry/default-v4/ui/slider.tsx` | — | staged |
| sonner | sonner | — | sonner, next-themes | DEFERRED — upstream uses sonner `icons` prop (absent in installed 0.3.5); deferred pending sonner upgrade + existing-app compat check |
| spinner | spinner | `registry/default-v4/ui/spinner.tsx` | — | staged |
| switch | switch | `registry/default-v4/ui/switch.tsx` | — | staged |
| table | table | `registry/default-v4/ui/table.tsx` | — | staged |
| tabs | tabs | `registry/default-v4/ui/tabs.tsx` | — | staged |
| textarea | textarea | `registry/default-v4/ui/textarea.tsx` | — | staged |
| toast | toast | — | @base-ui/react, reg:button | INTENTIONALLY OMITTED — upstream deprecated `toast` in favor of `sonner`; existing sonner coverage retained |
| toggle | toggle | `registry/default-v4/ui/toggle.tsx` | — | staged |
| toggle-group | toggle-group | `registry/default-v4/ui/toggle-group.tsx` | reg:toggle | staged |
| tooltip | tooltip | `registry/default-v4/ui/tooltip.tsx` | — | staged |

## Local adaptations (import sources only; logic untouched)
- `from "cn"` → `from "@/lib/utils"` (57 files; identical clsx+twMerge implementation).
- `from "radix-ui"` → `from "@radix-ui/react-*"` per-symbol packages (all installed; 26 aliased imports converted to `import * as` namespace form because installed 1.x primitives expose members on the namespace, matching existing repo convention).
- `import { Slot }` → `import * as Slot` (10 files; installed `@radix-ui/react-slot@1.1.2` exposes `Root` on the namespace, not on the component).
- `@/registry/new-york-v4/ui/*` → `@/registry/default-v4/ui/*`; hook path likewise.
- `form.tsx`: `import type { Label as … }` → `import type * as` namespace form.
- `sonner.tsx` adaptation ATTEMPTED then file deferred (icons prop needs newer sonner).
- `direction.tsx`: namespace import works against installed `@radix-ui/react-direction` (newly installed `1.1.5`, leaf dep, React-18 compatible).
- Upstream `bases/base` generation (`@base-ui/react`, `cn` package, `cn-*` theme classes) deliberately NOT used; `new-york-v4` is the staged generation.

## Supporting files
- `registry/default-v4/hooks/use-mobile.tsx` — byte-identical to upstream.
- `registry/default-v4/lib/utils.ts` — same `cn` as existing styles (avoids new `cn` package).

## Collision analysis
- Registry identities shared across styles by design; outputs under `public/r/styles/default-v4/` cannot collide with `default/`. Verified: no existing `public/r` file modified; `__registry__` diff purely additive (751 insertions, 0 deletions).
- Generator change: consumer-path rewrite extended with `default-v4` (must precede `default` in alternation); legacy suffix-strip skipped for `default-v4` (sources already use base tokens; stripping corrupted `ease-linear` → `ease`). Verified: generated v4 content byte-faithful modulo path rewrite.
- App preview UI (`hooks/use-style-store.tsx`), `components.json`, aliases untouched.
