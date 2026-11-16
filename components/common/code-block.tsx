"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { copyToClipboardWithMeta } from "@/components/copy-button";
import { highlightCode } from "@/lib/shiki";

type CodeBlockProps = {
  code: string;
  language?: string;
  theme?: string;
  showCopyButton?: boolean;
};

export function CodeBlock({
  code,
  language = "bash",
  theme = "vesper",
  showCopyButton = true,
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [highlightedCode, setHighlightedCode] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;

    async function highlight() {
      try {
        const html = await highlightCode({
          code,
          language,
          theme,
        });

        if (!cancelled) {
          setHighlightedCode(html);
        }
      } catch {
        if (!cancelled) {
          setHighlightedCode("");
        }
      }
    }

    setHighlightedCode("");
    highlight();

    return () => {
      cancelled = true;
    };
  }, [code, language, theme]);

  React.useEffect(() => {
    if (!hasCopied) return;

    const timer = setTimeout(() => setHasCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [hasCopied]);

  const handleCopy = React.useCallback(async () => {
    await copyToClipboardWithMeta(code);
    setHasCopied(true);
  }, [code]);

  return (
    <div className="bg-popover dark relative min-w-0">
      <div className="no-scrollbar overflow-x-auto px-4 py-3.5 pr-12">
        {highlightedCode ? (
          <div
            className="text-sm [&_code]:font-mono [&_pre]:!bg-transparent [&_pre]:p-0"
            dangerouslySetInnerHTML={{
              __html: highlightedCode,
            }}
          />
        ) : (
          <pre>
            <code className="font-mono text-sm leading-relaxed whitespace-pre">
              {code}
            </code>
          </pre>
        )}
      </div>

      {showCopyButton && (
        <Button
          data-slot="copy-button"
          size="icon-sm"
          variant="ghost"
          aria-label={hasCopied ? "Copied" : "Copy code"}
          className="absolute top-2 right-2 z-10 opacity-70 hover:opacity-100 focus-visible:opacity-100"
          onClick={handleCopy}
        >
          {hasCopied ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      )}
    </div>
  );
}

// "use client";

// import * as React from "react";
// import { Check, Copy } from "lucide-react";
// import { codeToHtml } from "shiki";

// import { Button } from "@/components/ui/button";
// import { copyToClipboardWithMeta } from "@/components/copy-button";

// type CodeBlockProps = {
//   code: string;
//   language?: string;
//   theme?: string;
// };

// export function CodeBlock({
//   code,
//   language = "bash",
//   theme = "vesper",
// }: CodeBlockProps) {
//   const [hasCopied, setHasCopied] = React.useState(false);
//   const [highlightedCode, setHighlightedCode] = React.useState("");

//   React.useEffect(() => {
//     let cancelled = false;

//     async function highlight() {
//       try {
//         const html = await codeToHtml(code, {
//           lang: language,
//           theme,
//         });

//         if (!cancelled) {
//           setHighlightedCode(html);
//         }
//       } catch {
//         if (!cancelled) {
//           setHighlightedCode("");
//         }
//       }
//     }

//     highlight();

//     return () => {
//       cancelled = true;
//     };
//   }, [code, language, theme]);

//   React.useEffect(() => {
//     if (!hasCopied) return;

//     const timer = setTimeout(() => setHasCopied(false), 2000);

//     return () => clearTimeout(timer);
//   }, [hasCopied]);

//   const handleCopy = React.useCallback(async () => {
//     await copyToClipboardWithMeta(code);
//     setHasCopied(true);
//   }, [code]);

//   return (
//     <div className="bg-popover relative min-w-0">
//       <div className="no-scrollbar overflow-x-auto px-4 py-3.5 pr-12">
//         {highlightedCode ? (
//           <div
//             className="font-mono text-sm [&_code]:font-mono [&_pre]:!bg-transparent [&_pre]:p-0"
//             dangerouslySetInnerHTML={{
//               __html: highlightedCode,
//             }}
//           />
//         ) : (
//           <pre>
//             <code className="font-mono text-sm leading-relaxed whitespace-pre">
//               {code}
//             </code>
//           </pre>
//         )}
//       </div>

//       <Button
//         data-slot="copy-button"
//         size="icon-sm"
//         variant="ghost"
//         aria-label={hasCopied ? "Copied" : "Copy code"}
//         className="absolute top-2 right-2 z-10 opacity-70 hover:opacity-100 focus-visible:opacity-100"
//         onClick={handleCopy}
//       >
//         {hasCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
//       </Button>
//     </div>
//   );
// }

// "use client";

// import * as React from "react";
// import { Check, Copy } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { copyToClipboardWithMeta } from "@/components/copy-button";

// type CodeBlockProps = {
//   code: string;
//   language?: string;
// };

// export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
//   const [hasCopied, setHasCopied] = React.useState(false);

//   React.useEffect(() => {
//     if (!hasCopied) return;

//     const timer = setTimeout(() => setHasCopied(false), 2000);

//     return () => clearTimeout(timer);
//   }, [hasCopied]);

//   const handleCopy = React.useCallback(async () => {
//     await copyToClipboardWithMeta(code);
//     setHasCopied(true);
//   }, [code]);

//   return (
//     <div className="bg-popover relative min-w-0">
//       <div className="no-scrollbar overflow-x-auto px-4 py-3.5 pr-12">
//         <pre>
//           <code
//             data-language={language}
//             className="font-mono text-sm leading-relaxed whitespace-pre"
//           >
//             {code}
//           </code>
//         </pre>
//       </div>

//       <Button
//         data-slot="copy-button"
//         size="icon-sm"
//         variant="ghost"
//         aria-label={hasCopied ? "Copied" : "Copy code"}
//         className="absolute top-2 right-2 z-10 opacity-70 hover:opacity-100 focus-visible:opacity-100"
//         onClick={handleCopy}
//       >
//         {hasCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
//       </Button>
//     </div>
//   );
// }
