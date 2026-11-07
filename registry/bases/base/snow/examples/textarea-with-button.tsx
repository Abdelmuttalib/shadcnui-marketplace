import { Button } from "@/registry/bases/base/snow/ui/button";
import { Textarea } from "@/registry/bases/base/snow/ui/textarea";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
