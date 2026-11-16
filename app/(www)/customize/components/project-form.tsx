"use client";

import * as React from "react";
import {
  Copy01Icon,
  Globe02Icon,
  HandPointingRight04Icon,
  Tick02Icon,
  ColorPickerIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "cn";

import { useConfig } from "@/hooks/use-config-command";
import { copyToClipboardWithMeta } from "@/components/copy-button";
import {
  BASES,
  buildThemeForPreset,
  DEFAULT_CONFIG,
  type BaseName,
  type DesignSystemConfig,
} from "@/registry/config";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePresetCode } from "../hooks/use-design-system";
// import {
//   useDesignSystemSearchParams,
//   type DesignSystemSearchParams,
// } from "@/app/(app)/(create)/lib/search-params"
import {
  getFramework,
  getTemplateValue,
  NO_MONOREPO_FRAMEWORKS,
  TEMPLATES,
} from "../lib/templates";
import { useDesignSystemSearchParams } from "../../(create)/lib/search-params";
import { CheckIcon } from "lucide-react";
import { CodeBlockCommand } from "@/components/common/code-block-command";
import { useInstallCommand } from "@/hooks/use-install-command";

const TURBOREPO_LOGO =
  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Turborepo</title><path d="M11.9906 4.1957c-4.2998 0-7.7981 3.501-7.7981 7.8043s3.4983 7.8043 7.7981 7.8043c4.2999 0 7.7982-3.501 7.7982-7.8043s-3.4983-7.8043-7.7982-7.8043m0 11.843c-2.229 0-4.0356-1.8079-4.0356-4.0387s1.8065-4.0387 4.0356-4.0387S16.0262 9.7692 16.0262 12s-1.8065 4.0388-4.0356 4.0388m.6534-13.1249V0C18.9726.3386 24 5.5822 24 12s-5.0274 11.66-11.356 12v-2.9139c4.7167-.3372 8.4516-4.2814 8.4516-9.0861s-3.735-8.749-8.4516-9.0861M5.113 17.9586c-1.2502-1.4446-2.0562-3.2845-2.2-5.3046H0c.151 2.8266 1.2808 5.3917 3.051 7.3668l2.0606-2.0622zM11.3372 24v-2.9139c-2.02-.1439-3.8584-.949-5.3019-2.2018l-2.0606 2.0623c1.975 1.773 4.538 2.9022 7.361 3.0534z"/></svg>';
const ORIGIN = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000";
const IS_LOCAL_DEV = ORIGIN.includes("localhost");
const SHADCN_VERSION = process.env.NEXT_PUBLIC_RC ? "@rc" : "@latest";
const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;
type PackageManager = (typeof PACKAGE_MANAGERS)[number];

type ThemeCssVars = NonNullable<
  ReturnType<typeof buildThemeForPreset>["cssVars"]
>;

function formatCssVarsRule(selector: string, cssVars?: Record<string, string>) {
  const declarations = Object.entries(cssVars ?? {})
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  return `${selector} {\n${declarations}\n}`;
}

function formatThemeCss(cssVars: ThemeCssVars) {
  return [
    formatCssVarsRule(":root", cssVars.light),
    formatCssVarsRule(".dark", cssVars.dark),
  ].join("\n\n");
}

