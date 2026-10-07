"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import gsap from "gsap";

/**
 * Hero - 5-Frame Architectural Evolution Showcase
 * 
 * Images used from public/frame:
 *  - Frame 1: /frame/1.png (Graphite Sketch / Concept)
 *  - Frame 2: /frame/2.png (Monochrome Shaded Study)
 *  - Frame 3: /frame/3.png (Warm Light & Spatial Model)
 *  - Frame 4: /frame/4.png (Realistic Material Simulation)
 *  - Frame 5: /frame/5.png (Final Luxury Living Room Masterpiece)
 * 
 * Rules:
 *  1. One scroll gesture = exactly 1 frame.
 *  2. Screen 100% physically locked until Frame 5 finishes.
 *  3. On Frame 5, scrolling down unlocks page and scrolls to #philosophy.
 *  4. Fully responsive on mobile, tablet, and desktop.
 */
export default function Hero() {
  const [activeFrame, setActiveFrame] = useState(1);
  const [hasExitedHero, setHasExitedHero] = useState(false);
  const currentFrameRef = useRef(1);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef(0);

  // Image layer refs (5 frames)
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);
  const imgLayers = [img1Ref, img2Ref, img3Ref, img4Ref, img5Ref];

  // Screen text refs (5 frames)
  const f1Ref = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const f2Ref = useRef<HTMLDivElement>(null);
  const f3Ref = useRef<HTMLDivElement>(null);
  const f4Ref = useRef<HTMLDivElement>(null);
  const f5Ref = useRef<HTMLDivElement>(null);
  const textFrames = [f1Ref, f2Ref, f3Ref, f4Ref, f5Ref];

  // ── STRICT BODY SCROLL LOCK UNTIL FRAME 5 IS COMPLETE ───────
  useEffect(() => {
    if (!hasExitedHero) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [hasExitedHero]);

  // ── Re-lock when user scrolls all the way back to top ───────
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 5 && hasExitedHero) {
        setHasExitedHero(false);
        currentFrameRef.current = 5;
        setActiveFrame(5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasExitedHero]);

  // ── Frame Transition Engine ─────────────────────────────────
  const goToFrame = useCallback((target: number) => {
    if (target < 1 || target > 5 || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const prev = currentFrameRef.current;
    currentFrameRef.current = target;
    setActiveFrame(target);

    // Crossfade image layers (1 to 5)
    imgLayers.forEach((layerRef, idx) => {
      const frameNum = idx + 1;
      if (layerRef.current) {
        if (frameNum === target) {
          gsap.to(layerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(layerRef.current, {
            opacity: 0,
            scale: frameNum < target ? 1.04 : 0.98,
            duration: 0.65,
            ease: "power2.inOut",
          });
        }
      }
    });

    // Stamp badge visibility (Frame 1 only)
    if (stampRef.current) {
      gsap.to(stampRef.current, {
        opacity: target === 1 ? 1 : 0,
        scale: target === 1 ? 1 : 0.8,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    // Animate out previous text frames
    textFrames.forEach((tRef, idx) => {
      const frameNum = idx + 1;
      if (frameNum !== target && tRef.current) {
        gsap.to(tRef.current, {
          opacity: 0,
          y: frameNum < target ? -28 : 28,
          duration: 0.35,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    });

    // Animate in target text frame
    const nextTextRef = textFrames[target - 1];
    if (nextTextRef.current) {
      gsap.fromTo(
        nextTextRef.current,
        { opacity: 0, y: prev < target ? 28 : -28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.15,
          ease: "power2.out",
          pointerEvents: target === 1 || target === 5 ? "auto" : "none",
        }
      );
    }

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  }, [imgLayers, textFrames]);

  // Unlock and scroll to philosophy
  const exitHeroToPhilosophy = useCallback(() => {
    setHasExitedHero(true);
    setTimeout(() => {
      const el = document.getElementById("philosophy");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 60);
  }, []);

  // ── Wheel Interceptor (STRICT UNTIL FRAME 5) ────────────────
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (hasExitedHero) return;

      // Always prevent page scroll while in hero
      e.preventDefault();
      e.stopPropagation();

      if (Math.abs(e.deltaY) < 14 || isAnimatingRef.current) return;

      if (e.deltaY > 0) {
        // Scrolling DOWN
        if (currentFrameRef.current < 5) {
          goToFrame(currentFrameRef.current + 1);
        } else {
          // On Frame 5, user scrolls down -> unlock and proceed!
          exitHeroToPhilosophy();
        }
      } else if (e.deltaY < 0) {
        // Scrolling UP
        if (currentFrameRef.current > 1) {
          goToFrame(currentFrameRef.current - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { capture: true, passive: false });
    return () => window.removeEventListener("wheel", handleWheel, { capture: true });
  }, [hasExitedHero, goToFrame, exitHeroToPhilosophy]);

  // ── Touch Swipe Interceptor (Mobile / Tablet) ───────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (hasExitedHero || isAnimatingRef.current) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaY) < 40) return;

    if (deltaY > 0) {
      if (currentFrameRef.current < 5) {
        goToFrame(currentFrameRef.current + 1);
      } else {
        exitHeroToPhilosophy();
      }
    } else {
      if (currentFrameRef.current > 1) {
        goToFrame(currentFrameRef.current - 1);
      }
    }
  };

  // ── Keyboard Arrows & Page Keys ─────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasExitedHero) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (currentFrameRef.current < 5) {
          goToFrame(currentFrameRef.current + 1);
        } else {
          exitHeroToPhilosophy();
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentFrameRef.current > 1) {
          e.preventDefault();
          goToFrame(currentFrameRef.current - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasExitedHero, goToFrame, exitHeroToPhilosophy]);

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#121110] select-none"
      aria-label="Housen and Co Luxury Interior Design Evolution"
    >
      {/* ────────────────────────────────────────────────────────
          IMAGE LAYER 1: Graphite Sketch / Line Drawing
      ──────────────────────────────────────────────────────── */}
      <div
        ref={img1Ref}
        className="absolute inset-0 h-full w-full will-change-transform z-0"
      >
        <Image
          src="/frame/1.png"
          alt="Architectural graphite sketch of luxury living room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          IMAGE LAYER 2: Monochrome Shaded Study
      ──────────────────────────────────────────────────────── */}
      <div
        ref={img2Ref}
        className="absolute inset-0 h-full w-full will-change-transform z-[1] opacity-0"
      >
        <Image
          src="/frame/2.png"
          alt="Monochrome volumetric interior sketch and spatial study"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          IMAGE LAYER 3: Warm Lighting & Conceptual Model
      ──────────────────────────────────────────────────────── */}
      <div
        ref={img3Ref}
        className="absolute inset-0 h-full w-full will-change-transform z-[2] opacity-0"
      >
        <Image
          src="/frame/3.png"
          alt="Warm modern living room conceptual lighting and skyline view simulation"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          IMAGE LAYER 4: Material Realism & Joinery Simulation
      ──────────────────────────────────────────────────────── */}
      <div
        ref={img4Ref}
        className="absolute inset-0 h-full w-full will-change-transform z-[3] opacity-0"
      >
        <Image
          src="/frame/4.png"
          alt="Photorealistic modular interior refinement and material textures"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          IMAGE LAYER 5: The Final Living Room & Kitchen Masterpiece
      ──────────────────────────────────────────────────────── */}
      <div
        ref={img5Ref}
        className="absolute inset-0 h-full w-full will-change-transform z-[4] opacity-0"
      >
        <Image
          src="/frame/5.png"
          alt="Completed luxury living space and bespoke architectural interior"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          ATMOSPHERIC LIGHTING & VIGNETTE OVERLAYS
      ──────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-black/25" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/85 via-transparent to-black/45" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />

      {/* ════════════════════════════════════════════════════════
          FRAME 01: Concept Sketch & Brand Identity
      ════════════════════════════════════════════════════════ */}
      <div
        ref={f1Ref}
        className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center"
      >
        <div className="mb-3 sm:mb-4 inline-flex items-center gap-2.5 sm:gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
          <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-beige/90 drop-shadow">
            Phase 01 &mdash; Architectural Concept
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
        </div>

        <h1 className="my-1.5 sm:my-3 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.06em] sm:tracking-[0.08em] text-beige drop-shadow-2xl">
          HOUSEN <span className="font-sans font-bold text-bronze">&amp;</span> CO.
        </h1>

        <p className="mt-2 sm:mt-3 max-w-xl sm:max-w-2xl text-balance font-sans text-xs sm:text-base md:text-lg font-light text-beige/90 leading-relaxed drop-shadow-md">
          Luxury Interior &amp; Architecture Studio &mdash; transforming initial
          graphite concept sketches into bespoke, considered spatial masterworks.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 pointer-events-auto">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-bronze px-6 sm:px-8 py-3 sm:py-3.5 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-2xl transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Explore Selected Works
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-beige/40 bg-beige/10 px-6 sm:px-8 py-3 sm:py-3.5 backdrop-blur-md text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-beige hover:text-charcoal"
          >
            Book A Consultation
          </Link>
        </div>

        {/* Clickable Scroll Indicator */}
        <div
          onClick={() => goToFrame(2)}
          className="cursor-pointer absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group transition-transform hover:scale-105 pointer-events-auto"
        >
          <span className="mb-2 text-[0.52rem] sm:text-[0.55rem] font-medium uppercase tracking-[0.35em] text-beige/70 drop-shadow">
            Scroll to evolve design
          </span>
          <div className="h-8 sm:h-10 w-[1px] overflow-hidden bg-beige/30">
            <div className="h-full w-full bg-bronze animate-pulse" />
          </div>
        </div>
      </div>

      {/* Rotating Circular Stamp Badge (Frame 1 only) */}
      <div
        ref={stampRef}
        className="hidden md:block absolute bottom-10 right-10 lg:bottom-12 lg:right-12 z-10 pointer-events-none"
      >
        <div className="relative h-24 w-24 lg:h-28 lg:w-28 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-bronze drop-shadow">
            <defs>
              <path id="stamp-circle-hero-ev" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[8.5px] uppercase tracking-[0.24em] fill-current font-medium">
              <textPath href="#stamp-circle-hero-ev">TIMELESS • BESPOKE • ARCHITECTURAL •</textPath>
            </text>
          </svg>
          <span className="absolute text-base lg:text-lg text-bronze">&#10022;</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME 02: Volumetric Planning & Shading
      ════════════════════════════════════════════════════════ */}
      <div
        ref={f2Ref}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center opacity-0"
      >
        <p className="mb-2.5 sm:mb-3 font-sans text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.35em] sm:tracking-[0.45em] text-bronze drop-shadow">
          Phase 02 &mdash; Spatial Volumetrics
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-[0.06em] text-beige drop-shadow-2xl">
          MONOCHROME
          <br />
          <span className="font-sans font-light italic text-bronze">
            Spatial Study
          </span>
        </h2>

        <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm md:text-base font-light text-beige/90 max-w-lg mx-auto leading-relaxed drop-shadow-md">
          Establishing spatial depth, natural daylight orientation, and ergonomic furniture
          zones through precise tonal architectural rendering.
        </p>

        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-beige/80 drop-shadow">
          <span>Proportions</span>
          <span>&bull;</span>
          <span>Sightlines</span>
          <span>&bull;</span>
          <span>Acoustic Zones</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME 03: Warm Lighting & 3D Simulation
      ════════════════════════════════════════════════════════ */}
      <div
        ref={f3Ref}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center sm:items-start justify-center px-6 sm:px-12 lg:px-24 text-center sm:text-left opacity-0"
      >
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-bronze drop-shadow">
              Phase 03 &mdash; Ambient Lighting
            </span>
            <span className="h-px w-6 sm:w-8 bg-bronze/70 hidden sm:inline-block" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.06em] text-beige leading-tight drop-shadow-2xl">
            WARM
            <br />
            <span className="font-sans font-light italic text-bronze">ILLUMINATION</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm font-light leading-relaxed text-beige/90 drop-shadow-md max-w-md mx-auto sm:mx-0">
            Simulating warm amber cove illumination, bespoke timber ceiling louvers,
            and expansive panoramic floor-to-ceiling city views.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-beige/80 drop-shadow">
            <span>Ambient Daylight</span>
            <span>&bull;</span>
            <span>Cove Lighting</span>
            <span>&bull;</span>
            <span>Panoramic Vistas</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME 04: Material Realism & Precision Detail
      ════════════════════════════════════════════════════════ */}
      <div
        ref={f4Ref}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center sm:items-end justify-center px-6 sm:px-12 lg:px-24 text-center sm:text-right opacity-0"
      >
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="h-px w-6 sm:w-8 bg-bronze/70 hidden sm:inline-block" />
            <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-bronze drop-shadow">
              Phase 04 &mdash; Material Realism
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.06em] text-beige leading-tight drop-shadow-2xl">
            TEXTURE &amp;
            <br />
            <span className="font-sans font-light italic text-bronze">TACTILITY</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm font-light leading-relaxed text-beige/90 drop-shadow-md max-w-md mx-auto sm:ml-auto">
            Layering hand-selected Italian stone slabs, matte fluted cabinetry, and
            brushed bronze metal accents to preview the physical touch of luxury.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-center sm:justify-end gap-2.5 sm:gap-3 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-beige/80 drop-shadow">
            <span>Italian Marble</span>
            <span>&bull;</span>
            <span>Fluted Oak</span>
            <span>&bull;</span>
            <span>Brushed Bronze</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME 05: The Final Living Space & Action CTAs
      ════════════════════════════════════════════════════════ */}
      <div
        ref={f5Ref}
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-12 sm:pb-16 px-4 sm:px-6 text-center opacity-0 pointer-events-none"
      >
        <div className="max-w-2xl text-center pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="h-px w-8 sm:w-10 bg-bronze/60" />
            <p className="font-sans text-[0.58rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.35em] sm:tracking-[0.45em] text-bronze drop-shadow">
              Phase 05 &mdash; Turnkey Masterpiece
            </p>
            <span className="h-px w-8 sm:w-10 bg-bronze/60" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.06em] text-beige leading-tight drop-shadow-2xl">
            CRAFTED FOR GENERATIONS
          </h2>

          <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm font-light text-beige/90 max-w-lg mx-auto leading-relaxed drop-shadow-md">
            From the initial pencil stroke to the final bespoke finish. Every millimeter
            engineered to transform daily living into an architectural art form.
          </p>

          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-bronze px-6 sm:px-8 py-3 sm:py-3.5 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-2xl transition-all duration-300 hover:bg-beige hover:text-charcoal"
            >
              Explore Selected Works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-beige/40 bg-beige/10 px-6 sm:px-8 py-3 sm:py-3.5 backdrop-blur-md text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-beige hover:text-charcoal"
            >
              Book A Consultation
            </Link>
          </div>

          {/* Jump to philosophy button */}
          <div
            onClick={exitHeroToPhilosophy}
            className="mt-6 inline-flex items-center gap-1.5 cursor-pointer text-[0.55rem] uppercase tracking-[0.3em] text-beige/60 hover:text-beige transition-colors"
          >
            <span>Continue to Philosophy</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME PROGRESS COUNTER (Desktop + Tablet: 01 / 05)
      ════════════════════════════════════════════════════════ */}
      <div className="hidden sm:flex absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 pointer-events-auto">
        <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] text-beige/80">
          0{activeFrame}
        </span>
        <div className="flex flex-col gap-1.5 py-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => goToFrame(num)}
              title={`Jump to Phase 0${num}`}
              aria-label={`Jump to Phase 0${num}`}
              className={`w-1 rounded-full transition-all duration-300 cursor-pointer ${
                num === activeFrame
                  ? "h-5 bg-bronze"
                  : "h-1.5 bg-beige/30 hover:bg-beige/60"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[0.52rem] tracking-[0.15em] text-beige/40">
          05
        </span>
      </div>

      {/* ════════════════════════════════════════════════════════
          FRAME PROGRESS COUNTER (Mobile Mini Capsule)
      ════════════════════════════════════════════════════════ */}
      <div className="flex sm:hidden absolute bottom-5 right-5 z-20 items-center gap-1.5 bg-charcoal/60 px-2.5 py-1 rounded-full border border-beige/15 backdrop-blur-sm pointer-events-auto">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => goToFrame(num)}
            aria-label={`Phase ${num}`}
            className={`rounded-full transition-all duration-300 ${
              num === activeFrame
                ? "w-3 h-1 bg-bronze"
                : "w-1 h-1 bg-beige/30"
            }`}
          />
        ))}
        <span className="ml-1 font-mono text-[0.55rem] text-beige/70">
          0{activeFrame}/05
        </span>
      </div>
    </section>
  );
}