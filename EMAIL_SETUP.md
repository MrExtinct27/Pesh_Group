# Email Setup for Contact Form

This document explains how to set up email functionality so that consultation form submissions are sent to your company email.

## What's Implemented

When someone submits the consultation form:
1. **Company Email**: A detailed email is sent to `projects@pesgroup.com` with all form details
2. **Customer Email**: A confirmation email is sent to the customer thanking them for their inquiry
3. **Form Reset**: The form is cleared and shows a success message

## Email Service Options

### Option 1: SendGrid (Recommended for Production)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key from the dashboard
3. Create a `.env.local` file in your project root with:
   ```
   SENDGRID_API_KEY=your_api_key_here
   FROM_EMAIL=noreply@pesgroup.com
   ```

### Option 2: Resend (Simple Alternative)

1. Sign up at [Resend](https://resend.com/)
2. Get your API key from the dashboard
3. Create a `.env.local` file with:
   ```
   RESEND_API_KEY=your_api_key_here
   FROM_EMAIL=noreply@pesgroup.com
   ```

### Option 3: SMTP (Gmail, Outlook, etc.)

1. Enable 2-factor authentication on your email account
2. Generate an app password
3. Create a `.env.local` file with:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   FROM_EMAIL=your_email@gmail.com
   ```

## Configuration Steps

1. **Create Environment File**: Create a `.env.local` file in your project root
2. **Add Email Credentials**: Add the relevant environment variables from one of the options above
3. **Update Email Service**: In `src/lib/email.ts`, change the default export to your preferred service:
   ```typescript
   // For SendGrid
   export const sendEmail = sendEmailWithSendGrid;
   
   // For Resend
   export const sendEmail = sendEmailWithResend;
   
   // For SMTP
   export const sendEmail = sendEmailWithSMTP;
   ```

## Testing

1. Start your development server: `npm run dev`
2. Go to the contact section and submit the form
3. Check your company email (`projects@pesgroup.com`) for the consultation request
4. Check the customer email for the confirmation message

## Production Deployment

- Ensure your environment variables are set in your hosting platform
- Verify your email service is working in production
- Consider implementing email templates for better formatting
- Add rate limiting to prevent spam

## Troubleshooting

- Check browser console for any errors
- Verify environment variables are loaded correctly
- Ensure your email service API key is valid
- Check email service logs for delivery issues

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive information
- Consider implementing CAPTCHA for spam prevention
- Validate email addresses and sanitize input data
