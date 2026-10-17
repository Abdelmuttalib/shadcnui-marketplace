import { Input } from "@/registry/linear/ui/input";
import { Label } from "@/registry/linear/ui/label";

export default function InputWithText() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-linear-muted-foreground">
        Enter your email address.
      </p>
    </div>
  );
}
