"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Award, CheckCircle2 } from "lucide-react";
import ThreeDTiltCard from "@/components/ThreeDTiltCard";

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
    bio: "Eleanor leads the studio's creative vision with a background in architecture from the Royal College of Art, London. She oversees all residential master planning.",
  },
  {
    name: "James Alderton",
    role: "Principal Architect",
    image: "/images/project-1.jpg",
    bio: "James oversees structural design and spatial planning, bringing 15 years of high-end residential architecture and heritage restoration experience.",
  },
  {
    name: "Sofia Marini",
    role: "Senior Interior Designer",
    image: "/images/project-3.jpg",
    bio: "Sofia specializes in material sourcing and bespoke furniture fabrication, with a deep passion for artisanal European craft, stone quarries, and natural textures.",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Craft Over Trend",
    body: "We choose honest, tactile materials — white oak, limewash, raw brass — that age beautifully and outlast passing fashions.",
  },
  {
    number: "02",
    title: "People First",
    body: "Every home begins with listening. We design around how you actually live, not around how a sterile showroom looks.",
  },
  {
    number: "03",
    title: "One Point of View",
    body: "Each project is led by a single principal designer from first sketch to final install, ensuring a coherent, considered result.",
  },
  {
    number: "04",
    title: "Quiet Confidence",
    body: "Luxury doesn't announce itself. We create spaces of calm restraint — deeply refined, tactile, and never over-decorated.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
};

export default function AboutPage() {
  return (
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/about.jpg"
          alt="Housen & Co. studio interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/65 to-espresso/35" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              <Link href="/" className="hover:text-beige transition-colors">Home</Link>
              <span>/</span>
              <span>Our Story</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              About Housen <span className="font-sans font-bold text-bronze">&amp;</span> Co.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              A studio founded on architectural rigor, tactile materiality, and a quiet, uncompromising dedication to timeless spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Studio Story ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div {...fadeUp} className="order-2 lg:order-1 lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              Who We Are
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-charcoal">
              A studio built on craft and quiet confidence.
            </h2>
            <div className="mt-6 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-charcoal/75">
              <p>
                Founded by a dedicated team of architects and interior designers,
                Housen <span className="font-bold">&amp;</span> Co. began with a simple conviction: that a home
                should be built around how its owners actually live, not around fleeting trends.
              </p>
              <p>
                Over the past decade, we have grown into an internationally recognized studio spanning residential architecture, interior design, and bespoke furniture craft — while holding steadfastly to the hands-on, detail-first philosophy we started with.
              </p>
              <p>
                Every project is directed by a founding principal from initial site analysis and CAD drawings through final white-glove styling day.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-bronze px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-charcoal shadow-sm"
              >
                Start A Conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal hover:text-bronze transition-colors"
              >
                View Works <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-2 lg:col-span-6 relative aspect-[4/5] w-full overflow-hidden border border-charcoal/10 shadow-xl"
          >
            <Image
              src="/images/philosophy.jpg"
              alt="Housen & Co. studio craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-espresso py-16 md:py-20 text-beige border-y border-beige/10">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 border-l first:border-l-0 border-beige/15"
            >
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-beige">
                {stat.value}
              </span>
              <span className="mt-3 text-[0.65rem] sm:text-xs font-medium uppercase tracking-[0.25em] text-bronze">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Principles / Values ── */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              Our Principles
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
              What guides every design decision.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                className="bg-white/60 border border-charcoal/10 p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-4xl font-light text-bronze">
                    {v.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-charcoal/70">
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Showcase ── */}
      <section className="bg-cream py-20 md:py-28 border-t border-charcoal/10">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              Leadership &amp; Studio Direction
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
              The architects behind the spaces.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <ThreeDTiltCard key={member.name} tiltIntensity={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
                  className="bg-white border border-charcoal/10 overflow-hidden shadow-sm h-full flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-medium text-charcoal">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-charcoal/70">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-espresso text-beige py-20 md:py-24 text-center">
        <motion.div {...fadeUp} className="container max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Work With Us
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-beige">
            Ready to commission your space?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            Tell us about your property and architectural vision. We will be in touch within two business days.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-colors hover:bg-beige hover:text-charcoal shadow-md"
            >
              Begin Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
