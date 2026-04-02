"use client";

import { useEffect, useState } from "react";

type CodeBlockProps = {
  code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  }

  return (
    <div className="docs-code-block">
      <div className="docs-code-toolbar">
        <span className="docs-code-label">Code</span>
        <button
          className="kt-button kt-btn-sm kt-btn-ghost"
          onClick={handleCopy}
          type="button"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="docs-code">
        <code>{code}</code>
      </pre>
    </div>
  );
}
