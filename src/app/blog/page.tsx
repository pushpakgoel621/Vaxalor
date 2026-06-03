import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Insights on Web, AI & Digital Growth",
  description:
    "Read our latest thoughts on web development, AI solutions, startup strategy, and building digital products that ship fast.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <BlogPageClient />
    </>
  );
}
