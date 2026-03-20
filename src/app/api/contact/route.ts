import { NextResponse } from "next/server";

type ContactPayload = {
  fullName: string;
  email: string;
  interest: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { fullName, email, interest, message } = body;

    if (!fullName || !email || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: replace with database insert (e.g. Prisma, Supabase, etc.)
    console.log("New contact submission:", { fullName, email, interest, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
