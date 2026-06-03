import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_CATALOG, SITE_NAME } from "@/lib/constants";
import { ServicePageClient } from "./ServicePageClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

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
    alternates: {
      canonical: `/services/${slug}`,
    },
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

  return (
    <>
      <ServiceSchema
        name={pillar.pillar}
        description={pillar.description}
        slug={pillar.slug}
        categories={pillar.categories}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: pillar.pillar, href: `/services/${pillar.slug}` },
        ]}
      />
      <ServicePageClient pillar={pillar} pillarIndex={pillarIndex} />
    </>
  );
}
