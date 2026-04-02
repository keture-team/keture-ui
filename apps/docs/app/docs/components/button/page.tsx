import Link from "next/link";

const variantCode = `<button class="kt-button kt-btn-md kt-btn-primary">Primary</button>
<button class="kt-button kt-btn-md kt-btn-secondary">Secondary</button>
<button class="kt-button kt-btn-md kt-btn-outline">Outline</button>
<button class="kt-button kt-btn-md kt-btn-ghost">Ghost</button>`;

const sizeCode = `<button class="kt-button kt-btn-sm kt-btn-primary">Small</button>
<button class="kt-button kt-btn-md kt-btn-primary">Medium</button>
<button class="kt-button kt-btn-lg kt-btn-primary">Large</button>`;

export default function ButtonPage() {
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
          <span>Button</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Button</h1>
          <p className="docs-copy">
            Buttons support multiple variants and sizes while sharing the same
            base class.
          </p>
        </header>
      </div>

      <section className="docs-section">
        <div className="docs-section-header">
          <h2>Variants</h2>
          <p className="docs-copy">
            Combine <code>kt-button</code> with a variant class to switch tone.
          </p>
        </div>

        <div className="docs-preview">
          <div className="docs-row">
            <button className="kt-button kt-btn-md kt-btn-primary" type="button">
              Primary
            </button>
            <button className="kt-button kt-btn-md kt-btn-secondary" type="button">
              Secondary
            </button>
            <button className="kt-button kt-btn-md kt-btn-outline" type="button">
              Outline
            </button>
            <button className="kt-button kt-btn-md kt-btn-ghost" type="button">
              Ghost
            </button>
          </div>
        </div>

        <pre className="docs-code">
          <code>{variantCode}</code>
        </pre>
      </section>

      <section className="docs-section">
        <div className="docs-section-header">
          <h2>Sizes</h2>
          <p className="docs-copy">
            Size modifiers can be layered onto any button variant.
          </p>
        </div>

        <div className="docs-preview">
          <div className="docs-row">
            <button className="kt-button kt-btn-sm kt-btn-primary" type="button">
              Small
            </button>
            <button className="kt-button kt-btn-md kt-btn-primary" type="button">
              Medium
            </button>
            <button className="kt-button kt-btn-lg kt-btn-primary" type="button">
              Large
            </button>
          </div>
        </div>

        <pre className="docs-code">
          <code>{sizeCode}</code>
        </pre>
      </section>
    </div>
  );
}
