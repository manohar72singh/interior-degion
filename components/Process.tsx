"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Discover",
    caption: "We begin with a conversation — your story, your site, your way of living.",
  },
  {
    title: "Design",
    caption: "Concepts, materials, and drawings are refined until every detail feels right.",
  },
  {
    title: "Deliver",
    caption: "Our team oversees production and installation, down to the final styling touch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-charcoal flex flex-col justify-center py-10 md:py-14 text-beige overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            The Process
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            How we bring a space to life.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-start gap-y-8 sm:grid-cols-3 sm:gap-x-12">
          {STEPS.map((step, index) => {
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Massive Watermark Number */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[120px] leading-none text-beige/5 select-none transition-colors duration-700 group-hover:text-bronze/10">
                  0{index + 1}
                </div>
                
                <div className="relative z-10 mt-8">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
                    Phase {index + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl text-beige">
                    {step.title}
                  </h3>
                  <div className="mt-6 h-px w-12 bg-bronze/30 mx-auto transition-all duration-500 group-hover:w-24 group-hover:bg-bronze" />
                  <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-beige/70 mx-auto">
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
