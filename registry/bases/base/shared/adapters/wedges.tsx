"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/wedges/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function WedgesAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="wedges-style" data-design-system="wedges">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
