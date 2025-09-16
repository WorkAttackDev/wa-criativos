import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import AnnouncementBanner from "./components/AnnouncementBanner";
import TopScrollButton from "./components/TopScrollButton";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import { LazyMotionProvider } from "@/lib/motion-index";

const inter = Inter({ subsets: ["latin"] });

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

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <LazyMotionProvider>
            <NuqsAdapter>
              <AnnouncementBanner />
              <Header />
              {children}
              <Footer />
              <TopScrollButton />
            </NuqsAdapter>
          </LazyMotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
