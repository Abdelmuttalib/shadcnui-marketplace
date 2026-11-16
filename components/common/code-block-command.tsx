"use client";

import * as React from "react";
import { Terminal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { copyToClipboardWithMeta } from "@/components/copy-button";
import {
  PACKAGE_MANAGERS,
  type PackageManager,
} from "@/registry/package-managers";
import { usePackageManagerConfig } from "@/lib/config/package-manager-config";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

type CodeBlockCommandProps = {
  commands: Partial<Record<PackageManager, string>>;
  className?: string;
};

export function CodeBlockCommand({
  commands,
  className,
}: CodeBlockCommandProps) {
  const [config, setConfig] = usePackageManagerConfig();

  const availableManagers = React.useMemo(
    () => PACKAGE_MANAGERS.filter((manager) => Boolean(commands[manager])),
    [commands]
  );

  const activeManager = availableManagers.includes(config.packageManager)
    ? config.packageManager
    : availableManagers[0];

  React.useEffect(() => {
    if (activeManager && activeManager !== config.packageManager) {
      setConfig({
        packageManager: activeManager,
      });
    }
  }, [activeManager, config.packageManager, setConfig]);

  if (!activeManager) {
    return null;
  }

  return (
    <Tabs
      value={activeManager}
      onValueChange={(value) => {
        if (availableManagers.includes(value as PackageManager)) {
          setConfig((prev) => ({
            ...prev,
            packageManager: value as PackageManager,
          }));
        }
      }}
      className={cn("bg-card gap-0", className)}
    >
      <div className="bg-card flex items-center gap-2 px-3 py-1">
        <div className="bg-foreground/80 flex size-4 shrink-0 items-center justify-center">
          <Terminal className="text-background size-3" />
        </div>

        <TabsList className="h-auto rounded-none bg-transparent p-0">
          {availableManagers.map((manager) => (
            <TabsTrigger
              key={manager}
              value={manager}
              className="data-[state=active]:border-input data-[state=active]:bg-background! h-7 rounded-none border border-transparent px-2 pt-0.5 font-mono text-xs shadow-none!"
            >
              {manager}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {availableManagers.map((manager) => (
        <TabsContent key={manager} value={manager} className="mt-0 min-w-0">
          <CodeBlock code={commands[manager]!} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
