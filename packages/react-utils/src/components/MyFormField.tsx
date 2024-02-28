import React, { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

const MyFormField = <
  T extends FieldValues = FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  className,
  noControl,
  children,
}: {
  control: Control<T>;
  name: TName;
  label: string;
  description?: string;
  className?: string;
  noControl?: boolean;
  children: (props: { field: ControllerRenderProps<T, TName> }) => ReactNode;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <FormLabel className="font-normal capitalize">{label}</FormLabel>
        {noControl ? (
          children({ field })
        ) : (
          <FormControl>{children({ field })}</FormControl>
        )}
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default MyFormField;
