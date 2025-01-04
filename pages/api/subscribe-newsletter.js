import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com', // Replace with company email
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user has subscribed to your newsletter.</p>
      `
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error processing subscription' });
  }
} 