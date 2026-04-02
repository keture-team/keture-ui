import Link from "next/link";

import { themes } from "./theme-data";

export default function ThemesPage() {
  return (
    <main className="landing-shell">
      <div className="docs-main">
        <div className="docs-stack">
          <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Themes</span>
          </nav>

          <header className="docs-section-header">
            <p className="docs-kicker">Design Systems</p>
            <h1 className="docs-title">Themes</h1>
            <p className="docs-copy">
              Browse the available design identities built on the same Keture UI
              component system.
            </p>
          </header>
        </div>

        <section className="docs-section">
          <div className="theme-overview-grid">
            {themes.map(theme => (
              <article className="theme-card" key={theme.slug}>
                <div className="docs-section-header">
                  <h2 className="docs-link-card-title">{theme.name}</h2>
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

                <Link className="kt-button kt-btn-md kt-btn-outline" href={theme.href}>
                  View theme
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
