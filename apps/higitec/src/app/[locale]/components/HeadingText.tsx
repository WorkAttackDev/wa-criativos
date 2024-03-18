import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

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

type Props = VariantProps<typeof headingVariants> & {
  children: React.ReactNode;
  className?: string;
};

const HeadingText = ({ children, size, className }: Props) => {
  const sizeMap = {
    lg: 3,
    default: 4,
    sm: 5,
  } as const;

  const Heading = `h${sizeMap[size || "default"]}` as const;

  return (
    <Heading
      className={cn(headingVariants({ size }), className, "leading-normal")}
    >
      {children}
    </Heading>
  );
};
export default HeadingText;
