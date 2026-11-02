"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/snow/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function SnowAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="snow-style" data-design-system="snow">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
