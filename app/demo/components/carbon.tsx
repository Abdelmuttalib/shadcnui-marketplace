import { ComponentWrapper } from "@/components/component-wrapper";
import { AccordionDemo } from "@/components/showcase-carbon";
import { AlertDemo } from "@/components/showcase-carbon";
import { AlertDialogDemo } from "@/components/showcase-carbon";
import { AspectRatioDemo } from "@/components/showcase-carbon";
import { AvatarDemo } from "@/components/showcase-carbon";
import { BadgeDemo } from "@/components/showcase-carbon";
import { BreadcrumbDemo } from "@/components/showcase-carbon";
import { ButtonDemo } from "@/components/showcase-carbon";
import { CalendarDemo } from "@/components/showcase-carbon";
import { CardDemo } from "@/components/showcase-carbon";
import { CarouselDemo } from "@/components/showcase-carbon";
import { ChartDemo } from "@/components/showcase-carbon";
import { CheckboxDemo } from "@/components/showcase-carbon";
import { CollapsibleDemo } from "@/components/showcase-carbon";
import { ComboboxDemo } from "@/components/showcase-carbon";
import { CommandDemo } from "@/components/showcase-carbon";
import { ContextMenuDemo } from "@/components/showcase-carbon";
import { DatePickerDemo } from "@/components/showcase-carbon";
import { DialogDemo } from "@/components/showcase-carbon";
import { DrawerDemo } from "@/components/showcase-carbon";
import { DropdownMenuDemo } from "@/components/showcase-carbon";
import { FormDemo } from "@/components/showcase-carbon";
import { HoverCardDemo } from "@/components/showcase-carbon";
import { InputDemo } from "@/components/showcase-carbon";
import { InputOTPDemo } from "@/components/showcase-carbon";
import { LabelDemo } from "@/components/showcase-carbon";
import { MenubarDemo } from "@/components/showcase-carbon";
import { NavigationMenuDemo } from "@/components/showcase-carbon";
import { PaginationDemo } from "@/components/showcase-carbon";
import { PopoverDemo } from "@/components/showcase-carbon";
import { ProgressDemo } from "@/components/showcase-carbon";
import { RadioGroupDemo } from "@/components/showcase-carbon";
import { ResizableDemo } from "@/components/showcase-carbon";
import { ScrollAreaDemo } from "@/components/showcase-carbon";
import { SelectDemo } from "@/components/showcase-carbon";
import { SeparatorDemo } from "@/components/showcase-carbon";
import { SheetDemo } from "@/components/showcase-carbon";
import { SkeletonDemo } from "@/components/showcase-carbon";
import { SliderDemo } from "@/components/showcase-carbon";
import { SonnerDemo } from "@/components/showcase-carbon";
import { SwitchDemo } from "@/components/showcase-carbon";
import { TableDemo } from "@/components/showcase-carbon";
import { TabsDemo } from "@/components/showcase-carbon";
import { TextareaDemo } from "@/components/showcase-carbon";
import { ToggleDemo } from "@/components/showcase-carbon";
import { ToggleGroupDemo } from "@/components/showcase-carbon";
import { TooltipDemo } from "@/components/showcase-carbon";

export default function CarbonSinkPage() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
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
