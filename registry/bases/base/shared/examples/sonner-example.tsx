"use client";

import { toast } from "sonner";

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";
import { useDesignSystem } from "../components/design-system-provider";

export default function SonnerExample() {
  return (
    <ExampleWrapper>
      <SonnerBasic />
      <SonnerWithDescription />
    </ExampleWrapper>
  );
}

function SonnerBasic() {
  const { Button } = useDesignSystem();

  return (
    <Example title="Basic" className="items-center justify-center">
      <Button
        onClick={() => toast("Event has been created")}
        variant="outline"
        className="w-fit"
      >
        Show Toast
      </Button>
    </Example>
  );
}

function SonnerWithDescription() {
  const { Button } = useDesignSystem();

  return (
    <Example title="With Description" className="items-center justify-center">
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
        variant="outline"
        className="w-fit"
      >
        Show Toast
      </Button>
    </Example>
  );
}
