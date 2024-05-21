"use server";
import sendEmail from "@/lib/my-next-utils/mail";
import ContactEmailTemplate from "@/lib/my-next-utils/mail/ContactEmailTemplate";
import NewContactEmailTemplate from "@/lib/my-next-utils/mail/NewContactEmailTemplate";
import { unsafeHandleServerActions } from "@/lib/my-next-utils/serverActionsUtils";
import { render } from "@react-email/components";
import { headers } from "next/headers";
import { workWithUsSchema } from "./schema";
import { contactLinksObj } from "../links";

export const sendWorkWithUsEmailServerActions = (payload: FormData) =>
  unsafeHandleServerActions({
    payload,
    successMessage:
      "O email foi enviado com sucesso, abra o seu e-mail para confirmar o recebimento.",
    errorMessage: "Ocorreu um erro ao enviar o email",
    actionFn: async ({ data }) => {
      const { cv, email, firstName, lastName, about, phone } =
        workWithUsSchema.parse(Object.fromEntries(data));

      return Promise.all([
        sendEmail({
          to: contactLinksObj.recruitingEmail.label,
          html: render(
            <NewContactEmailTemplate
              userName={firstName + " " + lastName}
              message={about}
              subject={"Contato para vaga de emprego"}
              email={email}
              phone={phone}
            />,
          ),
          subject: "Contato para vaga de emprego",
          attachments: [
            {
              filename: cv.name,
              content: await cv.arrayBuffer(),
              contentType: "application/pdf",
            },
          ],
        }),
        sendEmail({
          to: email,
          html: render(
            <ContactEmailTemplate
              userName={firstName + " " + lastName}
              host={headers().get("host") || "localhost"}
            />,
          ),
          subject: "Obrigado por entrar em contato",
        }),
      ]);
    },
  });
