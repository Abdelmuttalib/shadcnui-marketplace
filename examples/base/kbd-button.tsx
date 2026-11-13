import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { Kbd } from "@/registry/bases/base/styles/default/ui/kbd";

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  );
}
