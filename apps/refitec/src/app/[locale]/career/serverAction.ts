"use server";

import sendEmail from "@/lib/mailer";
import {
  CareerApplicationEmailTemplate,
  ConfirmationEmailTemplate,
} from "@/lib/mailer/templates";
import { render } from "@react-email/components";
import { headers } from "next/headers";
import { careerFormSchema } from "./schema";
import { contactLinksObj } from "../links";
import { getTranslations } from "next-intl/server";

export const sendCareerApplicationEmail = async (formData: FormData) => {
  try {
    const t = await getTranslations("Career.form");
    const data = Object.fromEntries(formData.entries());

    const { cv, email, firstName, lastName, about, phone } =
      careerFormSchema.parse(data);

    const userName = `${firstName} ${lastName}`;
    const host = (await headers()).get("host") || "localhost";

    await sendEmail({
      to: contactLinksObj.recruitingEmail.label,
      html: render(
        CareerApplicationEmailTemplate({
          userName,
          email,
          phone,
          about,
        }),
      ),
      subject: t("applicationSubject"),
      attachments: [
        {
          filename: cv.name,
          content: await cv.arrayBuffer(),
          contentType: "application/pdf",
        },
      ],
    });

    await sendEmail({
      to: email,
      html: render(
        ConfirmationEmailTemplate({
          userName,
          host,
        }),
      ),
      subject: t("confirmationSubject"),
    });

    return {
      success: true,
      message: t("successMessage"),
    };
  } catch (error: any) {
    console.error("Error sending career application email:", error);

    const t = await getTranslations("Career.form");
    if (error.errors) {
      return {
        success: false,
        message: t("invalidFormMessage"),
      };
    }

    return {
      success: false,
      message: t("errorMessage"),
    };
  }
};
