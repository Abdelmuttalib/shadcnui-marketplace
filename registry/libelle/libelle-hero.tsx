import { Bookmark, HeartIcon } from "lucide-react";

import { DemoDatePicker } from "@/registry/libelle/example/cards/components/date-picker";
import {
  ComboboxDemo,
  ContextMenuDemo,
  DrawerDemo,
  InputDemo,
  InputOTPDemo,
  MenubarDemo,
  PaginationDemo,
  PopoverDemo,
  SelectDemo,
  SheetDemo,
  SliderDemo,
  TextareaDemo,
  ToggleGroupDemo,
} from "@/registry/libelle/showcase";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/libelle/ui/avatar";
import { Badge } from "@/registry/libelle/ui/badge";
import { Button } from "@/registry/libelle/ui/button";
import { Checkbox } from "@/registry/libelle/ui/checkbox";
import { Switch } from "@/registry/libelle/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/registry/libelle/ui/tabs";
import { Toggle } from "@/registry/libelle/ui/toggle";
import { renderStyleCardShowcase } from "@/registry/styles";

export function LibelleUI() {
  return (
    <>
      {/* pointer-events-none  */}
      {/* <div className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"> */}
      <div className="-ml-[32rem] h-[46.375rem] origin-top select-none sm:-ml-[24rem] sm:-mt-16 sm:h-auto md:-ml-64  lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
        <div className="flex justify-end">
          <div className="relative flex items-end">
            <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-16 top-full -mt-px h-8 overflow-hidden">
              <div className="-mt-px flex h-[2px] w-56">
                <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
            <div>
              <div>
                <div className="relative ml-auto hidden w-fit justify-end p-4 lg:flex">
                  <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <Switch />
                </div>
              </div>
              <div className="relative p-4">
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="flex items-center justify-end">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant={"outline"}>Outline</Button>
                    <Button variant={"destructive"}>Destructive</Button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 p-4 text-right">
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                {/* <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute inset-0 -right-px bg-linear-to-br from-white/0 via-white/25 to-white/0"></div> */}
                <div className="flex justify-end gap-2">
                  <Tabs defaultValue="tab1">
                    <TabsList className="">
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Button size={"icon"}>
                    <HeartIcon className="h-4 w-4" />
                  </Button>
                  <Button size={"icon"} variant={"secondary"}>
                    <HeartIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <PopoverDemo />
                  <Button size={"default"} variant={"secondary"}>
                    <Bookmark />
                    <span>Bookmark</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-4">
              <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden">
                <div className="-mb-px flex h-[2px] w-56">
                  <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--libelle-primary))_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
              </div>
              <div className="w-[24.5rem] divide-y divide-muted-foreground/20 rounded-libelle-lg border border-libelle-input bg-libelle-card text-[0.8125rem]/5 text-libelle-foreground shadow-xl shadow-black/5">
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/libelle-avatar-1`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Leonard Krasner</div>
                    <div className="mt-1 text-libelle-muted-foreground">
                      @leonardkrasner
                    </div>
                  </div>
                  <Button variant={"outline"} size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/libelle-avatar-2`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Floyd Miles</div>
                    <div className="mt-1 text-libelle-muted-foreground">
                      @floydmiles
                    </div>
                  </div>
                  <Button variant={"outline"} size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/libelle-avatar-3`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN3</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Emily Selman</div>
                    <div className="mt-1 text-libelle-muted-foreground">
                      @emilyselman
                    </div>
                  </div>
                  <Button variant={"outline"} size="sm">
                    View
                  </Button>
                </div>
                <div className="p-4">
                  <Button className="w-full" variant={"default"}>
                    View all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative z-10 p-4">
            <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

            <div className="flex w-fit items-center gap-2">
              <InputOTPDemo />
              <SheetDemo />
              <InputDemo />
              <PaginationDemo />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div>
            <div className="relative flex items-end justify-end">
              <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div>
                <div className="ml-auto flex flex-col items-end gap-3 p-4">
                  <div className="ml-auto flex justify-end">
                    <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
                      <Badge className="w-fit flex-none">Default</Badge>
                      <Badge className="w-fit flex-none" variant={"outline"}>
                        Outline
                      </Badge>
                      <Badge
                        className="w-fit flex-none"
                        variant={"destructive"}
                      >
                        Destructive
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div>
                      <MenubarDemo />
                    </div>
                    <div>
                      <DrawerDemo />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 p-4 pt-0">
                  <div>
                    <SelectDemo />
                  </div>
                  <div>
                    <ComboboxDemo />
                  </div>
                </div>
                <div className="relative z-10 p-4">
                  <div className="absolute -inset-x-8 top-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="-mb-px flex h-[2px] w-56">
                      <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--libelle-primary))_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--libelle-primary))_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  <div className="flex w-[23.5625rem] items-center">
                    <TextareaDemo />
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-4">
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="space-y-4">
                  <div className="flex justify-start gap-2">
                    <div>
                      <Toggle variant={"outline"}>
                        <Bookmark />
                      </Toggle>
                    </div>
                    <ToggleGroupDemo />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms
                      </label>
                    </div>
                  </div>

                  <div>
                    <SliderDemo />
                  </div>
                  <div className="rounded-libelle-lg border border-libelle-input bg-libelle-card p-4 shadow-xl shadow-black/5">
                    <ContextMenuDemo />
                  </div>
                  {/* <DemoDatePicker /> */}

                  {/* <div className="pointer-events-auto flex w-[21rem] flex-col gap-4 rounded-libelle-lg border border-libelle-input bg-libelle-card p-4 shadow-xl shadow-black/5">
                    <h3 className="text-2xl font-medium">Card</h3>
                    <p className="text-sm text-libelle-muted-foreground">
                      A card is a flexible and extensible content container.
                    </p>
                    <DatePickerWithRange />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="relative p-4">
                <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-px right-16 h-8 overflow-hidden">
                  <div className="-mt-px flex h-[2px] w-56 -scale-x-100">
                    <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
                {/* <DemoCreateAccount /> */}
                <DemoDatePicker />
                {/* <DemoNotifications /> */}
                {/* <div className="pointer-events-auto relative flex w-[28.125rem] justify-end gap-2 rounded-md p-4 text-[0.8125rem]/5 text-libelle-muted-foreground">
                  <div className="pointer-events-auto space-y-1 rounded-lg text-sm font-medium text-libelle-muted-foreground shadow-xl shadow-black/5">
                    <AccordionDemo />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="relative z-10 w-[32.125rem] p-4">
            <div className="absolute -inset-y-8 right-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 left-0 w-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-x-8 bottom-0 h-px bg-libelle-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

            {renderStyleCardShowcase("libelle")}
          </div>
        </div>
      </div>
    </>
  );
}
