"use client";

import { useState } from "react";
import Image from "next/image";
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
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden && !mobileOpen ? "-translate-y-[calc(100%+20px)]" : "translate-y-0"
        } ${scrolled ? "pt-3 px-4 md:px-8" : "pt-4 px-4 md:px-10"}`}
      >
        <header
          className={`max-w-[1200px] mx-auto rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-gradient-to-r from-white/95 via-signal-tint/30 to-white/95 backdrop-blur-[16px] border-canvas-border shadow-[0_4px_24px_rgba(29,92,191,0.08)]"
              : "bg-gradient-to-r from-white/80 via-signal-tint/20 to-white/80 backdrop-blur-[8px] border-signal-wash/60 shadow-[0_2px_16px_rgba(29,92,191,0.06)]"
          }`}
        >
          <nav className="flex items-center justify-between h-14 md:h-[60px] px-5 md:px-7">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              data-cursor="hover"
              data-logo
            >
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={36}
                height={30}
                className="h-7 w-auto"
                priority
              />
              <span className="text-ink font-heading font-bold text-lg tracking-tight">
                {SITE_NAME}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.disabled ? "#" : link.href}
                    className={`relative px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                      link.disabled
                        ? "text-ink-400 pointer-events-none"
                        : isActive
                        ? "text-signal bg-signal-tint"
                        : "text-ink-200 hover:text-ink hover:bg-canvas-alt"
                    }`}
                    data-cursor="hover"
                    aria-disabled={link.disabled}
                    tabIndex={link.disabled ? -1 : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side: CTA */}
            <div className="hidden lg:flex items-center">
              <Button href="/contact" className="!px-5 !py-2 !text-[14px] !rounded-full">
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-cursor="hover"
            >
              <span
                className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </button>
          </nav>
        </header>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
