import Link from "next/link";
import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const badgeCode = `<span class="kt-badge kt-badge-primary">Primary</span>
<span class="kt-badge kt-badge-secondary">Secondary</span>
<span class="kt-badge kt-badge-success">Success</span>
<span class="kt-badge kt-badge-danger">Danger</span>`;

export default function BadgePage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Badge</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Badge</h1>
          <p className="docs-copy">
            Badges provide compact semantic labels for status, categories, and small
            bits of metadata.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <div className="docs-row">
          <span className="kt-badge kt-badge-primary">Primary</span>
          <span className="kt-badge kt-badge-secondary">Secondary</span>
          <span className="kt-badge kt-badge-success">Success</span>
          <span className="kt-badge kt-badge-danger">Danger</span>
        </div>
      </ThemePreviewScope>

      <CodeBlock code={badgeCode} />
    </div>
  );
}
