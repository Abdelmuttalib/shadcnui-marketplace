"use client";

import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

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
      className="absolute right-2 top-2 bg-background transition-transform duration-300 ease-in-out [&_svg]:size-4 [&_svg]:transition-transform"
    >
      {copied ? <CheckIcon /> : <CopyIcon />} {copied ? "Copied" : "Copy"}
    </Button>
  );
}
