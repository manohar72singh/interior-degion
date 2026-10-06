"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const PRESS = [
  "ARCHITECTURAL DIGEST",
  "ELLE DECOR",
  "VOGUE LIVING",
  "THE WALL STREET JOURNAL",
  "VERANDA",
];

const REVIEWS = [
  {
    quote:
      "Housen & Co. completely redefined how we experience our home. Their balance of architectural restraint and tactile warmth is unmatched. Every room feels like a museum piece, yet remains exceptionally livable.",
    author: "Harrison & Victoria Vance",
    location: "Charleston Residence",
    rating: 5,
  },
  {
    quote:
      "Working with their studio was seamless from concept drawings to the final white-glove installation day. Their custom furniture fabrication brought an artisanal rarity to our penthouse that guests compliment constantly.",
    author: "Elena Rostova",
    location: "Manhattan Penthouse",
    rating: 5,
  },
  {
    quote:
      "The level of spatial planning and material curatorship they brought to our coastal villa was extraordinary. They understood our intention before we could even articulate it.",
    author: "Marcus & Claire Sterling",
    location: "Kiawah Island Estate",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto glide reviews every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-beige py-20 md:py-28 relative overflow-hidden border-t border-charcoal/10">
      <div className="container relative z-10">
        {/* Press Badges Bar */}
        <div className="border-b border-charcoal/15 pb-12 text-center">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-bronze">
            Featured In Premier Publications
          </span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75">
            {PRESS.map((press) => (
              <span
                key={press}
                className="font-serif text-xs sm:text-sm font-semibold tracking-[0.25em] text-charcoal/80 hover:text-bronze transition-colors duration-300 cursor-default"
              >
                {press}
              </span>
            ))}
          </div>
        </div>

        {/* Client Testimonial Carousel with AnimatePresence & Pause on Hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6 text-bronze">
            <Quote className="h-12 w-12 opacity-35 stroke-[1.5]" />
          </div>

          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
                className="px-4"
              >
                <div className="flex justify-center gap-1.5 mb-6 text-bronze">
                  {[...Array(REVIEWS[current].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current drop-shadow-sm" />
                  ))}
                </div>

                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-charcoal italic max-w-3xl mx-auto">
                  &ldquo;{REVIEWS[current].quote}&rdquo;
                </p>

                <div className="mt-8">
                  <p className="font-serif text-lg font-medium text-charcoal">
                    {REVIEWS[current].author}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-bronze mt-1 font-semibold">
                    {REVIEWS[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Animated Indicator */}
          <div className="mt-12 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-bronze hover:border-bronze hover:text-beige transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === current ? "w-8 bg-bronze" : "w-2 bg-charcoal/25 hover:bg-charcoal/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-bronze hover:border-bronze hover:text-beige transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
