import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-2xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 cursor-pointer focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0 has-[>svg]:gap-2.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow hover:bg-secondary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary text-primary bg-transparent hover:border-secondary hover:text-secondary",
        secondary:
          "bg-card text-primary shadow-sm hover:bg-secondary hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:text-secondary hover:underline !p-0",
      },
      size: {
        default: "px-8 py-4",
        sm: "rounded px-4 py-2 text-xl",
        lg: "rounded px-10 py-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
}
export { Button, buttonVariants };
