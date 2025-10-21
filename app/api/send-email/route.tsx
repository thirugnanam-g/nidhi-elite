import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    const emailContent = `
New Contact Form Submission - Real Estate

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}

Submitted at: ${new Date().toLocaleString()}
    `

    if (resend) {
      try {
        await resend.emails.send({
          from: "Real Estate <noreply@realestate.com>",
          to: ["contact@realestate.com"],
          subject: `New Contact Form Submission - Real Estate`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0891b2;">New Contact Form Submission - Real Estate</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
                <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Email sending failed:", emailError)
        // Fallback: log the submission for manual follow-up
        console.log("Contact form submission (email failed):", {
          name: `${firstName} ${lastName}`,
          email,
          phone,
          message,
          timestamp: new Date().toISOString(),
        })
      }
    } else {
      console.log("Contact form submission (Resend not configured):", {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We will contact you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again.",
      },
      { status: 500 },
    )
  }
}
