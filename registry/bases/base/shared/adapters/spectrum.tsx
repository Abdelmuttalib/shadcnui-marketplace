"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/spectrum/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function SpectrumAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="spectrum-style" data-design-system="spectrum">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
