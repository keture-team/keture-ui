import Link from "next/link";
import CodeBlock from "../docs/_components/code-block";

const npmInstallCode = `npm install @keture/ui @keture/theme-minimal`;

const cdnCode = `<link rel="stylesheet" href="https://unpkg.com/@keture/theme-minimal/theme.css" />
<link rel="stylesheet" href="https://unpkg.com/@keture/ui/dist/keture.css" />`;

const usageCode = `<button class="kt-button kt-btn-md kt-btn-primary">Get started</button>`;

const themeCode = `<div class="kt-theme-space">
  <button class="kt-button kt-btn-md kt-btn-primary">Space theme button</button>
</div>`;

const alternateThemeCode = `<div class="kt-theme-slate">
  <button class="kt-button kt-btn-md kt-btn-primary">Slate theme button</button>
</div>`;

export default function GetStartedPage() {
  return (
    <main className="landing-shell">
      <div className="docs-main">
        <div className="docs-stack">
          <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Get Started</span>
          </nav>

          <header className="docs-section-header">
            <p className="docs-kicker">Guide</p>
            <h1 className="docs-title">Get Started</h1>
            <p className="docs-copy">
              Install Keture UI, load a theme, and start using the core component
              classes.
            </p>
          </header>
        </div>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Installation</h2>
          </div>

          <div className="docs-stack">
            <div className="docs-stack">
              <p className="docs-kicker">NPM</p>
              <CodeBlock code={npmInstallCode} />
            </div>

            <div className="docs-stack">
              <p className="docs-kicker">CDN</p>
              <CodeBlock code={cdnCode} />
            </div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Usage</h2>
            <p className="docs-copy">Start with the core classes and a loaded theme.</p>
          </div>

          <div className="docs-preview">
            <div className="docs-row">
              <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                Get started
              </button>
            </div>
          </div>

          <CodeBlock code={usageCode} />
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Theme usage</h2>
            <p className="docs-copy">
              Apply <code>kt-theme-space</code> to a wrapper to switch the active
              theme for nested components.
            </p>
          </div>

          <div className="docs-preview">
            <div className="docs-stack">
              <div className="docs-theme-space kt-theme-space">
                <div className="docs-row">
                  <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                    Space theme button
                  </button>
                </div>
              </div>

              <div className="kt-theme-slate theme-preview-scope">
                <div className="docs-row">
                  <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                    Slate theme button
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock code={themeCode} />
          <CodeBlock code={alternateThemeCode} />
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Notes</h2>
          </div>

          <div className="docs-preview">
            <div className="docs-stack">
              <p className="docs-copy">
                Theme CSS must be loaded before the core CSS bundle.
              </p>
              <p className="docs-copy">
                Components use CSS variables, so themes work by defining token
                values rather than replacing component styles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
