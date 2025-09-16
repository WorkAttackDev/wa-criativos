import { StaticImageData } from "next/image";
import newsPlaceholderImg from "@/assets/imgs/news-placeholder-img.jpg";
import { createSerializer, parseAsString } from "nuqs/server";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title:
      "Inauguração Oficial da Fábrica Refitec com a presença do Presidente da República",
    description:
      "A recente inauguração da Refitec, unidade industrial dedicada à produção de óleos alimentares, marca um passo decisivo no processo de industrialização de Angola. Localizada numa zona estratégica, esta nova fábrica representa um investimento significativo no setor alimentar angolano.",
    image: newsPlaceholderImg,
    date: "26 de Março de 2025",
    category: "NOTÍCIA",
  },
  {
    id: "2",
    title:
      "Parceria entre empresas de tecnologia e universidades promove inovação",
    description:
      "Uma nova colaboração entre empresas de tecnologia e instituições acadêmicas visa acelerar o desenvolvimento de soluções em inteligência artificial, com foco em aplicações industriais e sustentabilidade ambiental.",
    image: newsPlaceholderImg,
    date: "15 de Abril de 2025",
    category: "NOTÍCIA",
  },
  {
    id: "3",
    title:
      "Refitec expande sua linha de produtos com o lançamento de novos óleos vegetais",
    description:
      "A Refitec anuncia o lançamento de uma nova linha de óleos vegetais, enriquecendo sua gama de produtos. A empresa reafirma o compromisso com a inovação e a qualidade, oferecendo produtos que atendem às necessidades do mercado angolano.",
    image: newsPlaceholderImg,
    date: "20 de Julho de 2025",
    category: "NOTÍCIA",
  },
  {
    id: "4",
    title: "Cimeira de líderes globais discute estratégias de sustentabilidade",
    description:
      "A cimeira, realizada em Luanda, reuniu líderes globais para discutir estratégias e mudanças climáticas, com foco em soluções inovadoras para um futuro mais sustentável.",
    image: newsPlaceholderImg,
    date: "10 de Agosto de 2025",
    category: "EVENTO",
  },
  {
    id: "5",
    title: "Investimento em energias renováveis marca novo capítulo industrial",
    description:
      "Novo investimento em tecnologias de energia renovável promete revolucionar o setor industrial angolano, com foco em sustentabilidade e eficiência energética para o desenvolvimento econômico do país.",
    image: newsPlaceholderImg,
    date: "5 de Setembro de 2025",
    category: "NOTÍCIA",
  },
];

export const newsSearchParams = {
  newsId: parseAsString,
};

export const newsSearchParamsSerialize = createSerializer(newsSearchParams);
