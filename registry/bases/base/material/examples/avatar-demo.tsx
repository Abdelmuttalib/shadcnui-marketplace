import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/material/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
