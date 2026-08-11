"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Award } from "lucide-react";

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
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background Image with Slow Zoom Animation */}
      <motion.div
        animate={{ scale: [1, 1.06] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 h-full w-full"
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

      <div className="relative z-10 container flex flex-col items-center px-6 text-center">
        {/* Press / Editorial Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-beige/10 px-4 py-1.5 backdrop-blur-md border border-beige/20 text-beige shadow-lg"
        >
          <Sparkles className="h-3.5 w-3.5 text-bronze" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-beige/90">
            Featured in Architectural Digest &amp; Elle Decor
          </span>
        </motion.div>
        
        {/* Main Brand Title */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="my-4 font-serif text-5xl font-normal tracking-[0.08em] text-beige sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md"
        >
          HOUSEN <span className="font-sans font-bold text-bronze">&amp;</span> CO.
        </motion.h1>
        
        {/* Subtitle & Value Proposition */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mt-4 max-w-2xl text-balance font-sans text-base font-light text-beige/85 sm:text-lg md:text-xl leading-relaxed"
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
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-bronze px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-xl transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Explore Selected Works
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-beige/40 bg-beige/10 px-8 py-4 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Book A Consultation
          </a>
        </motion.div>
      </div>

      {/* Floating Studio Metric Badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-12 left-12 z-10 items-center gap-4 bg-beige/15 p-4 backdrop-blur-md border border-beige/20 rounded-none text-beige shadow-2xl"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/30 text-bronze">
          <Award className="h-5 w-5" />
        </div>
        <div className="text-left">
          <p className="font-serif text-lg font-medium text-beige">150+ Spaces Crafted</p>
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-beige/70">Charleston &amp; New York</p>
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
