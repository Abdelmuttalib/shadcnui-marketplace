"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/moon/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "moon";

export function MoonAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemEnvironment style={style}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="moon-style" data-design-system="moon">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
