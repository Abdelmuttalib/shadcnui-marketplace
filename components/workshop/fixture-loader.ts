"use client";

import React from "react";

import type { FixtureSide } from "./fixtures/types";

export type FixtureComponent = React.ComponentType<{ side: FixtureSide }>;

/**
 * Deterministic fixture resolution. Each entry uses a static import
 * specifier so Next.js can code-split per fixture; the fixture module itself
 * statically imports both the `default` and `default-v4` implementations.
 * New fixtures are registered here explicitly — no dynamic path construction.
 */
const FIXTURES: Record<string, React.LazyExoticComponent<FixtureComponent>> = {
  accordion: React.lazy(() =>
    import("./fixtures/accordion").then((m) => ({ default: m.AccordionFixture }))
  ),
  alert: React.lazy(() =>
    import("./fixtures/alert").then((m) => ({ default: m.AlertFixture }))
  ),
  badge: React.lazy(() =>
    import("./fixtures/badge").then((m) => ({ default: m.BadgeFixture }))
  ),
  button: React.lazy(() =>
    import("./fixtures/button").then((m) => ({ default: m.ButtonFixture }))
  ),
  card: React.lazy(() =>
    import("./fixtures/card").then((m) => ({ default: m.CardFixture }))
  ),
  checkbox: React.lazy(() =>
    import("./fixtures/checkbox").then((m) => ({ default: m.CheckboxFixture }))
  ),
  dialog: React.lazy(() =>
    import("./fixtures/dialog").then((m) => ({ default: m.DialogFixture }))
  ),
  "dropdown-menu": React.lazy(() =>
    import("./fixtures/dropdown-menu").then((m) => ({
      default: m.DropdownMenuFixture,
    }))
  ),
  input: React.lazy(() =>
    import("./fixtures/input").then((m) => ({ default: m.InputFixture }))
  ),
  label: React.lazy(() =>
    import("./fixtures/label").then((m) => ({ default: m.LabelFixture }))
  ),
  popover: React.lazy(() =>
    import("./fixtures/popover").then((m) => ({ default: m.PopoverFixture }))
  ),
  "radio-group": React.lazy(() =>
    import("./fixtures/radio-group").then((m) => ({
      default: m.RadioGroupFixture,
    }))
  ),
  select: React.lazy(() =>
    import("./fixtures/select").then((m) => ({ default: m.SelectFixture }))
  ),
  skeleton: React.lazy(() =>
    import("./fixtures/skeleton").then((m) => ({ default: m.SkeletonFixture }))
  ),
  slider: React.lazy(() =>
    import("./fixtures/slider").then((m) => ({ default: m.SliderFixture }))
  ),
  switch: React.lazy(() =>
    import("./fixtures/switch").then((m) => ({ default: m.SwitchFixture }))
  ),
  table: React.lazy(() =>
    import("./fixtures/table").then((m) => ({ default: m.TableFixture }))
  ),
  tabs: React.lazy(() =>
    import("./fixtures/tabs").then((m) => ({ default: m.TabsFixture }))
  ),
  textarea: React.lazy(() =>
    import("./fixtures/textarea").then((m) => ({ default: m.TextareaFixture }))
  ),
  tooltip: React.lazy(() =>
    import("./fixtures/tooltip").then((m) => ({ default: m.TooltipFixture }))
  ),
};

export function getFixture(name: string) {
  return FIXTURES[name] ?? null;
}

export function hasFixture(name: string) {
  return name in FIXTURES;
}
