import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import TopScrollButton from "./components/TopScrollButton";
import { locales } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [locales.map((locale) => ({ locale }))];
}

export const metadata: Metadata = {
  title: "Seja bem-vindo à Refitec!",
  description:
    "Refitec, uma futura potência industrial angolana que irá revolucionar o processamento, embalagem e comercialização de óleos alimentares.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/",
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
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/",
    title: "Seja bem-vindo à Refitec!",
    description:
      "Refitec, uma futura potência industrial angolana que irá revolucionar o processamento, embalagem e comercialização de óleos alimentares.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
        }/imgs/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Refitec - Transformando o Futuro dos Óleos Alimentares em Angola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seja bem vindo à Refitec!",
    site: process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/",
    description:
      "Refitec, uma futura potência industrial angolana que irá revolucionar o processamento, embalagem e comercialização de óleos alimentares.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
        }/imgs/og-image.png`,
        alt: "Refitec - Transformando o Futuro dos Óleos Alimentares em Angola",
      },
    ],
  },
  keywords: ["refitec", "refitec angola", "refitec óleos alimentares"],
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
      }/apple-touch-icon.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
      }/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
      }/favicon-16x16.png`,
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
      }/safari-pinned-tab.svg`,
    },
  ],
  manifest: `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://wa-refitec.vercel.app/"
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
