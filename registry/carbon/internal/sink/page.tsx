import { AccordionDemo } from "@/registry/carbon/internal/sink/components/accordion-demo";
import { AlertDemo } from "@/registry/carbon/internal/sink/components/alert-demo";
import { AlertDialogDemo } from "@/registry/carbon/internal/sink/components/alert-dialog-demo";
import { AppSidebar } from "@/registry/carbon/internal/sink/components/app-sidebar";
import { AspectRatioDemo } from "@/registry/carbon/internal/sink/components/aspect-ratio-demo";
import { AvatarDemo } from "@/registry/carbon/internal/sink/components/avatar-demo";
import { BadgeDemo } from "@/registry/carbon/internal/sink/components/badge-demo";
import { BadgeDestructive } from "@/registry/carbon/internal/sink/components/badge-destructive";
import { BadgeOutline } from "@/registry/carbon/internal/sink/components/badge-outline";
import { BadgeSecondary } from "@/registry/carbon/internal/sink/components/badge-secondary";
import { BreadcrumbDemo } from "@/registry/carbon/internal/sink/components/breadcrumb-demo";
import { ButtonDemo } from "@/registry/carbon/internal/sink/components/button-demo";
import { ButtonDestructive } from "@/registry/carbon/internal/sink/components/button-destructive";
import { ButtonGhost } from "@/registry/carbon/internal/sink/components/button-ghost";
import { ButtonLink } from "@/registry/carbon/internal/sink/components/button-link";
import { ButtonLoading } from "@/registry/carbon/internal/sink/components/button-loading";
import { ButtonOutline } from "@/registry/carbon/internal/sink/components/button-outline";
import { ButtonSecondary } from "@/registry/carbon/internal/sink/components/button-secondary";
import { ButtonWithIcon } from "@/registry/carbon/internal/sink/components/button-with-icon";
import { CalendarDemo } from "@/registry/carbon/internal/sink/components/calendar-demo";
import { CardDemo } from "@/registry/carbon/internal/sink/components/card-demo";
import { CarouselDemo } from "@/registry/carbon/internal/sink/components/carousel-demo";
import { CheckboxDemo } from "@/registry/carbon/internal/sink/components/checkbox-demo";
import { CollapsibleDemo } from "@/registry/carbon/internal/sink/components/collapsible-demo";
import { ComboboxDemo } from "@/registry/carbon/internal/sink/components/combobox-demo";
import { CommandDemo } from "@/registry/carbon/internal/sink/components/command-demo";
import { ComponentWrapper } from "@/registry/carbon/internal/sink/components/component-wrapper";
import { ContextMenuDemo } from "@/registry/carbon/internal/sink/components/context-menu-demo";
import { DatePickerDemo } from "@/registry/carbon/internal/sink/components/date-picker-demo";
import { DialogDemo } from "@/registry/carbon/internal/sink/components/dialog-demo";
import { DrawerDemo } from "@/registry/carbon/internal/sink/components/drawer-demo";
import { DropdownMenuDemo } from "@/registry/carbon/internal/sink/components/dropdown-menu-demo";
import { HoverCardDemo } from "@/registry/carbon/internal/sink/components/hover-card-demo";
import { InputDemo } from "@/registry/carbon/internal/sink/components/input-demo";
import { InputOTPDemo } from "@/registry/carbon/internal/sink/components/input-otp-demo";
import { LabelDemo } from "@/registry/carbon/internal/sink/components/label-demo";
import { MenubarDemo } from "@/registry/carbon/internal/sink/components/menubar-demo";
import { NavigationMenuDemo } from "@/registry/carbon/internal/sink/components/navigation-menu-demo";
import { PaginationDemo } from "@/registry/carbon/internal/sink/components/pagination-demo";
import { PopoverDemo } from "@/registry/carbon/internal/sink/components/popover-demo";
import { ProgressDemo } from "@/registry/carbon/internal/sink/components/progress-demo";
import { RadioGroupDemo } from "@/registry/carbon/internal/sink/components/radio-group-demo";
import { ResizableHandleDemo } from "@/registry/carbon/internal/sink/components/resizable-handle";
import { ScrollAreaDemo } from "@/registry/carbon/internal/sink/components/scroll-area-demo";
import { SelectDemo } from "@/registry/carbon/internal/sink/components/select-demo";
import { SeparatorDemo } from "@/registry/carbon/internal/sink/components/separator-demo";
import { SheetDemo } from "@/registry/carbon/internal/sink/components/sheet-demo";
import { SkeletonDemo } from "@/registry/carbon/internal/sink/components/skeleton-demo";
import { SliderDemo } from "@/registry/carbon/internal/sink/components/slider-demo";
import { SonnerDemo } from "@/registry/carbon/internal/sink/components/sonner-demo";
import { SwitchDemo } from "@/registry/carbon/internal/sink/components/switch-demo";
import { TableDemo } from "@/registry/carbon/internal/sink/components/table-demo";
import { TabsDemo } from "@/registry/carbon/internal/sink/components/tabs-demo";
import { TextareaDemo } from "@/registry/carbon/internal/sink/components/textarea-demo";
import { ToastDemo } from "@/registry/carbon/internal/sink/components/toast-demo";
import { ToggleDemo } from "@/registry/carbon/internal/sink/components/toggle-demo";
import { ToggleDisabled } from "@/registry/carbon/internal/sink/components/toggle-disabled";
import { ToggleGroupDemo } from "@/registry/carbon/internal/sink/components/toggle-group-demo";
import { ToggleOutline } from "@/registry/carbon/internal/sink/components/toggle-outline";
import { ToggleWithText } from "@/registry/carbon/internal/sink/components/toggle-with-text";
import { TooltipDemo } from "@/registry/carbon/internal/sink/components/tooltip-demo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/carbon/ui/breadcrumb";
import { Separator } from "@/registry/carbon/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/carbon/ui/sidebar";

