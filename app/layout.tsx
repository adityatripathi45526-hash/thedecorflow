import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "DecorFlow | Luxury Wedding Decoration in Delhi NCR",

  description:
    "DecorFlow offers premium wedding decoration, mandap decoration, floral decor, engagement decoration, reception decor and destination wedding decoration across Delhi NCR.",

  keywords: [
    "Wedding Decoration",
    "Wedding Decorator",
    "Mandap Decoration",
    "Wedding Planner",
    "Luxury Wedding Decor",
    "Delhi Wedding Decor",
    "Noida Wedding Decor",
    "DecorFlow",
  ],

  authors: [{ name: "DecorFlow" }],

  creator: "DecorFlow",

  metadataBase: new URL("https://thedecorflow.com"),

  openGraph: {
    title: "DecorFlow",
    description:
      "Luxury Wedding Decoration Services in Delhi NCR",

    url: "https://thedecorflow.com",

    siteName: "DecorFlow",

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}