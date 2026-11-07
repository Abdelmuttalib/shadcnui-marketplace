"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/lucid/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "lucid";

export function LucidAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemEnvironment style={style}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="lucid-style" data-design-system="lucid">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
