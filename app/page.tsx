import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Services />
        <Projects />
        <Transformation />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
