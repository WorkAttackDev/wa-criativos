import { toFileArray } from "@/lib/my-next-utils/form";
import { z } from "zod";

const cvSchema = z.custom<File>().superRefine((val, ctx) => {
  const file = toFileArray(val)?.[0];

  if (!file) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Por favor, insira o seu CV",
      fatal: true,
    });

    return z.NEVER;
  }

  if (!(file instanceof Blob) || file.type !== "application/pdf") {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "O CV deve ser um ficheiro PDF",
      fatal: true,
    });

    return z.NEVER;
  }

  if (file.size > 2 * 1024 * 1024) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "O CV deve ter no máximo 2MB",
      fatal: true,
    });

    return z.NEVER;
  }
});

export const workWithUsSchema = z.object({
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
  phone: z
    .string({
      required_error: "Por favor, insira o seu telefone",
    })
    .min(9, "O telefone deve ter pelo menos 9 caracteres")
    .max(15, "O telefone deve ter no máximo 15 caracteres"),
  cv: cvSchema,
  about: z
    .string({
      required_error: "Por favor, insira uma mensagem",
    })
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

export type WorkWithUsType = z.infer<typeof workWithUsSchema>;
