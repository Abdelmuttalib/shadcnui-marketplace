import dynamic from "next/dynamic";

import type { ComponentType } from "react";

type SinkPageComponent = ComponentType;

export const sinkPageRegistry = {
  default: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/default/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/default/internal/sink/page")
    ),
  },

  carbon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/carbon/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/carbon/internal/sink/page")
    ),
  },

  catalyst: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/catalyst/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/catalyst/internal/sink/page")
    ),
  },

  linear: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/linear/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/linear/internal/sink/page")
    ),
  },

  material: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/material/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/material/internal/sink/page")
    ),
  },

  spectrum: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/spectrum/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/spectrum/internal/sink/page")
    ),
  },

  wedges: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/wedges/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/wedges/internal/sink/page")
    ),
  },

  moon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/moon/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/moon/internal/sink/page")
    ),
  },

  lucid: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/lucid/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/lucid/internal/sink/page")
    ),
  },

  snow: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/snow/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/snow/internal/sink/page")
    ),
  },

  neon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/neon/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/neon/internal/sink/page")
    ),
  },

  libelle: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/libelle/internal/sink")
    ),
    legacy: dynamic(
      () => import("@/registry/bases/base/libelle/internal/sink/page")
    ),
  },
} satisfies Record<
  string,
  {
    current: SinkPageComponent;
    legacy: SinkPageComponent;
  }
>;

export type SinkStyleName = keyof typeof sinkPageRegistry;

export function isSinkStyle(style: string): style is SinkStyleName {
  return Object.prototype.hasOwnProperty.call(sinkPageRegistry, style);
}
