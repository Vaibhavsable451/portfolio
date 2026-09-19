import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields (name, email, subject, message) are required.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || 'vs2ibha@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'wlvjpskewixqbxnw';
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'vs2ibha@gmail.com';

    // Create SMTP Transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
        <h2 style="color: #fbbf24; border-bottom: 2px solid #334155; padding-bottom: 12px; margin-top: 0;">
          📬 New Portfolio Contact Message
        </h2>
        <div style="margin-bottom: 16px;">
          <p style="margin: 4px 0;"><strong style="color: #94a3b8;">From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p style="margin: 4px 0;"><strong style="color: #94a3b8;">Subject:</strong> ${subject}</p>
          <p style="margin: 4px 0;"><strong style="color: #94a3b8;">Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 16px;">
          <h4 style="margin-top: 0; color: #cbd5e1;">Message:</h4>
          <p style="white-space: pre-wrap; color: #f1f5f9; line-height: 1.6;">${message}</p>
        </div>
        <div style="margin-top: 24px; pt: 16px; border-top: 1px solid #334155; text-align: center; font-size: 12px; color: #64748b;">
          Sent directly from your Portfolio Website Contact Form
        </div>
      </div>
    `;

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email dispatched successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully to vs2ibha@gmail.com!',
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error('Failed to send contact email:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Failed to dispatch email. Please try again later.',
      },
      { status: 500 }
    );
  }
}
