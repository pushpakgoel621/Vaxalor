import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_PAGES, SITE_NAME } from "@/lib/constants";
import { ServicePageClient } from "./ServicePageClient";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — ${SITE_NAME}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);

  if (!service) notFound();

  return <ServicePageClient service={service} />;
}
