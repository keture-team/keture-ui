"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const drawerCode = `<button class="kt-button kt-btn-md kt-btn-primary" type="button">
  Open Drawer
</button>

<div class="kt-drawer kt-drawer-open">
  ...
</div>

<div class="kt-drawer-overlay kt-drawer-open"></div>`;

export default function DrawerPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("kt-drawer-active", isOpen);

    return () => {
      document.body.classList.remove("kt-drawer-active");
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="docs-main">
        <div className="docs-stack">
          <nav aria-label="Breadcrumb" className="docs-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/docs">Docs</Link>
            <span>/</span>
            <span>Drawer</span>
          </nav>

          <header className="docs-section-header">
            <p className="docs-kicker">Component</p>
            <h1 className="docs-title">Drawer</h1>
            <p className="docs-copy">
              The drawer slides in from the side and pairs with an overlay for focus
              and dismissal.
            </p>
          </header>
        </div>

        <section className="docs-section">
          <div className="docs-section-header">
            <h2>Preview</h2>
            <p className="docs-copy">
              Use the toggle button to open the drawer. Click the overlay or press
              Escape to close it.
            </p>
          </div>

          <div className="docs-preview">
            <div className="docs-row">
              <button
                className="kt-button kt-btn-md kt-btn-primary"
                onClick={() => setIsOpen(true)}
                type="button"
              >
                Open Drawer
              </button>
            </div>
          </div>

          <pre className="docs-code">
            <code>{drawerCode}</code>
          </pre>
        </section>
      </div>

      <div className={`kt-drawer${isOpen ? " kt-drawer-open" : ""}`}>
        <div className="docs-stack">
          <div className="docs-row docs-row-space-between">
            <div className="docs-stack">
              <p className="docs-kicker">Drawer Demo</p>
              <h2 className="docs-title-sm">Navigation</h2>
            </div>
            <button
              className="kt-button kt-btn-sm kt-btn-ghost"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>

          <nav className="docs-nav">
            <Link href="/docs/components/button" onClick={() => setIsOpen(false)}>
              Button
            </Link>
            <Link href="/docs/components/card" onClick={() => setIsOpen(false)}>
              Card
            </Link>
            <Link href="/docs/components/input" onClick={() => setIsOpen(false)}>
              Input
            </Link>
            <Link href="/docs/badge" onClick={() => setIsOpen(false)}>
              Badge
            </Link>
          </nav>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`kt-drawer-overlay${isOpen ? " kt-drawer-open" : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
