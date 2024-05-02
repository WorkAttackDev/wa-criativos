import { revalidatePath } from "next/cache";
import { ZodSchema } from "zod";
import { handleErrors } from "./error";

export const unsafeHandleServerActions = async <DataType, ActionFnReturnType>({
  actionFn,
  payload,
  errorMessage,
  schema,
  successMessage,
  pathToRevalidate,
}: {
  payload: DataType;
  actionFn: (args: { data: DataType }) => Promise<ActionFnReturnType>;
  schema?: ZodSchema;
  successMessage?: string;
  errorMessage?: string;
  pathToRevalidate?: string;
}) => {
  try {
    const data = schema?.parse(payload) || payload;

    const response = await actionFn({ data });

    pathToRevalidate && revalidatePath(pathToRevalidate);

    return {
      success: true,
      message: successMessage || "Ação realizada com sucesso",
      data: response ?? null,
    };
  } catch (error: any) {
    return {
      success: false,
      message: handleErrors({
        error,
        message: errorMessage || "Ocorreu um erro ao realizar a ação",
      }),
      data: null,
    };
  }
};
