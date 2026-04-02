import Link from "next/link";

import CodeBlock from "../_components/code-block";
import ThemePreviewScope from "../_components/theme-preview-scope";

const selectCode = `<select class="kt-select">
  <option>Choose a team</option>
  <option>Design</option>
  <option>Engineering</option>
  <option>Operations</option>
</select>`;

export default function SelectPage() {
  return (
    <div className="docs-main">
      <div className="docs-stack">
        <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/docs">Docs</Link>
          <span>/</span>
          <span>Select</span>
        </nav>

        <header className="docs-section-header">
          <p className="docs-kicker">Component</p>
          <h1 className="docs-title">Select</h1>
          <p className="docs-copy">
            Select fields share the same spacing, border, and focus behavior as the
            rest of the form controls.
          </p>
        </header>
      </div>

      <ThemePreviewScope>
        <select className="kt-select" defaultValue="placeholder">
          <option disabled value="placeholder">
            Choose a team
          </option>
          <option>Design</option>
          <option>Engineering</option>
          <option>Operations</option>
        </select>
      </ThemePreviewScope>

      <CodeBlock code={selectCode} />
    </div>
  );
}
