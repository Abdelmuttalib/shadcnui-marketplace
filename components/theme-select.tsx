"use client";

import { Menu, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, MoonIcon, Pencil, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMounted } from "@/hooks/use-mounted";
import { type ThemeColorType, useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/utils/cn";
import { PRIMARY_THEME_COLORS } from "@/utils/theme-colors";

export function ThemeModeSelect() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="max-w-28 capitalize">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          key={`theme-mode-light`}
          value={"light"}
          className="capitalize"
        >
          light
        </SelectItem>
        <SelectItem
          key={`theme-mode-dark`}
          value={"dark"}
          className="capitalize"
        >
          dark
        </SelectItem>
        {/* {themes.map((theme) => (
          <SelectItem key={theme} value={theme} className="capitalize">
            {theme}
          </SelectItem>
        ))} */}
        {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem> */}
      </SelectContent>
    </Select>
  );
}

export function ThemeModeRadio() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div className="flex items-center overflow-hidden rounded-full border">
      <span className="sr-only">Select a display theme:</span>
      <span>
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center gap-2 rounded-full p-1 text-muted-foreground hover:text-foreground",
            {
              "border border-input bg-accent/50 text-foreground":
                theme === "system",
            }
          )}
        >
          <span className="sr-only">system</span>
          <Icons.system />
        </button>
      </span>
      <span>
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-2 rounded-full p-1 text-muted-foreground hover:text-foreground",
            {
              "border border-input bg-accent/50 text-foreground":
                theme === "light",
            }
          )}
        >
          <span className="sr-only">light</span>
          <Icons.sun />
        </button>
      </span>
      <span>
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-2 rounded-full p-1 text-muted-foreground hover:text-foreground",
            {
              "border border-input bg-accent/50 text-foreground":
                theme === "dark",
            }
          )}
        >
          <span className="sr-only">dark</span>
          <Icons.moon />
        </button>
      </span>
    </div>
  );
}

export default function ThemeSwitcher({
  className,
  variant,
}: {
  className?: string;
  variant?: ButtonProps["variant"];
}) {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  // return (
  //   <div className="flex flex-wrap gap-2">
  //     <Button
  //       type="button"
  //       variant={variant ?? "ghost"}
  //       onClick={() => setTheme("light")}
  //       className={cn("text-foreground-light sm:inline-flex", className)}
  //       iconLeft={<SunIcon className="w-5" />}
  //       size="sm"
  //       disabled={theme === "light"}
  //     >
  //       Light
  //     </Button>
  //     <Button
  //       type="button"
  //       variant={variant ?? "ghost"}
  //       onClick={() => setTheme("dark")}
  //       className={cn("text-foreground-light sm:inline-flex", className)}
  //       iconLeft={<MoonIcon className="w-5" />}
  //       size="sm"
  //       disabled={theme === "dark"}
  //     >
  //       Dark
  //     </Button>
  //   </div>
  // );

  return (
    <Button
      type="button"
      size="icon-sm"
      variant={variant ?? "ghost"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("text-foreground-light sm:inline-flex", className)}
    >
      {theme === "light" ? (
        <SunIcon className="w-5" />
      ) : (
        <MoonIcon className="w-5" />
      )}
    </Button>
  );
}

import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "./icons";

export function ThemeColorSelect() {
  const [themeColor, setThemeColor] = useThemeColor();

  return (
    <div className="flex flex-wrap gap-2">
      {PRIMARY_THEME_COLORS?.map(
        ({ name, color }: { name: ThemeColorType; color: string }) => (
          <Button
            key={`${name}`}
            variant="ghost"
            onClick={() => {
              setThemeColor({
                colorName: name,
              });
            }}
            className={cn(
              "flex items-center rounded-lg font-medium capitalize  text-foreground",
              {
                "ring-2 ring-ring ring-offset-background":
                  name === themeColor.colorName,
              }
            )}
            size="icon-sm"
          >
            <span
              style={{
                backgroundColor: color,
              }}
              className={cn("h-5 w-5 rounded-lg")}
            ></span>
          </Button>
        )
      )}
    </div>
  );
}

export function ThemeColorSelect2() {
  const [themeColor, setThemeColor] = useThemeColor();

  const themeColors = PRIMARY_THEME_COLORS.filter(
    ({ name }) => name === themeColor.colorName
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as="button"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "sm",
            }),
            "mx-2 flex border capitalize"
          )}
        >
          <span
            className={cn("h-3.5 w-3.5 rounded")}
            style={{
              backgroundColor: themeColors?.[0]?.color,
            }}
          ></span>
          <>{themeColor.colorName}</>
          <ChevronDownIcon className="text-foreground-secondary ml-2 h-3.5 w-3.5" />
          {/* {name == themeColor.colorName && (
                      <CheckIcon className="absolute right-2 h-4 w-4 text-current" />
                    )} */}
          {/* <p className="w-5 text-foreground-light">i</p> */}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-popover p-1 text-foreground shadow-lg ring-1 ring-border focus:outline-none">
          <div className="relative">
            {PRIMARY_THEME_COLORS?.map(
              ({ name, color }: { name: ThemeColorType; color: string }) => (
                <Menu.Item key={`${name}`}>
                  <button
                    onClick={() => {
                      setThemeColor({
                        colorName: name,
                      });
                    }}
                    className={cn(
                      "flex w-full items-center rounded px-3 py-2.5 capitalize text-foreground",
                      {
                        "bg-primary-100 text-foreground dark:bg-muted-foreground/20":
                          name === themeColor.colorName,
                        "hover:bg-muted dark:hover:bg-muted-foreground/10":
                          name !== themeColor.colorName,
                      }
                    )}
                  >
                    <span
                      style={{
                        backgroundColor: color,
                      }}
                      className={cn("mr-2 h-3.5 w-3.5 rounded")}
                    ></span>
                    <>{name}</>
                    {name == themeColor.colorName && (
                      <CheckIcon className="absolute right-2 h-4 w-4 text-current" />
                    )}
                  </button>
                </Menu.Item>
              )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
