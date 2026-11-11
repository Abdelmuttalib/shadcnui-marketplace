import dynamic from "next/dynamic";

import type { ComponentType } from "react";

type SinkPageComponent = ComponentType;

export const sinkPageRegistry = {
  default: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/default/internal/sink")
    ),
  },

  carbon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/carbon/internal/sink")
    ),
  },

  catalyst: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/catalyst/internal/sink")
    ),
  },

  linear: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/linear/internal/sink")
    ),
  },

  material: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/material/internal/sink")
    ),
  },

  spectrum: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/spectrum/internal/sink")
    ),
  },

  wedges: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/wedges/internal/sink")
    ),
  },

  moon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/moon/internal/sink")
    ),
  },

  lucid: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/lucid/internal/sink")
    ),
  },

  snow: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/snow/internal/sink")
    ),
  },

  neon: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/neon/internal/sink")
    ),
  },

  libelle: {
    current: dynamic(
      () => import("@/registry/bases/base/styles/libelle/internal/sink")
    ),
  },
} satisfies Record<
  string,
  {
    current: SinkPageComponent;
    legacy?: SinkPageComponent;
  }
>;

export type SinkStyleName = keyof typeof sinkPageRegistry;

export function isSinkStyle(style: string): style is SinkStyleName {
  return Object.prototype.hasOwnProperty.call(sinkPageRegistry, style);
}
