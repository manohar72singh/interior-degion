import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Studio Story & Vision",
  description:
    "Learn about Housen & Co., a luxury interior and architecture studio founded by a team of passionate designers and architects crafting timeless spaces in Charleston and New York.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Housen & Co. — Interior & Architecture Studio",
    description:
      "A studio built on architectural rigor, tactile materiality, and quiet confidence. Explore our story, principals, and philosophy.",
    url: "/about",
    images: [{ url: "/images/about.jpg", width: 1200, height: 630, alt: "Housen & Co. Studio" }],
  },
};

export default function About() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
