import worker1 from "@/assets/imgs/worker-1.jpg";
import { StaticImageData } from "next/image";
export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  quote: string;
  imgSrc: StaticImageData;
};

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "João Pedro Camossa",
    role: "Operador de Máquinas",
    quote:
      "Trabalhar como Operador de Máquinas na nossa empresa tem sido uma experiência incrível. A equipe é unida e sempre disposta a ajudar.",
    imgSrc: worker1,
  },
  {
    id: "2",
    name: "Joana Pereira",
    role: "Operadora de Máquinas",
    quote:
      "Sinto que meu trabalho é valorizado e que tenho a oportunidade de crescer profissionalmente.",
    imgSrc: worker1,
  },
  {
    id: "3",
    name: "José Alberto",
    role: "Operador",
    quote:
      "Trabalhar com esta equipe tem sido uma experiência gratificante. Sempre somos apoiados e desafiados a evoluir.",
    imgSrc: worker1,
  },
];
