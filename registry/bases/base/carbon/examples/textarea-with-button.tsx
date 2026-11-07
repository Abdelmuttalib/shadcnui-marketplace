import { Button } from "@/registry/bases/base/carbon/ui/button";
import { Textarea } from "@/registry/bases/base/carbon/ui/textarea";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
