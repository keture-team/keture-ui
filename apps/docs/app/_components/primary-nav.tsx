"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/get-started", label: "Get Started" },
  { href: "/themes", label: "Themes" },
  { href: "/docs", label: "Docs" }
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function PrimaryNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav aria-label="Primary" className="site-nav">
      {navItems.map(item => {
        const active = isActive(pathname, item.href);

        return (
          <Link
            className={`site-nav-link ${active ? "site-nav-link--active" : "site-nav-link--inactive"}`}
            href={item.href}
            key={item.href}
          >
            {active ? <span aria-hidden="true" className="site-nav-link-active-blur" /> : null}
            <span className="site-nav-link-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
