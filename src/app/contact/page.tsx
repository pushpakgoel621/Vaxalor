import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Vaxalor — Let's Build Something Together",
  description:
    "Ready to start your project? Get in touch and receive a response within 24 hours. Free project estimates available.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
