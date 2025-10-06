// Email service configuration
// Choose one of the following implementations based on your preference

// Option 1: SendGrid (Recommended for production)
export const sendEmailWithSendGrid = async (emailData: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@pesgroup.com';

  if (!SENDGRID_API_KEY) {
    throw new Error('SendGrid API key not configured');
  }

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: emailData.to }],
          subject: emailData.subject,
        },
      ],
      from: { email: FROM_EMAIL, name: 'PESGROUP' },
      content: [
        {
          type: 'text/plain',
          value: emailData.text,
        },
        ...(emailData.html ? [{
          type: 'text/html',
          value: emailData.html,
        }] : []),
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`);
  }

  return response.json();
};

// Option 2: Nodemailer with SMTP (Gmail, Outlook, etc.)
export const sendEmailWithSMTP = async (_emailData: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  // This would require installing nodemailer: npm install nodemailer
  // and setting up SMTP credentials in environment variables
  
  // Implementation would go here with nodemailer
  // For now, this is a placeholder
  throw new Error('SMTP email service not implemented. Please use SendGrid or implement nodemailer.');
};

// Option 3: Resend (Simple and reliable)
export const sendEmailWithResend = async (emailData: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@pesgroup.com';

  if (!RESEND_API_KEY) {
    throw new Error('Resend API key not configured');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [emailData.to],
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend API error: ${response.statusText}`);
  }

  return response.json();
};

// Default email sender (you can change this to any of the above)
export const sendEmail = sendEmailWithSendGrid;
