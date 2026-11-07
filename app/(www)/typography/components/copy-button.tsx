"use client";

import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  function onCopyCode() {
    copy(code.trim());
    // copy(typeof code === "string" ? code.trim() : "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onCopyCode}
      className="bg-background absolute top-2 right-2 rounded-none transition-transform duration-300 ease-in-out [&_svg]:size-4 [&_svg]:transition-transform"
    >
      {copied ? <CheckIcon /> : <CopyIcon />} {copied ? "Copied" : "Copy"}
    </Button>
  );
}
