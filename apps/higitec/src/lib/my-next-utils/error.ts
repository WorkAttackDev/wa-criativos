import { ZodError } from "zod";

export const handleErrors = ({
  error,
  message,
  hasLog = true,
}: {
  error: Error;
  message: string;
  hasLog?: boolean;
}): string => {
  hasLog && console.log(JSON.stringify(error));

  if (error instanceof ZodError) {
    return message || "Ocorreu um erro na validação de dados";
  }

  return typeof error.cause === "string" ? error.cause : message;
};
