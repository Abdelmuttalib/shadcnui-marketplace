import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/libelle/ui/avatar";
import { Button } from "@/registry/libelle/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/libelle/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/libelle/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/libelle/ui/popover";

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
              <p className="text-libelle-muted-foreground text-sm">
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
              <p className="text-libelle-muted-foreground text-sm">
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
          <ChevronDownIcon className="text-libelle-muted-foreground ml-2 h-4 w-4" />
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
                <p className="text-libelle-muted-foreground text-sm">
                  Can view and comment.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Developer</p>
                <p className="text-libelle-muted-foreground text-sm">
                  Can view, comment and edit.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Billing</p>
                <p className="text-libelle-muted-foreground text-sm">
                  Can view, comment and manage billing.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Owner</p>
                <p className="text-libelle-muted-foreground text-sm">
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
