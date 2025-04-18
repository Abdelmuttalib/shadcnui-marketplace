"use client";

import { Bookmark, HeartIcon } from "lucide-react";

import {
  AccordionDemo,
  CheckboxDemo,
  ComboboxDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DrawerDemo,
  InputDemo,
  InputOTPDemo,
  MenubarDemo,
  PaginationDemo,
  PopoverDemo,
  SelectDemo,
  SheetDemo,
  SliderDemo,
  TableDemo,
  TextareaDemo,
  ToggleGroupDemo,
} from "@/registry/material/showcase";
import { Badge } from "@/registry/material/ui/badge";
import { Button } from "@/registry/material/ui/button";
import { Checkbox } from "@/registry/material/ui/checkbox";
import { Switch } from "@/registry/material/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/registry/material/ui/tabs";
import { Toggle } from "@/registry/material/ui/toggle";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function MaterialUI() {
  return (
    <>
      {/* pointer-events-none  */}
      {/* <div className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"> */}
      <div className="-ml-[32rem] mt-12 h-[46.375rem] origin-top select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
        <div className="flex justify-end">
          <div className="relative flex items-end">
            <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-16 top-full -mt-px h-8 overflow-hidden">
              <div className="-mt-px flex h-[2px] w-56">
                <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
            <div>
              <div className="p-4">
                <div className="ml-auto hidden justify-end lg:flex">
                  <Switch />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-end">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant={"outline"}>Outline</Button>
                    <Button variant={"destructive"}>Destructive</Button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 p-4 text-right">
                <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                {/* <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -inset-x-8 top-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
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
              <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 top-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden">
                <div className="-mb-px flex h-[2px] w-56">
                  <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
              </div>
              <div className="w-[24.5rem] divide-y divide-muted-foreground/20 rounded-material-lg border border-material-input bg-material-card text-[0.8125rem]/5 text-material-foreground shadow-xl shadow-black/5">
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src="https://avatar.vercel.sh/avatar-material-1.png"
                      alt="material avatar 1"
                    />
                    <AvatarFallback>MA1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Leonard Krasner</div>
                    <div className="mt-1 text-muted-foreground">
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
                      src="https://avatar.vercel.sh/avatar-material-2.png"
                      alt="material avatar 2"
                    />
                    <AvatarFallback>MA2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Floyd Miles</div>
                    <div className="mt-1 text-muted-foreground">
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
                      src="https://avatar.vercel.sh/avatar-material-3.png"
                      alt="material avatar 3"
                    />
                    <AvatarFallback>MA3</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Emily Selman</div>
                    <div className="mt-1 text-muted-foreground">
                      @emilyselman
                    </div>
                  </div>
                  <Button variant={"outline"} size="sm">
                    View
                  </Button>
                </div>
                <div className="p-4">
                  <Button className="w-full" variant={"outline"}>
                    View all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative z-10 p-4">
            <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="flex w-fit items-center gap-2">
              <InputOTPDemo />
              <SheetDemo />
              <InputDemo />
              <PaginationDemo />
              {/* <div className="flex items-center space-x-4 px-6 py-4">
                    <svg className="size-6 flex-none" fill="none">
                      <path
                        d="M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z"
                        fill="#64748B"
                      ></path>
                      <path
                        d="M3 15.75h.75V21"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9 16.5A.75.75 0 0 0 9 15v1.5Zm-2.25-.75V15a.75.75 0 0 0-.75.75h.75Zm0 2.25H6c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5ZM9 15H6.75v1.5H9V15Zm-3 .75V18h1.5v-2.25H6Zm.75 3h1.5v-1.5h-1.5v1.5Zm1.5 1.5h-1.5v1.5h1.5v-1.5ZM9 19.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25H9Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                        fill="#64748B"
                      ></path>
                    </svg>
                    <svg className="size-10 flex-none" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#0F172A"></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 13.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L16.28 27.99c-1.25.687-2.779-.217-2.779-1.643V13.653Z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <svg className="size-6 flex-none" fill="none">
                      <path
                        d="M16.72 9.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 6.75l.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-3.22-4.28a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM10.5 19.5a.75.75 0 0 0 0-1.5v1.5Zm3.75-4.5a.75.75 0 0 0 0 1.5V15Zm.75.75h.75A.75.75 0 0 0 15 15v.75ZM14.25 21a.75.75 0 0 0 1.5 0h-1.5Zm6-4.5a.75.75 0 0 0 0-1.5v1.5ZM18 15.75V15a.75.75 0 0 0-.75.75H18ZM18 18h-.75c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5Zm-.22-9.22 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm3.75-4.81-3.75-3.75-1.06 1.06 3.75 3.75 1.06-1.06ZM2.25 12.75A6.75 6.75 0 0 0 9 19.5V18a5.25 5.25 0 0 1-5.25-5.25h-1.5ZM9 6a6.75 6.75 0 0 0-6.75 6.75h1.5C3.75 9.85 6.1 7.5 9 7.5V6Zm0 1.5h12V6H9v1.5Zm0 12h1.5V18H9v1.5Zm5.25-3H15V15h-.75v1.5Zm0-.75V21h1.5v-5.25h-1.5Zm6-.75H18v1.5h2.25V15Zm-3 .75V18h1.5v-2.25h-1.5Zm.75 3h1.5v-1.5H18v1.5Zm1.5 1.5H18v1.5h1.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                        fill="#64748B"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-auto items-center border-l border-slate-200/60 pr-4 pl-6 text-[0.8125rem]/5 text-muted-foreground">
                    <div>00:51</div>
                    <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
                      <div className="h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600"></div>
                      <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600"></div>
                    </div>
                    <div className="ml-4">55:43</div>
                    <svg className="ml-6 size-6 flex-none" fill="none">
                      <path
                        d="M14 5 9 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z"
                        fill="#64748B"
                        stroke="#64748B"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19 12c0-1.5-1-2-1-2v4s1-.5 1-2Z"
                        stroke="#64748B"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg className="ml-6 size-6 flex-none" fill="none">
                      <path
                        d="M12 8v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1V8Zm0 0V7a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 12v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 16v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1Z"
                        fill="#64748B"
                      ></path>
                    </svg>
                  </div> */}
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div>
            <div className="relative flex items-end justify-end">
              <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -inset-x-8 top-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
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
                  {/* <div className="pointer-events-auto flex divide-x divide-muted-foreground/20 overflow-hidden rounded-md bg-card text-[0.8125rem]/5 font-medium text-muted-foreground shadow-xs border">
                        <div className="px-4 py-2 hover:bg-accent/50 hover:text-foreground">
                          Years
                        </div>
                        <div className="px-4 py-2 hover:bg-accent/50 hover:text-foreground">
                          Months
                        </div>
                        <div className="px-4 py-2 hover:bg-accent/50 hover:text-foreground">
                          Days
                        </div>
                      </div> */}
                </div>
                <div className="relative z-10 p-4">
                  <div className="absolute -inset-x-8 top-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="-mb-px flex h-[2px] w-56">
                      <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  <div className="flex w-[23.5625rem] items-center">
                    <TextareaDemo />
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-4">
                <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="space-y-4">
                  <div className="pointer-events-auto flex justify-start gap-2">
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

                  <div className="pointer-events-auto w-[21rem] rounded-material-lg border border-material-input bg-material-card p-4 shadow-xl shadow-black/5">
                    <ContextMenuDemo />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="relative p-4">
                <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-px right-16 h-8 overflow-hidden">
                  <div className="-mt-px flex h-[2px] w-56 -scale-x-100">
                    <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>

                <div className="pointer-events-auto flex w-[28.125rem] justify-end gap-2 text-[0.8125rem]/5 text-muted-foreground">
                  {/* <div className="mt-2 flex items-center justify-between rounded-md bg-card px-3 py-2 shadow-xs border">
                        Tom Cook
                        <svg className="size-5 flex-none fill-muted-foreground">
                          <path d="M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L10 5.414 7.707 7.707a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 10 3Zm-3.707 9.293a1 1 0 0 1 1.414 0L10 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"></path>
                        </svg>
                      </div> */}
                  {/* <div className="mt-4 overflow-hidden rounded-md bg-card py-1 shadow-xl shadow-black/5 border">
                        <div className="px-3 py-2">Wade Cooper</div>
                        <div className="px-3 py-2 bg-indigo-600 text-white">
                          Arlene Mccoy
                        </div>
                        <div className="px-3 py-2">Tom Cook</div>
                        <div className="px-3 py-2">Devon Webb</div>
                      </div> */}
                </div>
                <div className="relative w-full rounded-md p-4">
                  <div className="pointer-events-auto  space-y-1 rounded-lg text-sm font-medium text-muted-foreground shadow-xl shadow-black/5">
                    <AccordionDemo />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 p-4">
            <div className="absolute -inset-y-8 right-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-y-8 left-0 w-px bg-material-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -inset-x-8 bottom-0 h-px bg-material-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <CommandDemo />

            {/* <div className="relative p-4">
                  <div className="-mr-[4.625rem] w-[30.25rem] rounded-md bg-card p-4 shadow-xl shadow-black/5 border">
                    <div className="text-[0.8125rem]/5 font-semibold text-foreground">
                      Account
                    </div>
                    <div className="mt-2 text-[0.8125rem]/5 text-slate-500">
                      Manage how information is displayed on your account.
                    </div>
                    <div className="mt-4 text-[0.8125rem]/6 text-foreground">
                      <div className="flex items-center border-t border-muted-foreground/20 py-3">
                        <span className="w-2/5 flex-none">Language</span>
                        <span className="">English</span>
                        <span className="pointer-events-auto ml-auto font-medium text-primary hover:text-indigo-500">
                          Update
                        </span>
                      </div>
                      <div className="flex items-center border-t border-muted-foreground/20 py-3">
                        <span className="w-2/5 flex-none">Date format</span>
                        <span className="">DD-MM-YYYY</span>
                        <span className="ml-auto flex items-center font-medium text-primary">
                          <span className="pointer-events-auto hover:text-primary">
                            Update
                          </span>
                          <span className="mx-3 h-6 w-px bg-muted-foreground/20"></span>
                          <span className="pointer-events-auto hover:text-primary">
                            Remove
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center border-t border-muted-foreground/20 py-3">
                        <span>Automatic timezone</span>
                        <span className="ml-auto">
                          <Switch id="airplane-mode" />
                        </span>
                      </div>
                      <div className="flex items-center border-t border-muted-foreground/20 pt-3">
                        <span>Auto-update applicant data</span>
                        <span className="ml-auto">
                          <Switch id="airplane-mode" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
