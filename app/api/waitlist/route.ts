import { NextResponse } from "next/server";

// Placeholder capture endpoint — wire this to a real ESP (Resend, Brevo, ConvertKit...) before launch.
export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  console.log("[waitlist] new signup:", email);

  return NextResponse.json({ ok: true });
}
