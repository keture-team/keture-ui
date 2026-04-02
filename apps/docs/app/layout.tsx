import "../../../packages/theme-minimal/theme.css";
import "../../../packages/theme-keture/theme.css";
import "../../../packages/theme-slate/theme.css";
import "../../../packages/theme-space/theme.css";
import "../../../packages/core/dist/keture.css";
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Manrope } from "next/font/google";

import PrimaryNav from "./_components/primary-nav";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Keture UI",
  description: "One system. Multiple design identities."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <header className="site-header">
          <div className="site-nav-shell">
            <Link className="site-brand" href="/">
              Keture UI
            </Link>

            <PrimaryNav />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
