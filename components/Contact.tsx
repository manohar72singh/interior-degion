"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Check, Send, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DETAILS = [
  {
    icon: MapPin,
    label: "Studio Address",
    value: "Plot No 17, Pine Wood Enclave Sec-2, Wave City, Ghaziabad 201015",
  },
  {
    icon: Mail,
    label: "Direct Inquiries",
    value: "info@housenandco.com",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+91 9599775274",
  },
];

const BUDGET_RANGES = [
  "$25k - $50k",
  "$50k - $100k",
  "$100k - $250k",
  "$250k+",
];

const PROJECT_TYPES = [
  "Full Residence Interior",
  "Architectural Renovation",
  "Custom Furniture & Millwork",
  "Bespoke Hospitality",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedBudget, setSelectedBudget] = useState<string>("$50k - $100k");
  const [selectedType, setSelectedType] = useState<string>("Full Residence Interior");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          budget: selectedBudget,
          projectType: selectedType,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-charcoal py-16 md:py-24 text-beige relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-espresso/30 hidden lg:block" />

      <div className="container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Information Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Start A Conversation
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Let&apos;s create something timeless together.
          </h2>
          <div className="mt-6 h-px w-24 bg-bronze/40" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-beige/75 font-light">
            Tell us about your spatial vision, timeline, and location. Our principal team reviews all inquiries within two business days.
          </p>

          <ul className="mt-10 space-y-6">
            {DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <li key={detail.label} className="flex items-start gap-5 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-beige/15 transition-colors duration-500 group-hover:border-bronze group-hover:bg-bronze/10">
                    <Icon className="h-5 w-5 text-bronze" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-beige/50">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm text-beige/90 font-light">
                      {detail.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right Interactive Inquiry Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          className="flex flex-col gap-6 bg-espresso/40 p-8 sm:p-10 border border-beige/15 shadow-2xl backdrop-blur-md"
        >
          {/* Project Type Selector */}
          <div>
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bronze block mb-3">
              Project Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "px-3 py-2 text-[0.7rem] font-medium text-left transition-all border flex items-center justify-between",
                    selectedType === type
                      ? "border-bronze bg-bronze/20 text-beige"
                      : "border-beige/10 bg-beige/5 text-beige/70 hover:border-beige/30"
                  )}
                >
                  <span>{type}</span>
                  {selectedType === type && <Check className="h-3.5 w-3.5 text-bronze" />}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range Selector */}
          <div>
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bronze block mb-3">
              Target Investment Range
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BUDGET_RANGES.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBudget(b)}
                  className={cn(
                    "px-3 py-2 text-xs font-semibold text-center transition-all border",
                    selectedBudget === b
                      ? "border-bronze bg-bronze text-beige"
                      : "border-beige/10 bg-beige/5 text-beige/70 hover:border-beige/30"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-beige/20 py-3 text-sm text-beige placeholder:text-beige/40 focus:border-bronze focus:outline-none transition-colors"
              />
            </div>
            <div className="relative group">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-beige/20 py-3 text-sm text-beige placeholder:text-beige/40 focus:border-bronze focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="relative group">
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your space, location, and project vision…"
              rows={4}
              className="w-full resize-none bg-transparent border-b border-beige/20 py-3 text-sm text-beige placeholder:text-beige/40 focus:border-bronze focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 flex h-14 items-center justify-center gap-3 bg-bronze text-beige uppercase tracking-[0.2em] text-xs font-semibold transition-all hover:bg-beige hover:text-charcoal disabled:opacity-60 shadow-xl"
          >
            {status === "loading" ? (
              "Submitting Inquiry…"
            ) : (
              <>
                Submit Project Inquiry
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-xs uppercase tracking-[0.2em] text-bronze text-center font-semibold">
              ✓ Thank you — our principal studio team will contact you within 48 hours.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs uppercase tracking-[0.2em] text-red-400 text-center font-semibold">
              ✗ Something went wrong. Please try again or email directly.
            </p>
          )}
        </motion.form>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze hover:text-beige transition-colors"
          >
            Visit Our Studios &amp; Submit Direct Inquiry
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
