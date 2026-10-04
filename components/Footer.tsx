"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function PinterestIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 20c.6-2 1.3-4.4 2-7" />
      <path d="M8.5 12.5c-.5-3 1.7-5.5 4.5-5.5 2.5 0 4.2 1.7 4.2 4 0 3-1.5 5.5-4 5.5-1.1 0-2-.6-2.3-1.4" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "h-5 w-5"}
      aria-hidden="true"
    >
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

const SOCIALS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/housenandco",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/19pcPbgxjL/?mibextid=wwXIfr",
  },
  {
    icon: GoogleIcon,
    label: "Google Business",
    href: "https://share.google/NivZhSzz9rH4LMm4l",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-espresso pt-20 pb-12 text-beige relative overflow-hidden border-t border-beige/10">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end border-b border-beige/10 pb-16"
        >
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
              Stay Inspired
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Join The Studio Newsletter
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-beige/70">
              Studio journal essays, private project reveals, and tactile materiality notes — delivered monthly, never spam.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-4 sm:flex-row relative"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-beige/20 py-4 text-beige placeholder:text-beige/30 focus:border-bronze focus:outline-none focus:ring-0 transition-colors"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 shrink-0 border border-bronze bg-bronze/10 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-bronze transition-colors hover:bg-bronze hover:text-beige"
            >
              Subscribe
            </button>
            {submitted && (
              <p className="absolute -bottom-8 left-0 text-xs uppercase tracking-[0.2em] text-bronze">
                Thank you — you&apos;re on the list.
              </p>
            )}
          </form>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-beige/10 pb-12"
        >
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Pricing", href: "/pricing" },
            { label: "Journal", href: "/journal" },
            { label: "Inquiry", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-beige/60 transition-colors hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>


        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-beige/40">
            © {new Date().getFullYear()} Housen <span className="font-bold">&amp;</span> Co. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-beige/50 transition-all hover:text-bronze hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://quantyrotechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-beige/15 bg-charcoal/40 px-4 py-2 text-[0.65rem] font-medium text-beige/60 transition-colors hover:border-bronze/40 hover:text-beige"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            Designed &amp; Developed by{" "}
            <span className="font-bold text-beige">Quantyro Technologies</span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}
