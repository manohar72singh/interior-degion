import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Housen & Co. — Interior & Architecture Studio",
  description:
    "Learn about Housen & Co., a luxury interior and architecture studio founded by a team of passionate designers and architects crafting timeless spaces.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
