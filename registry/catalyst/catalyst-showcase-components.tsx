import { Bookmark } from "lucide-react";

import { ComponentShowcaseWrapper } from "@/components/component-wrapper";
import { cn } from "@/lib/utils";
import { AccordionDemo } from "@/registry/catalyst/showcase";
import { AlertDialogDemo } from "@/registry/catalyst/showcase";
import { BreadcrumbDemo } from "@/registry/catalyst/showcase";
import { CalendarDemo } from "@/registry/catalyst/showcase";
import { CheckboxDemo } from "@/registry/catalyst/showcase";
import { ComboboxDemo } from "@/registry/catalyst/showcase";
import { CommandDemo } from "@/registry/catalyst/showcase";
import { ContextMenuDemo } from "@/registry/catalyst/showcase";
import { DatePickerDemo } from "@/registry/catalyst/showcase";
import { DialogDemo } from "@/registry/catalyst/showcase";
import { DrawerDemo } from "@/registry/catalyst/showcase";
import { DropdownMenuDemo } from "@/registry/catalyst/showcase";
import { HoverCardDemo } from "@/registry/catalyst/showcase";
import { InputDemo } from "@/registry/catalyst/showcase";
import { InputOTPDemo } from "@/registry/catalyst/showcase";
import { LabelDemo } from "@/registry/catalyst/showcase";
import { MenubarDemo } from "@/registry/catalyst/showcase";
import { PaginationDemo } from "@/registry/catalyst/showcase";
import { PopoverDemo } from "@/registry/catalyst/showcase";
import { ProgressDemo } from "@/registry/catalyst/showcase";
import { RadioGroupDemo } from "@/registry/catalyst/showcase";
import { SelectDemo } from "@/registry/catalyst/showcase";
import { SheetDemo } from "@/registry/catalyst/showcase";
import { SkeletonDemo } from "@/registry/catalyst/showcase";
import { SliderDemo } from "@/registry/catalyst/showcase";
import { SonnerDemo } from "@/registry/catalyst/showcase";
import { SwitchDemo } from "@/registry/catalyst/showcase";
import { TextareaDemo } from "@/registry/catalyst/showcase";
import { ToggleDemo } from "@/registry/catalyst/showcase";
import { ToggleGroupDemo } from "@/registry/catalyst/showcase";
import { TooltipDemo } from "@/registry/catalyst/showcase";
import { Badge, BadgeProps } from "@/registry/catalyst/ui/badge";
import { Button, ButtonProps } from "@/registry/catalyst/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/catalyst/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/catalyst/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/registry/catalyst/ui/tabs";

