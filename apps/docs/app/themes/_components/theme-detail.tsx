import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { getTheme, type ThemeDefinition } from "../theme-data";

type ThemeDetailProps = {
  slug: ThemeDefinition["slug"];
};

export default function ThemeDetail({ slug }: ThemeDetailProps) {
  const theme = getTheme(slug);

  if (!theme) {
    notFound();
  }

  return (
    <main className="landing-shell">
      <div className="docs-main">
        <div className="docs-stack">
          <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/themes">Themes</Link>
            <span>/</span>
            <span>{theme.name}</span>
          </nav>

          <header className="docs-section-header">
            <p className="docs-kicker">Theme</p>
            <h1 className="docs-title">{theme.name} Theme</h1>
            {theme.detailDescription.map(paragraph => (
              <p className="docs-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </header>
        </div>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Color Palette</h2>
          </div>

          <div className="theme-token-grid">
            {theme.palette.map(color => (
              <div className="theme-token-card" key={color.token}>
                <div
                  className="theme-swatch-chip"
                  style={{ backgroundColor: color.value }}
                />
                <div className="docs-stack">
                  <p className="docs-link-card-title">{color.label}</p>
                  <p className="theme-token-label">{color.token}</p>
                  <p className="theme-token-value">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Typography</h2>
          </div>

          <div className="theme-token-grid">
            <div className="theme-token-card">
              <p className="docs-link-card-title">Font family</p>
              <p className="theme-token-label">--kt-font-family-base</p>
              <p className="theme-token-value">{theme.typography.family}</p>
            </div>

            <div className="theme-token-card">
              <p className="docs-link-card-title">Font sizes</p>
              <div className="theme-scale-list">
                {theme.typography.sizes.map(size => (
                  <div className="theme-scale-item" key={size.token}>
                    <span className="theme-token-label">{size.token}</span>
                    <span className="theme-token-value">{size.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Spacing & Radius</h2>
          </div>

          <div className="theme-token-grid">
            <div className="theme-token-card">
              <p className="docs-link-card-title">Spacing scale</p>
              <div className="theme-scale-list">
                {theme.spacing.map(space => (
                  <div className="theme-scale-item" key={space.token}>
                    <span className="theme-token-label">{space.token}</span>
                    <span className="theme-token-value">{space.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-token-card">
              <p className="docs-link-card-title">Radius values</p>
              <div className="theme-scale-list">
                {theme.radius.map(radius => (
                  <div className="theme-scale-item" key={radius.token}>
                    <span className="theme-token-label">{radius.token}</span>
                    <span className="theme-token-value">{radius.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Shadow & Effects</h2>
          </div>

          <div className="theme-shadow-grid">
            {theme.shadows.map(shadow => (
              <div className="theme-shadow-card" key={shadow.token}>
                <div
                  className="theme-shadow-sample"
                  style={{
                    backgroundColor: theme.surfaceColor,
                    boxShadow: shadow.value
                  }}
                />
                <p className="theme-token-label">{shadow.token}</p>
                <p className="theme-token-value">{shadow.value}</p>
              </div>
            ))}

            {theme.glow ? (
              <div className="theme-shadow-card">
                <div
                  className="theme-glow-sample"
                  style={
                    {
                      "--theme-glow-color": theme.glow,
                      "--theme-surface-color": theme.surfaceColor
                    } as CSSProperties
                  }
                />
                <p className="theme-token-label">Glow</p>
                <p className="theme-token-value">{theme.glow}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Live Preview</h2>
          </div>

          <div className={`theme-preview-scope ${theme.wrapperClassName ?? ""}`.trim()}>
            <div className="docs-row">
              <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                Primary button
              </button>
              <button className="kt-button kt-btn-md kt-btn-outline" type="button">
                Secondary action
              </button>
            </div>

            <article className="kt-card">
              <h3>{theme.name} card</h3>
              <p>{theme.previewDescription}</p>
              <input className="kt-input" placeholder="name@example.com" type="text" />
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
