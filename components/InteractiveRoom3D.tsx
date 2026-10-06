"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sun, Sunset, Moon, Compass, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

type LightingMood = "morning" | "golden" | "twilight";

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  material: string;
  spec: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "wall",
    x: 28,
    y: 35,
    title: "Limewash Wall Surface",
    material: "Natural Mineral Plaster",
    spec: "Non-toxic, velvet matte sheen with subtle daylight absorption",
  },
  {
    id: "wood",
    x: 68,
    y: 50,
    title: "Fluted Millwork Screen",
    material: "Sustainably Aged White Oak",
    spec: "Precision CNC milled with hand-oiled organic wax finish",
  },
  {
    id: "lighting",
    x: 48,
    y: 22,
    title: "Concealed Perimeter Light",
    material: "2400K Architectural LED Cove",
    spec: "Indirect glare-free illumination integrated into ceiling shadow reveals",
  },
  {
    id: "stone",
    x: 80,
    y: 75,
    title: "Monolithic Plinth",
    material: "Honed Roman Travertine",
    spec: "Hand-cut slab imported from Tivoli, unsealed matte face",
  },
];

export default function InteractiveRoom3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mood, setMood] = useState<LightingMood>("golden");
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[1]);

  // Mouse motion values normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Perspective transforms for the room stage
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Multi-layer parallax offsets (depth layers)
  const bgX = useTransform(smoothX, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ["-3%", "3%"]);

  const fgX = useTransform(smoothX, [-0.5, 0.5], ["6%", "-6%"]);
  const fgY = useTransform(smoothY, [-0.5, 0.5], ["6%", "-6%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="bg-charcoal text-beige py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bronze/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-beige/10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              <Compass className="h-3.5 w-3.5" />
              Interactive 3D Spatial Study
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-beige">
              Experience Room Depth &amp; Lighting
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-beige/70 max-w-xl">
              Move your cursor across the room to explore layered 3D depth, toggle natural daylight angles, and inspect material specifications.
            </p>
          </div>

          {/* Lighting Mood Controls */}
          <div className="flex items-center gap-2 bg-espresso/80 p-1.5 border border-beige/20 shadow-inner">
            <button
              type="button"
              onClick={() => setMood("morning")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-all",
                mood === "morning"
                  ? "bg-bronze text-beige shadow-md font-semibold"
                  : "text-beige/60 hover:text-beige hover:bg-white/5"
              )}
            >
              <Sun className="h-3.5 w-3.5 text-amber-300" />
              Morning
            </button>
            <button
              type="button"
              onClick={() => setMood("golden")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-all",
                mood === "golden"
                  ? "bg-bronze text-beige shadow-md font-semibold"
                  : "text-beige/60 hover:text-beige hover:bg-white/5"
              )}
            >
              <Sunset className="h-3.5 w-3.5 text-orange-400" />
              Golden Hour
            </button>
            <button
              type="button"
              onClick={() => setMood("twilight")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-all",
                mood === "twilight"
                  ? "bg-bronze text-beige shadow-md font-semibold"
                  : "text-beige/60 hover:text-beige hover:bg-white/5"
              )}
            >
              <Moon className="h-3.5 w-3.5 text-beige/80" />
              Twilight
            </button>
          </div>
        </div>

        {/* 3D Interactive Room Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mt-12 aspect-[16/10] sm:aspect-[16/9] w-full max-h-[620px] overflow-hidden border border-beige/15 shadow-2xl cursor-crosshair group"
          style={{ perspective: 1400 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{ duration: 0.1 }}
            className="relative h-full w-full"
          >
            {/* Layer 1: Background Room (Depth: 0px) */}
            <motion.div
              style={{ x: bgX, y: bgY }}
              className="absolute inset-[-4%] h-[108%] w-[108%]"
            >
              <Image
                src="/images/hero.jpg"
                alt="3D Spatial room depth view"
                fill
                sizes="100vw"
                className="object-cover transition-filter duration-700"
              />
            </motion.div>

            {/* Layer 2: Dynamic Lighting Mood Overlays */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-700 pointer-events-none mix-blend-color-burn",
                mood === "morning" && "bg-amber-950/20 opacity-50",
                mood === "golden" && "bg-amber-900/40 opacity-70",
                mood === "twilight" && "bg-charcoal/70 opacity-80"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 transition-all duration-700 pointer-events-none mix-blend-overlay",
                mood === "morning" && "bg-gradient-to-tr from-transparent via-amber-100/20 to-amber-50/30",
                mood === "golden" && "bg-gradient-to-tr from-transparent via-amber-500/25 to-orange-400/40",
                mood === "twilight" && "bg-gradient-to-t from-espresso via-charcoal/40 to-espresso/70"
              )}
            />

            {/* Layer 3: Architectural Foreground Framing & Depth Element */}
            <motion.div
              style={{
                x: fgX,
                y: fgY,
                transform: "translateZ(40px)",
              }}
              className="absolute inset-0 pointer-events-none border-[16px] md:border-[24px] border-charcoal/20"
            />

            {/* Layer 4: Interactive Material Hotspots */}
            <div
              className="absolute inset-0 z-20"
              style={{ transform: "translateZ(60px)" }}
            >
              {HOTSPOTS.map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-2 group/spot focus:outline-none"
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span
                        className={cn(
                          "absolute inline-flex h-full w-full rounded-full opacity-75 transition-all duration-300",
                          isSelected ? "animate-ping bg-bronze" : "bg-white/40 group-hover/spot:bg-bronze"
                        )}
                      />
                      <span
                        className={cn(
                          "relative inline-flex h-4 w-4 rounded-full border border-white items-center justify-center shadow-lg transition-transform",
                          isSelected ? "bg-bronze scale-125" : "bg-charcoal/90 group-hover/spot:scale-110"
                        )}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-beige" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Layer 5: Floating Depth Badge Indicator */}
            <div
              className="absolute bottom-6 left-6 z-20 bg-espresso/90 border border-beige/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-beige/90 backdrop-blur-md hidden sm:flex items-center gap-2"
              style={{ transform: "translateZ(50px)" }}
            >
              <Eye className="h-3.5 w-3.5 text-bronze" />
              <span>3D Gyro Perspective Active</span>
            </div>
          </motion.div>

          {/* Active Hotspot Inspector Card (Pinned in Bottom-Right) */}
          {activeHotspot && (
            <motion.div
              key={activeHotspot.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 right-6 z-30 max-w-xs sm:max-w-sm bg-beige text-charcoal p-5 border border-charcoal/20 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-2 border-b border-charcoal/10 pb-2 mb-2">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-bronze">
                  Material Detail
                </span>
                <span className="text-[0.6rem] text-charcoal/50 uppercase tracking-wider">
                  Verified Spec
                </span>
              </div>
              <h4 className="font-serif text-lg font-medium text-charcoal leading-snug">
                {activeHotspot.title}
              </h4>
              <p className="mt-1 text-xs font-semibold text-bronze">
                {activeHotspot.material}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-charcoal/70">
                {activeHotspot.spec}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
