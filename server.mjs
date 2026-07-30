import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
app.use(cors())
app.use(express.json())

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error('SMTP_USER and SMTP_PASS must be set in .env file')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'sjbconstructionandcontracts@gmail.com'

app.post('/api/careers', async (req, res) => {
  const { name, email, phone, location, position, experience, skills, message, resumeData, resumeName } = req.body

  if (!name || !email || !phone || !position || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const attachments = []
  if (resumeData && resumeName) {
    attachments.push({
      filename: resumeName,
      content: resumeData,
      encoding: 'base64',
    })
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: RECIPIENT_EMAIL,
    subject: `Career Application - ${position} - ${name}`,
    html: `
      <h2>New Career Application</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Location</td><td style="padding:8px;border:1px solid #ddd">${location || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Position</td><td style="padding:8px;border:1px solid #ddd">${position}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Experience</td><td style="padding:8px;border:1px solid #ddd">${experience || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Skills</td><td style="padding:8px;border:1px solid #ddd">${skills || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
        ${resumeName ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Resume</td><td style="padding:8px;border:1px solid #ddd">${resumeName} (attached)</td></tr>` : ''}
      </table>
    `,
    attachments,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to send application. Check server console for details.' })
  }
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, location, budget, message } = req.body

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: RECIPIENT_EMAIL,
    subject: `New Contact Inquiry - ${service || 'General'} - ${name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${service || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Location</td><td style="padding:8px;border:1px solid #ddd">${location || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${budget || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to send message. Check server console for details.' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
