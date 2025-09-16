import { z } from "zod";

export const careerFormSchema = z.object({
  firstName: z.string().min(2, "Mínimo 2 caracteres").max(50),
  lastName: z.string().min(2, "Mínimo 2 caracteres").max(50),
  email: z.email("E-mail inválido"),
  phone: z.string().min(9, "Telefone inválido").max(15, "Telefone inválido"),
  about: z.string().min(10, "Mínimo 10 caracteres").max(1000),
  cv: z
    .file()
    .min(1, "Por favor, insira o seu CV")
    .max(5 * 1024 * 1024, "O CV deve ter no máximo 5MB")
    .mime("application/pdf", "O CV deve ser um ficheiro PDF"),
});

export type CareerFormType = z.infer<typeof careerFormSchema>;
