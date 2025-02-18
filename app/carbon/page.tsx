import { ScreenContainer } from "@/components/container";
import { Button } from "@/components/ui/carbon/ui/button";
import { Button as B } from "@/components/ui/button";
import { Badge } from "@/components/ui/carbon/ui/badge";
import {
  CommandDemo,
  DataTableDemo,
  DatePickerDemo,
  DialogDemo,
  DropdownMenuDemo,
  PaginationDemo,
  PopoverDemo,
  SelectDemo,
} from "@/components/ui/carbon/showcase";

export default function Carbon() {
  return (
    <div>
      <ScreenContainer>
        <div className="p-8 flex flex-wrap gap-4">
          {/* <h3>Carbon</h3> */}
          {/* <div className="">
            <button className="bg-[#0f62fe] text-white px-12 pl-4 py-3.5 ring-1 ring-inset ring-[#0f62fe] focus:ring-1 focus:ring-white ring-offset-2 ring-offset-[#0f62fe] text-sm font-plex-sans transition-all duration-100 ease-in-out hover:bg-blue-700 hover:text-white hover:ring-blue-700 hover:ring-offset-blue-700 active:bg-blue-800 active:text-white">
              Button
            </button>
          </div>
          <div className="">
            <button className="bg-[#0f62fe] text-white px-12 pl-4 py-3.5 ring-1 ring-inset ring-[#0f62fe] focus:ring-1 focus:ring-white ring-offset-2 ring-offset-[#0f62fe] text-sm font-plex-sans transition-all duration-100 ease-in-out hover:bg-blue-700 hover:text-white hover:ring-blue-700 hover:ring-offset-blue-700 active:bg-blue-800 active:text-white">
              Button
            </button>
          </div> */}
          <Button className="">
            <span>Button</span>
          </Button>
          <Button className="" variant={"outline"}>
            <span>Button</span>
          </Button>
          <Button className="" variant={"secondary"}>
            <span>Button</span>
          </Button>
          <Button className="" variant={"ghost"}>
            <span>Button</span>
          </Button>
          <Button className="" variant={"destructive"}>
            <span>Button</span>
          </Button>
          <Button className="" variant={"link"}>
            <span>Button</span>
          </Button>

          <div>
            <DropdownMenuDemo />
          </div>

          <div>
            <SelectDemo />
          </div>
          <div>
            <CommandDemo />
          </div>

          <div>
            <PaginationDemo />
          </div>

          <div>
            <PaginationDemo />
          </div>

          <div>
            <PopoverDemo />
          </div>

          <div>
            <DatePickerDemo />
          </div>

          {/* <div>
            <DataTableDemo />
          </div> */}

          <div>
            <Badge variant={"default"}>Badge</Badge>
          </div>
          <div>
            <Badge variant={"secondary"}>Badge</Badge>
          </div>
          <div>
            <Badge variant={"outline"}>Badge</Badge>
          </div>
          <div>
            <Badge variant={"destructive"}>Badge</Badge>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
}
