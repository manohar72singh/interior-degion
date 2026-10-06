"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Spatial Harmony",
    desc: "Balancing proportions, acoustic flow, and natural light to elevate daily rituals.",
  },
  {
    icon: Layers,
    title: "Tactile Materials",
    desc: "Authentic limewash, raw oak, and hand-forged brass that age with grace.",
  },
  {
    icon: ShieldCheck,
    title: "Architectural Precision",
    desc: "Rigorous detail management from initial structural drawings to final bespoke millwork.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-beige flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      {/* Decorative vertical editorial grid lines */}
      <div className="absolute inset-0 pointer-events-none container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-20">
        <div className="border-l border-charcoal/30 h-full" />
        <div className="border-l border-charcoal/30 h-full hidden md:block" />
        <div className="border-l border-charcoal/30 h-full hidden lg:block" />
        <div className="border-l border-r border-charcoal/30 h-full hidden lg:block" />
      </div>

      <div className="container relative z-10 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full lg:w-5/12 lg:z-20 bg-beige/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-2xl shadow-charcoal/5 lg:-mr-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
              Our Philosophy
            </span>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
              Design that listens before it speaks.
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed text-charcoal/75 font-light">
              We believe every space should be a quiet reflection of the people
              who live in it. Our studio pairs architectural rigor with a
              considered, tactile approach to materials — resulting in homes
              that feel inevitable, never imposed.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-charcoal/10 py-6">
              <div>
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl">150+</span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">Spaces</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl">12+</span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">Awards</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-medium text-bronze sm:text-3xl">100%</span>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-charcoal/60">Bespoke</p>
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

          {/* Editorial Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="group w-full lg:w-8/12 relative aspect-[4/3] overflow-hidden rounded-none shadow-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/philosophy.jpg"
                alt="Luxury bedroom interior featuring wall-mounted TV console and abstract wall art"
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-espresso/25 transition-colors duration-500 group-hover:bg-espresso/10" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-beige text-xs uppercase tracking-[0.2em] font-medium bg-charcoal/40 backdrop-blur-md px-6 py-3 border border-beige/10">
              <span>Bespoke Interior Craft</span>
              <span className="text-bronze">Housen &amp; Co.</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Design Pillars */}
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
                className="p-6 bg-cream/50 border border-charcoal/10 hover:border-bronze/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-bronze/10 text-bronze group-hover:bg-bronze group-hover:text-beige transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl text-charcoal">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
