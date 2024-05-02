"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export const sonnerVariants = {
  info: "group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border",
  success:
    "group-[.toaster]:bg-background group-[.toaster]:text-green-700 group-[.toaster]:border-green-700",
  destructive:
    "group-[.toaster]:bg-background group-[.toaster]:text-red-700 group-[.toaster]:border-red-700",
  warning:
    "group-[.toaster]:bg-background group-[.toaster]:text-yellow-700 group-[.toaster]:border-yellow-700",
};

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:text-2xl group-[.toaster]:border-border group-[.toaster]:shadow-lg",

          description:
            "group-[.toast]:text-muted-foreground group-[.toaster]:text-xl",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
