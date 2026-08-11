import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Housen & Co. | Luxury Interior & Architecture Studio",
  description: "Housen & Co. is a luxury interior and architecture studio crafting timeless, considered spaces for high-end homes and hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="bg-beige font-sans text-charcoal antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
