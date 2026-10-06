"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Layers, Hammer, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    phase: "01",
    title: "Discover",
    tagline: "Vision & Site Analysis",
    icon: Compass,
    caption: "In-depth consultation, spatial lifestyle mapping, daylight evaluation, and aesthetic alignment.",
    detail: "Site Survey & Lifestyle Brief",
  },
  {
    phase: "02",
    title: "Design",
    tagline: "3D Spatial Modeling",
    icon: Layers,
    caption: "Photorealistic 3D visualization, tactile material boards, custom architectural drawings, and lighting plans.",
    detail: "CAD & Material Samples",
  },
  {
    phase: "03",
    title: "Craft",
    tagline: "Artisan Fabrication",
    icon: Hammer,
    caption: "Master artisan fabrication, bespoke millwork joinery, and ethical sourcing of rare natural stones and timbers.",
    detail: "Joinery & Custom Millwork",
  },
  {
    phase: "04",
    title: "Deliver",
    tagline: "Turnkey Styling",
    icon: Sparkles,
    caption: "White-glove installation, curated art staging, acoustic balancing, and seamless turnkey handover.",
    detail: "White-Glove Installation",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-charcoal flex flex-col justify-center py-20 md:py-28 text-beige overflow-hidden relative"
    >
      {/* Ambient Architectural Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-bronze/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-bronze/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-beige/5 border border-beige/10 rounded-full mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-bronze">
              The Atelier Process
            </span>
          </div>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            How we bring a space to life.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-beige/70 leading-relaxed font-light">
            Every bespoke environment progresses through four rigorous phases of architectural discipline, tactile curation, and precision engineering.
          </p>
        </motion.div>

        {/* Desktop Connected Architectural Progress Track */}
        <div className="hidden lg:block relative mt-16 mb-4 px-8">
          <div className="relative h-[2px] w-full bg-beige/10">
            {/* Scroll-Linked Golden Drawing Line */}
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-bronze via-[#c99f57] to-bronze shadow-[0_0_16px_rgba(166,124,61,0.8)]"
            />
          </div>

          {/* Connected Milestone Dots */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-8 pointer-events-none">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.phase}
                  className="flex flex-col items-center -translate-y-1/2"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal border-2 border-bronze/40 shadow-lg text-bronze transition-all duration-300 group-hover:border-bronze"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid with Staggered Scroll Reveal & Micro-Interactions */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: index * 0.14,
                }}
                className={cn(
                  "group relative flex flex-col justify-between p-7 sm:p-8",
                  "bg-beige/[0.04] backdrop-blur-sm border border-beige/10",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-2 hover:border-bronze/60 hover:bg-beige/[0.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                )}
              >
                {/* Top Corner Architectural Line Accent */}
                <div className="absolute top-0 right-0 h-10 w-10 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 h-[2px] w-8 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze" />
                  <div className="absolute top-0 right-0 h-8 w-[2px] bg-bronze/30 transition-all duration-500 group-hover:h-full group-hover:bg-bronze" />
                </div>

                {/* Header: Phase Watermark + Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl sm:text-6xl font-light text-beige/15 select-none transition-all duration-500 group-hover:text-bronze/80 group-hover:scale-105 origin-left">
                    {step.phase}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/5 border border-beige/10 text-bronze transition-all duration-500 group-hover:bg-bronze group-hover:text-charcoal group-hover:rotate-6">
                    <Icon className="h-4 w-4 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-bronze">
                    {step.tagline}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-beige font-normal tracking-wide">
                    {step.title}
                  </h3>

                  {/* Progressive glowing underline */}
                  <div className="mt-4 h-[1px] w-12 bg-bronze/40 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-bronze shadow-sm" />

                  <p className="mt-4 text-xs leading-relaxed text-beige/70 font-light group-hover:text-beige/90 transition-colors duration-300">
                    {step.caption}
                  </p>
                </div>

                {/* Bottom Architectural Phase Tag */}
                <div className="mt-8 pt-4 border-t border-beige/10 flex items-center justify-between text-[0.65rem] text-beige/50 font-mono uppercase tracking-wider">
                  <span>Phase {step.phase}</span>
                  <span className="text-bronze/80 font-sans tracking-widest text-[0.6rem] font-semibold">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
