import { Bookmark } from "lucide-react";

import { ComponentShowcaseWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/registry/lucid/showcase";
import { AlertDialogDemo } from "@/registry/lucid/showcase";
import { BreadcrumbDemo } from "@/registry/lucid/showcase";
import { CalendarDemo } from "@/registry/lucid/showcase";
import { CheckboxDemo } from "@/registry/lucid/showcase";
import { ComboboxDemo } from "@/registry/lucid/showcase";
import { CommandDemo } from "@/registry/lucid/showcase";
import { ContextMenuDemo } from "@/registry/lucid/showcase";
import { DatePickerDemo } from "@/registry/lucid/showcase";
import { DialogDemo } from "@/registry/lucid/showcase";
import { DrawerDemo } from "@/registry/lucid/showcase";
import { DropdownMenuDemo } from "@/registry/lucid/showcase";
import { HoverCardDemo } from "@/registry/lucid/showcase";
import { InputDemo } from "@/registry/lucid/showcase";
import { InputOTPDemo } from "@/registry/lucid/showcase";
import { LabelDemo } from "@/registry/lucid/showcase";
import { MenubarDemo } from "@/registry/lucid/showcase";
import { PaginationDemo } from "@/registry/lucid/showcase";
import { PopoverDemo } from "@/registry/lucid/showcase";
import { ProgressDemo } from "@/registry/lucid/showcase";
import { RadioGroupDemo } from "@/registry/lucid/showcase";
import { SelectDemo } from "@/registry/lucid/showcase";
import { SheetDemo } from "@/registry/lucid/showcase";
import { SkeletonDemo } from "@/registry/lucid/showcase";
import { SliderDemo } from "@/registry/lucid/showcase";
import { SonnerDemo } from "@/registry/lucid/showcase";
import { SwitchDemo } from "@/registry/lucid/showcase";
import { TextareaDemo } from "@/registry/lucid/showcase";
import { ToggleDemo } from "@/registry/lucid/showcase";
import { ToggleGroupDemo } from "@/registry/lucid/showcase";
import { TooltipDemo } from "@/registry/lucid/showcase";
import { Badge, BadgeProps } from "@/registry/lucid/ui/badge";
import { Button, ButtonProps } from "@/registry/lucid/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/lucid/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/lucid/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/registry/lucid/ui/tabs";

export function LucidShowcaseComponents() {
  const style = "lucid";

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
            <p className="text-lucid-muted-foreground">
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
