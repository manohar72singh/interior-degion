import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://housenandco.com"),
  title: {
    default: "Housen & Co. | Luxury Interior & Architecture Studio",
    template: "%s | Housen & Co.",
  },
  description:
    "Housen & Co. is a luxury interior design and architecture studio based in Wave City, Ghaziabad, crafting timeless, considered spatial experiences for high-end residences and bespoke hospitality worldwide.",
  keywords: [
    "luxury interior design",
    "architectural studio",
    "interior designer Ghaziabad",
    "luxury interior designer Delhi NCR",
    "bespoke furniture design",
    "high-end residential architecture",
    "turnkey renovation",
    "spatial planning",
    "Wave City interior studio",
    "Housen & Co.",
  ],
  authors: [{ name: "Housen & Co.", url: "https://housenandco.com" }],
  creator: "Housen & Co.",
  publisher: "Housen & Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://housenandco.com",
    siteName: "Housen & Co. — Interior & Architecture Studio",
    title: "Housen & Co. | Luxury Interior & Architecture Studio",
    description:
      "Crafting timeless, considered spatial experiences for high-end homes and bespoke hospitality worldwide.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Housen & Co. Luxury Interior Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Housen & Co. | Luxury Interior & Architecture Studio",
    description:
      "Crafting timeless, considered spatial experiences for high-end homes and bespoke hospitality worldwide.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="bg-beige font-sans text-charcoal antialiased flex flex-col min-h-screen">
        <JsonLd />
        <SmoothScroll>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
