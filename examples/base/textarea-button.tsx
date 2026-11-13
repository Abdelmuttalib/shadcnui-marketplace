import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { Textarea } from "@/registry/bases/base/styles/default/ui/textarea";

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
