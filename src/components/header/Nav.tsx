"use client";

import { usePathname } from "next/navigation";
import NavDesktop from "./NavDesktop";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", name: "about" },
    { href: "/services", name: "services" },
    { href: "/portfolio", name: "portfolio" },
    { href: "/contact", name: "contact" },
  ];

  return <NavDesktop navLinks={navLinks} pathname={pathname} />;
}
