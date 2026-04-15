import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using ${SITE_NAME} services.`,
};

const LAST_UPDATED = "April 16, 2026";

export default function TermsPage() {
  return (
    <PageTransition>
      <section className="bg-canvas pt-[140px] pb-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Legal"
              heading="Terms of Service"
              subheading={`Last updated: ${LAST_UPDATED}`}
            />
          </ScrollReveal>

          <div className="mt-12 prose-vaxalor">
            <ScrollReveal delay={0.1}>
              <h2>1. Services</h2>
              <p>{SITE_NAME} provides custom software development services including website development, mobile applications, AI solutions, ERP/CRM systems, MVP development, and design services. All projects are governed by these terms unless a separate written agreement is in place.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2>2. Project Timeline</h2>
              <p>We commit to delivering projects within the agreed timeline (typically 20 days). Timelines begin from the date of project kickoff, defined as the day we receive all required inputs (content, branding assets, access credentials) from the client.</p>
              <p>Delays caused by late client feedback, scope changes, or third-party dependencies are not counted against our delivery timeline.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2>3. Payments</h2>
              <ul>
                <li>A <strong>50% advance</strong> is required before project kickoff.</li>
                <li>The remaining <strong>50%</strong> is due upon project completion, before final handover and deployment.</li>
                <li>MVP projects receive a <strong>50% discount</strong> on standard rates as part of our startup program.</li>
                <li>All prices are quoted in the agreed currency and are exclusive of applicable taxes unless stated otherwise.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2>4. Intellectual Property</h2>
              <ul>
                <li>Upon full payment, all custom code, designs, and deliverables become the <strong>exclusive property of the client</strong>.</li>
                <li>{SITE_NAME} retains the right to showcase the project in our portfolio unless the client requests otherwise in writing.</li>
                <li>Open-source libraries and frameworks used in projects retain their original licenses.</li>
                <li>Pre-existing {SITE_NAME} tools, templates, or components used across multiple projects remain our property but are licensed to the client for unlimited use in their project.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2>5. Revisions & Scope</h2>
              <ul>
                <li>Each project includes <strong>up to 3 rounds of revisions</strong> on design and functionality.</li>
                <li>Additional revisions or scope changes beyond the original agreement will be quoted separately.</li>
                <li>If the first design draft is rejected entirely, we redo it at <strong>no additional cost</strong> (one-time guarantee).</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <h2>6. Confidentiality</h2>
              <p>We treat all client information, business data, and project details as <strong>strictly confidential</strong>. We will not disclose any client information to third parties without written consent, except as required by law or as necessary to deliver the project (e.g., sharing hosting credentials with deployment platforms).</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2>7. Limitation of Liability</h2>
              <p>{SITE_NAME}&apos;s total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages including lost profits, data loss, or business interruption.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <h2>8. Termination</h2>
              <ul>
                <li>Either party may terminate a project with <strong>7 days written notice</strong>.</li>
                <li>If the client terminates, payment is due for all work completed up to the termination date.</li>
                <li>If {SITE_NAME} terminates, we refund any payment for undelivered work.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <h2>9. Warranties & Guarantees</h2>
              <ul>
                <li>We guarantee our deliverables will be <strong>free of critical bugs</strong> for 30 days post-launch.</li>
                <li>If we miss the agreed deadline, the client receives a <strong>10% discount</strong> on the project total.</li>
                <li>We do not guarantee specific business outcomes (traffic, revenue, conversions) unless explicitly included in the project scope.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <h2>10. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <h2>11. Contact</h2>
              <p>For questions about these terms, contact us at <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
