// supabase/functions/contact-form/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";



serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { full_name, email, phone, project_type, message } = await req.json();

    const htmlBody = `
      <strong>New Contact Request</strong><br/><br/>
      <strong>Name:</strong> ${full_name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Phone:</strong> ${phone}<br/>
      <strong>Project Type:</strong> ${project_type}<br/>
      <strong>Message:</strong><br/>${message}
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: [Deno.env.get("TO_EMAIL")],
        subject: `📬 New Contact from ${full_name}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errorData = await resendRes.json();
      console.error("Resend API error:", errorData);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }

    const result = await resendRes.json();
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Function error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
});

