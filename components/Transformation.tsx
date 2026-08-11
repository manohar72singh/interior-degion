"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Transformation() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="bg-charcoal py-16 md:py-24 text-beige relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-bronze/10 px-4 py-1.5 border border-bronze/30 text-bronze mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
              Architectural Transformation
            </span>
          </div>
          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            From raw potential to luxury sanctuary.
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-beige/70">
            Drag the slider below to witness how our studio reimagines structure, lighting, and material palettes to transform spaces into architectural masterpieces.
          </p>
        </motion.div>

        {/* Interactive Drag Comparison Container */}
        <div className="relative mt-12 aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded-none shadow-2xl border border-beige/20 select-none">
          {/* AFTER Image (Background - Completed Luxury Bedroom) */}
          <Image
            src="/images/hero.jpg"
            alt="Completed luxury bedroom design"
            fill
            className="object-cover"
          />

          {/* BEFORE Image (Clipped Overlay - Renovation view) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <Image
              src="/images/philosophy.jpg"
              alt="Raw space before renovation"
              fill
              className="object-cover max-w-none"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Darker overlay on the Before image to emphasize contrast */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Vertical Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-bronze z-20 shadow-2xl pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-bronze text-beige flex items-center justify-center shadow-xl border-2 border-beige font-bold text-xs">
              ↔
            </div>
          </div>

          {/* Labels */}
          <span className="absolute bottom-6 left-6 z-20 bg-charcoal/80 backdrop-blur-md px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-beige border border-beige/20">
            TV Wall Feature View
          </span>
          <span className="absolute bottom-6 right-6 z-20 bg-bronze/90 backdrop-blur-md px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-beige border border-beige/20">
            Luxury Bedroom View
          </span>

          {/* Hidden Range Input overlay for dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            aria-label="Drag to compare before and after"
          />
        </div>
      </div>
    </section>
  );
}
