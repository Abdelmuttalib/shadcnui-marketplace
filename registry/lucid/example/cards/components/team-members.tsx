import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/lucid/ui/avatar";
import { Button } from "@/registry/lucid/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/lucid/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/lucid/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/lucid/ui/popover";

export function DemoTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/shadcn.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-lucid-muted-foreground">
                m@example.com
              </p>
            </div>
          </div>
          <TeamMemberRuleSelect />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/shadcn.png" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-lucid-muted-foreground">
                p@example.com
              </p>
            </div>
          </div>
          <TeamMemberRuleSelect />
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMemberRuleSelect() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Owner{" "}
          <ChevronDownIcon className="ml-2 h-4 w-4 text-lucid-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="end">
        <Command>
          <CommandInput placeholder="Select new role..." />
          <CommandList>
            <CommandEmpty>No roles found.</CommandEmpty>
            <CommandGroup>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Viewer</p>
                <p className="text-sm text-lucid-muted-foreground">
                  Can view and comment.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Developer</p>
                <p className="text-sm text-lucid-muted-foreground">
                  Can view, comment and edit.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Billing</p>
                <p className="text-sm text-lucid-muted-foreground">
                  Can view, comment and manage billing.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Owner</p>
                <p className="text-sm text-lucid-muted-foreground">
                  Admin-level access to all resources.
                </p>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
