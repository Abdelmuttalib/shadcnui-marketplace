import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export function CodeBlock(props: Props) {
  return "";
  // const out = await codeToHtml(props.children, {
  //   lang: props.lang,
  //   theme: "github-dark",
  // });

  // return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
