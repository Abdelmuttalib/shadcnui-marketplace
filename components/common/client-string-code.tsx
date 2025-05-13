"use client";

import * as React from "react";

import { CopyButton } from "@/app/(www)/typography/components/copy-button";
import { highlightCode } from "@/lib/highlight-code";

export function ClientStringCode({
  c,
  disableCopyButton = false,
}: {
  c: string;
  disableCopyButton?: boolean;
}) {
  const [code, setCode] = React.useState("");
  const [codeString, setCodeString] = React.useState<JSX.Element | string>("");
  // let code = "";
  // let codeString: any | string;

  React.useEffect(() => {
    async function fetchCode() {
      try {
        let _code = c;
        let _codeString = await highlightCode(c);
        setCode(_code);
        setCodeString(_codeString);
      } catch (error) {
        console.error("Failed to load code:", error);
        setCode("File not found.");
        setCodeString("File not found.");
        // code = "File not found.";
        // codeString = code;
      }
    }

    fetchCode();
  }, [c]);

  // try {
  //   code = c;

  //   codeString = await highlightCode(code);
  // } catch (error) {
  //   console.error("Failed to read file:", error);
  //   code = "File not found.";
  //   codeString = code;
  // }

  return (
    <div className="relative w-full rounded-lg border">
      {!disableCopyButton ? <CopyButton code={code} /> : null}
      {codeString}
    </div>
  );
}
