"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function Transformation() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isInteracted, setIsInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  // Luxury Auto-Peek demonstration animation on first scroll into view
  useEffect(() => {
    if (isInView && !isInteracted) {
      const t1 = setTimeout(() => {
        setSliderPos(34);
      }, 500);
      const t2 = setTimeout(() => {
        setSliderPos(66);
      }, 1400);
      const t3 = setTimeout(() => {
        setSliderPos(50);
      }, 2300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isInView, isInteracted]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInteracted(true);
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="bg-beige py-20 md:py-28 text-charcoal relative overflow-hidden border-t border-charcoal/10">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-bronze/10 px-4 py-1.5 border border-bronze/30 text-bronze mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
              Architectural Transformation
            </span>
          </div>
          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl text-charcoal">
            From raw potential to luxury sanctuary.
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-charcoal/70 font-light">
            Slide horizontally to witness how our studio reimagines structure, lighting, and material palettes to transform spaces into bespoke architectural masterpieces.
          </p>
        </motion.div>

        {/* Interactive Drag Comparison Container */}
        <div
          ref={containerRef}
          className="relative mt-12 aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden shadow-2xl border border-charcoal/15 select-none group"
        >
          {/* AFTER Image (Background - Completed Luxury Bedroom) */}
          <Image
            src="/images/hero.jpg"
            alt="Completed luxury bedroom design"
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />

          {/* BEFORE Image (Clipped Overlay - Raw view) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: `${sliderPos}%`,
              transition: isInteracted
                ? "none"
                : "width 0.9s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <Image
              src="/images/philosophy.jpg"
              alt="Raw space before renovation"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover max-w-none"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Subtle architectural tint on the Before image to emphasize contrast */}
            <div className="absolute inset-0 bg-espresso/20" />
          </div>

          {/* Vertical Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-bronze z-20 shadow-[0_0_12px_rgba(166,124,61,0.8)] pointer-events-none"
            style={{
              left: `${sliderPos}%`,
              transition: isInteracted
                ? "none"
                : "left 0.9s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {/* Circular Handle with Glowing Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Subtle pulsing pulse ring */}
              <div className="absolute h-12 w-12 rounded-full bg-bronze/30 animate-ping opacity-60" />
              
              <div className="relative h-11 w-11 rounded-full bg-charcoal text-beige flex items-center justify-center shadow-2xl border-2 border-bronze transition-transform duration-200 group-hover:scale-110">
                <MoveHorizontal className="h-4 w-4 text-bronze" />
              </div>
            </div>
          </div>

          {/* Floating Pill Badges */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-cream/90 backdrop-blur-md px-4 py-2 border border-charcoal/15 shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal/60" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-charcoal">
              Original Architecture
            </span>
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-charcoal/90 backdrop-blur-md px-4 py-2 border border-bronze/30 shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-beige">
              Bespoke Overhaul
            </span>
          </div>

          {/* Top Instruction Tag */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-charcoal/70 backdrop-blur-md px-4 py-1.5 border border-beige/15 text-[0.6rem] font-medium uppercase tracking-[0.25em] text-beige/90 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            Drag to compare
          </div>

          {/* Range Input overlay for full interactive touch / drag */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onPointerDown={() => setIsInteracted(true)}
            onTouchStart={() => setIsInteracted(true)}
            onChange={handleSliderChange}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            aria-label="Drag to compare original architecture with bespoke overhaul"
          />
        </div>
      </div>
    </section>
  );
}
