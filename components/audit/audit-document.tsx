import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type AuditDocumentProps = {
  content: string;
};

export function AuditDocument({ content }: AuditDocumentProps) {
  return (
    <article
      className={[
        "audit-prose",
        "max-w-none min-w-0",
        "text-[15px] leading-7",
        "text-zinc-700 dark:text-zinc-300",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-2 mb-6 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mt-12 mb-4 border-b border-zinc-200 pb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {children}
            </h3>
          ),

          p: ({ children }) => <p className="my-4">{children}</p>,

          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-2 pl-6 marker:text-zinc-400">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-6 marker:text-zinc-400">
              {children}
            </ol>
          ),

          li: ({ children }) => <li className="ps-1">{children}</li>,

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-zinc-300 pl-5 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="border-b border-zinc-200 px-4 py-3 font-semibold whitespace-nowrap dark:border-zinc-800">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border-b border-zinc-100 px-4 py-3 align-top dark:border-zinc-800/70">
              {children}
            </td>
          ),

          a: ({ href, children }) => {
            const isExternal =
              href?.startsWith("https://") || href?.startsWith("http://");

            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-4 hover:decoration-blue-600 dark:text-blue-400"
              >
                {children}
              </a>
            );
          },

          code: ({ children, className }) => {
            const isCodeBlock = Boolean(className);

            if (isCodeBlock) {
              return <code className={className}>{children}</code>;
            }

            return (
              <code className="rounded-md border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-sm leading-6 text-zinc-100">
              {children}
            </pre>
          ),

          hr: () => (
            <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
          ),

          input: ({ checked, type }) => (
            <input
              type={type}
              checked={checked}
              readOnly
              className="mr-2 accent-blue-600"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
