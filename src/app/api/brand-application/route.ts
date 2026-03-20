import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const IDEA_LABELS: Record<string, string> = {
  "yes-clear": "Clear product in mind",
  "yes-rough": "Rough idea, needs help",
  "no-idea":   "Doesn't know what to sell yet",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-1k": "Under $1,000",
  "1k-5k":    "$1,000 – $5,000",
  "5k-plus":  "$5,000+",
};

const EXPERIENCE_LABELS: Record<string, string> = {
  "first-time": "First time",
  "selling":    "Already selling",
  "scaling":    "Scaling a business",
};

const TIMELINE_LABELS: Record<string, string> = {
  "asap":       "As soon as possible",
  "1-3-months": "1–3 months",
  "exploring":  "Just exploring",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      whatsapp,
      product,
      hasIdea,
      budget,
      experience,
      timeline,
      description,
    } = body;

    if (!name || !email || !whatsapp || !product || !hasIdea || !budget || !experience || !timeline) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailText = `
New Brand Application Received
===============================

Name:     ${name}
Email:    ${email}
WhatsApp: ${whatsapp}

Product:    ${product}
Idea Level: ${IDEA_LABELS[hasIdea] ?? hasIdea}

Budget:     ${BUDGET_LABELS[budget] ?? budget}
Experience: ${EXPERIENCE_LABELS[experience] ?? experience}
Timeline:   ${TIMELINE_LABELS[timeline] ?? timeline}

Description:
${description?.trim() || "(not provided)"}
`.trim();

    const { error } = await resend.emails.send({
      from: "Fujma <onboarding@resend.dev>",
      to: "mahdi@fujma.com",
      subject: "New Brand Application",
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
