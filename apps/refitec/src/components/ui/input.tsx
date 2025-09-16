import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "placeholder:text-muted-foreground focus-visible:ring-secondary flex w-full rounded border border-current bg-transparent px-4 py-2 text-2xl text-current shadow-xs transition-colors file:border-0 file:bg-transparent file:text-2xl file:font-medium focus-visible:ring-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      data-slot="input"
      {...props}
    />
  );
}

export { Input };
