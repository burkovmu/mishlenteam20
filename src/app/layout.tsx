'use client';

import { Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/ui/Footer";
import { BackgroundEffect } from "../components/ui/BackgroundEffect";

// Основной текст: Manrope - современный, четкий и хорошо читаемый шрифт
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Инновационная веб-студия, специализирующаяся на разработке современных веб-сайтов и интерактивных приложений." />
        <title>WebStudio — Современные решения для вашего бизнеса</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${manrope.className} ${manrope.variable}`}>
        <BackgroundEffect />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
