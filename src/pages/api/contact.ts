// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../config/nodemailer";

type Data = {
  message: string;
};


const CONTACT_MESSAGE_FILEDS = {
  fullName: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const genarateEmailContent = (data:any) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `${CONTACT_MESSAGE_FILEDS[key]}: \n ${val} \n`);
  }, "");
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h1>${CONTACT_MESSAGE_FILEDS[key]}</h1><p>${val}</p>`);
  }, "");
  return {
    text: stringData,
    html: htmlData,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: data.mail,
        ...genarateEmailContent(data),
        subject: data.subject,
      });
    } catch (error:any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
}
