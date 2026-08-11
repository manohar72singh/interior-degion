"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-cream py-12 md:py-16">
      <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
            About Us
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            A studio built on craft and quiet confidence.
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal/70">
            Founded by a small team of architects and interior designers,
            Housen <span className="font-bold">&amp;</span> Co. began with a simple conviction: that a home
            should be built around how its owners actually live, not around
            trends. Over the past decade we&apos;ve grown into a full-service
            studio spanning architecture, interiors, and bespoke furniture —
            while holding onto the same hands-on, detail-first approach we
            started with.
          </p>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-charcoal/70">
            Every project is led by a principal designer from first sketch to
            final install, ensuring a single, considered point of view
            carries through the entire home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="order-1 relative aspect-[4/5] w-full overflow-hidden rounded-sm md:order-2"
        >
          <Image
            src="/images/about.jpg"
            alt="Housen & Co. design team reviewing plans in the studio"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
