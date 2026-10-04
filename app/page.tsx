import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import InteractiveRoom3D from "@/components/InteractiveRoom3D";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Services />
        <Projects />
        <InteractiveRoom3D />
        <Transformation />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Journal />
        <Contact />
      </main>
    </>
  );
}
