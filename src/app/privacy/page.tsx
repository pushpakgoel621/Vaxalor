import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your personal information.`,
};

const LAST_UPDATED = "April 16, 2026";

export default function PrivacyPage() {
  return (
    <PageTransition>
      <section className="bg-canvas pt-[100px] sm:pt-[140px] pb-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Legal"
              heading="Privacy Policy"
              subheading={`Last updated: ${LAST_UPDATED}`}
            />
          </ScrollReveal>

          <div className="mt-12 prose-vaxalor">
            <ScrollReveal delay={0.1}>
              <h2>1. Information We Collect</h2>
              <p>When you use our website or services, we may collect:</p>
              <ul>
                <li><strong>Contact information:</strong> Name, email address, phone number — when you fill out a form, subscribe to our newsletter, or contact us.</li>
                <li><strong>Project details:</strong> Information about your business, requirements, and preferences shared through our forms or chatbot.</li>
                <li><strong>Usage data:</strong> Pages visited, time spent, browser type, device type — collected automatically through analytics.</li>
                <li><strong>Cookies:</strong> We use essential cookies for authentication (admin panel) and functional cookies for preferences (theme, chat sessions).</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To respond to your inquiries and provide project estimates</li>
                <li>To deliver and improve our services</li>
                <li>To send project updates and relevant communications (only if you&apos;ve opted in)</li>
                <li>To improve our website experience through anonymized analytics</li>
                <li>To prevent spam and abuse (honeypot fields, rate limiting)</li>
              </ul>
              <p>We <strong>never</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2>3. Data Storage & Security</h2>
              <ul>
                <li>Your data is stored on <strong>Neon PostgreSQL</strong> (cloud database with encryption at rest and in transit).</li>
                <li>Media files are stored on <strong>Cloudinary</strong> with secure HTTPS delivery.</li>
                <li>Admin authentication uses <strong>JWT tokens</strong> stored in httpOnly cookies (not accessible via JavaScript).</li>
                <li>All data transmission is encrypted via <strong>TLS/SSL</strong>.</li>
                <li>We do not store payment information — all payments are handled through third-party processors.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2>4. Third-Party Services</h2>
              <p>We use the following third-party services that may process your data:</p>
              <ul>
                <li><strong>Vercel</strong> — Website hosting and analytics</li>
                <li><strong>Neon</strong> — Database hosting</li>
                <li><strong>Cloudinary</strong> — Media storage and delivery</li>
                <li><strong>Resend</strong> — Email notifications</li>
                <li><strong>OpenAI</strong> — AI chatbot responses (conversation data is sent to OpenAI for processing)</li>
              </ul>
              <p>Each service has its own privacy policy and complies with industry-standard security practices.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access</strong> your personal data we hold</li>
                <li><strong>Correct</strong> any inaccurate information</li>
                <li><strong>Delete</strong> your data from our systems</li>
                <li><strong>Opt out</strong> of any marketing communications</li>
                <li><strong>Export</strong> your data in a portable format</li>
              </ul>
              <p>To exercise any of these rights, email us at <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <h2>6. Cookies</h2>
              <p>We use minimal cookies:</p>
              <ul>
                <li><strong>Authentication cookie</strong> — For admin panel access (httpOnly, secure, 24h expiry)</li>
                <li><strong>Session storage</strong> — For chatbot conversation continuity (browser session only)</li>
                <li><strong>Local storage</strong> — For popup dismissal preference and theme choice</li>
              </ul>
              <p>We do not use advertising cookies or tracking pixels.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2>7. Contact</h2>
              <p>For privacy-related questions or data requests, contact us at <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
