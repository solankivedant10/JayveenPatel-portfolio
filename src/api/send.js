import { Resend } from 'resend';

const resend = new Resend(process.env.re_JuB9oNFV_PQzJRVBXLxnvjth5qQzZSNGV);

export default async (req, res) => {
  const { name, email, message, interests } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Use your verified domain here later
      to: 'jayveenpatel31@gmail.com',
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${interests}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,    
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};