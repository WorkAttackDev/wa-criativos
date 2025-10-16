import { StaticImageData } from "next/image";
import NewsPlaceholderImg from "@/assets/imgs/news-placeholder-img.jpg";
import NewsInaugurationImg from "@/assets/imgs/inauguration.jpg";
import News1Img from "@/assets/imgs/grupo-naval-premio.jpeg";
import News3Img from "@/assets/imgs/interview-news-3.jpg";
import News5Img from "@/assets/imgs/filda-interview-news-5.jpg";
import News7Img from "@/assets/imgs/boa-vista-spot.jpg";
import News9Img from "@/assets/imgs/tpa-boa-vista.jpg";
import News10Img from "@/assets/imgs/groupo-naval-participa-filda.jpg";

import { createSerializer, parseAsString } from "nuqs/server";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  date: string;
  category: string;
  link?: string;
  media?:
    | {
        type: "video";
        src: string;
      }
    | {
        type: "image";
        src: StaticImageData;
      };
}

export const newsData: NewsItem[] = [
  {
    id: "news-inauguration",
    title:
      "Inauguração Oficial da Fábrica Refitec com a presença do Presidente da República",
    description:
      "A Refitec celebrou um marco histórico com a inauguração oficial da sua fábrica em Luanda, contando com a presença do Presidente da República de Angola. Este evento representa um momento de grande importância para a indústria nacional, consolidando o compromisso da empresa com o desenvolvimento económico do país e a criação de emprego.",
    thumbnail: NewsInaugurationImg,
    date: "28 de Julho de 2025",
    category: "NOTÍCIA",
    media: {
      type: "video",
      src: "/vids/refitec-inauguration-lg.webm",
    },
  },
  {
    id: "news-1",
    title:
      "Grupo Naval angolano premiado com Leão de Ouro na FILDA 2025 pela melhor participação de produção nacional",
    description:
      "O Grupo Naval foi premiado com o Leão de Ouro na categoria de melhor participação de produção nacional na FILDA 2025. A empresa apresentou um stand institucional destacando o lançamento da marca Boa Vista, o primeiro óleo vegetal produzido em Luanda, resultado do investimento na refinaria Refitec, reafirmando o compromisso com o desenvolvimento económico do país.",
    thumbnail: News1Img,
    date: "29 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://forbesafricalusofona.com/grupo-naval-angolano-premiado-com-leao-de-ouro-na-filda-2025-pela-melhor-participacao-de-producao-nacional/",
  },
  // {
  //   id: "news-2",
  //   title:
  //     "Sonangol arrebata Leão de Ouro da FILDA 2025 que teve cerca de 100.000 visitas",
  //   description:
  //     "A Sonangol conquistou, pela segunda vez consecutiva, o grande prémio 'Leão de Ouro' na 40.ª edição da FILDA, que encerrou após seis dias com cerca de 100.000 visitantes. A petrolífera nacional recebeu também uma menção honrosa e outro 'Leão' na categoria de melhor participação, simbolizando o reconhecimento à excelência da marca e sua capacidade de liderança na transformação energética.",
  //   thumbnail: newsPlaceholderImg,
  //   date: "28 de Julho de 2025",
  //   category: "NOTÍCIA",
  //   link: "https://www.verangola.net/va/pt/072025/Economia/45321/Sonangol-arrebata-%E2%80%98Le%C3%A3o-de-Ouro%E2%80%99-da-FILDA-2025-que-teve-cerca-de-100000-visitas.htm",
  // },
  {
    id: "news-3",
    title:
      "FILDA/2025: Grupo Naval aposta na transformação dos produtos nacionais",
    description:
      "O Grupo Naval reforçou o seu compromisso com a transformação de produtos nacionais na FILDA 2025, apresentando bens alimentares, de higiene, limpeza e materiais de construção. Com capacidade de 180 mil toneladas/ano de óleo alimentar, 500 toneladas/dia de trigo, 60 mil toneladas/ano de sabão e 15 milhões de fraldas/mês, o grupo emprega 3.000 colaboradores e pretende duplicar este número nos próximos três anos.",
    thumbnail: News3Img,
    date: "26 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.angop.ao/noticias/economia/filda-2025-grupo-naval-aposta-na-transformacao-dos-produtos-nacionais",
  },
  {
    id: "news-4",
    title:
      "FILDA/2025: Grupo Acelerador Angola assegura a formação de líderes empresariais",
    description:
      "O Grupo Acelerador Angola está a impulsionar o crescimento do tecido empresarial angolano através de programas de educação voltados para o desenvolvimento de líderes e gestores de empresas. Instalado no país há cerca de seis meses, o grupo já formou mais de 100 empresas, apoiando os empresários a obterem melhores resultados através de conhecimento aplicado e boas práticas de gestão.",
    thumbnail: NewsPlaceholderImg,
    date: "26 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.angop.ao/noticias/economia/filda-2025-grupo-acelerador-angola-aposta-na-formacao-de-lideres-empresariais",
  },
  {
    id: "news-5",
    title:
      "FILDA/2025: Evidenciada importância da Feira para crescimento económico de Icolo e Bengo",
    description:
      "O vice-governador provincial de Luanda, Manuel Sebastião, considerou a realização da 40ª edição da FILDA em Icolo e Bengo um factor estratégico para o crescimento económico local e um impulso à descentralização do ambiente de negócios em Angola. O evento constitui uma plataforma essencial para a promoção de serviços, produtos e parcerias comerciais que reforçam a dinâmica empresarial angolana.",
    thumbnail: News5Img,
    date: "26 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.angop.ao/noticias/economia/filda-2025-vice-governador-de-luanda-destaca-importancia-da-filda-para-crescimento-economico-de-icolo-e-bengo",
  },
  // {
  //   id: "news-6",
  //   title: "FILDA/2025: Sonangol vence Grande Prémio Leão de Ouro",
  //   description:
  //     "A Sonangol foi distinguida com o Grande Prémio Leão de Ouro na FILDA 2025, reconhecendo a excelência e o contributo da petrolífera nacional para o desenvolvimento do sector energético angolano. Este prémio reforça a posição de liderança da empresa no mercado nacional e internacional.",
  //   thumbnail: newsPlaceholderImg,
  //   date: "27 de Julho de 2025",
  //   category: "NOTÍCIA",
  //   link: "https://www.angop.ao/noticias/economia/filda-2025-sonangol-vence-grande-premio",
  // },
  {
    id: "news-7",
    title: "Refitec lança 'Boa Vista', nova marca nacional de óleo alimentar",
    description:
      "A Refitec lançou oficialmente a marca 'Boa Vista', o primeiro óleo alimentar 100% produzido em Angola. Este marco histórico representa um avanço significativo na indústria alimentar nacional, promovendo a substituição de importações e fortalecendo a economia local com produtos de qualidade certificada e o selo 'Feito em Angola'.",
    thumbnail: News7Img,
    date: "25 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.youtube.com/embed/MpdawZm_RNc",
  },
  {
    id: "news-8",
    title: "Grupo Naval marca presença na FILDA 2025",
    description:
      "O Grupo Naval marcou presença destacada na 40ª edição da FILDA 2025, apresentando o seu portfólio diversificado de produtos nacionais. A participação reforçou o compromisso do grupo com a industrialização e desenvolvimento económico de Angola, destacando investimentos em produção local e criação de emprego.",
    thumbnail: NewsPlaceholderImg,
    date: "25 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.youtube.com/embed/zVVp2mXTdJc",
  },
  {
    id: "news-9",
    title:
      "Refitec apresenta nova marca de óleo alimentar no programa 'A sua manhã'",
    description:
      "A Refitec divulgou a marca 'Boa Vista' no programa televisivo 'A sua manhã', apresentando ao público angolano os detalhes sobre o primeiro óleo alimentar produzido integralmente em Luanda. A entrevista destacou a qualidade do produto, o processo de produção nacional e os benefícios para os consumidores e para a economia do país.",
    thumbnail: News9Img,
    date: "25 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.youtube.com/embed/HRgwJukZ5Dg",
  },
  {
    id: "news-10",
    title: "Grupo Naval participa na FILDA 2025 com enfoque estratégico",
    description:
      "O Grupo Naval participou na FILDA 2025 com um enfoque estratégico voltado para a expansão dos seus negócios e consolidação no mercado angolano. A empresa apresentou planos de crescimento que incluem aumento da capacidade produtiva, diversificação de produtos e criação de novos postos de trabalho, reforçando o seu papel no desenvolvimento industrial do país.",
    thumbnail: News10Img,
    date: "23 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.youtube.com/embed/3Jg4KNSTML0",
  },
  {
    id: "news-11",
    title: "Sector privado valoriza selo Feito em Angola",
    description:
      "O sector privado angolano valorizou o selo 'Feito em Angola' durante a FILDA 2025, reconhecendo a sua importância para a promoção da produção nacional e fortalecimento da economia local. Empresários destacaram que a certificação aumenta a confiança dos consumidores nos produtos nacionais e estimula o crescimento da indústria angolana.",
    thumbnail: NewsPlaceholderImg,
    date: "23 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.jornaldeangola.ao/#/noticias/4/economia/643018/sector-privado-valoriza-selo-%E2%80%9Cfeito-em-angola%E2%80%9D",
  },
  {
    id: "news-12",
    title:
      "Refitec apresenta nova marca de óleo alimentar no programa Sexto Sentido",
    description:
      "A Refitec apresentou a marca 'Boa Vista' no programa televisivo Sexto Sentido, partilhando com os telespectadores os detalhes sobre o lançamento do primeiro óleo alimentar produzido em Angola. A entrevista abordou o processo de produção, os padrões de qualidade e o impacto positivo deste produto nacional no mercado angolano.",
    thumbnail: NewsPlaceholderImg,
    date: "23 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://www.youtube.com/embed/cNASuJ7h4gE",
  },
  {
    id: "news-13",
    title: "Grupo Naval apresenta óleo Boa Vista na 40ª edição da FILDA 2025",
    description:
      "O Grupo Naval apresentou oficialmente o óleo alimentar 'Boa Vista' na 40ª edição da FILDA 2025, marcando um momento histórico para a indústria alimentar angolana. Produzido pela refinaria Refitec em Luanda, este óleo representa o compromisso do grupo com a produção nacional de qualidade e a redução da dependência de importações no sector alimentar.",
    thumbnail: NewsPlaceholderImg,
    date: "21 de Julho de 2025",
    category: "NOTÍCIA",
    link: "https://boletim.co.ao/repositories/files/8a/74/0fe14b58-a0e9-4211-a3f9-ca42136c527e-3143036.mp3",
  },
];

export const newsSearchParams = {
  newsId: parseAsString,
};

export const newsSearchParamsSerialize = createSerializer(newsSearchParams);
