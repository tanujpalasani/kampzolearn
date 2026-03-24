import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Using Inter as a clean, modern ed-tech font (matches standard Geist/Inter look)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://kampzolearn.com"),
  title: {
    default: "Kampzo Learn | Best Online Learning Platform in India",
    template: "%s | Kampzo Learn",
  },
  description: "Kampzo Learn offers affordable, high-quality online courses for students in India. Learn coding, marketing, and essential career skills.",
  keywords: ["online learning platform India", "best courses for students", "learn skills online", "affordable online courses"],
  openGraph: {
    title: "Kampzo Learn | Top Skills for 2026",
    description: "Start learning the skills that matter today with Kampzo Learn.",
    url: "https://kampzolearn.com",
    siteName: "Kampzo Learn",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kampzo Learn",
    url: "https://kampzolearn.com",
    logo: "https://kampzolearn.com/Logo.png",
    description: "An online learning platform empowering students across India with affordable education.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
