"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: "", budget: "" },
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
    <div className="bg-canvas-white border border-canvas-border rounded-[14px] p-8 md:p-9">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="text-center py-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-12 rounded-full bg-signal-tint flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-ink text-[28px] font-semibold mb-2">
              We&apos;ve got your details!
            </h3>
            <p className="text-ink-300 text-base">
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

            <Input
              label="Name"
              name="name"
              placeholder="Your name"
              register={register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              register={register("phone")}
              error={errors.phone?.message}
            />
            <Select
              label="Service"
              name="service"
              options={SERVICE_OPTIONS}
              placeholder="What do you need?"
              register={register("service")}
              error={errors.service?.message}
            />
            <Select
              label="Budget Range"
              name="budget"
              options={BUDGET_OPTIONS}
              placeholder="Select a range"
              register={register("budget")}
              error={errors.budget?.message}
            />
            <Textarea
              label="Tell us about your project"
              name="message"
              placeholder="Describe your project, goals, and timeline..."
              register={register("message")}
              error={errors.message?.message}
              rows={5}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message →"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
