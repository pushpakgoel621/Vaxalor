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
  const [footerName, setFooterName] = useState("");
  const [footerEmail, setFooterEmail] = useState("");
  const [footerPhone, setFooterPhone] = useState("+91 ");
  const [footerMessage, setFooterMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleFooterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!footerName.trim() || !footerEmail.trim() || footerPhone.replace(/\D/g, "").length < 6) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: footerName,
          email: footerEmail,
          phone: footerPhone,
          service: "General",
          message: footerMessage || "Quick inquiry from footer",
        }),
      });
      setSent(true);
    } catch {}
    setSending(false);
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
                className="h-6 w-auto brightness-125 drop-shadow-[0_0_8px_rgba(59,139,245,0.3)]"
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
            {sent ? (
              <p className="text-signal-bright text-sm">Thanks! We&apos;ll be in touch within 24 hours.</p>
            ) : (
              <form className="flex flex-col gap-2.5" onSubmit={handleFooterSubmit}>
                <input
                  type="text"
                  value={footerName}
                  onChange={(e) => setFooterName(e.target.value)}
                  placeholder="Your name *"
                  required
                  className="w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors duration-200"
                />
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="your@email.com *"
                  required
                  className="w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors duration-200"
                />
                <input
                  type="tel"
                  value={footerPhone}
                  onChange={(e) => setFooterPhone(e.target.value)}
                  placeholder="+91 98765 43210 *"
                  required
                  className="w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors duration-200"
                />
                <textarea
                  value={footerMessage}
                  onChange={(e) => setFooterMessage(e.target.value)}
                  placeholder="Tell us about your project"
                  rows={2}
                  className="w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors duration-200 resize-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-signal hover:bg-signal-hover text-white text-sm font-medium px-4 py-2.5 rounded-input transition-colors duration-200 disabled:opacity-50"
                  data-cursor="cta"
                >
                  {sending ? "Sending..." : "Send →"}
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
        <div className="border-t border-ink-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-300 text-[13px]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-ink-400 text-[13px] hover:text-white transition-colors" data-cursor="hover">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-ink-400 text-[13px] hover:text-white transition-colors" data-cursor="hover">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-ink-400 text-[13px] hover:text-white transition-colors" data-cursor="hover">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
