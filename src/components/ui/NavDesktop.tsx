"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";

type NavDesktopProps = {
  variant?: "header" | "footer";
};

export default function NavDesktop({ variant = "header" }: NavDesktopProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/#about", name: "about" },
    { href: "/services", name: "services" },
    { href: "/portfolio", name: "portfolio" },
    { href: "#contact", name: "contact" },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div
      className={`${variant === "header" ? "fixed left-1/2 top-0 z-30 -translate-x-1/2" : ""} flex h-20 items-center justify-center`}
    >
      <nav
        className={`flex h-11 items-center justify-center rounded-full bg-offwhite/40 px-5 text-lg tracking-widest backdrop-blur-md ${variant === "header" ? "bg-offwhite/40" : "bg-offwhite/20"}`}
      >
        {pathname !== "/" && (
          <span className="flex items-center">
            <Link
              href="/"
              className={`transition-all duration-300 ease-out hover:text-accent ${hoveredLink && hoveredLink !== "/" ? "blur-sm" : ""} ${variant === "header" ? "text-primary" : "text-white"}`}
              onMouseEnter={() => setHoveredLink("/")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => setHoveredLink(null)}
            >
              <Home size={20} />
            </Link>
            <span
              className={`mx-4 text-sm ${variant === "header" ? "text-primary" : "text-white"}`}
            >
              •
            </span>
          </span>
        )}

        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <span key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className={`transition-all duration-300 ease-out hover:text-accent ${isActive ? "font-medium !text-accent" : ""} ${hoveredLink && hoveredLink !== link.href ? "blur-sm" : ""} ${variant === "header" ? "text-primary" : "text-white"}`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span
                  className={`mx-4 text-sm ${variant === "header" ? "text-primary" : "text-white"}`}
                >
                  •
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
