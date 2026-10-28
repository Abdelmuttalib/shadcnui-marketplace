import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const AUDIT_ROOT = path.join(process.cwd(), "docs", "project-audit");

export type AuditDocument = {
  slug: string;
  title: string;
  relativePath: string;
  category: string;
};

async function findMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return findMarkdownFiles(fullPath);
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
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
    return heading[1].replace(/\*\*/g, "").replace(/`/g, "").trim();
  }

  return filename
    .replace(/\.md$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function getAuditDocuments(): Promise<AuditDocument[]> {
  const files = await findMarkdownFiles(AUDIT_ROOT);

  const documents = await Promise.all(
    files.map(async (absolutePath) => {
      const relativePath = path
        .relative(AUDIT_ROOT, absolutePath)
        .split(path.sep)
        .join("/");

      const content = await readFile(absolutePath, "utf8");
      const segments = relativePath.split("/");

      return {
        slug: relativePath.replace(/\.md$/, ""),
        title: titleFromMarkdown(content, path.basename(relativePath)),
        relativePath,
        category: segments.length > 1 ? segments[0] : "Overview",
      };
    })
  );

  return documents.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getAuditDocument(slug: string[]): Promise<{
  document: AuditDocument;
  content: string;
} | null> {
  const normalizedSlug = slug.join("/");

  // Resolve the requested path and ensure it stays inside
  // the audit directory.
  const absolutePath = path.resolve(AUDIT_ROOT, `${normalizedSlug}.md`);

  const relativeToRoot = path.relative(AUDIT_ROOT, absolutePath);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
    return null;
  }

  try {
    const content = await readFile(absolutePath, "utf8");

    const relativePath = path
      .relative(AUDIT_ROOT, absolutePath)
      .split(path.sep)
      .join("/");

    const segments = relativePath.split("/");

    return {
      document: {
        slug: normalizedSlug,
        title: titleFromMarkdown(content, path.basename(relativePath)),
        relativePath,
        category: segments.length > 1 ? segments[0] : "Overview",
      },
      content,
    };
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null;
    }

    throw error;
  }
}
