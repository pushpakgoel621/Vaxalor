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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vaxalor",
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo.png`,
              description: "We build custom websites, mobile apps, AI chatbots, and MVPs for startups and small businesses. 20-day delivery. Built with soul.",
              email: "hello@vaxalor.com",
              foundingDate: "2025",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@vaxalor.com",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/vaxalor",
                "https://twitter.com/vaxalor",
                "https://instagram.com/vaxalor",
                "https://github.com/vaxalor",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development",
                      description: "Custom websites built with Next.js, shipped in 20 days.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "Cross-platform iOS & Android apps with React Native or Flutter.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Chatbot Development",
                      description: "Custom AI chatbots for customer support and lead capture.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "MVP Development",
                      description: "Minimum viable products for startups, shipped in 20 days at 50% off.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ERP & CRM Solutions",
                      description: "Custom business dashboards, workflow automation, and analytics.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Design & Branding",
                      description: "Brand identity, UI/UX design, marketing materials.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