export function ProjectForm({
  className,
}: React.ComponentProps<typeof Button>) {
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = useDesignSystemSearchParams();

  const { commands: installCommands } = useInstallCommand({
    base: params.base,
    style: params.style,
    includePalette: true,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button className={cn(className)} />}>
        Get Code
      </DialogTrigger>
      <DialogContent className="no-scrollbar flex max-h-[calc(100svh-2rem)] flex-col rounded-none p-0 shadow-xl sm:max-w-md md:max-w-lg">
        <div className="flex min-w-0 flex-1 flex-col gap-0 overflow-hidden">
          <DialogHeader className="border-b px-6 py-5">
            <DialogTitle>Install</DialogTitle>
          </DialogHeader>
          <div className="no-scrollbar overflow-y-auto">
            <FieldGroup className="px-6 py-4">
              <Field>
                <FieldLabel>Base</FieldLabel>
                <BaseGrid base={params.base} setParams={setParams} />
              </Field>
              <FieldSeparator className="-mx-6" />
              {/* <Field orientation="horizontal">
                <FieldLabel htmlFor="pointer">
                  <HugeiconsIcon
                    icon={ColorPickerIcon}
                    className="size-4 -rotate-90"
                  />
                  include palette
                </FieldLabel>
                <Switch id="palette" />
              </Field> */}
            </FieldGroup>
            <DialogFooter className="m-0 min-w-0 p-6 pt-2">
              <div className="flex w-full min-w-0 flex-col gap-3">
                {/* <div className="bg-muted border-foreground/10 border">
                  <div className="flex items-center justify-between gap-2 px-2 py-1">
                    <span className="flex items-center gap-2">
                      <HugeiconsIcon icon={Globe02Icon} className="size-4" />
                      RTL support
                    </span>
                    <span className="p-0.5">
                      <CheckIcon className="size-3.5" />
                    </span>
                  </div>
                </div> */}
                {/* <Tabs
                  value={packageManager}
                  onValueChange={(value) => {
                    setConfig((prev) => ({
                      ...prev,
                      packageManager: value as PackageManager,
                    }));
                  }}
                  className="ring-border min-w-0 gap-0 overflow-hidden border-0 ring-1"
                >
                  <div className="flex items-center gap-2 py-1 pr-1.5 pl-1">
                    <TabsList className="bg-transparent font-mono">
                      {PACKAGE_MANAGERS.map((manager) => {
                        return (
                          <TabsTrigger
                            key={manager}
                            value={manager}
                            className="py-0 leading-none data-[state=active]:shadow-none"
                          >
                            {manager}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </div>
                  {Object.entries(commands).map(([key, cmd]) => {
                    return (
                      <TabsContent key={key} value={key}>
                        <div className="bg-popover relative overflow-hidden border-t p-3">
                          <div className="no-scrollbar overflow-x-auto">
                            <code className="font-mono text-sm whitespace-nowrap">
                              {cmd}
                            </code>
                          </div>
                        </div>
                      </TabsContent>
                    );
                  })}
                </Tabs> */}
                {/* <Button onClick={handleCopy} className="h-9 w-full">
                  {copiedTarget === "command" ? "Copied" : "Copy Command"}
                </Button> */}
                <CodeBlockCommand
                  commands={installCommands}
                  className="ring-border min-w-0 gap-0 overflow-hidden border-0 ring-1"
                />
              </div>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const TemplateGrid = React.memo(function TemplateGrid({
  template,
  setParams,
}: {
  template: any;
  setParams: ReturnType<any>[1];
}) {
  const isMonorepo = template?.endsWith("-monorepo") ?? false;
  const framework = getFramework(template ?? "next");

  const handleTemplateChange = React.useCallback(
    (value: string) => {
      setParams({
        template: getTemplateValue(value, isMonorepo) as any,
      });
    },
    [isMonorepo, setParams]
  );

  return (
    <RadioGroup
      value={framework}
      onValueChange={handleTemplateChange}
      className="grid grid-cols-2 gap-2"
    >
      {TEMPLATES.map((item) => (
        <FieldLabel
          key={item.value}
          htmlFor={`template-${item.value}`}
          className="block w-full"
        >
          <Field
            orientation="horizontal"
            className="w-full rounded-md transition-colors duration-150 hover:bg-neutral-700/45"
          >
            <FieldContent className="flex flex-row items-center gap-2 px-2.5 py-1.5">
              <div
                className="size-4 text-neutral-100 [&_svg]:size-4 *:[svg]:text-neutral-100!"
                dangerouslySetInnerHTML={{
                  __html: item.logo,
                }}
              ></div>
              <FieldTitle>{item.title}</FieldTitle>
            </FieldContent>
            <RadioGroupItem
              value={item.value}
              id={`template-${item.value}`}
              className="sr-only absolute"
            />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
});

const BaseGrid = React.memo(function BaseGrid({
  base,
  setParams,
}: {
  base: any;
  setParams: ReturnType<any>[1];
}) {
  const handleBaseChange = React.useCallback(
    (value: string) => {
      setParams({ base: value as BaseName });
    },
    [setParams]
  );

  return (
    <RadioGroup
      value={base}
      onValueChange={handleBaseChange}
      aria-label="Base"
      className="grid grid-cols-1 gap-2 sm:grid-cols-3"
    >
      {BASES.map((item) => (
        <FieldLabel
          key={item.name}
          htmlFor={`base-${item.name}`}
          className="block w-full"
        >
          <Field
            orientation="horizontal"
            className="w-full transition-colors duration-150 hover:bg-neutral-700/45"
          >
            <FieldContent className="flex flex-row items-center gap-2 py-1">
              <div
                className="size-4 shrink-0 text-neutral-100 [&_svg]:size-4 *:[svg]:text-neutral-100!"
                dangerouslySetInnerHTML={{
                  __html: item.meta?.logo ?? "",
                }}
              />
              <FieldTitle className="whitespace-nowrap">
                {item.title}
              </FieldTitle>
            </FieldContent>
            <RadioGroupItem
              value={item.name}
              id={`base-${item.name}`}
              className="sr-only absolute"
            />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
});
