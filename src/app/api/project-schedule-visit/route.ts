import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, companyName, mobileNumber, requirement, projectTitle, projectSlug } = body;

    // Validate required fields
    if (!name || !email || !companyName || !mobileNumber || !requirement || !projectTitle) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Mobile number validation (should be 10 digits)
    const cleanMobileNumber = mobileNumber.replace(/\D/g, '');
    if (cleanMobileNumber.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid mobile number. Please enter a 10-digit number.' },
        { status: 400 }
      );
    }

    // Email content for the company
    const companyEmailContent = `
New Project Visit Request Received

Project: ${projectTitle}
Project Link: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://peshgroup.com'}/projects/${projectSlug}

Client Details:
Name: ${name}
Email: ${email}
Company Name: ${companyName}
Mobile Number: ${cleanMobileNumber}
Space Requirement: ${requirement}

This request was submitted through the project detail page.
Please respond within 24 hours.

---
PESGROUP Website - Project Visit Request
`;

    // Email content for the customer (confirmation)
    const customerEmailContent = `
Dear ${name},

Thank you for your interest in ${projectTitle} at PESGROUP.

We have received your visit request and our team will contact you shortly to schedule a convenient time for your site visit.

Project Details:
- Project: ${projectTitle}
- Space Requirement: ${requirement}

Our team will reach out to you at ${cleanMobileNumber} or ${email} within 24 hours to confirm your visit.

If you have any urgent questions, please feel free to contact us directly at:
- Phone: +91 9225655607 / +91 9225655601
- Email: peshgroup@gmail.com

Best regards,
The PESGROUP Team
`;

    // Send email to company
    try {
      await sendEmail({
        to: 'peshgroup@gmail.com', // Company email
        subject: `New Visit Request - ${projectTitle} - ${name}`,
        text: companyEmailContent,
        html: companyEmailContent.replace(/\n/g, '<br>')
      });

      // Send confirmation email to customer
      await sendEmail({
        to: email, // Customer email
        subject: `Thank you for your interest in ${projectTitle} - PESGROUP`,
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
        message: 'Visit request submitted successfully. Our team will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Project schedule visit error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

