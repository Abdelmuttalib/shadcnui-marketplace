import { Bookmark } from "lucide-react";

import { ComponentShowcaseWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/registry/spectrum/showcase";
import { AlertDialogDemo } from "@/registry/spectrum/showcase";
import { BreadcrumbDemo } from "@/registry/spectrum/showcase";
import { CalendarDemo } from "@/registry/spectrum/showcase";
import { CheckboxDemo } from "@/registry/spectrum/showcase";
import { ComboboxDemo } from "@/registry/spectrum/showcase";
import { CommandDemo } from "@/registry/spectrum/showcase";
import { ContextMenuDemo } from "@/registry/spectrum/showcase";
import { DatePickerDemo } from "@/registry/spectrum/showcase";
import { DialogDemo } from "@/registry/spectrum/showcase";
import { DrawerDemo } from "@/registry/spectrum/showcase";
import { DropdownMenuDemo } from "@/registry/spectrum/showcase";
import { HoverCardDemo } from "@/registry/spectrum/showcase";
import { InputDemo } from "@/registry/spectrum/showcase";
import { InputOTPDemo } from "@/registry/spectrum/showcase";
import { LabelDemo } from "@/registry/spectrum/showcase";
import { MenubarDemo } from "@/registry/spectrum/showcase";
import { PaginationDemo } from "@/registry/spectrum/showcase";
import { PopoverDemo } from "@/registry/spectrum/showcase";
import { ProgressDemo } from "@/registry/spectrum/showcase";
import { RadioGroupDemo } from "@/registry/spectrum/showcase";
import { SelectDemo } from "@/registry/spectrum/showcase";
import { SheetDemo } from "@/registry/spectrum/showcase";
import { SkeletonDemo } from "@/registry/spectrum/showcase";
import { SliderDemo } from "@/registry/spectrum/showcase";
import { SonnerDemo } from "@/registry/spectrum/showcase";
import { SwitchDemo } from "@/registry/spectrum/showcase";
import { TextareaDemo } from "@/registry/spectrum/showcase";
import { ToggleDemo } from "@/registry/spectrum/showcase";
import { ToggleGroupDemo } from "@/registry/spectrum/showcase";
import { TooltipDemo } from "@/registry/spectrum/showcase";
import { Badge, BadgeProps } from "@/registry/spectrum/ui/badge";
import { Button, ButtonProps } from "@/registry/spectrum/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/spectrum/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/spectrum/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/registry/spectrum/ui/tabs";

export function SpectrumShowcaseComponents() {
  const style = "spectrum";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
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
            <p className="text-cb-muted-foreground">
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
