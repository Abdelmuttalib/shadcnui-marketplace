"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/moon/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function MoonAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="moon-style" data-design-system="moon">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
