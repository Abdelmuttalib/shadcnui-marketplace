import { notFound } from "next/navigation";

import { MarkdownViewer } from "@/components/audit-studio/markdown-viewer";
import { getAuditDocument } from "@/lib/audit-studio";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function AuditDocumentPage({ params }: PageProps) {
  const { slug } = await params;

  const document = await getAuditDocument(slug);

  if (!document) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 lg:px-12">
      <nav className="text-muted-foreground mb-8 text-sm">
        <a
          href="/audit-studio"
          className="hover:text-foreground transition-colors"
        >
          Audit Studio
        </a>

        <span className="mx-2">/</span>

        <span>{document.title}</span>
      </nav>

      <MarkdownViewer content={document.content} />
    </main>
  );
}
