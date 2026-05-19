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
  metadataBase: new URL("https://cute.qawave.ai"),
  title: "cute.qawave.ai",
  description: "A small playful page by QA Wave.",
  openGraph: {
    title: "cute.qawave.ai",
    description: "A small playful page by QA Wave.",
    url: "https://cute.qawave.ai",
    siteName: "cute.qawave.ai",
    images: [
      {
        url: "/cute-bg.png",
        width: 1800,
        height: 1200,
        alt: "Colorful abstract background for cute.qawave.ai",
      },
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
