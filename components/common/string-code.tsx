import { CopyButton } from "@/app/(www)/typography/components/copy-button";
import { highlightCode } from "@/lib/highlight-code";

export async function StringCode({
  c,
  disableCopyButton = false,
}: {
  c: string;
  disableCopyButton?: boolean;
}) {
  let code = "";
  let codeString: any | string;

  try {
    code = c;

    codeString = await highlightCode(code);
  } catch (error) {
    console.error("Failed to read file:", error);
    code = "File not found.";
    codeString = code;
  }

  return (
    <div className="relative w-full rounded-lg border">
      {!disableCopyButton ? <CopyButton code={code} /> : null}
      {codeString}
    </div>
  );
}
