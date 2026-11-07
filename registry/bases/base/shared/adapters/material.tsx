"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/material/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "material";

export function MaterialAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemEnvironment style={style}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="material-style" data-design-system="material">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
