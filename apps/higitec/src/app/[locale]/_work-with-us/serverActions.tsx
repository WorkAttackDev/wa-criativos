"use server";
import sendEmail from "@/lib/my-next-utils/mail";
import ContactEmailTemplate from "@/lib/my-next-utils/mail/ContactEmailTemplate";
import { unsafeHandleServerActions } from "@/lib/my-next-utils/serverActionsUtils";
import { render } from "@react-email/components";
import { headers } from "next/headers";
import { WorkWithUsType, workWithUsSchema } from "./schema";
import NewContactEmailTemplate from "@/lib/my-next-utils/mail/NewContactEmailTemplate";

export const sendWorkWithUsEmailServerActions = (payload: WorkWithUsType) =>
  unsafeHandleServerActions({
    payload,
    schema: workWithUsSchema,
    successMessage:
      "O email foi enviado com sucesso, abra o seu e-mail para confirmar o recebimento.",
    errorMessage: "Ocorreu um erro ao enviar o email",
    actionFn: async ({
      data: { email, firstName, lastName, about, phone },
    }) => {
      await sendEmail({
        to: "info@higitec.com",
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
