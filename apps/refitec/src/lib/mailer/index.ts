import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import z from "zod";

const getAccessToken = async () => {
  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${process.env.EMAIL_OAUTH_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.EMAIL_OAUTH_CLIENT_ID!,
        client_secret: process.env.EMAIL_OAUTH_CLIENT_SECRET!,
        refresh_token: process.env.EMAIL_OAUTH_REFRESH_TOKEN!,
        grant_type: 'refresh_token',
        scope: 'https://outlook.office365.com/SMTP.Send',
      }),
    }
  );

  const tokens = await tokenResponse.json();

  if (!tokens.access_token) {
    throw new Error('Failed to get access token');
  }


  return z.string().parse(tokens.access_token);
}

const getTransporter = async () => {
  const isProd = process.env.NODE_ENV === "production";
  const useProdMail = process.env.USE_PROD_EMAIL === "true";

  const accessToken = await getAccessToken();

  if (isProd || useProdMail) {
    // Production transport using Office 365 OAuth2
    return nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_OAUTH_USER,
        clientId: process.env.EMAIL_OAUTH_CLIENT_ID,
        clientSecret: process.env.EMAIL_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_OAUTH_REFRESH_TOKEN,
        accessToken,
      },
    });
  }

  // Development transport using SMTP (Ethereal or other)
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587", 10),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

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
  const transporter = await getTransporter();

  const mailOptions = {
    from: `"Refitec noreply" <${process.env.EMAIL_FROM}>`,
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

  console.log(`Email sent: ${info.accepted.join(", ")}`);

  const isDev = process.env.NODE_ENV === "development";
  const useProdMail = process.env.USE_PROD_EMAIL === "true";

  if (isDev && !useProdMail) {
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`Preview URL: ${previewUrl}`);
    }
  }
};

export default sendEmail;
