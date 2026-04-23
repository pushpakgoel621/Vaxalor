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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-3 px-4 md:px-8" : "pt-4 px-4 md:px-10"
          }`}
      >
        <div className="max-w-[1200px] mx-auto relative rounded-full p-[3px] overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          {/* Animated Gradient Border */}
          <div className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,var(--color-signal)_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-700" />

          <header
            className={`relative w-full h-full rounded-full transition-all duration-500 ${scrolled
              ? "bg-white/98 backdrop-blur-[20px]"
              : "bg-white/95 backdrop-blur-[16px]"
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
                      className={`relative px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${link.disabled
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
                <div className="relative rounded-full p-[1.5px] overflow-hidden group/btn shrink-0 shadow-[0_0_12px_rgba(29,92,191,0.2)]">
                  {/* Animated Border Trail for Button */}
                  <div className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_60%,white_100%)] opacity-80" />
                  
                  <div className="relative bg-white rounded-full">
                    <Button href="/contact" className="!px-5 !py-2 !text-[14px] !rounded-full shrink-0 group !m-[1px] relative bg-signal border-[1px] border-signal">
                      <svg
                        className="w-[18px] h-[18px] animate-ring text-signal-tint group-hover:text-white transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Let&apos;s Talk
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-cursor="hover"
              >
                <span
                  className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                    }`}
                />
                <span
                  className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
                    }`}
                />
              </button>
            </nav>
          </header>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
