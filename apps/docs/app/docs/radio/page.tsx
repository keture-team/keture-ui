import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const radioCode = `<label class="kt-radio">
  <input class="kt-radio__input" type="radio" name="plan" checked />
  <span class="kt-radio__label">Starter</span>
</label>`;

export default function RadioPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Radio</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Radio</h1>
          <p className="docs-copy">
            Radio groups share the same tone as checkboxes while supporting single
            selection flows.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <div className="docs-stack">
          <label className="kt-radio">
            <input
              className="kt-radio__input"
              defaultChecked
              name="plan"
              type="radio"
            />
            <span className="kt-radio__label">Starter</span>
          </label>

          <label className="kt-radio">
            <input className="kt-radio__input" name="plan" type="radio" />
            <span className="kt-radio__label">Pro</span>
          </label>
        </div>
      </ThemePreviewScope>

      <CodeBlock code={radioCode} />
    </div>
  );
}
