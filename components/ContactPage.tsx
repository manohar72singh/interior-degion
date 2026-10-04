"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Check,
  Send,
  Sparkles,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STUDIOS = [
  {
    city: "Main Design Studio",
    address: "Plot No 17, Pine Wood Enclave Sec-2, Wave City, Ghaziabad 201015",
    phone: "+91 9599775274",
    email: "info@housenandco.com",
    hours: "Mon – Sat: 9:30 AM – 7:00 PM IST",
    note: "Studio & material gallery archives",
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
  "Single-Room Design Refresh",
];

export default function ContactPage() {
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
          name: form.name,
          email: form.email,
          message: `Phone: ${form.phone || "Not provided"}\nProject Type: ${selectedType}\nBudget: ${selectedBudget}\n\nMessage:\n${form.message}`,
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
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/about.jpg"
          alt="Housen & Co. studio contact and consultation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/65 to-espresso/35" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-bronze mb-3">
              <Link href="/" className="hover:text-beige transition-colors">Home</Link>
              <span>/</span>
              <span>Studio Inquiries</span>
            </div>
            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              Begin Your Commission
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              Every considered space begins with listening. Share details about your home, site, or architectural drawings to initiate a conversation with our principals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form & Studio Details ── */}
      <section className="py-20 md:py-28 container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-charcoal/10 p-8 sm:p-12 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
              Project Inquiry
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-charcoal">
              Tell us about your space.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70">
              We review every inquiry within two business days to schedule an introductory video call or studio visit.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-3">
                  Scope of Project
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        "px-3.5 py-2 text-xs font-medium transition-all duration-200 border",
                        selectedType === type
                          ? "bg-charcoal text-beige border-charcoal shadow-sm"
                          : "bg-beige/40 text-charcoal/70 border-charcoal/10 hover:border-bronze"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Anticipated Investment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-3">
                  Anticipated Investment Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_RANGES.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={cn(
                        "py-2.5 px-3 text-xs font-medium text-center transition-all duration-200 border",
                        selectedBudget === b
                          ? "bg-bronze text-beige border-bronze font-semibold shadow-sm"
                          : "bg-beige/40 text-charcoal/70 border-charcoal/10 hover:border-bronze"
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Eleanor Vance"
                    className="w-full bg-cream/50 border border-charcoal/20 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="eleanor@domain.com"
                    className="w-full bg-cream/50 border border-charcoal/20 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 012-3456"
                  className="w-full bg-cream/50 border border-charcoal/20 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/80 mb-2"
                >
                  Tell Us About Your Project &amp; Timeline *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share details on property location, square footage, architectural goals, target start date..."
                  className="w-full bg-cream/50 border border-charcoal/20 p-4 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-bronze focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-bronze py-4 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-charcoal disabled:opacity-50 shadow-md"
                >
                  {status === "loading" ? (
                    "Sending Inquiry..."
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2"
                  >
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      Thank you! Your inquiry has been received. Our team will contact you within two business days.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 text-xs"
                  >
                    An error occurred sending your message. Please email directly at info@housenandco.com.
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Studio Locations & Quick Contacts */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studios Cards */}
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze block">
                Studio Locations
              </span>

              {STUDIOS.map((studio) => (
                <div
                  key={studio.city}
                  className="bg-white border border-charcoal/10 p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-charcoal/5 text-bronze">
                      <Building className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-charcoal">
                        {studio.city}
                      </h3>
                      <span className="text-[0.65rem] uppercase tracking-wider text-bronze font-medium">
                        {studio.note}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-charcoal/80 pt-2 border-t border-charcoal/10">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-bronze mt-0.5" />
                      <span>{studio.address}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 shrink-0 text-bronze" />
                      <a href={`tel:${studio.phone}`} className="hover:text-bronze transition-colors">
                        {studio.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 shrink-0 text-bronze" />
                      <a href={`mailto:${studio.email}`} className="hover:text-bronze transition-colors">
                        {studio.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5 text-charcoal/60">
                      <Clock className="h-4 w-4 shrink-0 text-bronze" />
                      <span>{studio.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="bg-charcoal text-beige p-8 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze block">
                Direct Inquiries
              </span>
              <h4 className="mt-2 font-serif text-2xl text-beige font-medium">
                Prefer a direct conversation?
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-beige/70">
                You can reach our lead studio coordinator directly for urgent press, commercial collaborations, or immediate architectural timelines.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+919599775274"
                  className="inline-flex items-center justify-between bg-white/10 border border-white/20 p-3.5 text-xs text-beige hover:bg-bronze hover:border-bronze transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-bronze" />
                    Call Studio: +91 9599775274
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://wa.me/919599775274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-white/10 border border-white/20 p-3.5 text-xs text-beige hover:bg-bronze hover:border-bronze transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-bronze" />
                    WhatsApp: +91 9599775274
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="mailto:info@housenandco.com"
                  className="inline-flex items-center justify-between bg-white/10 border border-white/20 p-3.5 text-xs text-beige hover:bg-bronze hover:border-bronze transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-bronze" />
                    info@housenandco.com
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
