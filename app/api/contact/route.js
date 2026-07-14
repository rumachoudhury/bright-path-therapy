import { NextResponse } from "next/server";

// POST /api/contact - receives inquiries from the contact form.
//
// This starter just validates and logs the submission so the form works
// out of the box. Swap the body of the try block for a database write
// (Mongo/Postgres/etc.), an email send (Resend, Postmark...), or a CRM
// call, depending on where inquiries should end up.
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    console.log("New contact submission:", { name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
