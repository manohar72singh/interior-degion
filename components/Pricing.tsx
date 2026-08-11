"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essential",
    price: "$8,500",
    unit: "per room",
    description: "A focused refresh for a single, well-loved space.",
    features: [
      "Initial consultation & site visit",
      "Mood board & material palette",
      "Furniture & lighting selection",
      "One round of revisions",
    ],
    highlighted: false,
  },
  {
    name: "Signature",
    price: "$28,000",
    unit: "per home",
    description: "Full-home interior design from concept to install.",
    features: [
      "Everything in Essential",
      "Whole-home space planning",
      "Custom furniture sourcing",
      "On-site install & styling day",
      "Dedicated principal designer",
    ],
    highlighted: true,
  },
  {
    name: "Bespoke",
    price: "Custom",
    unit: "by proposal",
    description: "Architecture-to-interiors for new builds & major renovations.",
    features: [
      "Everything in Signature",
      "Architectural consulting",
      "Custom furniture fabrication",
      "Full project management",
      "Ongoing post-project support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-beige py-10 md:py-14 relative">
      {/* Subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-charcoal/20 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            Pricing Plans
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Investment suited to your project.
          </h2>
          <div className="mt-8 h-px w-24 bg-charcoal/20 mx-auto" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: index * 0.15 }}
              className={cn(
                "group relative flex flex-col p-8 transition-all duration-500 hover:-translate-y-2",
                plan.highlighted
                  ? "bg-charcoal text-beige shadow-2xl shadow-charcoal/20"
                  : "bg-cream text-charcoal border border-charcoal/5 shadow-xl shadow-charcoal/5"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block rounded-none bg-bronze px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-beige shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="font-serif text-3xl">{plan.name}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  plan.highlighted ? "text-beige/70" : "text-charcoal/70"
                )}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2 border-b border-current/10 pb-6">
                <span className="font-serif text-5xl">{plan.price}</span>
                <span
                  className={cn(
                    "text-xs uppercase tracking-[0.15em]",
                    plan.highlighted ? "text-beige/60" : "text-charcoal/60"
                  )}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
                    <span
                      className={plan.highlighted ? "text-beige/85" : "text-charcoal/80"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "mt-8 w-full h-12 uppercase tracking-[0.2em] text-xs transition-all duration-500",
                  plan.highlighted
                    ? "bg-bronze text-beige hover:bg-beige hover:text-charcoal"
                    : "bg-charcoal text-beige hover:bg-bronze hover:text-beige"
                )}
              >
                Inquire Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
