import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/linear/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
