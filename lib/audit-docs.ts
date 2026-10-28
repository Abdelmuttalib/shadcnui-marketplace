import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import fs from "node:fs/promises";

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

const AUDIT_COMPONENTS_DIR = path.join(
  process.cwd(),
  "docs",
  "project-audit",
  "components"
);

export type AuditStyle = {
  slug: string;
  title: string;
  count: number;
};

export type AuditStyleComparison = {
  slug: string;
  title: string;
  relativePath: string;
  content: string;
};

function formatTitle(value: string): string {
  return value
    .replace(/-vs-default$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function getAuditStyles(): Promise<AuditStyle[]> {
  const entries = await fs.readdir(AUDIT_COMPONENTS_DIR, {
    withFileTypes: true,
  });

  const directories = entries.filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith(".")
  );

  const styles = await Promise.all(
    directories.map(async (directory) => {
      const files = await fs.readdir(
        path.join(AUDIT_COMPONENTS_DIR, directory.name),
        { withFileTypes: true }
      );

      return {
        slug: directory.name,
        title: formatTitle(directory.name),
        count: files.filter(
          (file) =>
            file.isFile() &&
            file.name.endsWith(".md") &&
            /-vs-default\.md$/i.test(file.name)
        ).length,
      };
    })
  );

  return styles.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getAuditStyleComparisons(
  style: string
): Promise<AuditStyleComparison[]> {
  // Validate the requested style against directories in the documentation.
  const styles = await getAuditStyles();
  const selectedStyle = styles.find((item) => item.slug === style);

  if (!selectedStyle) {
    return [];
  }

  const styleDir = path.join(AUDIT_COMPONENTS_DIR, selectedStyle.slug);

  const entries = await fs.readdir(styleDir, {
    withFileTypes: true,
  });

  const files = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".md") &&
        /-vs-default\.md$/i.test(entry.name)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return Promise.all(
    files.map(async (file) => {
      const absolutePath = path.join(styleDir, file.name);

      const content = await fs.readFile(absolutePath, "utf8");

      const slug = file.name.replace(/-vs-default\.md$/i, "");

      return {
        slug,
        title: formatTitle(slug),
        relativePath: `${selectedStyle.slug}/${file.name}`,
        content,
      };
    })
  );
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
