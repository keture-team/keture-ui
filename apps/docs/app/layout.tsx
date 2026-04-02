import "../../../packages/theme-minimal/theme.css";
import "../../../packages/theme-space/theme.css";
import "../../../packages/core/dist/keture.css";
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keture UI",
  description: "A scalable UI system with multiple design themes."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-nav-shell">
            <Link className="site-brand" href="/">
              Keture UI
            </Link>

            <nav aria-label="Primary" className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/docs">Docs</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
