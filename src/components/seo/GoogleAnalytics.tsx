"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Google Analytics 4 tracking component.
 *
 * Usage:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Copy the Measurement ID (starts with "G-")
 * 3. Add it to your .env file: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 4. The component is already mounted in layout.tsx — no further action needed.
 *
 * This component loads the gtag.js script and initializes GA4 tracking.
 * It only renders in production (or when the env var is set).
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

/**
 * Track a custom GA4 event.
 *
 * Usage:
 *   import { trackEvent } from "@/components/seo/GoogleAnalytics";
 *   trackEvent("form_submission", { form_name: "contact", service: "MVP" });
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      action,
      params
    );
  }
}
