import { NextResponse } from "next/server";
import { Resend } from "resend";
import { apiContactSchema } from "@/lib/validations";
import { createSubmission } from "@/lib/db/queries";
import { initDB } from "@/lib/db";
import { SITE_EMAIL } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = apiContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Honeypot check
    if (result.data._honeypot) {
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, service, budget, message } = result.data;
    const msg = message || "";

    // Determine source from message content
    const source = msg.includes("Newsletter signup")
      ? "newsletter"
      : msg.includes("Quick email signup")
      ? "cta-band"
      : msg.includes("entry popup")
      ? "popup"
      : "contact";

    // 1. Store in database
    try {
      await createSubmission({ name, email, phone, service, budget, message: msg, source });
    } catch (dbError: unknown) {
      const dbMsg = dbError instanceof Error ? dbError.message : "";
      if (dbMsg.includes("does not exist")) {
        await initDB();
        await createSubmission({ name, email, phone, service, budget, message: msg, source });
      } else {
        console.error("DB error:", dbMsg);
      }
    }

    // 2. Send email notification via Resend
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your_resend_api_key") {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Vaxalor <onboarding@resend.dev>",
          to: SITE_EMAIL,
          subject: source === "newsletter"
            ? `New newsletter signup: ${email}`
            : `New inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : null,
            service ? `Service: ${service}` : null,
            budget ? `Budget: ${budget}` : null,
            msg ? `Message: ${msg}` : null,
            ``,
            `Source: ${source}`,
            `Time: ${new Date().toISOString()}`,
          ]
            .filter(Boolean)
            .join("\n"),
        });
      } catch (emailError) {
        console.error("Email send error:", emailError);
        // Don't fail the request if email fails — submission is already saved in DB
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
