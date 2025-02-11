"use client";

import { useState } from "react";
import copy from "copy-to-clipboard";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

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
      className="absolute top-2 right-2 transition-transform duration-300 ease-in-out [&_svg]:size-4 [&_svg]:transition-transform"
    >
      {copied ? <CheckIcon /> : <CopyIcon />} {copied ? "Copied" : "Copy"}
    </Button>
  );
}
