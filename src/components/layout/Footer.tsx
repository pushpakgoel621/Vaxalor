"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_EMAIL, SITE_TAGLINE, NAV_LINKS, SERVICES, SOCIAL_LINKS } from "@/lib/constants";
import { IndicTexture } from "@/components/ui/IndicTexture";

const Logo3D = dynamic(() => import("@/components/global/Logo3D").then(mod => ({ default: mod.Logo3D })), {
  ssr: false,
  loading: () => <div className="w-full h-[200px]" />,
});

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Newsletter", email, service: "Newsletter", message: "Newsletter signup from footer" }),
      });
      setSent(true);
      setEmail("");
    } catch {}
  }

  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <IndicTexture variant="paisley" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 pt-16 pb-10">
        {/* 3D Logo */}
        <div className="hidden md:block w-full h-[220px] mb-12">
          <Logo3D />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Logo + Tagline + Social */}
          <div className="md:col-span-2 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={32}
                height={26}
                className="h-6 w-auto brightness-0 invert"
              />
              <span className="text-white font-heading font-bold text-xl tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-ink-400 text-sm mt-3 max-w-xs">{SITE_TAGLINE}</p>
            <div className="flex gap-4 mt-5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 text-sm hover:text-signal-bright transition-colors duration-200"
                  data-cursor="hover"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-[13px] uppercase tracking-[0.08em] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.disabled ? "#" : link.href}
                    className={`text-ink-500 text-sm transition-colors duration-200 ${
                      link.disabled ? "pointer-events-none opacity-50" : "hover:text-white"
                    }`}
                    data-cursor="hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white text-[13px] uppercase tracking-[0.08em] font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.number}>
                  <Link
                    href="/services"
                    className="text-ink-500 text-sm hover:text-white transition-colors duration-200"
                    data-cursor="hover"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h4 className="text-white text-[13px] uppercase tracking-[0.08em] font-semibold mb-5">
              Ready to build?
            </h4>
            <p className="text-ink-400 text-sm mb-4">
              Drop us your email and we&apos;ll get back within 24 hours.
            </p>
            {sent ? (
              <p className="text-signal-bright text-sm">Thanks! We&apos;ll be in touch.</p>
            ) : (
              <form className="flex gap-2" onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-signal hover:bg-signal-hover text-white text-sm font-medium px-4 py-2.5 rounded-input transition-colors duration-200"
                  data-cursor="cta"
                >
                  Send
                </button>
              </form>
            )}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="block text-signal text-sm mt-4 hover:underline"
              data-cursor="hover"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-100 mt-12 pt-6 text-center">
          <p className="text-ink-300 text-[13px]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
