import Link from "next/link";

type NavDesktopProps = {
  navLinks: {
    href: string;
    name: string;
  }[];
  pathname: string;
};

export default function NavDesktop({ navLinks, pathname }: NavDesktopProps) {
  return (
    <nav className="flex items-center justify-center text-lg tracking-widest">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <span key={link.name} className="flex items-center">
            <Link
              href={link.href}
              className={`hover:underline hover:underline-offset-4 ${isActive ? "text-red-500" : ""}`}
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
