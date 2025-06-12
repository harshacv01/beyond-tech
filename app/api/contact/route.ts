import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// 1. Validate input using zod
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // 2. Setup transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // safer to use your own email
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: data.subject,
      text: `
Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
      `,
    };

    // 4. Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // If it's a validation error, return specific field errors
    if (error instanceof z.ZodError) {
      const formatted = error.flatten().fieldErrors;
      return NextResponse.json({ errors: formatted }, { status: 400 });
    }

    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the email." },
      { status: 500 }
    );
  }
}
