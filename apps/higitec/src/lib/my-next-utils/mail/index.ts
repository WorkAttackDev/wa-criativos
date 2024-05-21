import nodemailer from "nodemailer";
import fs from "fs";
import Mail from "nodemailer/lib/mailer";
import logger from "../logger";

const sendEmail = async ({
  subject,
  text,
  html,
  to,
  attachments,
}: {
  to: string;
  subject: string;
  text?: string;
  html: string;
  attachments?: {
    filename: string;
    content: ArrayBuffer;
    contentType?: string;
  }[];
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "", 10),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Higitec noreply" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html,
    text,
    attachments: attachments?.map((attach) => ({
      filename: attach.filename,
      content: Buffer.from(attach.content),
      contentType: attach.contentType,
    })),
  } satisfies Mail.Options;

  const info = await transporter.sendMail(mailOptions);

  logger.info(`Email sent: ${info.accepted.join(", ")}`);
  process.env.NODE_ENV === "development" &&
    logger.info(`Preview URL: %s`, nodemailer.getTestMessageUrl(info));
};

export default sendEmail;
