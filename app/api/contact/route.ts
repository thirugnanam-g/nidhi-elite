import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Processing contact form submission:", { name, email, phone })

    // 1. Submit to Google Forms
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdT9sqFGBpeK94SuAzcMK3FQVUQeeRuk8iRYfbGpqW65Zn6Ew/formResponse"

    const formData = new FormData()
    formData.append("entry.2005620554", name)
    formData.append("entry.1166974658", phone)
    formData.append("entry.1045781291", email)
    formData.append("entry.839337160", message)

    try {
      const googleResponse = await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
      })
      console.log("[v0] Google Forms submission status:", googleResponse.status)
    } catch (googleError) {
      console.error("[v0] Google Forms submission error:", googleError)
    }

    // 2. Save to Google Sheets via Apps Script
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (sheetsWebhookUrl) {
      try {
        const sheetsResponse = await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            timestamp: new Date().toISOString(),
          }),
        })
        console.log("[v0] Google Sheets submission status:", sheetsResponse.status)
      } catch (sheetsError) {
        console.error("[v0] Google Sheets submission error:", sheetsError)
      }
    }

    // 3. Send email notification
    const emailApiKey = process.env.RESEND_API_KEY
    if (emailApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${emailApiKey}`,
          },
          body: JSON.stringify({
            from: "noreply@nidhielite.com",
            to: "nidhielite@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            `,
          }),
        })
        console.log("[v0] Email notification status:", emailResponse.status)
      } catch (emailError) {
        console.error("[v0] Email notification error:", emailError)
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully. We'll get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit form. Please try again.",
      },
      { status: 500 },
    )
  }
}
