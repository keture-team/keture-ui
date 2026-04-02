"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";

type ComponentPreviewCardProps = {
  children: ReactNode;
  description: string;
  href: string;
  title: string;
};

export default function ComponentPreviewCard({
  children,
  description,
  href,
  title
}: ComponentPreviewCardProps) {
  const [theme, setTheme] = useState("minimal");
  const selectId = useId();
  const themeClassName = theme === "space" ? "kt-theme-space" : "";

  return (
    <article className="docs-preview-card">
      <div className="docs-section-header">
        <div className="docs-row docs-row-space-between">
          <h2 className="docs-link-card-title">{title}</h2>
          <Link className="docs-inline-link" href={href}>
            View page
          </Link>
        </div>
        <p className="docs-link-card-copy">{description}</p>
      </div>

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

      <div className={`docs-theme-preview ${themeClassName}`.trim()}>{children}</div>
    </article>
  );
}
