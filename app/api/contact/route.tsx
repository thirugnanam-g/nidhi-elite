import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email to the business
    const { data, error } = await resend.emails.send({
      from: "Nidhi Elite Website <noreply@nidhielite.com>",
      to: ["nidhielite.hosur@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #16a34a;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              This inquiry was submitted through the Nidhi Elite website contact form.
              Please respond promptly to maintain customer satisfaction.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Nidhi Elite <noreply@nidhielite.com>",
      to: [email],
      subject: "Thank you for contacting Nidhi Elite",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background-color: #16a34a; color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nidhi Elite</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Premium Plots & Customized Villas</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
            <h2 style="color: #333; margin-top: 0;">Thank you for your inquiry, ${name}!</h2>
            
            <p style="color: #555; line-height: 1.6;">
              We have received your message and our team will get back to you within 24 hours. 
              We're excited to help you find your perfect home at Nidhi Elite.
            </p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <h3 style="color: #16a34a; margin-top: 0;">Your Message:</h3>
              <p style="color: #555; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #333;">Contact Information:</h3>
              <p style="color: #555; margin: 5px 0;"><strong>Phone:</strong> +91 99946 76459</p>
              <p style="color: #555; margin: 5px 0;"><strong>Email:</strong> nidhielite.hosur@gmail.com</p>
              <p style="color: #555; margin: 5px 0;"><strong>Office:</strong> 403, K.K Veni Plaza, 1st Main Road, B. Narayanapura, Dooravani nagar, Bangalore - 560016</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #888; font-size: 14px; margin: 0;">
                Visit our site: Sy. NO: 750 Poonapalli Village, Hosur, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
