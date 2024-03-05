import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import TopScrollButton from "./components/TopScrollButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem-vindo à Refitec",
  description: "Transformando o Futuro dos Óleos Alimentares em Angola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <TopScrollButton />
      </body>
    </html>
  );
}
