import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const textareaCode = `<textarea class="kt-textarea" placeholder="Add a note"></textarea>`;

export default function TextareaPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Textarea</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Textarea</h1>
          <p className="docs-copy">
            Multi-line inputs use the same field tokens as text inputs and selects.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <textarea
          className="kt-textarea"
          defaultValue=""
          placeholder="Add a note"
        />
      </ThemePreviewScope>

      <CodeBlock code={textareaCode} />
    </div>
  );
}
