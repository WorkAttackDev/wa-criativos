import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import React, { DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const FeatherBgSection = ({ children, className, ...rest }: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Feathers background image",
    fill: true,
    sizes: "100vw",
    src: "/imgs/feathers.jpeg",
    quality: 100,
  });
  return (
    <section
      {...rest}
      className="bg-cover bg-center"
      style={{
        backgroundImage: `radial-gradient(circle,rgba(244,244,242,.6) 0%,rgba(255,255,255,.6) 50%,rgba(244,244,242,.6) 100%), url(${src})`,
      }}
    >
      <div className={cn("my-container py-32", className)}>{children}</div>
    </section>
  );
};

export default FeatherBgSection;
