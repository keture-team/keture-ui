import type { ReactNode } from "react";
import Link from "next/link";

type DocsLayoutProps = {
  children: ReactNode;
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-app">
      <aside className="docs-sidebar">
        <div className="docs-stack">
          <p className="docs-kicker">Keture UI</p>
          <h1 className="docs-sidebar-title">Components</h1>
          <p className="docs-copy">
            Simple component docs with a shared sidebar and clean previews.
          </p>
        </div>

        <nav aria-label="Components" className="docs-nav">
          <Link href="/docs/button">Button</Link>
          <Link href="/docs/card">Card</Link>
          <Link href="/docs/input">Input</Link>
          <Link href="/docs/badge">Badge</Link>
          <Link href="/docs/drawer">Drawer</Link>
        </nav>
      </aside>

      <main className="docs-content">{children}</main>
    </div>
  );
}
