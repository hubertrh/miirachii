"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type NavDesktopProps = {
  variant?: "header" | "footer";
};

export default function NavDesktop({ variant = "header" }: NavDesktopProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/#about", name: "about" },
    { href: "/#services", name: "services" },
    { href: "/portfolio", name: "portfolio" },
    { href: "#contact", name: "contact" },
  ];

  const tooltipLinks: { name: string }[] = [
    // TODO: Cleanup when ready
    // { name: "about" },
    // { name: "services" },
    // { name: "portfolio" },
    // { name: "contact" },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div
      className={`${variant === "header" ? "fixed left-1/2 top-0 z-30 -translate-x-1/2" : ""} flex h-20 items-center justify-center`}
    >
      <nav
        className={`flex h-11 items-center justify-center rounded-full bg-offwhite/40 px-5 text-lg tracking-widest backdrop-blur-md ${variant === "header" ? "bg-offwhite/40" : "bg-offwhite/20"}`}
      >
        {/* TODO: Replace tooltipLinks with navLinks when ready */}
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <span key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className={`transition-all duration-300 ease-out hover:text-accent ${isActive ? "font-medium !text-accent" : ""} ${hoveredLink && hoveredLink !== link.href ? "blur-sm" : ""} ${variant === "header" ? "text-primary" : "text-white"}`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
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
        {tooltipLinks.length > 0 && navLinks.length > 0 && (
          <span
            className={`mx-4 text-sm ${variant === "header" ? "text-primary" : "text-white"}`}
          >
            •
          </span>
        )}
        {tooltipLinks.map((link, index) => {
          return (
            <span
              key={link.name}
              className="flex items-center transition-all duration-300 ease-out"
              tabIndex={0}
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p
                      key={link.name}
                      className={`select-none transition-all duration-300 ease-out hover:text-accent ${hoveredLink && hoveredLink !== link.name ? "blur-sm" : ""} ${variant === "header" ? "text-primary" : "text-white"}`}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.name}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-full border-accent bg-background text-accent">
                    Coming soon!
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {index < tooltipLinks.length - 1 && (
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
