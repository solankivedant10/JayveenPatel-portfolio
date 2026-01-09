import { Resend } from 'resend';

// Initialize Resend with your API Key stored in environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  // First Principles: Ensure we only handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, interests } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // After domain verification, use your own domain
      to: 'jayveenpatel31@gmail.com', // Your receiving email
      subject: `New Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Interests:</strong> ${interests}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
