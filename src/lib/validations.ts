import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().optional(),
  _honeypot: z.string().max(0).optional(),
});

// Lenient schema for API — accepts submissions from quick forms (CTABand, Footer)
// that may not collect all fields
export const apiContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
  _honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
