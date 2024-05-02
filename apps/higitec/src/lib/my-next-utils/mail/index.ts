import nodemailer from "nodemailer";

const sendEmail = async ({
  subject,
  text,
  html,
  to,
}: {
  to: string;
  subject: string;
  text?: string;
  html: string;
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

  const info = await transporter.sendMail({
    from: `"Higitec noreply" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html,
    text,
  });

  console.log("Email sent:", info.response);
  process.env.NODE_ENV === "development" &&
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export default sendEmail;
