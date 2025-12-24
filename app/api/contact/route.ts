import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get API key from environment
    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error('BREVO_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }
      return text.replace(/[&<>"']/g, (m) => map[m])
    }

    // Prepare email data for Brevo API
    const senderEmail = process.env.BREVO_EMAIL
    if (!senderEmail) {
      console.error('BREVO_EMAIL is not set')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }
    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || 'zgrengo@gmail.com'

    const emailData = {
      sender: {
        name: 'Portfolio Contact Form',
        email: senderEmail,
      },
      to: [
        {
          email: recipientEmail,
          name: 'Gregory Pimentel',
        },
      ],
      replyTo: {
        email: email,
        name: `${firstName} ${lastName}`,
      },
      subject: `New Contact Form Message from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      htmlContent: `
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          </body>
        </html>
      `,
      textContent: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message:
        ${message}
      `,
    }

    // Send email via Brevo REST API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Brevo API error:', result)
      return NextResponse.json(
        {
          error: 'Failed to send email',
          details: result.message || 'Unknown error from email service',
        },
        { status: response.status }
      )
    }

    return NextResponse.json(
      {
        success: true,
        messageId: result.messageId,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

