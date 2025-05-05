import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki/bundle/web";

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

// export async function highlight(code: string) {
//   const html = await codeToHtml(code, {
//     lang: "tsx",
//     theme: "github-dark-default",
//     transformers: [
//       {
//         code(node) {
//           node.properties["data-line-numbers"] = "";
//         },
//       },
//     ],
//   });

//   // html string to react element
//   return html;
// }
