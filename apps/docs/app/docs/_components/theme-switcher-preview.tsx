"use client";

import { useId, useState } from "react";

const options = [
  { label: "Minimal", value: "minimal" },
  { label: "Space", value: "space" }
];

export default function ThemeSwitcherPreview() {
  const [theme, setTheme] = useState("minimal");
  const selectId = useId();
  const themeClassName = theme === "space" ? "kt-theme-space" : "";

  return (
    <section className="docs-section">
      <div className="docs-section-header">
        <p className="docs-kicker">Theme Switcher</p>
        <h2>Live theme preview</h2>
        <p className="docs-copy">
          Switch themes from the dropdown. The preview updates by applying a theme
          class to the wrapper element.
        </p>
      </div>

      <div className="docs-stack">
        <div className="docs-select-row">
          <label className="docs-copy" htmlFor={selectId}>
            Theme
          </label>
          <select
            className="docs-select"
            id={selectId}
            onChange={event => setTheme(event.target.value)}
            value={theme}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={`docs-theme-preview ${themeClassName}`.trim()}>
          <div className="docs-grid">
            <div className="docs-stack">
              <h3 className="docs-title-sm">Button</h3>
              <div className="docs-row">
                <button className="kt-button kt-btn-md kt-btn-primary" type="button">
                  Primary Action
                </button>
              </div>
            </div>

            <div className="docs-stack">
              <h3 className="docs-title-sm">Card</h3>
              <article className="kt-card">
                <h3>Example card</h3>
                <p>The same component picks up a different look from theme tokens.</p>
              </article>
            </div>

            <div className="docs-stack">
              <h3 className="docs-title-sm">Input</h3>
              <input className="kt-input" placeholder="Enter your email" type="text" />
            </div>

            <div className="docs-stack">
              <h3 className="docs-title-sm">Badge</h3>
              <div className="docs-row">
                <span className="kt-badge kt-badge-primary">Primary</span>
                <span className="kt-badge kt-badge-success">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
