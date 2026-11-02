"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/neon/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function NeonAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="neon-style" data-design-system="neon">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
