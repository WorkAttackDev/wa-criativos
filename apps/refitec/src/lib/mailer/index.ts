import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import z from "zod";
import { setTimeout as sleep } from "timers/promises";

const MAX_RETRIES = 3;
const INITIAL_DELAY_MS = 1000;
const MAX_DELAY_MS = 10000;

const RETRYABLE_ERRORS = [
  "ErrorADUnavailable",
  "ErrorServiceUnavailable",
  "ErrorDataSourceOperationFailed",
  "ErrorThrottled",
  "ECONNRESET",
  "ETIMEDOUT",
  "ENOTFOUND",
];

const isRetryableError = (errorMessage: string): boolean => {
  console.log({ errorMessage });

  return RETRYABLE_ERRORS.some((error) =>
    errorMessage.toLowerCase().includes(error.toLowerCase()),
  );
};

const calculateDelay = (attempt: number): number => {
  const delay = Math.min(INITIAL_DELAY_MS * Math.pow(2, attempt), MAX_DELAY_MS);
  const jitter = Math.random() * 500;
  return delay + jitter;
};

const getAccessToken = async (retryCount = 0): Promise<string> => {
  const url = `https://login.microsoftonline.com/${process.env.EMAIL_OAUTH_TENANT_ID}/oauth2/v2.0/token`;

  const params = new URLSearchParams({
    client_id: process.env.EMAIL_OAUTH_CLIENT_ID!,
    client_secret: process.env.EMAIL_OAUTH_CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  try {
    console.log(
      `[Graph API] Attempting to get access token (attempt ${retryCount + 1}/${MAX_RETRIES + 1})`,
    );

    const res = await fetch(url, {
      method: "POST",
      body: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[Graph API] Token fetch failed: ${errorText}`);

      const canRetry = retryCount < MAX_RETRIES && isRetryableError(errorText);

      if (canRetry) {
        const delay = calculateDelay(retryCount);
        console.log(
          `[Graph API] Retrying token fetch in ${Math.round(delay)}ms...`,
        );
        await sleep(delay);
        return getAccessToken(retryCount + 1);
      }

      throw new Error(`Failed to get access token: ${errorText}`);
    }

    const data = await res.json();
    const token = z.string().parse(data.access_token);
    console.log(`[Graph API] Access token obtained successfully`);
    return token;
  } catch (error) {
    console.error(`[Graph API] Error getting access token:`, error);
    throw error;
  }
};

const isProd = process.env.NODE_ENV === "production";
const useProdMail = process.env.USE_PROD_EMAIL === "true";

const sendEmailViaGraph = async ({
  to,
  subject,
  html,
  attachments,
  retryCount = 0,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: ArrayBuffer;
    contentType?: string;
  }[];
  retryCount?: number;
}) => {
  const accessToken = await getAccessToken(retryCount);
  const emailUser = process.env.EMAIL_OAUTH_USER;

  console.log(`[Graph API] Sending email as user: ${emailUser}`);
  console.log(`[Graph API] Target recipient: ${to}`);

  const message = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: html,
      },
      toRecipients: [{ emailAddress: { address: to } }],
      attachments: attachments?.map((att) => ({
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: att.filename,
        contentBytes: Buffer.from(att.content).toString("base64"),
        contentType: att.contentType,
      })),
    },
  };

  const endpoint = `https://graph.microsoft.com/v1.0/users/${emailUser}/sendMail`;
  console.log(`[Graph API] Calling endpoint: ${endpoint}`);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[Graph API] Email send failed: ${errorText}`);

      const canRetry = retryCount < MAX_RETRIES && isRetryableError(errorText);
      if (canRetry) {
        const delay = calculateDelay(retryCount);
        console.log(
          `[Graph API] Retrying email send in ${Math.round(delay)}ms... (attempt ${retryCount + 2}/${MAX_RETRIES + 1})`,
        );
        await sleep(delay);
        return sendEmailViaGraph({
          to,
          subject,
          html,
          attachments,
          retryCount: retryCount + 1,
        });
      }

      throw new Error(`Failed to send email: ${errorText}`);
    }
    console.log(`[Graph API] Email sent successfully to ${to}`);
  } catch (error) {
    console.error(`[Graph API] Error sending email:`, error);
    throw error;
  }
};

const sendEmailViaSMTP = async ({
  to,
  subject,
  html,
  text,
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
    port: parseInt(process.env.EMAIL_PORT || "587", 10),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

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

const sendEmail = async (params: {
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
  if (isProd || useProdMail) {
    await sendEmailViaGraph(params);
  } else {
    await sendEmailViaSMTP(params);
  }
};

export default sendEmail;
