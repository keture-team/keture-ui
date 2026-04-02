import ComponentPreviewCard from "./_components/component-preview-card";

export default function ComponentsPage() {
  return (
    <div className="docs-main">
      <header className="docs-section-header">
        <p className="docs-kicker">Components</p>
        <h1 className="docs-title">Component reference</h1>
        <p className="docs-copy">
          Preview each component here, or open the dedicated page for code samples
          and usage details.
        </p>
      </header>

      <section className="docs-section">
        <div className="docs-grid docs-component-grid">
          <ComponentPreviewCard
            description="Variants, sizes, and basic usage for the kt-button API."
            href="/docs/components/button"
            title="Button"
          >
            <div className="docs-row">
              <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                Primary
              </button>
              <button className="kt-button kt-btn-md kt-btn-secondary" type="button">
                Secondary
              </button>
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard
            description="Simple content containers with surface, border, and spacing."
            href="/docs/components/card"
            title="Card"
          >
            <article className="kt-card">
              <h3>Simple card</h3>
              <p>Cards inherit surface and border tokens from the active theme.</p>
            </article>
          </ComponentPreviewCard>

          <ComponentPreviewCard
            description="Text field styles with shared focus and spacing tokens."
            href="/docs/components/input"
            title="Input"
          >
            <input className="kt-input" placeholder="Enter your email" type="text" />
          </ComponentPreviewCard>
        </div>
      </section>
    </div>
  );
}
