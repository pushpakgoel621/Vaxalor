import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Vaxalor — Let's Build Something Together",
  description:
    "Ready to start your project? Get in touch and receive a response within 24 hours. Free project estimates available.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
