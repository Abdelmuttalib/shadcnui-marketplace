"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/default/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function DefaultAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="default-style" data-design-system="default">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
