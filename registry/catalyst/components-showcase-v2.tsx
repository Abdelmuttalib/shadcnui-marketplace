"use client";

import {
  AlertCircle,
  Bell,
  CalendarIcon,
  Check,
  ChevronDown,
  ChevronsUpDown,
  Clipboard,
  CreditCard,
  Download,
  Info,
  Laptop,
  Loader2,
  Moon,
  MoreHorizontal,
  Plus,
  Settings,
  Smartphone,
  Sun,
  Trash,
  User,
} from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/catalyst/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/catalyst/ui/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/catalyst/ui/avatar";
import { Badge } from "@/registry/catalyst/ui/badge";
import { Button } from "@/registry/catalyst/ui/button";
import { Calendar } from "@/registry/catalyst/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/catalyst/ui/card";
import { Checkbox } from "@/registry/catalyst/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/catalyst/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/catalyst/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/catalyst/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/catalyst/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/catalyst/ui/hover-card";
import { Input } from "@/registry/catalyst/ui/input";
import { Label } from "@/registry/catalyst/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/catalyst/ui/popover";
import { Progress } from "@/registry/catalyst/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/registry/catalyst/ui/radio-group";
import { ScrollArea } from "@/registry/catalyst/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/catalyst/ui/select";
import { Separator } from "@/registry/catalyst/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/catalyst/ui/sheet";
import { Slider } from "@/registry/catalyst/ui/slider";
import { Switch } from "@/registry/catalyst/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/catalyst/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/catalyst/ui/tabs";
import { Textarea } from "@/registry/catalyst/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/catalyst/ui/tooltip";

export function CatalystComponentsShowcase2() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          shadcn/ui Components
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A visual showcase of all available components in the shadcn/ui
          library.
        </p>
      </div>

      <div className="flex flex-wrap">
        {/* Components are randomly arranged in a compact layout */}

        <div className="w-[200px] p-2">
          <div className="mb-1 text-sm font-medium">Button</div>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Badge</div>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div className="w-[150px] p-2">
          <div className="mb-1 text-sm font-medium">Avatar</div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Input</div>
          <Input placeholder="Email address" />
        </div>

        <div className="w-[250px] p-2">
          <div className="mb-1 text-sm font-medium">Accordion</div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Checkbox</div>
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

        <div className="w-[300px] p-2">
          <div className="mb-1 text-sm font-medium">Alert</div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>This is an alert component.</AlertDescription>
          </Alert>
        </div>

        <div className="w-[250px] p-2">
          <div className="mb-1 text-sm font-medium">Progress</div>
          <Progress value={60} className="w-full" />
        </div>

        <div className="w-[280px] p-2">
          <div className="mb-1 text-sm font-medium">Tabs</div>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-2 text-sm">
              Account settings
            </TabsContent>
            <TabsContent value="password" className="p-2 text-sm">
              Password settings
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-[200px] p-2">
          <div className="mb-1 text-sm font-medium">Switch</div>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>

        <div className="w-[200px] p-2">
          <div className="mb-1 text-sm font-medium">Select</div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Card</div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Create project</CardTitle>
              <CardDescription className="text-xs">
                Deploy your new project.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs">
              Configure your project settings.
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <Button size="sm">Deploy</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="w-[150px] p-2">
          <div className="mb-1 text-sm font-medium">Tooltip</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Hover me
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Dropdown Menu</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Open <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Slider</div>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>

        <div className="w-[200px] p-2">
          <div className="mb-1 text-sm font-medium">Radio Group</div>
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

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Dialog</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Hover Card</div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@shadcn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm">Creator of shadcn/ui components</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Textarea</div>
          <Textarea placeholder="Type your message here." />
        </div>

        <div className="w-[300px] p-2">
          <div className="mb-1 text-sm font-medium">Calendar</div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Separator</div>
          <div className="space-y-1">
            <div className="text-xs">Before separator</div>
            <Separator />
            <div className="text-xs">After separator</div>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Sheet</div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                Open Sheet
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Collapsible</div>
          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex w-full items-center justify-between"
              >
                <span>Toggle</span>
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2 text-sm">
              This content can be expanded and collapsed.
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="w-[280px] p-2">
          <div className="mb-1 text-sm font-medium">Command</div>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Popover</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Open Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-[300px] p-2">
          <div className="mb-1 text-sm font-medium">Table</div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Scroll Area</div>
          <ScrollArea className="h-[100px] w-full rounded-md border p-2">
            <div className="space-y-2 text-sm">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i}>Scroll item {i + 1}</div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Button Variants</div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Outline
            </Button>
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="ghost" size="sm">
              Ghost
            </Button>
            <Button variant="link" size="sm">
              Link
            </Button>
          </div>
        </div>

        <div className="w-[250px] p-2">
          <div className="mb-1 text-sm font-medium">Button Sizes</div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="lg">Large</Button>
            <Button>Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Badge Colors</div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">Green</Badge>
            <Badge className="bg-red-500 hover:bg-red-600">Red</Badge>
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
              Yellow
            </Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
          </div>
        </div>

        <div className="w-[300px] p-2">
          <div className="mb-1 text-sm font-medium">Alert Variants</div>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired.</AlertDescription>
          </Alert>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Theme Icons</div>
          <div className="flex gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Sun className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Moon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Laptop className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Action Icons</div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Trash className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Form with Label</div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email-2">Email</Label>
            <Input type="email" id="email-2" placeholder="Email" />
            <p className="text-xs text-muted-foreground">
              Enter your email address.
            </p>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Avatar Group</div>
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-background">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
              />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback>+2</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Menu Button</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Notification Badge</div>
          <div className="relative">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
              3
            </span>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Payment Method</div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Visa ending in 1234
              </p>
              <p className="text-xs text-muted-foreground">Expires 04/2024</p>
            </div>
            <Button variant="ghost" size="sm">
              <Check className="mr-2 h-4 w-4" />
              Default
            </Button>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Copy Button</div>
          <div className="flex items-center space-x-2">
            <div className="rounded-md border px-4 py-2 text-sm">
              API_KEY_123456
            </div>
            <Button variant="outline" size="icon">
              <Clipboard className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-[180px] p-2">
          <div className="mb-1 text-sm font-medium">Device Icons</div>
          <div className="flex gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Laptop className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Bell className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="w-[220px] p-2">
          <div className="mb-1 text-sm font-medium">Button States</div>
          <div className="flex flex-wrap gap-2">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
