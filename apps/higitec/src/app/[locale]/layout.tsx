import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import TopScrollButton from "./components/TopScrollButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seja bem-vindo à Higitec!",
  description:
    "Empenhados em estabelecer padrões na produção de produtos de higiene e limpeza de elevada qualidade, com uma base enraizada na inovação, atendendo a diversos sectores e garantindo um ambiente saudável e seguro para todos.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/",
  ),
  alternates: {
    canonical: "/",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/",
    title: "Seja bem-vindo à Higitec!",
    description:
      "Empenhados em estabelecer padrões na produção de produtos de higiene e limpeza de elevada qualidade, com uma base enraizada na inovação, atendendo a diversos sectores e garantindo um ambiente saudável e seguro para todos.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app"
        }/imgs/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Higitec - Produtos de higiene e limpeza de elevada qualidade.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seja bem vindo à Higitec!",
    site: process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/",
    description:
      "Empenhados em estabelecer padrões na produção de produtos de higiene e limpeza de elevada qualidade, com uma base enraizada na inovação, atendendo a diversos sectores e garantindo um ambiente saudável e seguro para todos.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app"
        }/imgs/og-image.png`,
        alt: "Higitec - Produtos de higiene e limpeza de elevada qualidade.",
      },
    ],
  },
  keywords: [
    "higitec",
    "higiene",
    "limpeza",
    "produtos",
    "qualidade",
    "inovação",
    "angola",
    "segurança",
    "ambiente",
    "saudável",
  ],
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/"
      }/apple-touch-icon.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/"
      }/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/"
      }/favicon-16x16.png`,
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/"
      }/safari-pinned-tab.svg`,
    },
  ],
  manifest: `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://wa-higitec.vercel.app/"
  }/site.webmanifest`,
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <TopScrollButton />
      </body>
    </html>
  );
}
