"use client";

import { Button } from "@/components/ui/carbon/ui/button";
import { Badge } from "@/components/ui/carbon/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/carbon/ui/tabs";
import { Switch } from "@/components/ui/carbon/ui/switch";
import { Slider } from "@/components/ui/carbon/ui/slider";
import { Input } from "@/components/ui/carbon/ui/input";
import { Label } from "@/components/ui/carbon/ui/label";
import { Checkbox } from "@/components/ui/carbon/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/carbon/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/carbon/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/carbon/ui/toggle-group";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/carbon/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/carbon/ui/avatar";
import { Progress } from "@/components/ui/carbon/ui/progress";
import { Separator } from "@/components/ui/carbon/ui/separator";
import {
  CodeIcon,
  BookOpenIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  InfoIcon,
  BellIcon,
  AlignLeftIcon,
  AlignJustifyIcon,
  AlignRightIcon,
  HeartIcon,
} from "lucide-react";
import {
  CalendarDemo,
  CommandDemo,
  DataTableDemo,
  DialogDemo,
  HoverCardDemo,
  MenubarDemo,
  PopoverDemo,
  TableDemo,
} from "@/components/showcase";
import ThemeSwitcher from "@/components/theme-select";
import Link from "next/link";
import { useStyle } from "@/hooks/use-style";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/carbon/ui/typography";
import { StyleSelect } from "@/components/draft";
import { GradientBackground } from "@/components/gradient";
import { UserMenu } from "../../../../app/components/user-menu";

export default function DefaultHero() {
  return (
    <HeroLayout className="bg-gradient-to-r from-accent/40 to-background">
      <div>
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">
            {/* Left column for title, description, and additional components */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <Typography
                  as="h1"
                  variant="5xl/semibold"
                  className="tracking-tight"
                >
                  shadcn ui styles
                </Typography>
                <p className="mt-4 text-base text-muted-foreground sm:mt-3">
                  Build beautiful, responsive, and accessible UIs with our
                  modern component library. Designed for flexibility and ease of
                  use.
                </p>
                <div className="mt-6 flex gap-4">
                  <div>
                    <StyleSelect />
                  </div>
                  {/* <Button size="default" className="gap-2">
                    <CodeIcon />
                    Get Access
                  </Button> */}
                  {/* <Button size="lg" variant="outline" className="gap-2">
                    <BookOpenIcon className="w-4 h-4" />
                    Documentation
                  </Button> */}
                </div>
              </div>

              {/* Additional components showcase */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">Avatar</h3>
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/vercel.png"
                        alt="@vercel"
                      />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* <GradientBackground /> */}

                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">Badge</h3>
                  <div className="flex gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">Toggle</h3>
                  <ToggleGroup type="single" className="w-fit">
                    <ToggleGroupItem value="left">
                      <AlignLeftIcon />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center">
                      <AlignJustifyIcon />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right">
                      <AlignRightIcon />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                {/* Slider */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">Slider</h3>
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    className="w-28"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">
                    Switch with Label
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </div>

                {/* Radio Group */}
                <div className="space-y-2 col-span-2">
                  <h3 className="text-sm font-medium hidden">Radio Group</h3>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Input */}
                <div className="space-y-2 col-span-2">
                  <h3 className="text-sm font-medium hidden">Input</h3>
                  <Input type="email" placeholder="Email" />
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium hidden">Tooltip</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <BellIcon className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Notifications</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            {/* Right column for component showcase */}
            <div className="mt-12 lg:mt-0 lg:col-span-8 z-10">
              <div className="grid grid-cols-4 gap-6">
                {/* Buttons */}
                <div className="space-y-2 col-span-2">
                  <h3 className="text-sm font-medium hidden">Buttons</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="outline" size={"icon"}>
                      <HeartIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="default" size={"icon"}>
                      <HeartIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-2 col-span-2">
                  <h3 className="text-sm font-medium hidden">Badges</h3>
                  <div className="flex flex-wrap lg:justify-end gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>

                {/* Tabs */}
                <div className="space-y-2 col-span-2 flex flex-col">
                  <h3 className="text-sm font-medium hidden">Tabs</h3>
                  {/* Menubar */}
                  <div className="space-y-2 col-span-2">
                    <h3 className="text-sm font-medium hidden">Menubar</h3>
                    <div className="w-fit">
                      <MenubarDemo />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Tabs defaultValue="tab1" className="w-full">
                      <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <HoverCardDemo />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2">
                    {/* Dialog */}
                    <div className="space-y-2 ">
                      <h3 className="text-sm font-medium hidden">Dialog</h3>
                      <DialogDemo />
                    </div>

                    {/* Popover */}
                    <div className="space-y-2 ">
                      <h3 className="text-sm font-medium hidden">Popover</h3>
                      <PopoverDemo />
                    </div>

                    {/* Tooltip */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium hidden">Tooltip</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-10 rounded-full p-0"
                            >
                              <InfoIcon className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Add to library</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  {/* Switch */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium hidden">Switch</h3>
                    <div className="flex flex-col gap-2">
                      <CommandDemo />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="space-y-2 col-span-4 xl:col-span-2">
                  <h3 className="text-sm font-medium hidden">Table</h3>
                  <TableDemo />
                </div>

                {/* Checkbox */}
                <div className="space-y-2 col-span-2">
                  <h3 className="text-sm font-medium hidden">Checkbox</h3>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}

export function HeroLayout({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { style, setStyle, stylePath, setStylePath } = useStyle();

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Styles",
      href: "/styles",
    },
  ];

  return (
    <div className="relative">
      <div className="relative flex flex-col bg-background z-20">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="sm:container sm:mx-auto flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden sm:flex items-center gap-4">
                <nav>
                  <ul className="inline-flex gap-6">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <ThemeSwitcher />
              </div>
              <UserMenu />
              {/* <WaitlistDialog /> */}
            </div>
          </nav>
        </header>
        <div className="mx-auto flex max-w-screen-2xl w-full sm:px-4">
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
          <div
            className={cn(
              "grid h-full flex-1 gap-72 pb-24 pt-14 md:pb-40",
              className
            )}
          >
            {children}
          </div>
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}
