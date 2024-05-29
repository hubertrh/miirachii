"use client";

import Link from "next/link";
import { useState } from "react";

type NavDesktopProps = {
  navLinks: {
    href: string;
    name: string;
  }[];
  pathname: string;
};

export default function NavDesktop({ navLinks, pathname }: NavDesktopProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-center text-lg tracking-widest">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <span key={link.name} className="flex items-center">
            <Link
              href={link.href}
              className={`transition-all duration-300 ease-out hover:text-accent ${isActive ? "text-red-500" : ""} ${hoveredLink && hoveredLink !== link.href ? "blur-sm" : ""}`}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </Link>
            {index < navLinks.length - 1 && (
              <span className="mx-4 text-sm">•</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
