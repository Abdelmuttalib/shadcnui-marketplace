import { Label } from "@/registry/linear/ui/label";
import { Textarea } from "@/registry/linear/ui/textarea";

export default function TextareaWithText() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-linear-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
