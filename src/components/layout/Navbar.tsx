"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const currentPath = useMemo(() => pathname ?? "/", [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark/90 text-white shadow-sm backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between md:h-18">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90" onClick={() => setIsMobileOpen(false)}>
          <Image src="/Logo.png" alt="Kampzo Learn logo for online learning platform India" width={36} height={36} className="object-contain" />
          <span className="text-lg md:text-xl font-bold tracking-tight">
            Kampzo <span className="text-primary">Learn</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "bg-white/12 text-white" : "text-gray-300 hover:bg-white/8 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/courses"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark md:inline-flex"
          >
            Explore Courses
          </Link>

          <button
            className="md:hidden rounded-md p-2 text-white transition-colors hover:bg-white/10 hover:text-primary"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-white/10 bg-dark-soft transition-[max-height,opacity] duration-300 ${
          isMobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-shell max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "bg-white/14 text-white" : "text-gray-300 hover:bg-white/8 hover:text-white"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/courses"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              onClick={() => setIsMobileOpen(false)}
            >
              Explore Courses
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
