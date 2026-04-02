import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const switchCode = `<label class="kt-switch">
  <input class="kt-switch__input" type="checkbox" checked />
  <span class="kt-switch__label">Enable alerts</span>
</label>`;

export default function SwitchPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Switch</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Switch</h1>
          <p className="docs-copy">
            Switches provide a more compact visual toggle for settings and small
            binary actions.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <div className="docs-stack">
          <label className="kt-switch">
            <input className="kt-switch__input" defaultChecked type="checkbox" />
            <span className="kt-switch__label">Enable alerts</span>
          </label>

          <label className="kt-switch">
            <input className="kt-switch__input" type="checkbox" />
            <span className="kt-switch__label">Compact mode</span>
          </label>
        </div>
      </ThemePreviewScope>

      <CodeBlock code={switchCode} />
    </div>
  );
}
