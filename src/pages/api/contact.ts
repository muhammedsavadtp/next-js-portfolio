import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../config/nodemailer";

type Data = {
  message: string;
};

interface ContactMessageFields {
  [key: string]: string;
}

const CONTACT_MESSAGE_FIELDS: ContactMessageFields = {
  fullName: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data: ContactMessageFields) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n ${val} \n`);
  }, "");

  const htmlTemplate = `
    <html>
      <head>
        <style>
          h1 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      </body>
    </html>
  `;

  return {
    text: stringData,
    html: htmlTemplate,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data: ContactMessageFields = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: data.email,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    return res.status(400).json({ message: "Bad request." });
  }
}
