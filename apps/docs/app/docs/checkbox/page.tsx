import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const checkboxCode = `<label class="kt-checkbox">
  <input class="kt-checkbox__input" type="checkbox" checked />
  <span class="kt-checkbox__label">Receive updates</span>
</label>`;

export default function CheckboxPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Checkbox</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Checkbox</h1>
          <p className="docs-copy">
            Checkbox controls keep the native interaction model while inheriting the
            active theme accent color.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <div className="docs-stack">
          <label className="kt-checkbox">
            <input className="kt-checkbox__input" defaultChecked type="checkbox" />
            <span className="kt-checkbox__label">Receive updates</span>
          </label>

          <label className="kt-checkbox">
            <input className="kt-checkbox__input" type="checkbox" />
            <span className="kt-checkbox__label">Enable weekly digest</span>
          </label>
        </div>
      </ThemePreviewScope>

      <CodeBlock code={checkboxCode} />
    </div>
  );
}
