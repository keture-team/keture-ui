import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const alertCode = `<div class="kt-alert kt-alert-success">
  <p class="kt-alert-title">Saved</p>
  <p>Your changes were saved successfully.</p>
</div>`;

export default function AlertPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Alert</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Alert</h1>
          <p className="docs-copy">
            Alerts provide inline emphasis for guidance, status, and error states.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <div className="docs-stack">
          <div className="kt-alert kt-alert-primary">
            <p className="kt-alert-title">Heads up</p>
            <p>Review the deployment checklist before publishing.</p>
          </div>

          <div className="kt-alert kt-alert-success">
            <p className="kt-alert-title">Saved</p>
            <p>Your changes were saved successfully.</p>
          </div>

          <div className="kt-alert kt-alert-danger">
            <p className="kt-alert-title">Error</p>
            <p>The connection dropped before the request completed.</p>
          </div>
        </div>
      </ThemePreviewScope>

      <CodeBlock code={alertCode} />
    </div>
  );
}
