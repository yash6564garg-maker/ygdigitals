import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./custom.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YG Digitals — AI Websites, Automation & Instagram Growth for Real Estate",
  description: "YG Digitals helps real estate businesses scale with AI-powered websites delivered in 5–7 days, WhatsApp automation, AI calling agents, and Instagram & Meta management. Book a free strategy call today.",
  keywords: "AI website agency India, WhatsApp automation real estate, AI automation for small business, Instagram management agency, Meta ads real estate, n8n automation agency"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden antialiased font-sans">{children}</body>
    </html>
  );
}
