"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const { scrolled, hidden } = useScrollDirection(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-canvas/90 backdrop-blur-[12px] border-b border-canvas-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16 xl:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-ink font-heading font-bold text-xl tracking-tight"
            data-cursor="hover"
            data-logo
          >
            {SITE_NAME}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.disabled ? "#" : link.href}
                  className={`relative text-[15px] font-medium transition-colors duration-200 ${
                    link.disabled
                      ? "text-ink-400 pointer-events-none"
                      : isActive
                      ? "text-signal"
                      : "text-ink-100 hover:text-signal"
                  }`}
                  data-cursor="hover"
                  aria-disabled={link.disabled}
                  tabIndex={link.disabled ? -1 : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-signal" />
                  )}
                </Link>
              );
            })}
            <Button href="/contact" arrow>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-cursor="hover"
          >
            <span
              className={`block w-6 h-[2px] bg-ink transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-ink transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
