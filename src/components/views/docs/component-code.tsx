import path from "path";
import { readFile } from "fs/promises";
import { codeToHtml } from "shiki";
import { codeToHast } from "shiki/bundle/web";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, ReactElement } from "react";
import { jsx, jsxs } from "react/jsx-runtime";

import { CopyCodeButton } from "./copy-code-button";

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
`;

export async function highlightCode(code: string) {
  const out = await codeToHast(code, {
    lang: "tsx",
    theme: "dark-plus",
  });

  return toJsxRuntime(out, {
    Fragment,
    // @ts-ignore - jsx-runtime is not typed
    jsx,
    // @ts-ignore - jsx-runtime is not typed
    jsxs,
  });
}

export async function highlight(code: string) {
  const html = await codeToHtml(code, {
    lang: "tsx",
    theme: "github-dark-default",
    transformers: [
      {
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
      },
    ],
  });

  // html string to react element
  return html;
}

interface Props {
  params: { slug: string };
}

// app/docs/[slug]/page.tsx

export async function ComponentCode({
  style,
  component,
  type,
  fileName,
}: {
  style: string;
  component: string;
  type?: string;
  fileName: string;
}) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "components",
    "ui",
    style,
    "ui",
    `${fileName}.tsx`
    // "carbon",
    // "ui",
    // "button.tsx"
    // "examples",
    // category,
    // component,

    // `${params.slug}.tsx`
  );
  let _code = "";
  let code = "";
  let codeString: ReactElement<any, any> | string;

  try {
    _code = await readFile(filePath, "utf-8");
    code = _code.replaceAll("-cb", "");
    codeString = await highlightCode(code);
  } catch (error) {
    console.error("Failed to read file:", error);
    code = "File not found.";
    codeString = code;
  }

  return (
    <div className="relative border rounded-lg w-full">
      <CopyCodeButton code={code} />
      {codeString}
    </div>
  );
}
