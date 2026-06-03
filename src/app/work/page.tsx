import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkPageClient } from "./WorkPageClient";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Work — Projects Built with Obsession",
  description:
    "See the websites, apps, and AI solutions we've built for startups and businesses. Real projects. Real results.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <Suspense>
        <WorkPageClient />
      </Suspense>
    </>
  );
}
