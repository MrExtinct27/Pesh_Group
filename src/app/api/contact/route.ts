import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content for the company
    const companyEmailContent = `
New Consultation Request Received

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}

Project Details:
${message}

This request was submitted through the website contact form.
Please respond within 24 hours as promised.

---
PESGROUP Website Contact Form
`;

    // Email content for the customer (confirmation)
    const customerEmailContent = `
Dear ${name},

Thank you for contacting PESGROUP regarding your ${projectType} project.

We have received your consultation request and our team will review your project details. 
You can expect a response from us within 24 hours.

In the meantime, if you have any urgent questions, please feel free to contact us directly at:
- Phone: +91 9225655607 / +91 9225655601
- Email: projects@pesgroup.com

Project Details:
${message}

Best regards,
The PESGROUP Team
`;

    // Send email to company
    try {
      await sendEmail({
        to: 'projects@pesgroup.com', // Company email
        subject: `New Consultation Request - ${projectType}`,
        text: companyEmailContent,
        html: companyEmailContent.replace(/\n/g, '<br>')
      });

      // Send confirmation email to customer
      await sendEmail({
        to: email, // Customer email
        subject: 'Thank you for your consultation request - PESGROUP',
        text: customerEmailContent,
        html: customerEmailContent.replace(/\n/g, '<br>')
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return success to user, but log the email error
      // You might want to implement a fallback or retry mechanism
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
