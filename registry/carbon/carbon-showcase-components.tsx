import { Bookmark } from "lucide-react";

import { ComponentShowcaseWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/registry/carbon/showcase";
import { AlertDialogDemo } from "@/registry/carbon/showcase";
import { BreadcrumbDemo } from "@/registry/carbon/showcase";
import { CalendarDemo } from "@/registry/carbon/showcase";
import { CheckboxDemo } from "@/registry/carbon/showcase";
import { ComboboxDemo } from "@/registry/carbon/showcase";
import { CommandDemo } from "@/registry/carbon/showcase";
import { ContextMenuDemo } from "@/registry/carbon/showcase";
import { DatePickerDemo } from "@/registry/carbon/showcase";
import { DialogDemo } from "@/registry/carbon/showcase";
import { DrawerDemo } from "@/registry/carbon/showcase";
import { DropdownMenuDemo } from "@/registry/carbon/showcase";
import { HoverCardDemo } from "@/registry/carbon/showcase";
import { InputDemo } from "@/registry/carbon/showcase";
import { InputOTPDemo } from "@/registry/carbon/showcase";
import { LabelDemo } from "@/registry/carbon/showcase";
import { MenubarDemo } from "@/registry/carbon/showcase";
import { PaginationDemo } from "@/registry/carbon/showcase";
import { PopoverDemo } from "@/registry/carbon/showcase";
import { ProgressDemo } from "@/registry/carbon/showcase";
import { RadioGroupDemo } from "@/registry/carbon/showcase";
import { SelectDemo } from "@/registry/carbon/showcase";
import { SheetDemo } from "@/registry/carbon/showcase";
import { SkeletonDemo } from "@/registry/carbon/showcase";
import { SliderDemo } from "@/registry/carbon/showcase";
import { SonnerDemo } from "@/registry/carbon/showcase";
import { SwitchDemo } from "@/registry/carbon/showcase";
import { TextareaDemo } from "@/registry/carbon/showcase";
import { ToggleDemo } from "@/registry/carbon/showcase";
import { ToggleGroupDemo } from "@/registry/carbon/showcase";
import { TooltipDemo } from "@/registry/carbon/showcase";
import { Badge, BadgeProps } from "@/registry/carbon/ui/badge";
import { Button, ButtonProps } from "@/registry/carbon/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/carbon/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/carbon/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/registry/carbon/ui/tabs";

export function CarbonShowcaseComponents() {
  const style = "carbon";

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
