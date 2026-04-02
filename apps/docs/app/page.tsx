import Link from "next/link";

import { themes } from "./themes/theme-data";

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-section landing-hero">
        <div className="landing-copy">
          <p className="docs-kicker">Design Systems</p>
          <h1 className="landing-title">Keture UI</h1>
          <p className="landing-subtitle">
            One system. Multiple design identities.
          </p>
          <div className="landing-actions">
            <Link className="kt-button kt-btn-md kt-btn-primary" href="/get-started">
              Get Started
            </Link>
            <Link className="kt-button kt-btn-md kt-btn-outline" href="/docs">
              View Components
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="docs-section-header">
          <p className="docs-kicker">Design Systems Showcase</p>
          <h2>Minimal and Space share the same component core</h2>
          <p className="docs-copy">
            Themes define identity through tokens while the component layer stays
            stable.
          </p>
        </div>

        <div className="theme-overview-grid">
          {themes.map(theme => (
            <article className="theme-card" key={theme.slug}>
              <div className="docs-section-header">
                <h3 className="docs-link-card-title">{theme.name}</h3>
                <p className="docs-copy">{theme.overviewDescription}</p>
              </div>

              <div className={`theme-preview-scope ${theme.wrapperClassName ?? ""}`.trim()}>
                <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                  Primary button
                </button>
                <article className="kt-card">
                  <h3>{theme.name} card</h3>
                  <p>{theme.previewDescription}</p>
                </article>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="docs-section-header">
          <p className="docs-kicker">System Philosophy</p>
          <h2>Same components, different themes</h2>
          <p className="docs-copy">
            Keture UI is built so teams can keep one component API and layer on
            multiple design identities through CSS variables.
          </p>
        </div>

        <div className="landing-grid">
          <div className="landing-panel docs-stack">
            <h3>Consistent component layer</h3>
            <p className="docs-copy">
              Buttons, cards, inputs, badges, and drawers keep the same classes in
              every theme.
            </p>
          </div>

          <div className="landing-panel docs-stack">
            <h3>Theme-driven presentation</h3>
            <p className="docs-copy">
              Themes redefine color, spacing, radius, and shadow tokens without
              rewriting component CSS.
            </p>
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
            <button className="kt-button kt-btn-md kt-btn-primary" type="button">
              Primary
            </button>
          </div>

          <div className="landing-panel docs-stack">
            <h3>Card</h3>
            <article className="kt-card">
              <h3>Example card</h3>
              <p>Reusable surfaces for grouped content and actions.</p>
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

      <section className="landing-section">
        <div className="landing-panel docs-stack">
          <div className="docs-section-header">
            <p className="docs-kicker">Explore</p>
            <h2>Choose a system, then browse the components</h2>
          </div>

          <div className="landing-actions">
            <Link className="kt-button kt-btn-md kt-btn-primary" href="/themes">
              Explore Themes
            </Link>
            <Link className="kt-button kt-btn-md kt-btn-outline" href="/docs">
              View Components
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
