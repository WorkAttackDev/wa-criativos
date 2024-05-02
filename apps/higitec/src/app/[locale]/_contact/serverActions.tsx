"use server";

import sendEmail from "@/lib/my-next-utils/mail";
import ContactEmailTemplate from "@/lib/my-next-utils/mail/ContactEmailTemplate";
import { unsafeHandleServerActions } from "@/lib/my-next-utils/serverActionsUtils";
import { render } from "@react-email/components";
import { headers } from "next/headers";
import { ContactType, contactSchema } from "./schema";
import NewContactEmailTemplate from "@/lib/my-next-utils/mail/NewContactEmailTemplate";

export const sendContactEmailServerActions = (payload: ContactType) =>
  unsafeHandleServerActions({
    payload,
    schema: contactSchema,
    successMessage:
      "O email foi enviado com sucesso, abra o seu e-mail para confirmar o recebimento.",
    errorMessage: "Ocorreu um erro ao enviar o email",
    actionFn: async ({ data: { email, firstName, lastName, mensagem } }) => {
      await sendEmail({
        to: "info@higitec.com",
        html: render(
          <NewContactEmailTemplate
            userName={firstName + " " + lastName}
            message={mensagem}
            subject={"Novo Contacto via website"}
            email={email}
          />,
        ),
        subject: "Novo Contacto via website",
      });

      await sendEmail({
        to: email,
        html: render(
          <ContactEmailTemplate
            userName={firstName + " " + lastName}
            host={headers().get("host") || "localhost"}
          />,
        ),
        subject: "Obrigado por entrar em contato",
      });
    },
  });
