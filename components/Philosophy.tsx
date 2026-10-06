"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Spatial Harmony",
    desc: "Balancing proportions, acoustic flow, and natural light to elevate daily rituals.",
    number: "01",
  },
  {
    icon: Layers,
    title: "Tactile Materials",
    desc: "Authentic limewash, raw oak, and hand-forged brass that age with grace.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Architectural Precision",
    desc: "Rigorous detail management from initial structural drawings to final bespoke millwork.",
    number: "03",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax float values
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative bg-beige flex flex-col justify-center py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative vertical editorial grid lines */}
      <div className="absolute inset-0 pointer-events-none container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-20">
        <div className="border-l border-charcoal/30 h-full" />
        <div className="border-l border-charcoal/30 h-full hidden md:block" />
        <div className="border-l border-charcoal/30 h-full hidden lg:block" />
        <div className="border-l border-r border-charcoal/30 h-full hidden lg:block" />
      </div>

      <div className="container relative z-10 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          {/* Text Content Block with Parallax floating card */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full lg:w-5/12 lg:z-20 bg-cream/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-2xl shadow-charcoal/5 lg:-mr-16"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="h-3 w-3 text-bronze" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
                Our Philosophy
              </span>
            </div>

            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-charcoal sm:text-5xl md:text-6xl">
              Design that listens before it speaks.
            </h2>
            <p className="mt-7 font-sans text-base leading-relaxed text-charcoal/75 font-light">
              We believe every space should be a quiet reflection of the people
              who live in it. Our studio pairs architectural rigor with a
              considered, tactile approach to materials — resulting in homes
              that feel inevitable, never imposed.
            </p>

            {/* Quick Metrics with Subtle Hover Illumination */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-charcoal/10 py-6">
              <div className="group cursor-default">
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl transition-transform duration-300 inline-block group-hover:-translate-y-0.5">
                  150+
                </span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">
                  Spaces
                </p>
              </div>
              <div className="group cursor-default">
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl transition-transform duration-300 inline-block group-hover:-translate-y-0.5">
                  12+
                </span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">
                  Awards
                </p>
              </div>
              <div className="group cursor-default">
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl transition-transform duration-300 inline-block group-hover:-translate-y-0.5">
                  100%
                </span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">
                  Bespoke
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-bronze hover:text-charcoal transition-colors"
              >
                Learn Our Story
                <ArrowUpRight className="h-4 w-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/projects"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70 hover:text-bronze transition-colors"
              >
                Explore Works
              </Link>
            </div>
          </motion.div>

          {/* Editorial Parallax Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 }}
            className="group w-full lg:w-8/12 relative aspect-[4/3] overflow-hidden rounded-none shadow-2xl"
          >
            {/* Parallax Moving Image Container */}
            <motion.div
              style={{ y: imageY }}
              className="relative h-[115%] w-full -top-[7.5%]"
            >
              <Image
                src="/images/philosophy.jpg"
                alt="Luxury interior design by Housen & Co."
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/10 pointer-events-none" />

            {/* Bottom Floating Luxury Caption Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-beige text-xs uppercase tracking-[0.2em] font-medium bg-charcoal/60 backdrop-blur-md px-6 py-3.5 border border-beige/15 shadow-lg">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                Bespoke Interior Craft
              </span>
              <span className="text-bronze font-serif lowercase italic text-sm tracking-normal">
                housen &amp; co.
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Design Pillars with Micro-Transitions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-charcoal/15 pt-12">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative p-7 bg-cream/70 border border-charcoal/10 hover:border-bronze/50 hover:bg-cream hover:shadow-xl transition-all duration-500 group hover:-translate-y-1.5"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent transition-colors duration-300 group-hover:bg-bronze" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze/10 text-bronze group-hover:bg-bronze group-hover:text-beige transition-all duration-300 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-xl text-charcoal/20 font-light group-hover:text-bronze/60 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-charcoal font-medium">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70 font-light group-hover:text-charcoal/90 transition-colors">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
