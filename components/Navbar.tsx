"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    // Detect if page is scrolled past hero header
    if (latest > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Don't hide if mobile menu is open
    if (menuOpen) {
      setHidden(false);
      return;
    }

    // Smart Hide / Reveal:
    // When scrolling down past 120px, hide smoothly.
    // When scrolling up even slightly, reveal immediately.
    if (latest > 120 && latest > previous + 6) {
      setHidden(true);
    } else if (latest < previous - 4 || latest <= 50) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-espresso/95 shadow-xl backdrop-blur-md border-b border-beige/10"
          : "bg-gradient-to-b from-espresso/85 via-espresso/45 to-transparent"
      )}
    >
      {/* Ultra-Luxury 2px Reading Progress Indicator at top of screen */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-bronze via-[#dfb86c] to-bronze origin-left z-50 shadow-[0_0_10px_rgba(166,124,61,0.8)]"
      />

      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Housen & Co. home">
          <Logo
            light
            markClassName="h-7 w-7 md:h-8 md:w-8"
            wordmarkClassName="text-xs md:text-sm"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative text-xs font-medium uppercase tracking-[0.16em] transition-colors py-1",
                      isActive
                        ? "text-bronze font-semibold drop-shadow-sm"
                        : "text-beige/85 hover:text-beige"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] bg-bronze transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={cn(
              "group inline-flex items-center gap-2 rounded-none px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 border shadow-sm",
              scrolled
                ? "border-bronze bg-bronze/90 text-beige hover:bg-bronze hover:shadow-[0_4px_16px_rgba(166,124,61,0.4)]"
                : "border-beige/40 bg-beige/10 text-beige backdrop-blur-sm hover:bg-beige hover:text-charcoal"
            )}
          >
            Inquire Now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-beige p-2 hover:text-bronze transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((v) => !v);
            if (!menuOpen) setHidden(false);
          }}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-beige" />
          ) : (
            <Menu className="h-6 w-6 text-beige" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream border-b border-charcoal/10 shadow-2xl lg:hidden"
          >
            <ul className="container flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "text-sm font-medium uppercase tracking-[0.18em] transition-colors flex items-center justify-between py-1",
                        isActive ? "text-bronze font-bold" : "text-charcoal hover:text-bronze"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-bronze" />}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-full justify-center items-center gap-2 bg-bronze py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-md"
                >
                  Inquire Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
