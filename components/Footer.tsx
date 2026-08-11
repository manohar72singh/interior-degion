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

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter / X" },
  { icon: Instagram, label: "Instagram" },
  { icon: PinterestIcon, label: "Pinterest" },
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
    <footer className="bg-espresso pt-12 pb-8 text-beige relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end border-b border-beige/10 pb-12"
        >
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
              Stay Inspired
            </span>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Join Our Newsletter
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-beige/60">
              Studio news, project reveals, and design notes — delivered
              occasionally, never spam.
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
          {['Home', 'Philosophy', 'About', 'Process', 'Services', 'Projects', 'FAQ', 'Contact'].map((item) => {
            const href = item === 'About' ? '/about' : `/#${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-beige/60 transition-colors hover:text-bronze"
              >
                {item}
              </Link>
            );
          })}
        </motion.div>


        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-beige/40">
            © {new Date().getFullYear()} Housen <span className="font-bold">&amp;</span> Co. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-beige/40 transition-colors hover:text-bronze"
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
