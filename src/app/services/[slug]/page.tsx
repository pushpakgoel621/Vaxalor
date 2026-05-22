import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_CATALOG, SITE_NAME } from "@/lib/constants";
import { ServicePageClient } from "./ServicePageClient";

export function generateStaticParams() {
  return SERVICE_CATALOG.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = SERVICE_CATALOG.find((p) => p.slug === slug);
  if (!pillar) return {};

  return {
    title: `${pillar.pillar} — ${SITE_NAME}`,
    description: pillar.description,
  };
}

export default async function ServicePillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillarIndex = SERVICE_CATALOG.findIndex((p) => p.slug === slug);
  const pillar = pillarIndex >= 0 ? SERVICE_CATALOG[pillarIndex] : null;

  if (!pillar) notFound();

  return <ServicePageClient pillar={pillar} pillarIndex={pillarIndex} />;
}