export function CatalystShowcaseComponents() {
  const style = "catalyst";

  return (
    <div className="grid gap-4 lg:grid-cols-4 lg:gap-6">
      <ComponentShowcaseWrapper style={style} name="button">
        <div className="flex flex-wrap gap-2">
          {["default", "icon"].map((size) => (
            <div className="flex flex-wrap gap-2" key={size}>
              {[
                "default",
                "secondary",
                "outline",
                "ghost",
                "destructive",
                "link",
              ].map((variant) => (
                <Button
                  key={variant}
                  variant={variant as ButtonProps["variant"]}
                  size={size as ButtonProps["size"]}
                  className="capitalize"
                >
                  {size === "icon" ? <Bookmark /> : variant}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="input">
        <InputDemo />
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="tabs">
        <Tabs defaultValue="react">
          <TabsList>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="html" disabled>
              Html
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHead>John Doe</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>
                <Badge>Active</Badge>
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead>Jane Doe</TableHead>
              <TableHead>Editor</TableHead>
              <TableHead>
                <Badge variant={"secondary"}>Inactive</Badge>
              </TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="switch">
        <SwitchDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="badge">
        <div className="flex flex-wrap gap-2">
          {["default", "secondary", "outline", "destructive"].map((variant) => (
            <Badge
              key={variant}
              variant={variant as BadgeProps["variant"]}
              className="capitalize"
            >
              {variant}
            </Badge>
          ))}
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="textarea">
        <TextareaDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="radio-group">
        <RadioGroupDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="alert-dialog">
        <AlertDialogDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="breadcrumb">
        <BreadcrumbDemo />
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="card">
        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
          </CardHeader>
          <CardContent className="-mt-4">
            <p className="text-catalyst-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod.
            </p>
          </CardContent>
          <CardFooter className="-mt-4 flex justify-end gap-2">
            <Button variant={"secondary"}>Cancel</Button>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="checkbox">
        <CheckboxDemo />
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="combobox">
        <ComboboxDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="command">
        <CommandDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="context-menu">
        <ContextMenuDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="date-picker">
        <DatePickerDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="dialog">
        <DialogDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="drawer">
        <DrawerDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="dropdown-menu">
        <DropdownMenuDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="hover-card">
        <HoverCardDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="input-otp">
        <InputOTPDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="label">
        <LabelDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="menubar">
        <MenubarDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="pagination">
        <PaginationDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="popover">
        <PopoverDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="progress">
        <ProgressDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="select">
        <SelectDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="sheet">
        <SheetDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="skeleton">
        <SkeletonDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="slider">
        <SliderDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="sonner">
        <SonnerDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="accordion">
        <AccordionDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="toggle">
        <ToggleDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="toggle-group">
        <ToggleGroupDemo />
      </ComponentShowcaseWrapper>
      <ComponentShowcaseWrapper style={style} name="tooltip">
        <TooltipDemo />
      </ComponentShowcaseWrapper>
    </div>
  );
}

export function CatalystSimpleCard() {
  const selectedSize = "m";

  return (
    <div className="relative flex max-w-[39rem] flex-col overflow-hidden rounded-catalyst-md bg-catalyst-background leading-none shadow sm:flex-row">
      {/* max-w-[223px] */}
      <div className="relative h-full max-h-96 w-full sm:max-w-48 lg:max-h-full">
        <img
          src="https://images.unsplash.com/photo-1613428792678-087d5d14238b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt=""
          className="h-full max-h-96 w-full object-cover lg:max-h-full lg:object-contain"
        />
      </div>
      <div className="w-full space-y-6 p-6">
        <div className="flex flex-col gap-y-4">
          <div className="relative flex items-center justify-between">
            <h2 className="inline-flex text-lg font-semibold text-catalyst-foreground">
              Classic Utility Jacket
            </h2>
            <p className="text-lg font-semibold text-catalyst-foreground">
              $110.00
            </p>
          </div>
          <div>
            {/* <p className="text-sm text-catalyst-muted-foreground font-medium">
              In stock
            </p> */}
            <Badge variant="default">In stock</Badge>
          </div>
        </div>

        <div className="flex gap-2">
          {["xs", "s", "m", "l", "xl"].map((size, i) => (
            <Button
              key={size + i + 2}
              variant={size === selectedSize ? "secondary" : "ghost"}
              size={"icon"}
              className={cn("uppercase text-catalyst-muted-foreground")}
            >
              {size}
            </Button>
          ))}
        </div>
        {/* divider */}
        <div>
          <hr className="border border-catalyst-border" />
        </div>
        {/* actions */}
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button variant="default" className="sm:px-5">
              Buy now
            </Button>
            <Button variant="outline" className="sm:px-5">
              Add to bag
            </Button>
          </div>
          <div>
            <Button variant="outline">
              <svg
                width="20"
                height="20"
                color="rgba(209, 213, 219, 1)"
                // style="transform: translate3d(0px, 0px, 0px) scale(0.9999, 1); transform-origin: 10.025px 10.8039px;"
                transform=""
                transform-origin="51.5151510134519% 100% 0"
                // transformOrigin="50% 50% 0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  fill="currentColor"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <p className="text-sm text-catalyst-muted-foreground">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CatalystHeadlessShowcaseComponents() {
  const style = "neon";

  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap gap-2">
        {["default", "icon"].map((size) => (
          <div className="flex flex-wrap gap-2" key={size}>
            {[
              "default",
              "secondary",
              "outline",
              "ghost",
              "destructive",
              "link",
            ].map((variant) => (
              <Button
                key={variant}
                variant={variant as ButtonProps["variant"]}
                size={size as ButtonProps["size"]}
                className="capitalize"
              >
                {size === "icon" ? <Bookmark /> : variant}
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div>
        <InputDemo />
      </div>
      <div>
        <Tabs defaultValue="react">
          <TabsList>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="html" disabled>
              Html
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <SwitchDemo />
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {["default", "secondary", "outline", "destructive"].map((variant) => (
            <Badge
              key={variant}
              variant={variant as BadgeProps["variant"]}
              className="capitalize"
            >
              {variant}
            </Badge>
          ))}
        </div>
      </div>
      <TextareaDemo />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead>John Doe</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead>
              <Badge>Active</Badge>
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead>Jane Doe</TableHead>
            <TableHead>Editor</TableHead>
            <TableHead>
              <Badge variant={"secondary"}>Inactive</Badge>
            </TableHead>
          </TableRow>
        </TableBody>
      </Table>
      <RadioGroupDemo />
      <AlertDialogDemo />
      <BreadcrumbDemo />
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
        </CardHeader>
        <CardContent className="-mt-4">
          <p className="text-catalyst-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod.
          </p>
        </CardContent>
        <CardFooter className="-mt-4 flex justify-end gap-2">
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <CheckboxDemo />
      <ComboboxDemo />
      <CommandDemo />
      <ContextMenuDemo />
      <DatePickerDemo />
      <DialogDemo />
      <DrawerDemo />
      <DropdownMenuDemo />
      <HoverCardDemo />
      <InputOTPDemo />
      <LabelDemo />
      <MenubarDemo />
      <div>
        <PaginationDemo />
      </div>

      <PopoverDemo />
      <ProgressDemo />
      <SelectDemo />
      <SheetDemo />
      <div>
        <SkeletonDemo />
      </div>
      <SliderDemo />
      <AccordionDemo />
      <ToggleDemo />
      <ToggleGroupDemo />
      <TooltipDemo />
    </div>
  );
}
