import type { Style } from "../../registry/styles";

/**
 * Converts style-specific utility and CSS variable prefixes
 * to the unprefixed tokens expected by registry consumers.
 */
export function stripStyleVariablePrefix(
  content: string,
  prefix: string
): string {
  if (!prefix) {
    return content;
  }

  const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Match the prefix only when it follows a hyphen and is followed
  // by a word boundary.
  //
  // Examples:
  // bg-cb-background     -> bg-background
  // text-cb-foreground   -> text-foreground
  // rounded-cb-lg        -> rounded-lg
  // --cb-background      -> --background
  // --radius-cb-lg       -> --radius-lg
  //
  // This avoids removing unrelated words such as ease-linear.
  const prefixPattern = new RegExp(`-${escapedPrefix}\\b`, "g");

  return content.replace(prefixPattern, "");
}

/**
 * Rewrites imports pointing to internal registry UI components
 * to standard application component imports.
 */
// export function rewriteRegistryUIImports(content: string): string {
//   return content.replace(
//     /@\/registry\/(?:default-v4|default|carbon|catalyst|linear|material|spectrum|wedges|moon|lucid|snow|neon|libelle)\/ui(?=\/|["'])/g,
//     "@/components/ui"
//   );
// }

export function rewriteRegistryUIImports(content: string): string {
  return content.replace(
    /@\/registry\/(?:bases\/[^/"']+\/styles\/)?(?:default-v4|default|carbon|catalyst|linear|material|spectrum|wedges|moon|lucid|snow|neon|libelle)\/ui(?=\/|["'])/g,
    "@/components/ui"
  );
}

/**
 * Transforms source content for a public registry item.
 *
 * This function must only be used for generated public registry
 * content. Do not use it when writing the source files.
 */
export function transformRegistryContent(
  content: string,
  prefix: string
): string {
  const withoutStylePrefix = stripStyleVariablePrefix(content, prefix);

  return rewriteRegistryUIImports(withoutStylePrefix);
}
