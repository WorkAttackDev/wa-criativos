import { ZodError } from "zod";
import logger from "./logger";

export const handleErrors = ({
  error,
  message,
  hasLog = true,
}: {
  error: Error;
  message: string;
  hasLog?: boolean;
}): string => {
  hasLog && logger.error(error);

  if (error instanceof ZodError) {
    return message || "Ocorreu um erro na validação de dados";
  }

  return typeof error.cause === "string" ? error.cause : message;
};
