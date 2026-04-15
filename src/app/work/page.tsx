import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work — Projects Built with Obsession",
  description:
    "See the websites, apps, and AI solutions we've built for startups and businesses. Real projects. Real results.",
};

export default function WorkPage() {
  return (
    <Suspense>
      <WorkPageClient />
    </Suspense>
  );
}
