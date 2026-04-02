import Link from "next/link";
import CodeBlock from "../../_components/code-block";
import ThemePreviewScope from "../../_components/theme-preview-scope";

const cardCode = `<article class="kt-card">
  <h3>Simple card</h3>
  <p>Cards group content with a clean surface and soft border.</p>
</article>`;

export default function CardPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <Link href="/docs/components">Components</Link>
          <span>/</span>
          <span>Card</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Card</h1>
          <p className="docs-copy">
            Cards provide a clean surface for grouped content and actions.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <article className="kt-card">
          <h3>Simple card</h3>
          <p>Cards group content with a clean surface and soft border.</p>
        </article>
      </ThemePreviewScope>

      <CodeBlock code={cardCode} />
    </div>
  );
}
