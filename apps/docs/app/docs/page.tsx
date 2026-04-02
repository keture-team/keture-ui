import Link from "next/link";

const componentLinks = [
  {
    href: "/docs/button",
    title: "Button",
    description: "Variants, sizes, and basic usage for the kt-button API."
  },
  {
    href: "/docs/card",
    title: "Card",
    description: "Simple content containers with surface, border, and spacing."
  },
  {
    href: "/docs/input",
    title: "Input",
    description: "Text field styles with shared focus and spacing tokens."
  },
  {
    href: "/docs/select",
    title: "Select",
    description: "Native select styling with token-based field states."
  },
  {
    href: "/docs/textarea",
    title: "Textarea",
    description: "Multi-line text fields with the same core input surface."
  },
  {
    href: "/docs/checkbox",
    title: "Checkbox",
    description: "Basic choice inputs for multi-select forms."
  },
  {
    href: "/docs/radio",
    title: "Radio",
    description: "Single-select input groups with the same theme tokens."
  },
  {
    href: "/docs/switch",
    title: "Switch",
    description: "Compact on/off toggles for settings and preferences."
  },
  {
    href: "/docs/badge",
    title: "Badge",
    description: "Compact semantic labels for status and small metadata."
  },
  {
    href: "/docs/alert",
    title: "Alert",
    description: "Inline feedback blocks for status, guidance, and errors."
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
        <h1 className="docs-title">Components overview</h1>
        <p className="docs-copy">
          Browse the Keture UI component library and open each page for preview and
          usage details.
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
