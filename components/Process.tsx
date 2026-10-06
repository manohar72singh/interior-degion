"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    phase: "01",
    title: "Discover",
    tagline: "Vision & Site Analysis",
    caption: "In-depth consultation, spatial lifestyle mapping, daylight evaluation, and aesthetic alignment.",
  },
  {
    phase: "02",
    title: "Design",
    tagline: "3D Spatial Modeling",
    caption: "Photorealistic 3D visualization, tactile material boards, custom architectural drawings, and lighting plans.",
  },
  {
    phase: "03",
    title: "Craft",
    tagline: "Artisan Fabrication",
    caption: "Master artisan fabrication, bespoke millwork joinery, and ethical sourcing of rare natural stones and timbers.",
  },
  {
    phase: "04",
    title: "Deliver",
    tagline: "Turnkey Styling",
    caption: "White-glove installation, curated art staging, acoustic balancing, and seamless turnkey handover.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-charcoal flex flex-col justify-center py-16 md:py-24 text-beige overflow-hidden relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-bronze/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            The Atelier Process
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            How we bring a space to life.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-beige/70 leading-relaxed font-light">
            Every bespoke environment progresses through four rigorous phases of architectural discipline and artistic curation.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1], delay: index * 0.12 }}
                className="relative flex flex-col justify-between p-6 bg-beige/5 border border-beige/10 transition-all duration-500 hover:border-bronze/40 hover:bg-beige/[0.08] group"
              >
                {/* Large Watermark Phase Number */}
                <div className="font-serif text-5xl font-light text-beige/20 select-none transition-colors duration-500 group-hover:text-bronze">
                  {step.phase}
                </div>

                <div className="relative z-10 mt-6">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-bronze">
                    {step.tagline}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-beige font-normal">
                    {step.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-bronze/40 transition-all duration-500 group-hover:w-full group-hover:bg-bronze" />
                  <p className="mt-4 text-xs leading-relaxed text-beige/75 font-light">
                    {step.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
