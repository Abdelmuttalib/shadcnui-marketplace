"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/linear/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function LinearAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="linear-style" data-design-system="linear">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
