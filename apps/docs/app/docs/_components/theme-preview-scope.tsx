"use client";

import { useId, useState, type ReactNode } from "react";

type ThemePreviewScopeProps = {
  children: ReactNode;
};

export default function ThemePreviewScope({ children }: ThemePreviewScopeProps) {
  const [theme, setTheme] = useState("minimal");
  const selectId = useId();
  const themeClassName = theme === "space" ? "kt-theme-space" : "";

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
          <option value="minimal">Minimal</option>
          <option value="space">Space</option>
        </select>
      </div>

      <div className={`docs-themed-scope ${themeClassName}`.trim()}>{children}</div>
    </div>
  );
}
