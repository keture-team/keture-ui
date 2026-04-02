import Link from "next/link";

const inputCode = `<input class="kt-input" type="text" placeholder="Enter your email" />`;

export default function InputPage() {
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
          <span>Input</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Input</h1>
          <p className="docs-copy">
            Inputs use shared spacing, typography, and focus tokens from the active
            theme.
          </p>
        </header>
      </div>

      <section className="docs-section">
        <div className="docs-preview">
          <div className="docs-row">
            <input
              className="kt-input"
              type="text"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <pre className="docs-code">
          <code>{inputCode}</code>
        </pre>
      </section>
    </div>
  );
}
