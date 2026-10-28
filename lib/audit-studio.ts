import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

const AUDIT_ROOT = path.join(process.cwd(), "docs", "project-audit");

export type AuditDocument = {
  slug: string;
  title: string;
  category: string;
  content: string;
};

const EXCLUDED_DIRECTORIES = new Set(["baselines", "node_modules", ".git"]);

async function walkMarkdown(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (EXCLUDED_DIRECTORIES.has(entry.name)) {
          return [];
        }

        return walkMarkdown(fullPath);
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        return [fullPath];
      }

      return [];
    })
  );

  return files.flat();
}

function titleFromMarkdown(content: string, filename: string): string {
  const heading = content.match(/^#\s+(.+)$/m);

  if (heading) {
    return heading[1].trim();
  }

  return filename
    .replace(/\.md$/i, "")
    .replace(/-MATRIX$/i, " Matrix")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export async function getAuditDocuments(): Promise<AuditDocument[]> {
  const files = await walkMarkdown(AUDIT_ROOT);

  const documents = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(file, "utf8");

      const relativePath = path
        .relative(AUDIT_ROOT, file)
        .split(path.sep)
        .join("/");

      const directory = path.posix.dirname(relativePath);

      return {
        slug: relativePath
          .replace(/\.md$/i, "")
          .split("/")
          .map(encodeURIComponent)
          .join("/"),
        title: titleFromMarkdown(content, path.basename(file)),
        category: directory === "." ? "Overview" : directory,
        content,
      };
    })
  );

  return documents.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getAuditDocument(
  slug: string[]
): Promise<AuditDocument | undefined> {
  const documents = await getAuditDocuments();

  const requestedSlug = slug.join("/");

  return documents.find((document) => document.slug === requestedSlug);
}
