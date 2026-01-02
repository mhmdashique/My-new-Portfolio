const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Create transporter (using Gmail)
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter
    await transporter.verify();

    // Email to me (notification)
    const notificationEmail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0;">NEW CONTACT FORM SUBMISSION!</h2>
          </div>
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="margin: 0; font-style: italic; color: #555;"><strong>Message:</strong> ${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Reply email to sender
    const replyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        "Thank you for contacting Mohammed Ashique S - MERN Stack Developer",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0;">Thank You for Reaching Out!</h2>
          </div>

          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">Thank you for your interest in my work! I have successfully received your message and truly appreciate you taking the time to reach out.</p>

            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="margin: 0; font-style: italic; color: #555;">"${message}"</p>
            </div>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">I will review your message carefully and get back to you within <strong>24 hours</strong>. In the meantime, feel free to:</p>

            <ul style="color: #333; line-height: 1.8;">
              <li>Check out my projects on <a href="https://github.com/mohammedashiqueofficial7" style="color: #667eea;">GitHub</a></li>
              <li>Connect with me on <a href="https://linkedin.com/in/mohammed-ashique-s-13613b339" style="color: #667eea;">LinkedIn</a></li>
              <li>Call me directly at <strong>+91 79028 57903</strong></li>
            </ul>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #333;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #667eea;">Mohammed Ashique S</p>
              <p style="margin: 0; color: #666; font-size: 14px;">MERN Stack Developer | Computer Science Graduate</p>
              <p style="margin: 0; color: #666; font-size: 14px;">📍 Thiruvananthapuram, Kerala, India</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(notificationEmail);
    await transporter.sendMail(replyEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message:
          "Message sent successfully! Check your email for confirmation.",
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send message. Please try again.",
      }),
    };
  }
};
