import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DecorFlow | Luxury Wedding Decoration in Delhi NCR",

  description:
    "DecorFlow creates luxury wedding decorations, floral setups, mandap designs, reception décor, and destination weddings across Delhi NCR.",

  keywords: [
    "Wedding Decoration",
    "Wedding Decorator",
    "Luxury Wedding",
    "Wedding Planner",
    "Mandap Decoration",
    "Reception Decoration",
    "Delhi Wedding Decor",
    "DecorFlow",
  ],

  authors: [
    {
      name: "DecorFlow",
    },
  ],

  creator: "DecorFlow",

  openGraph: {
    title: "DecorFlow",

    description:
      "Luxury Wedding Decoration Company",

    images: [
      "/images/hero.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
