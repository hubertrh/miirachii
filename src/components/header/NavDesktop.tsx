"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type NavDesktopProps = {
  navLinks: {
    href: string;
    name: string;
  }[];
  pathname: string;
};

export default function NavDesktop({ navLinks, pathname }: NavDesktopProps) {
  const tooltipLinks = [
    { name: "about" },
    { name: "services" },
    { name: "portfolio" },
    { name: "contact" },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div className="col-span-3 flex items-center justify-center">
      <nav className="flex h-11 items-center justify-center rounded-full bg-offwhite/40 px-5 text-lg tracking-widest backdrop-blur-lg">
        {/* TODO: Replace tooltipLinks with navLinks when ready */}
        {/* {navLinks.map((link, index) => {
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
      })} */}
        {tooltipLinks.map((link, index) => {
          return (
            <span key={link.name} className="flex items-center">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p
                      key={link.name}
                      className={`select-none text-stone-500 transition-all duration-300 ease-out hover:text-accent ${hoveredLink && hoveredLink !== link.name ? "blur-sm" : ""}`}
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
                <span className="mx-4 text-sm text-primary">•</span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
