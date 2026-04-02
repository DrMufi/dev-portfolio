import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Mustafa | Full-Stack Developer & UI/UX Designer",
  description: "Building digital experiences that inspire. Expert in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "UI/UX Designer", "Web Development"],
  authors: [{ name: "Muhammad Mustafa" }],
  openGraph: {
    title: "Muhammad Mustafa | Full-Stack Developer & UI/UX Designer",
    description: "Building digital experiences that inspire.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mustafa | Full-Stack Developer",
    description: "Building digital experiences that inspire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}