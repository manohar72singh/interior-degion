"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-beige/95 shadow-md backdrop-blur-md border-b border-charcoal/10"
          : "bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Housen & Co. home">
          <Logo
            light={!scrolled}
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
                      scrolled
                        ? isActive
                          ? "text-bronze font-semibold"
                          : "text-charcoal hover:text-bronze"
                        : isActive
                        ? "text-bronze font-semibold drop-shadow-sm"
                        : "text-beige/90 hover:text-beige"
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
              "inline-flex items-center gap-2 rounded-none px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 border shadow-sm",
              scrolled
                ? "border-bronze bg-bronze text-beige hover:bg-charcoal hover:border-charcoal hover:text-beige"
                : "border-beige/40 bg-beige/10 text-beige backdrop-blur-sm hover:bg-beige hover:text-charcoal"
            )}
          >
            Inquire Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-charcoal" : "text-beige")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-charcoal" : "text-beige")} />
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
            className="overflow-hidden bg-beige border-b border-charcoal/10 shadow-xl lg:hidden"
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
                        "text-sm font-medium uppercase tracking-[0.18em] transition-colors flex items-center justify-between",
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
                  className="inline-flex w-full justify-center items-center gap-2 bg-bronze py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige"
                >
                  Inquire Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
