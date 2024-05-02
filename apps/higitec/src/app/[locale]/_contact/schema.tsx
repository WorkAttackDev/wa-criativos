import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string({
      required_error: "Por favor, insira o seu Nome",
    })
    .min(2, "O Nome deve ter pelo menos 2 caracteres")
    .max(50, "O Nome deve ter no máximo 50 caracteres"),
  lastName: z
    .string({
      required_error: "Por favor, insira o seu Sobrenome",
    })
    .min(2, "O Sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "O Sobrenome deve ter no máximo 50 caracteres"),
  email: z
    .string({
      required_error: "Por favor, insira o seu e-mail",
    })
    .email("Por favor, insira um e-mail válido"),
  mensagem: z
    .string({
      required_error: "Por favor, insira uma mensagem",
    })
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

export type ContactType = z.infer<typeof contactSchema>;
