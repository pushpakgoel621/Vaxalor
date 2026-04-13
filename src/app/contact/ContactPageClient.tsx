"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { ContactHero } from "@/components/sections/contact/ContactHero";

export function ContactPageClient() {
  return (
    <PageTransition>
      <ContactHero />
    </PageTransition>
  );
}
