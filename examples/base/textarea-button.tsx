import { Button } from "@/styles/base-default/ui/button";
import { Textarea } from "@/styles/base-default/ui/textarea";

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
