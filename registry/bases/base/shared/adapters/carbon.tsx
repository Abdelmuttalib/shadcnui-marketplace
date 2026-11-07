"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/carbon/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "carbon";

export function CarbonAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemEnvironment style={style}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="carbon-style" data-design-system="carbon">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
