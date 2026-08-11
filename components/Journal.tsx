"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const POSTS = [
  {
    title: "Choosing Materials That Age Gracefully",
    excerpt:
      "Why we favour honest, tactile materials — limewash, white oak, raw brass — that only grow richer with time.",
    image:
      "/images/journal-1.jpg",
  },
  {
    title: "The Case for Quiet Luxury in the Home",
    excerpt:
      "Restraint, proportion, and craft over ornament — notes from a decade of designing considered interiors.",
    image:
      "/images/journal-2.jpg",
  },
  {
    title: "Inside a Coastal Renovation, Two Years On",
    excerpt:
      "Revisiting the Marrow House to see how the materials, light, and layout have settled into daily life.",
    image:
      "/images/journal-3.jpg",
  },
];

export default function Journal() {
  const [active, setActive] = useState(0);

  return (
    <section id="journal" className="bg-cream py-10 md:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
            Journal
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Notes on design <span className="font-sans font-bold">&amp;</span> living.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
              onViewportEnter={() => setActive(index)}
              className="group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-serif text-xl text-charcoal">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="group/link mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-bronze"
              >
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-2">
          {POSTS.map((post, index) => (
            <span
              key={post.title}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-bronze" : "w-1.5 bg-charcoal/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
