import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Honeypot check
    if (result.data._honeypot) {
      return NextResponse.json({ success: true }); // silent reject
    }

    // Log the submission (replace with Resend email when API key is ready)
    console.log("📧 New contact form submission:", {
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      service: result.data.service,
      budget: result.data.budget,
      message: result.data.message,
    });

    // TODO: Send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Vaxalor <noreply@vaxalor.com>",
    //   to: "hello@vaxalor.com",
    //   subject: `New inquiry from ${result.data.name}`,
    //   text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nService: ${result.data.service}\nMessage: ${result.data.message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
