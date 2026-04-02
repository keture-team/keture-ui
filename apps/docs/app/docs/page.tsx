import Link from "next/link";

const componentLinks = [
  {
    href: "/docs/components/button",
    title: "Button",
    description: "Variants, sizes, and basic usage for the kt-button API."
  },
  {
    href: "/docs/components/card",
    title: "Card",
    description: "Simple content containers with surface, border, and spacing."
  },
  {
    href: "/docs/components/input",
    title: "Input",
    description: "Text field styles with shared focus and spacing tokens."
  },
  {
    href: "/docs/badge",
    title: "Badge",
    description: "Compact semantic labels for status and small metadata."
  },
  {
    href: "/docs/drawer",
    title: "Drawer",
    description: "Slide-in navigation surface with overlay and open state."
  }
];

export default function DocsPage() {
  return (
    <div className="docs-main">
      <header className="docs-section-header">
        <p className="docs-kicker">Docs</p>
        <h1 className="docs-title">Component reference</h1>
        <p className="docs-copy">
          Browse individual component pages. This section is structured to grow as
          new components are added.
        </p>
      </header>

      <section className="docs-section">
        <div className="docs-grid">
          {componentLinks.map(component => (
            <Link className="docs-link-card" href={component.href} key={component.href}>
              <div className="docs-link-card-content">
                <h2 className="docs-link-card-title">{component.title}</h2>
                <p className="docs-link-card-copy">{component.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
