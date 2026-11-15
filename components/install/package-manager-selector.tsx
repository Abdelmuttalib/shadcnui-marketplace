"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { usePackageManagerConfig } from "@/lib/config/package-manager-config";

import { PACKAGE_MANAGERS, PackageManager } from "@/registry/package-managers";
import { ReactNode } from "react";

type PackageManagerSelectorProps = {
  children: (packageManager: PackageManager) => ReactNode;
  className?: string;
};

export function PackageManagerSelector({
  children,
  className,
}: PackageManagerSelectorProps) {
  const [config, setConfig] = usePackageManagerConfig();

  return (
    <Tabs
      value={config.packageManager}
      onValueChange={(value) => {
        setConfig((prev) => ({
          ...prev,
          packageManager: value as typeof prev.packageManager,
        }));
      }}
      className={className}
    >
      <TabsList>
        {PACKAGE_MANAGERS.map((manager) => (
          <TabsTrigger key={manager} value={manager}>
            {manager}
          </TabsTrigger>
        ))}
      </TabsList>

      {children(config.packageManager)}
    </Tabs>
  );
}
