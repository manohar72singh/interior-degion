"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background Image with Slow Zoom Animation + Parallax Scroll */}
      <motion.div
        style={{ y: bgY }}
        animate={{ scale: [1, 1.06] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 h-[120%] w-full -top-[10%]"
      >
        <Image
          src="/images/hero.jpg"
          alt="Luxury bedroom with modern wood paneling and warm ambient lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Editorial Gradients */}
      <div className="absolute inset-0 z-0 bg-espresso/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-espresso via-espresso/30 to-espresso/60" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 container flex flex-col items-center px-6 text-center -translate-y-8 sm:-translate-y-12 md:-translate-y-16"
      >
        {/* Main Brand Title */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="my-2 sm:my-3 font-serif text-5xl font-normal tracking-[0.08em] text-beige sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md"
        >
          HOUSEN <span className="font-sans font-bold text-bronze">&amp;</span> CO.
        </motion.h1>
        
        {/* Subtitle & Value Proposition */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mt-3 max-w-2xl text-balance font-sans text-base font-light text-beige/85 sm:text-lg md:text-xl leading-relaxed"
        >
          Luxury Interior &amp; Architecture Studio — crafting timeless,
          considered spatial experiences for high-end homes and bespoke hospitality worldwide.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-xl transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Explore Selected Works
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-beige/40 bg-beige/10 px-8 py-3.5 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Book A Consultation
          </Link>
        </motion.div>
      </motion.div>


      {/* Rotating Circular Stamp Badge (SS Interiors Signature Style) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="hidden md:block absolute bottom-12 right-12 z-10"
      >
        <div className="relative h-28 w-28 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-bronze">
            <defs>
              <path id="stamp-circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[8.5px] uppercase tracking-[0.24em] fill-current font-medium">
              <textPath href="#stamp-circle">TIMELESS • BESPOKE • ARCHITECTURAL •</textPath>
            </text>
          </svg>
          <span className="absolute text-lg text-bronze">✦</span>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center -translate-x-1/2"
      >
        <span className="mb-3 text-[0.55rem] font-medium uppercase tracking-[0.4em] text-beige/60">
          Scroll
        </span>
        <div className="h-12 w-[1px] overflow-hidden bg-beige/20">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            className="h-full w-full bg-bronze"
          />
        </div>
      </motion.div>
    </section>
  );
}
