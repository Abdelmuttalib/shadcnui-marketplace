import { ComponentWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/components/demo/showcase-catalyst";
import { AlertDemo } from "@/components/demo/showcase-catalyst";
import { AlertDialogDemo } from "@/components/demo/showcase-catalyst";
import { AspectRatioDemo } from "@/components/demo/showcase-catalyst";
import { AvatarDemo } from "@/components/demo/showcase-catalyst";
import { BadgeDemo } from "@/components/demo/showcase-catalyst";
import { BreadcrumbDemo } from "@/components/demo/showcase-catalyst";
import { ButtonDemo } from "@/components/demo/showcase-catalyst";
import { CalendarDemo } from "@/components/demo/showcase-catalyst";
import { CardDemo } from "@/components/demo/showcase-catalyst";
import { CarouselDemo } from "@/components/demo/showcase-catalyst";
import { ChartDemo } from "@/components/demo/showcase-catalyst";
import { CheckboxDemo } from "@/components/demo/showcase-catalyst";
import { CollapsibleDemo } from "@/components/demo/showcase-catalyst";
import { ComboboxDemo } from "@/components/demo/showcase-catalyst";
import { CommandDemo } from "@/components/demo/showcase-catalyst";
import { ContextMenuDemo } from "@/components/demo/showcase-catalyst";
import { DatePickerDemo } from "@/components/demo/showcase-catalyst";
import { DialogDemo } from "@/components/demo/showcase-catalyst";
import { DrawerDemo } from "@/components/demo/showcase-catalyst";
import { DropdownMenuDemo } from "@/components/demo/showcase-catalyst";
import { FormDemo } from "@/components/demo/showcase-catalyst";
import { HoverCardDemo } from "@/components/demo/showcase-catalyst";
import { InputDemo } from "@/components/demo/showcase-catalyst";
import { InputOTPDemo } from "@/components/demo/showcase-catalyst";
import { LabelDemo } from "@/components/demo/showcase-catalyst";
import { MenubarDemo } from "@/components/demo/showcase-catalyst";
import { NavigationMenuDemo } from "@/components/demo/showcase-catalyst";
import { PaginationDemo } from "@/components/demo/showcase-catalyst";
import { PopoverDemo } from "@/components/demo/showcase-catalyst";
import { ProgressDemo } from "@/components/demo/showcase-catalyst";
import { RadioGroupDemo } from "@/components/demo/showcase-catalyst";
import { ResizableDemo } from "@/components/demo/showcase-catalyst";
import { ScrollAreaDemo } from "@/components/demo/showcase-catalyst";
import { SelectDemo } from "@/components/demo/showcase-catalyst";
import { SeparatorDemo } from "@/components/demo/showcase-catalyst";
import { SheetDemo } from "@/components/demo/showcase-catalyst";
import { SkeletonDemo } from "@/components/demo/showcase-catalyst";
import { SliderDemo } from "@/components/demo/showcase-catalyst";
import { SonnerDemo } from "@/components/demo/showcase-catalyst";
import { SwitchDemo } from "@/components/demo/showcase-catalyst";
import { TableDemo } from "@/components/demo/showcase-catalyst";
import { TabsDemo } from "@/components/demo/showcase-catalyst";
import { TextareaDemo } from "@/components/demo/showcase-catalyst";
import { ToggleDemo } from "@/components/demo/showcase-catalyst";
import { ToggleGroupDemo } from "@/components/demo/showcase-catalyst";
import { TooltipDemo } from "@/components/demo/showcase-catalyst";

export function CatalystSinkPage() {
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
