import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — Insights on Web, AI & Digital Growth",
  description:
    "Read our latest thoughts on web development, AI solutions, startup strategy, and building digital products that ship fast.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
