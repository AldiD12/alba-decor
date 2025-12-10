# EmailJS Setup Guide for Alba Decor

## 1. Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## 3. Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Quote Request - Alba Decor

Hello,

You have received a new quote request from your Alba Decor website:

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Postcode: {{postcode}}

Project Details:
- Service Type: {{service_type}}
- Timeframe: {{timeframe}}
- Budget: {{budget}}

Project Description:
{{project_description}}

---
This email was sent from your Alba Decor website contact form.
```

4. **Copy the Template ID** (you'll need this)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (starts with something like "user_...")
3. Copy this key

## 5. Update Environment Variables
Update your `.env.local` file with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Integration
1. Deploy your changes to Vercel
2. Test the quote modal on your website
3. Check that emails arrive at fjorentin@albadecor.co.uk

## Email Destination
All quote requests will be sent to: **fjorentin@albadecor.co.uk**

## Troubleshooting
- Make sure all environment variables are set correctly
- Check EmailJS dashboard for any error logs
- Verify your email service is properly connected
- Test with a simple template first

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Should be sufficient for quote requests
- Upgrade if you need more volume