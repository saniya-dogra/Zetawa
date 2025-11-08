const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['https://zetawa.com', 'http://localhost:5173','https://zetawa-dark.vercel.app'],
  methods: ['GET', 'POST']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

// Function to get the appropriate email based on inquiry type
const getTargetEmail = (inquiryType) => {
  const emailRouting = {
    'Sales Inquiry': 'sales@dark.zetawa.com',
    'General Inquiry': 'support@dark.zetawa.com',
    'Technical Support': 'hr@dark.zetawa.com',
    'Career Opportunities': 'hr@dark.zetawa.com',
    'Partnership': 'hr@dark.zetawa.com',
    'Media Inquiry': 'hr@dark.zetawa.com'
  };
  
  return emailRouting[inquiryType] || 'support@dark.zetawa.com'; // Default to support
};

// POST route
app.post('/contact', async (req, res) => {
  const { name, email, phone, inquiryType, message } = req.body;

  // Validate required fields
  if (!name || !email || !inquiryType || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, inquiryType, and message are required' 
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Get the target email based on inquiry type
  const targetEmail = getTargetEmail(inquiryType);

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use your authenticated email as sender
    // replyTo: email, // Set reply-to as the user's email
    to: targetEmail,
    subject: `New ${inquiryType} from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4285f4; padding-bottom: 10px;">
          Contact Form Submission
        </h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>📧 Routed to:</strong> ${targetEmail}</p>
          <p><strong>📝 Inquiry Type:</strong> ${inquiryType}</p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #555;">Contact Details:</h3>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>📞 Phone:</strong> ${phone}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #555;">Message:</h3>
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #4285f4; border-radius: 3px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This message was sent via the contact form on zetawa.com</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${targetEmail} for ${inquiryType} inquiry from ${name}`);
    res.status(200).json({ 
      message: 'Message sent successfully!',
      routedTo: targetEmail
    });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ 
      message: 'Failed to send message', 
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    emailRouting: {
      'Sales Inquiry': 'sales@dark.zetawa.com',
      'General Inquiry': 'support@dark.zetawa.com',
      'Technical Support': 'hr@dark.zetawa.com',
      'Career Opportunities': 'hr@dark.zetawa.com',
      'Partnership': 'hr@dark.zetawa.com',
      'Media Inquiry': 'hr@dark.zetawa.com'
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log('Email routing configured:');
  console.log('- Sales Inquiry → sales@dark.zetawa.com');
  console.log('- General Inquiry → support@dark.zetawa.com');
  console.log('- Technical Support → hr@dark.zetawa.com');
  console.log('- Career Opportunities → hr@dark.zetawa.com');
  console.log('- Partnership → hr@dark.zetawa.com');
  console.log('- Media Inquiry → hr@dark.zetawa.com');
});

