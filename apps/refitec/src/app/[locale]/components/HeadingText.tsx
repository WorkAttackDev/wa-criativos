import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("text-balance font-bold", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary uppercase",
    },
    size: {
      default: "text-4xl/normal",
      sm: "text-2xl/normal",
      lg: "text-6xl/normal sm:text-7xl/normal",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

type Props = VariantProps<typeof headingVariants> & {
  children: React.ReactNode;
  className?: string;
};

const HeadingText = ({ children, size, variant, className }: Props) => {
  const sizeMap = {
    lg: 3,
    default: 4,
    sm: 5,
  } as const;

  const Heading = `h${sizeMap[size || "default"]}` as const;

  return (
    <Heading className={cn(headingVariants({ size, variant }), className)}>
      {children}
    </Heading>
  );
};
export default HeadingText;
