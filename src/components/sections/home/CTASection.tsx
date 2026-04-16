"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { IndicTexture } from "@/components/ui/IndicTexture";
import { PeekingMascot } from "@/components/ui/PeekingMascot";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: "" },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fail silently for now
    }
  }

  return (
    <section className="bg-ink py-20 lg:py-[120px] relative overflow-hidden">
      <IndicTexture variant="mandala" />
      <PeekingMascot position="top-left" size={65} flip className="!top-6 !left-6 md:!left-[8%]" delay={0.3} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Get started"
            heading="Ready to build something great?"
            subheading="Tell us about your project. We'll get back within 24 hours."
            dark
          />
        </ScrollReveal>

        <div className="max-w-[600px] mx-auto mt-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="text-center py-16"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-12 h-12 rounded-full bg-signal-bright/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-white text-[28px] font-semibold mb-2">
                  We&apos;ve got your details!
                </h3>
                <p className="text-ink-400 text-base">
                  Expect a reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Honeypot */}
                <input
                  type="text"
                  {...register("_honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Name *"
                    name="name"
                    placeholder="Your name"
                    register={register("name")}
                    error={errors.name?.message}
                    variant="dark"
                  />
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    register={register("email")}
                    error={errors.email?.message}
                    variant="dark"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Phone *"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    register={register("phone")}
                    error={errors.phone?.message}
                    variant="dark"
                  />
                  <Select
                    label="Service"
                    name="service"
                    options={SERVICE_OPTIONS}
                    placeholder="What do you need?"
                    register={register("service")}
                    error={errors.service?.message}
                    variant="dark"
                  />
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us about your project..."
                  register={register("message")}
                  error={errors.message?.message}
                  variant="dark"
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Let's talk →"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
