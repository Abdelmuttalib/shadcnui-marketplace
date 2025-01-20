import React, { useEffect, useLayoutEffect, useState } from "react";
// import { codeToHtml } from "shiki";
// import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/utils/cn";

// import { codeToHast } from "shiki/bundle/web";
// import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
// import { jsx, jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";

export const exampleCode = `
import { ButtonLink } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <main className="flex items-center justify-center min-h-[100svh] h-full bg-background">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-foreground-secondary">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            {/* ’ */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonLink href="/">Go back home</ButtonLink>
          </div>
        </div>
      </main>
       <main className="flex items-center justify-center min-h-[100svh] h-full bg-background">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-foreground-secondary">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            {/* ’ */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonLink href="/">Go back home</ButtonLink>
          </div>
        </div>
      </main>
       <main className="flex items-center justify-center min-h-[100svh] h-full bg-background">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-foreground-secondary">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            {/* ’ */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonLink href="/">Go back home</ButtonLink>
          </div>
        </div>
      </main>
    </>
  );
}
`; // input code

// const html = await codeToHtml(code, {
//   lang: 'javascript',
//   theme: 'vitesse-dark'
// })

export async function highlightCode(code: string) {
  // const out = await codeToHast(code, {
  //   lang: "tsx",
  //   theme: "dark-plus",
  // });

  return code as unknown as JSX.Element;

  // return toJsxRuntime(out, {
  //   Fragment,
  //   // @ts-ignore - jsx-runtime is not typed
  //   jsx,
  //   // @ts-ignore - jsx-runtime is not typed
  //   jsxs,
  // });
}

export async function highlight(code: string) {
  // const html = await codeToHtml(code, {
  //   lang: "tsx",
  //   theme: "github-dark-default",
  //   transformers: [
  //     {
  //       code(node) {
  //         node.properties["data-line-numbers"] = "";
  //       },
  //     },
  //   ],
  // });

  // html string to react element
  // return html;
  return code;
}

console.log(exampleCode); // highlighted html string

export function Code({
  initial,
  code,
}: {
  initial?: JSX.Element;
  code: string;
}) {
  const [nodes, setNodes] = useState(initial);

  const [copied, setCopied] = useState(false);

  const codeString = code ? code : extractTextFromChildren("dsdfdsf");

  const handleCopy = () => {
    // copy(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  useLayoutEffect(() => {
    // @ts-ignore
    void highlightCode(code).then(setNodes);
  }, []);

  useEffect(() => {
    if (!nodes) return;
    console.log("CodeBlock mounted", nodes, extractTextFromChildren(nodes));
    return () => {
      console.log("CodeBlock unmounted");
    };
  }, [nodes]);

  return nodes ? (
    <div className="relative border rounded-lg">
      <IconButton
        variant="outline"
        size="xs"
        onClick={handleCopy}
        className="absolute top-2 right-2 transition-transform duration-300 ease-in-out [&_svg]:size-4 [&_svg]:transition-transform"
      >
        {copied ? <CheckIcon className="" /> : <CopyIcon className="" />}
      </IconButton>
      {nodes}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (
    React.isValidElement(children) &&
    children.props &&
    children.props.children
  ) {
    return extractTextFromChildren(children.props.children);
  }

  return "";
};
