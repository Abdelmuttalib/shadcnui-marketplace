"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ShareCustomizationButton() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);
      setError(false);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy customization URL:", error);

      setError(true);

      window.setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleShare}>
      {copied ? "Copied!" : error ? "Couldn't copy" : "Share"}
    </Button>
  );
}
