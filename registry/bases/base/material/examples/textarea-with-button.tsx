import { Button } from "@/registry/bases/base/material/ui/button";
import { Textarea } from "@/registry/bases/base/material/ui/textarea";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
