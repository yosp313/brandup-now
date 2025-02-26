import { insertEmail } from "@/features/email_post";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    await insertEmail(email);
    return NextResponse.json({ message: "Email submitted successfully" });
  } catch (err) {
    return NextResponse.json({
      message: "Error submitting email or email already submitted",
    });
  }
}
