"use client";
import { toast } from "sonner";

import { useTransition } from "react";
import { sonnerVariants } from "@/components/ui/sonner";

type Props<DataType, ActionReturnType> = {
  serverActionFn?: (data: DataType) => Promise<
    | {
        success: boolean;
        message: string;
        data?: ActionReturnType;
      }
    | undefined
  >;
  onSuccess?: (data?: ActionReturnType) => void;
};

const useFormSubmit = <DataType, ActionReturnType>({
  serverActionFn,
  onSuccess,
}: Props<DataType, ActionReturnType>) => {
  const [isSubmitting, startTransition] = useTransition();

  const onSubmit = async (
    data: DataType,
    options?: { onSuccess?: (data?: ActionReturnType) => void },
  ) =>
    startTransition(async () => {
      let res = await serverActionFn?.(data);

      if (res?.success) {
        toast("Operação realizada com sucesso", {
          description: res.message,
          className: sonnerVariants.success,
          duration: 8_000,
        });
        options?.onSuccess?.(res.data);
        onSuccess?.(res.data);
      }
      if (!res?.success) {
        toast("Ocorreu um erro", {
          description: res?.message || "Ocorreu um erro",
          className: sonnerVariants.destructive,
          duration: 8_000,
        });
      }
    });

  return {
    isSubmitting,
    onSubmit,
  };
};
export default useFormSubmit;
