import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Remove dynamic export as it's not needed with standalone output
// export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Add OPTIONS handler
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(req: Request) {
  console.log('API route hit - POST request received');
  
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Log request details
    console.log('Request method:', req.method);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS
      });
      return new NextResponse(
        JSON.stringify({ error: 'Email configuration is missing' }),
        { status: 500, headers }
      );
    }

    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('Request body:', body);
    } catch (e) {
      console.error('Error parsing request body:', e);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers }
      );
    }

    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP configuration error:', error);
      return new NextResponse(
        JSON.stringify({ error: 'Email service configuration error' }),
        { status: 500, headers }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'srinumaripi6@gmail.com',
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error in API route:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers }
    );
  }
} 