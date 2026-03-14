import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Larin Fitness ja Hieronta",
  description: "Hoitavaa hierontaa Lohjan keskustassa",
  openGraph: {
    title: "Larin Fitness ja Hieronta",
    description: "Hoitavaa hierontaa Lohjan keskustassa",
    images: ["/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProvider defaultLocale="fi">{children}</LangProvider>
      </body>
    </html>
  );
}
