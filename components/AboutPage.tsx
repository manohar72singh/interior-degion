"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "10+", label: "Years of Practice" },
  { value: "180+", label: "Projects Completed" },
  { value: "4", label: "Countries" },
  { value: "32", label: "Design Awards" },
];

const TEAM = [
  {
    name: "Eleanor Voss",
    role: "Founding Principal & Creative Director",
    image: "/images/philosophy.jpg",
    bio: "Eleanor leads the studio's creative vision with a background in architecture from the Royal College of Art, London.",
  },
  {
    name: "James Alderton",
    role: "Principal Architect",
    image: "/images/project-1.jpg",
    bio: "James oversees structural design and spatial planning, bringing 15 years of high-end residential architecture experience.",
  },
  {
    name: "Sofia Marini",
    role: "Senior Interior Designer",
    image: "/images/project-3.jpg",
    bio: "Sofia specializes in material sourcing and bespoke furniture, with a deep passion for artisanal craft and texture.",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Craft Over Trend",
    body: "We choose honest, timeless materials — white oak, limewash, raw brass — that age beautifully and outlast passing fashions.",
  },
  {
    number: "02",
    title: "People First",
    body: "Every home begins with listening. We design around how you actually live, not around how a showroom should look.",
  },
  {
    number: "03",
    title: "One Point of View",
    body: "Each project is led by a single principal designer from first sketch to final install, ensuring a coherent, considered result.",
  },
  {
    number: "04",
    title: "Quiet Confidence",
    body: "Luxury doesn't announce itself. We create spaces of calm restraint — refined, not over-decorated.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Housen & Co. studio interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
        <div className="relative z-10 container pb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs font-medium uppercase tracking-[0.4em] text-bronze"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-3 font-serif text-5xl font-medium text-beige sm:text-6xl md:text-7xl"
          >
            About Housen <span className="font-sans font-bold">&amp;</span> Co.
          </motion.h1>
        </div>
      </section>

      {/* ── Studio Story ── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
              Who We Are
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              A studio built on craft and quiet confidence.
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/70">
              Founded by a small team of architects and interior designers,
              Housen <span className="font-bold">&amp;</span> Co. began with a simple conviction: that a home
              should be built around how its owners actually live, not around
              trends. Over the past decade we&apos;ve grown into a full-service
              studio spanning architecture, interiors, and bespoke furniture —
              while holding onto the same hands-on, detail-first approach we
              started with.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal/70">
              Every project is led by a principal designer from first sketch to
              final install, ensuring a single, considered point of view carries
              through the entire home.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-bronze hover:gap-3 transition-all duration-300"
            >
              Start a conversation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="order-1 relative aspect-[4/5] w-full overflow-hidden rounded-sm md:order-2"
          >
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-sofa-and-a-tv-4285-large.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-espresso py-12 md:py-16">
        <div className="container grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <span className="font-serif text-5xl font-light text-beige md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-bronze">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-beige py-12 md:py-16">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
              Our Principles
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium text-charcoal sm:text-5xl">
              What we believe.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                className="border-t border-charcoal/15 pt-6"
              >
                <span className="font-serif text-3xl font-light text-bronze">
                  {v.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
              The Team
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium text-charcoal sm:text-5xl">
              The people behind the spaces.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
                className="group"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-5">
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-bronze">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-espresso py-12 md:py-16">
        <motion.div
          {...fadeUp}
          className="container flex flex-col items-center text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            Let&apos;s Work Together
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-beige sm:text-5xl md:text-6xl">
            Ready to start your project?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-beige/70">
            Tell us about your vision and we&apos;ll be in touch within two
            business days.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 border border-bronze px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-beige transition-all duration-300 hover:bg-bronze hover:gap-4"
          >
            Get in Touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
