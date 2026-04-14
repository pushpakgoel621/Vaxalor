import type { Metadata } from "next";
import { sora, inter } from "@/lib/fonts";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Websites, Apps & AI Solutions | Shipped in 20 Days`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "We build custom websites, mobile apps, AI chatbots, and MVPs for startups and small businesses. 20-day delivery. Built with soul.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "We build custom websites, mobile apps, AI chatbots, and MVPs for startups and small businesses. 20-day delivery. Built with soul.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "We build custom websites, mobile apps, AI chatbots, and MVPs. 20-day delivery. Built with soul.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
