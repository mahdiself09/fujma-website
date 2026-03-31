import { NextResponse } from "next/server";

type ContactPayload = {
  fullName: string;
  email: string;
  whatsapp: string;
  interest: string;
  message: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { fullName, email, whatsapp, interest, message, source } = body;

    if (!fullName || !email || !whatsapp || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("New contact submission:", { fullName, email, whatsapp, interest, message, source });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
