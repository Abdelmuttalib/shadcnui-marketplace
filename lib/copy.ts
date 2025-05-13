import copy from "copy-to-clipboard";

export function onCopy(content: string) {
  copy(content.trim());
  // copy(typeof code === "string" ? code.trim() : "");
}
