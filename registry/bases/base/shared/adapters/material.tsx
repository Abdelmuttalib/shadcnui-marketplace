"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/material/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function MaterialAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="material-style" data-design-system="material">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
