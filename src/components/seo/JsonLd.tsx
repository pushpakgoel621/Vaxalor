import { SITE_URL, SITE_NAME } from "@/lib/constants";

/* ================================================================
   Reusable JSON-LD Structured Data Components
   Drop these into any page to add schema.org markup.
   All are server-component safe (no "use client" needed).
   ================================================================ */

// ── Utility ──────────────────────────────────────────────────────

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── BreadcrumbList ───────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return <JsonLdScript data={data} />;
}

// ── FAQPage ─────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

// ── Article ─────────────────────────────────────────────────────

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorUrl?: string;
  image?: string | null;
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author,
  authorUrl,
  image,
}: ArticleSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: authorUrl || `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  if (image) {
    data.image = image;
  }

  return <JsonLdScript data={data} />;
}

// ── Service ─────────────────────────────────────────────────────

interface ServiceCategory {
  title: string;
  items: string[];
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
  categories: ServiceCategory[];
}

export function ServiceSchema({
  name,
  description,
  slug,
  categories,
}: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    serviceType: name,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: categories.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.title,
        itemListElement: cat.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item,
          },
        })),
      })),
    },
  };

  return <JsonLdScript data={data} />;
}

// ── HowTo ───────────────────────────────────────────────────────

interface HowToStep {
  name: string;
  text: string;
  position: number;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g. "P20D"
  steps: HowToStep[];
}

export function HowToSchema({
  name,
  description,
  totalTime,
  steps,
}: HowToSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      position: step.position,
    })),
  };

  if (totalTime) {
    data.totalTime = totalTime;
  }

  return <JsonLdScript data={data} />;
}

// ── Person ──────────────────────────────────────────────────────

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  linkedinUrl?: string;
  image?: string;
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  linkedinUrl,
  image,
}: PersonSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  if (linkedinUrl) {
    data.url = linkedinUrl;
    data.sameAs = [linkedinUrl];
  }

  if (image) {
    data.image = `${SITE_URL}${image}`;
  }

  return <JsonLdScript data={data} />;
}
