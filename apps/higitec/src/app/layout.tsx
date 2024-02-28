import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Higitec",
  description: "Seja bem-vindo à Higitec!",
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
      </body>
    </html>
  );
}
