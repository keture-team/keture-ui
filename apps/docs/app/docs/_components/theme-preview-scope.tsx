"use client";

import { useId, useState, type ReactNode } from "react";

type ThemePreviewScopeProps = {
  children: ReactNode;
};

export default function ThemePreviewScope({ children }: ThemePreviewScopeProps) {
  const [theme, setTheme] = useState("minimal");
  const selectId = useId();

  return (
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
          <option value="keture">Keture</option>
          <option value="minimal">Minimal</option>
          <option value="slate">Slate</option>
          <option value="space">Space</option>
        </select>
      </div>

      <div
        className={`docs-theme-preview ${
          theme === "space"
            ? "kt-theme-space"
            : theme === "slate"
              ? "kt-theme-slate"
              : theme === "keture"
                ? "kt-theme-keture"
                : ""
        }`.trim()}
      >
        {children}
      </div>
    </div>
  );
}
