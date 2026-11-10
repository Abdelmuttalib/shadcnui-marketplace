import React from "react";
import { Bookmark, Check, ChevronsUpDown, HeartIcon } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Minus, Plus, Bold, Underline, Italic } from "lucide-react";

import { DemoDatePicker } from "@/registry/bases/base/shared/components/date-picker";
import { renderStyleCardShowcase } from "@/registry/styles-components";
import { useDesignSystem } from "./components/design-system-provider";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function HeroUI() {
  const {
    Tabs,
    TabsList,
    TabsTrigger,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    Checkbox,
    Switch,
    Toggle,

    Popover,
    PopoverContent,
    PopoverTrigger,

    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,

    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,

    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,

    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,

    Label,
    Input,

    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,

    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,

    ToggleGroup,
    ToggleGroupItem,

    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,

    Slider,

    Textarea,

    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } = useDesignSystem();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <>
      {/* pointer-events-none  */}
      {/* <div className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"> */}
      <div className="-ml-[32rem] h-[46.375rem] origin-top select-none sm:-mt-16 sm:-ml-[24rem] sm:h-auto md:-ml-64 lg:mt-0 lg:-ml-16 xl:-mr-4 xl:ml-0">
        <div className="flex justify-end">
          <div className="relative flex items-end">
            <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute top-full left-16 -mt-px h-8 overflow-hidden">
              <div className="-mt-px flex h-[2px] w-56">
                <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-xs"></div>
                <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-[1px]"></div>
              </div>
            </div>
            <div>
              <div>
                <div className="relative ml-auto hidden w-fit justify-end p-4 lg:flex">
                  <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <Switch />
                </div>
              </div>
              <div className="relative p-4">
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="flex items-center justify-end">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant={"outline"}>Outline</Button>
                    <Button variant={"destructive"}>Destructive</Button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 p-4 text-right">
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                {/* <div className="absolute -inset-y-8 left-0 w-px bg-foreground/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -inset-x-8 top-0 h-px bg-foreground/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="leading-none font-medium">
                            Dimensions
                          </h4>
                          <p className="text-cb-muted-foreground text-sm">
                            Set the dimensions for the layer.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>
                            <Input
                              id="width"
                              defaultValue="100%"
                              className="col-span-2 h-8"
                            />
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Max. width</Label>
                            <Input
                              id="maxWidth"
                              defaultValue="300px"
                              className="col-span-2 h-8"
                            />
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">Height</Label>
                            <Input
                              id="height"
                              defaultValue="25px"
                              className="col-span-2 h-8"
                            />
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxHeight">Max. height</Label>
                            <Input
                              id="maxHeight"
                              defaultValue="none"
                              className="col-span-2 h-8"
                            />
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Button size={"default"} variant={"secondary"}>
                    <Bookmark />
                    <span>Bookmark</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-4">
              <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden">
                <div className="-mb-px flex h-[2px] w-56">
                  <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--primary))_67.19%,rgba(236,72,153,0)_100%)] blur-xs"></div>
                  <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-[1px]"></div>
                </div>
              </div>
              <div className="divide-muted-foreground/20 border-input bg-card text-foreground w-[24.5rem] divide-y rounded-lg border text-[0.8125rem]/5 shadow-xl shadow-black/5">
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/cb-avatar-1`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Leonard Krasner</div>
                    <div className="text-muted-foreground mt-1">
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
                      src={`https://avatar.vercel.sh/cb-avatar-2`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Floyd Miles</div>
                    <div className="text-muted-foreground mt-1">
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
                      src={`https://avatar.vercel.sh/cb-avatar-3`}
                      alt="avatar"
                    />
                    <AvatarFallback>MN3</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Emily Selman</div>
                    <div className="text-muted-foreground mt-1">
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
            <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

            <div className="flex w-fit items-center gap-2">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <Input type="email" placeholder="Email" />
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div>
            <div className="relative flex items-end justify-end">
              <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
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
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger>File</MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>
                              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                              New Window <MenubarShortcut>⌘N</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                              New Incognito Window
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                              <MenubarSubTrigger>Share</MenubarSubTrigger>
                              <MenubarSubContent>
                                <MenubarItem>Email link</MenubarItem>
                                <MenubarItem>Messages</MenubarItem>
                                <MenubarItem>Notes</MenubarItem>
                              </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>
                              Print... <MenubarShortcut>⌘P</MenubarShortcut>
                            </MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>Edit</MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>
                              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                            </MenubarItem>

                            <MenubarSeparator />
                            <MenubarSub>
                              <MenubarSubTrigger>Find</MenubarSubTrigger>
                              <MenubarSubContent>
                                <MenubarItem>Search the web</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Find...</MenubarItem>
                                <MenubarItem>Find Next</MenubarItem>
                                <MenubarItem>Find Previous</MenubarItem>
                              </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>Cut</MenubarItem>
                            <MenubarItem>Copy</MenubarItem>
                            <MenubarItem>Paste</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>View</MenubarTrigger>
                          <MenubarContent>
                            <MenubarCheckboxItem>
                              Always Show Bookmarks Bar
                            </MenubarCheckboxItem>
                            <MenubarCheckboxItem checked>
                              Always Show Full URLs
                            </MenubarCheckboxItem>
                            <MenubarSeparator />
                            <MenubarItem inset>
                              Reload <MenubarShortcut>⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled inset>
                              Force Reload{" "}
                              <MenubarShortcut>⇧⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Hide Sidebar</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>Profiles</MenubarTrigger>
                          <MenubarContent>
                            <MenubarRadioGroup value="benoit">
                              <MenubarRadioItem value="andy">
                                Andy
                              </MenubarRadioItem>
                              <MenubarRadioItem value="benoit">
                                Benoit
                              </MenubarRadioItem>
                              <MenubarRadioItem value="Luis">
                                Luis
                              </MenubarRadioItem>
                            </MenubarRadioGroup>
                            <MenubarSeparator />
                            <MenubarItem inset>Edit...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Add Profile...</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </div>
                    <div>
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button variant="outline">Open Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                              <DrawerTitle>Move Goal</DrawerTitle>
                              <DrawerDescription>
                                Set your daily activity goal.
                              </DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                              <div className="flex items-center justify-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 shrink-0 rounded-full"
                                  onClick={() => onClick(-10)}
                                  disabled={goal <= 200}
                                >
                                  <Minus />
                                  <span className="sr-only">Decrease</span>
                                </Button>
                                <div className="flex-1 text-center">
                                  <div className="text-7xl font-bold tracking-tighter">
                                    {goal}
                                  </div>
                                  <div className="text-cb-muted-foreground text-[0.70rem] uppercase">
                                    Calories/day
                                  </div>
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 shrink-0 rounded-full"
                                  onClick={() => onClick(10)}
                                  disabled={goal >= 400}
                                >
                                  <Plus />
                                  <span className="sr-only">Increase</span>
                                </Button>
                              </div>
                              <div className="mt-3 h-[120px]">
                                <ResponsiveContainer width="100%" height="100%">
                                  <BarChart data={data}>
                                    <Bar
                                      dataKey="goal"
                                      style={
                                        {
                                          fill: "oklch(var(--foreground))",
                                          opacity: 0.9,
                                        } as React.CSSProperties
                                      }
                                    />
                                  </BarChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                            <DrawerFooter>
                              <Button>Submit</Button>
                              <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DrawerClose>
                            </DrawerFooter>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 p-4 pt-0">
                  <div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry" disabled>
                            Blueberry
                          </SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-[200px] justify-between"
                        >
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Select framework..."}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search framework..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {frameworks.map((framework) => (
                                <CommandItem
                                  key={framework.value}
                                  value={framework.value}
                                  onSelect={(currentValue: any) => {
                                    setValue(
                                      currentValue === value ? "" : currentValue
                                    );
                                    setOpen(false);
                                  }}
                                >
                                  {framework.label}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      value === framework.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="relative z-10 p-4">
                  <div className="bg-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="-mb-px flex h-[2px] w-56">
                      <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--primary))_67.19%,rgba(236,72,153,0)_100%)] blur-xs"></div>
                      <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,oklch(var(--primary))_67.19%,rgba(236,72,153,0)_100%)] blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="flex w-[23.5625rem] items-center">
                    <Textarea placeholder="Type your message here." />
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-4">
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="space-y-4">
                  <div className="flex justify-start gap-2">
                    <div>
                      <Toggle variant={"outline"}>
                        <Bookmark />
                      </Toggle>
                    </div>
                    <ToggleGroup type="multiple">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough"
                      >
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms
                      </label>
                    </div>
                  </div>

                  <div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      className={cn("w-[60%]")}
                    />
                  </div>
                  <div className="border-input bg-card rounded-lg border p-4 shadow-xl shadow-black/5">
                    <ContextMenu>
                      <ContextMenuTrigger className="rounded-cb-md border-cb-border flex h-[150px] w-[300px] items-center justify-center border border-dashed text-sm">
                        Right click here
                      </ContextMenuTrigger>
                      <ContextMenuContent className="w-64">
                        <ContextMenuItem inset>
                          Back
                          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset disabled>
                          Forward
                          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset>
                          Reload
                          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSub>
                          <ContextMenuSubTrigger inset>
                            More Tools
                          </ContextMenuSubTrigger>
                          <ContextMenuSubContent className="w-48">
                            <ContextMenuItem>
                              Save Page As...
                              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                              Create Shortcut...
                            </ContextMenuItem>
                            <ContextMenuItem>Name Window...</ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuItem>Developer Tools</ContextMenuItem>
                          </ContextMenuSubContent>
                        </ContextMenuSub>
                        <ContextMenuSeparator />
                        <ContextMenuCheckboxItem checked>
                          Show Bookmarks Bar
                          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem>
                          Show Full URLs
                        </ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuRadioGroup value="pedro">
                          <ContextMenuLabel inset>People</ContextMenuLabel>
                          <ContextMenuSeparator />
                          <ContextMenuRadioItem value="pedro">
                            Pedro Duarte
                          </ContextMenuRadioItem>
                          <ContextMenuRadioItem value="colm">
                            Colm Tuite
                          </ContextMenuRadioItem>
                        </ContextMenuRadioGroup>
                      </ContextMenuContent>
                    </ContextMenu>
                  </div>
                  {/* <DemoDatePicker /> */}

                  {/* <div className="pointer-events-auto flex w-[21rem] flex-col gap-4 rounded-lg border border-input bg-card p-4 shadow-xl shadow-black/5">
                    <h3 className="text-2xl font-medium">Card</h3>
                    <p className="text-sm text-muted-foreground">
                      A card is a flexible and extensible content container.
                    </p>
                    <DatePickerWithRange />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="relative p-4">
                <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-px right-16 h-8 overflow-hidden">
                  <div className="-mt-px flex h-[2px] w-56 -scale-x-100">
                    <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-xs"></div>
                    <div className="-ml-[100%] w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-[1px]"></div>
                  </div>
                </div>
                {/* <DemoCreateAccount /> */}
                <DemoDatePicker />
                {/* <DemoNotifications /> */}
                {/* <div className="pointer-events-auto relative flex w-[28.125rem] justify-end gap-2 rounded-md p-4 text-[0.8125rem]/5 text-muted-foreground">
                  <div className="pointer-events-auto space-y-1 rounded-lg text-sm font-medium text-muted-foreground shadow-xl shadow-black/5">
                    <AccordionDemo />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="relative z-10 w-[32.125rem] p-4">
            <div className="bg-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

            {renderStyleCardShowcase("carbon")}
          </div>
        </div>
      </div>
    </>
  );
}
