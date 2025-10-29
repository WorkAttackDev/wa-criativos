import eduardoMiguel from "@/assets/imgs/eduardo_miguel_worker.webp";
import manuelSantos from "@/assets/imgs/manuel_santos_worker.webp";
import catarinaCunga from "@/assets/imgs/catarina_cunga_worker.webp";
import vandelsonBernardo from "@/assets/imgs/vandelson_bernardo_worker.webp";
import { StaticImageData } from "next/image";

export type TestimonialType = {
  id: string;
  name: string;
  roleKey: string;
  quoteKey: string;
  imgSrc: StaticImageData;
};

export type TranslatedTestimonialType = TestimonialType & {
  role: string;
  quote: string;
};

export const testimonials = [
  {
    id: "1",
    name: "Eduardo Miguel",
    roleKey: "eduardoMiguel.role" as const,
    quoteKey: "eduardoMiguel.quote" as const,
    imgSrc: eduardoMiguel,
  },
  {
    id: "2",
    name: "Manuel dos Santos",
    roleKey: "manuelSantos.role" as const,
    quoteKey: "manuelSantos.quote" as const,
    imgSrc: manuelSantos,
  },
  {
    id: "3",
    name: "Catarina Cunga",
    roleKey: "catarinaCunga.role" as const,
    quoteKey: "catarinaCunga.quote" as const,
    imgSrc: catarinaCunga,
  },
  {
    id: "4",
    name: "Vandelson Bernardo",
    roleKey: "vandelsonBernardo.role" as const,
    quoteKey: "vandelsonBernardo.quote" as const,
    imgSrc: vandelsonBernardo,
  },
] satisfies TestimonialType[];
