import Link from "next/link";

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-section landing-hero">
        <div className="landing-copy">
          <p className="docs-kicker">Scalable UI System</p>
          <h1 className="landing-title">Keture UI</h1>
          <p className="landing-subtitle">
            A scalable UI system with multiple design themes.
          </p>
          <div className="landing-actions">
            <Link className="kt-button kt-btn-md kt-btn-primary" href="/docs">
              Get Started
            </Link>
            <Link className="kt-button kt-btn-md kt-btn-outline" href="/docs/components">
              View Components
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="docs-section-header">
          <p className="docs-kicker">Theme Showcase</p>
          <h2>One component, two different moods</h2>
          <p className="docs-copy">
            The same Keture UI building blocks can shift between themes through CSS
            variables alone.
          </p>
        </div>

        <div className="landing-grid">
          <div className="landing-panel docs-stack">
            <p className="docs-kicker">Minimal</p>
            <button className="kt-button kt-btn-md kt-btn-primary" type="button">
              Primary Action
            </button>
            <article className="kt-card">
              <h3>Minimal card</h3>
              <p>Light surfaces and soft borders keep the default theme calm.</p>
            </article>
          </div>

          <div className="landing-panel docs-stack kt-theme-space landing-space">
            <p className="docs-kicker">Space</p>
            <button className="kt-button kt-btn-md kt-btn-primary" type="button">
              Primary Action
            </button>
            <article className="kt-card">
              <h3>Space card</h3>
              <p>Dark surfaces and neon accents create a more premium visual tone.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="docs-section-header">
          <p className="docs-kicker">Components Preview</p>
          <h2>Core building blocks</h2>
        </div>

        <div className="landing-grid landing-grid-compact">
          <div className="landing-panel docs-stack">
            <h3>Button</h3>
            <div className="docs-row">
              <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                Click me
              </button>
            </div>
          </div>

          <div className="landing-panel docs-stack">
            <h3>Card</h3>
            <article className="kt-card">
              <h3>Example card</h3>
              <p>Reusable content containers with a consistent surface style.</p>
            </article>
          </div>

          <div className="landing-panel docs-stack">
            <h3>Input</h3>
            <input className="kt-input" type="text" placeholder="Your email" />
          </div>

          <div className="landing-panel docs-stack">
            <h3>Badge</h3>
            <div className="docs-row">
              <span className="kt-badge kt-badge-primary">Primary</span>
              <span className="kt-badge kt-badge-success">Success</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
