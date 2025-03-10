import { ComponentWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/components/showcase";
import { AlertDemo } from "@/components/showcase";
import { AlertDialogDemo } from "@/components/showcase";
import { AspectRatioDemo } from "@/components/showcase";
import { AvatarDemo } from "@/components/showcase";
import { BadgeDemo } from "@/components/showcase";
import { BreadcrumbDemo } from "@/components/showcase";
import { ButtonDemo } from "@/components/showcase";
import { CalendarDemo } from "@/components/showcase";
import { CardDemo } from "@/components/showcase";
import { CarouselDemo } from "@/components/showcase";
import { ChartDemo } from "@/components/showcase";
import { CheckboxDemo } from "@/components/showcase";
import { CollapsibleDemo } from "@/components/showcase";
import { ComboboxDemo } from "@/components/showcase";
import { CommandDemo } from "@/components/showcase";
import { ContextMenuDemo } from "@/components/showcase";
import { DatePickerDemo } from "@/components/showcase";
import { DialogDemo } from "@/components/showcase";
import { DrawerDemo } from "@/components/showcase";
import { DropdownMenuDemo } from "@/components/showcase";
import { FormDemo } from "@/components/showcase";
import { HoverCardDemo } from "@/components/showcase";
import { InputDemo } from "@/components/showcase";
import { InputOTPDemo } from "@/components/showcase";
import { LabelDemo } from "@/components/showcase";
import { MenubarDemo } from "@/components/showcase";
import { NavigationMenuDemo } from "@/components/showcase";
import { PaginationDemo } from "@/components/showcase";
import { PopoverDemo } from "@/components/showcase";
import { ProgressDemo } from "@/components/showcase";
import { RadioGroupDemo } from "@/components/showcase";
import { ResizableDemo } from "@/components/showcase";
import { ScrollAreaDemo } from "@/components/showcase";
import { SelectDemo } from "@/components/showcase";
import { SeparatorDemo } from "@/components/showcase";
import { SheetDemo } from "@/components/showcase";
import { SkeletonDemo } from "@/components/showcase";
import { SliderDemo } from "@/components/showcase";
import { SonnerDemo } from "@/components/showcase";
import { SwitchDemo } from "@/components/showcase";
import { TableDemo } from "@/components/showcase";
import { TabsDemo } from "@/components/showcase";
import { TextareaDemo } from "@/components/showcase";
import { ToggleDemo } from "@/components/showcase";
import { ToggleGroupDemo } from "@/components/showcase";
import { TooltipDemo } from "@/components/showcase";

export function DefaultSinkPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <ComponentWrapper name="chart" className="w-full">
        <ChartDemo />
      </ComponentWrapper>
      <ComponentWrapper name="accordion">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert-dialog">
        <AlertDialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="aspect-ratio">
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name="avatar">
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="badge">
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name="breadcrumb">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="button">
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="calendar">
        <CalendarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="card">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="carousel" className="hidden md:flex">
        <CarouselDemo />
      </ComponentWrapper>
      <ComponentWrapper name="checkbox">
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="collapsible">
        <CollapsibleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="combobox">
        <ComboboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="command">
        <CommandDemo />
      </ComponentWrapper>
      <ComponentWrapper name="context-menu">
        <ContextMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="date-picker">
        <DatePickerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="dialog">
        <DialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="drawer">
        <DrawerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="dropdown-menu">
        <DropdownMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="form">
        <FormDemo />
      </ComponentWrapper>
      <ComponentWrapper name="hover-card">
        <HoverCardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input">
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input-otp">
        <InputOTPDemo />
      </ComponentWrapper>
      <ComponentWrapper name="label">
        <LabelDemo />
      </ComponentWrapper>
      <ComponentWrapper name="menubar">
        <MenubarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="navigation-menu">
        <NavigationMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="pagination">
        <PaginationDemo />
      </ComponentWrapper>
      <ComponentWrapper name="popover">
        <PopoverDemo />
      </ComponentWrapper>
      <ComponentWrapper name="progress">
        <ProgressDemo />
      </ComponentWrapper>
      <ComponentWrapper name="radio-group">
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="resizable">
        <ResizableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="scroll-area">
        <ScrollAreaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="select">
        <SelectDemo />
      </ComponentWrapper>
      <ComponentWrapper name="separator">
        <SeparatorDemo />
      </ComponentWrapper>
      <ComponentWrapper name="sheet">
        <SheetDemo />
      </ComponentWrapper>
      <ComponentWrapper name="skeleton">
        <SkeletonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="slider">
        <SliderDemo />
      </ComponentWrapper>
      <ComponentWrapper name="sonner">
        <SonnerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="switch">
        <SwitchDemo />
      </ComponentWrapper>
      <ComponentWrapper name="table">
        <TableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tabs">
        <TabsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="textarea">
        <TextareaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle">
        <ToggleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle-group">
        <ToggleGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tooltip">
        <TooltipDemo />
      </ComponentWrapper>
    </div>
  );
}
