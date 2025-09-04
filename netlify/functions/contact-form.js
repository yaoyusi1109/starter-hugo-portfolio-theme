const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission from yusiyao.org
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      This message was sent from your website contact form.
    `;

    // For now, we'll use console.log (you'll see this in Netlify logs)
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Set up actual email sending
    // You can use services like:
    // - SendGrid (free tier available)
    // - Mailgun (free tier available)
    // - AWS SES (very cheap)
    // - Or keep using Netlify's built-in form handling

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submitted successfully!',
        success: true 
      })
    };

  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        success: false 
      })
    };
  }
};
