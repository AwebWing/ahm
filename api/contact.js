import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, company, phone, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Company: ${company || 'N/A'}
Phone/WhatsApp: ${phone || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #333333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; text-align: center;">New Contact Form Submission</h2>
          
          <div style="margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #555555;">Name:</strong> <span style="color: #000000;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555555;">Company:</strong> <span style="color: #000000;">${company || 'N/A'}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555555;">Phone/WhatsApp:</strong> <span style="color: #000000;">${phone || 'N/A'}</span></p>
          </div>

          <div style="margin-top: 30px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
            <p style="margin-top: 0;"><strong style="color: #555555;">Message:</strong></p>
            <p style="color: #333333; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888888;">
            <p>This email was automatically generated from your website's contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