export default function SinkPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-b-cb-border transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ComponentWrapper name="Accordion">
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Alert">
              <AlertDemo />
            </ComponentWrapper>
            <ComponentWrapper name="AlertDialog">
              <AlertDialogDemo />
            </ComponentWrapper>
            <ComponentWrapper name="AspectRatio">
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Avatar">
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Badge">
              <BadgeDemo />
              <BadgeDestructive />
              <BadgeOutline />
              <BadgeSecondary />
            </ComponentWrapper>
            <ComponentWrapper name="Breadcrumb">
              <BreadcrumbDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Button">
              <div className="flex items-center gap-2">
                <ButtonDemo />
                <ButtonDestructive />
                <ButtonGhost />
                <ButtonLink />
              </div>
              <div className="flex items-center gap-2">
                <ButtonLoading />
                <ButtonOutline />
                <ButtonSecondary />
              </div>
              <div className="flex items-center gap-2">
                <ButtonWithIcon />
              </div>
            </ComponentWrapper>
            <ComponentWrapper name="Calendar">
              <CalendarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Card">
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper
              name="Carousel"
              className="[&_.max-w-xs]:max-w-[70%]"
            >
              <CarouselDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Checkbox">
              <CheckboxDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Collapsible">
              <CollapsibleDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Combobox">
              <ComboboxDemo />
            </ComponentWrapper>
            <ComponentWrapper
              name="Command"
              className="[&_[cmdk-root]]:md:min-w-max"
            >
              <CommandDemo />
            </ComponentWrapper>
            <ComponentWrapper name="ContextMenu">
              <ContextMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="DatePicker">
              <DatePickerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Dialog">
              <DialogDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Drawer">
              <DrawerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="DropdownMenu">
              <DropdownMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="HoverCard">
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Input">
              <InputDemo />
            </ComponentWrapper>
            <ComponentWrapper name="InputOTP">
              <InputOTPDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Label">
              <LabelDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Menubar">
              <MenubarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="NavigationMenu" className="col-span-2">
              <NavigationMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Pagination">
              <PaginationDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Popover">
              <PopoverDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Progress">
              <ProgressDemo />
            </ComponentWrapper>
            <ComponentWrapper name="RadioGroup">
              <RadioGroupDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Resizable" className="col-span-2">
              <ResizableHandleDemo />
            </ComponentWrapper>
            <ComponentWrapper name="ScrollArea">
              <ScrollAreaDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Select">
              <SelectDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Separator">
              <SeparatorDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Sheet">
              <SheetDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Skeleton">
              <SkeletonDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Slider">
              <SliderDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Sonner">
              <SonnerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Switch">
              <SwitchDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Table" className="col-span-2">
              <TableDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Tabs">
              <TabsDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Textarea">
              <TextareaDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Toast">
              <ToastDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Toggle">
              <div className="flex items-center gap-2">
                <ToggleDemo />
                <ToggleDisabled />
                <ToggleOutline />
                <ToggleWithText />
              </div>
            </ComponentWrapper>
            <ComponentWrapper name="ToggleGroup">
              <ToggleGroupDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Tooltip">
              <TooltipDemo />
            </ComponentWrapper>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
