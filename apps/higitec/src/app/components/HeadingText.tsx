import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { createElement } from "react";

const headingVariants = cva("text-primary text-balance font-bold", {
  variants: {
    size: {
      default: "text-4xl uppercase",
      sm: "text-2xl uppercase",
      lg: "text-6xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg";
  className?: string;
};

const HeadingText = ({ children, size, className }: Props) => {
  const sizeMap = {
    lg: 3,
    default: 4,
    sm: 5,
  } as const;

  const heading = `h${sizeMap[size || "default"]}` as const;

  return createElement(heading, {
    className: cn(headingVariants({ size, className }), "leading-normal"),
    children,
  });
};
export default HeadingText;
