"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Ruler,
  Compass,
  Hammer,
  Armchair,
  ClipboardList,
  ArrowRight,
  X,
  CheckCircle2,
  Clock,
  type LucideIcon,
} from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
  details: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: PenTool,
    title: "Full-Scope Interior Design",
    description:
      "Comprehensive spatial transformation — from conceptual vision to final styling, tailored to your exact lifestyle.",
    timeline: "8 - 16 Weeks",
    deliverables: [
      "3D Renderings & Mood Boards",
      "Custom Furniture & Lighting Selection",
      "Material Swatch & Finishes Catalog",
      "On-site Styling & White-Glove Install"
    ],
    details: "Our flagship service covers every nuance of interior architecture and styling. We craft custom color stories, curate bespoke lighting fixtures, and source rare finishes to create a cohesive luxury home."
  },
  {
    icon: Ruler,
    title: "Spatial Architecture Planning",
    description:
      "Considered floor plans and traffic flow layouts that optimize natural light, acoustic privacy, and functional luxury.",
    timeline: "4 - 8 Weeks",
    deliverables: [
      "CAD Floor Plans & Elevations",
      "Lighting & Electrical Schematics",
      "Acoustic & Privacy Flow Maps",
      "Architectural Sightline Optimization"
    ],
    details: "We analyze daylight vectors, sightlines, and room transitions to create layout solutions that feel intuitive and expansive."
  },
  {
    icon: Compass,
    title: "Architectural Consulting",
    description:
      "Strategic structural guidance from foundation to facade, working in synergy with your principal architect.",
    timeline: "Ongoing Engagement",
    deliverables: [
      "Structural Material Selection",
      "Facade & Window Fenestration Alignment",
      "Millwork Integration Drawings",
      "Architect Collaboration Sessions"
    ],
    details: "We bridge the gap between exterior architectural form and interior livability, ensuring ceiling heights, door frames, and window reveals match interior proportions."
  },
  {
    icon: Hammer,
    title: "Turnkey Renovation Management",
    description:
      "Complete renovation supervision respecting original architectural heritage while infusing state-of-the-art systems.",
    timeline: "12 - 24 Weeks",
    deliverables: [
      "Contractor & Subtrade Management",
      "Historical Detail Preservation",
      "Quality Assurance Site Inspections",
      "Budget & Timeline Enforcement"
    ],
    details: "From demolition to final punch-list resolution, our studio manages general contractors, custom fabricators, and trades to guarantee execution quality."
  },
  {
    icon: Armchair,
    title: "Custom Furniture & Millwork",
    description:
      "Bespoke furniture pieces and custom cabinetry designed in-house and hand-crafted by master artisans.",
    timeline: "6 - 12 Weeks",
    deliverables: [
      "Custom Furniture Technical Drawings",
      "Rare Wood & Stone Sourcing",
      "In-studio Artisan Prototype Reviews",
      "White-Glove Delivery & Assembly"
    ],
    details: "When off-the-shelf items fall short, we design unique tables, credenzas, and integrated cabinetry tailored specifically for your proportions."
  },
  {
    icon: ClipboardList,
    title: "Concierge Project Management",
    description:
      "A dedicated principal coordinator overseeing budgets, procurement logistics, customs, and vendor timelines.",
    timeline: "Full Project Lifecycle",
    deliverables: [
      "Transparent Line-Item Budgeting",
      "Global Shipping & Logistics Tracking",
      "White-Glove Warehousing & Inspection",
      "Post-occupancy Warranty Support"
    ],
    details: "Relax while we manage complex international freight, custom duty clearance, climate-controlled warehousing, and final white-glove installation."
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="bg-cream flex flex-col justify-center py-16 md:py-24 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Our Services
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            What we bring to every project.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
            Tailored services designed for discerning clients who demand perfection across architecture, design, and execution.
          </p>
          <div className="mt-6 h-px w-24 bg-charcoal/20 mx-auto" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: (index % 3) * 0.12 }}
                className="group relative border-t border-charcoal/15 pt-8 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 bg-beige transition-colors duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-beige">
                    <Icon className="h-5 w-5 text-bronze group-hover:text-beige transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/75 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal/10">
                  <button
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze hover:text-charcoal transition-colors"
                  >
                    View Scope &amp; Deliverables
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-charcoal text-beige px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-bronze shadow-md"
          >
            Explore All Services &amp; Methodology
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Service Scope Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-cream border border-charcoal/20 shadow-2xl p-8 text-charcoal"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-beige hover:bg-bronze transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze text-beige">
                  <activeService.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-bronze font-semibold">Service Scope</span>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">{activeService.title}</h3>
                </div>
              </div>

              <p className="mt-6 text-sm text-charcoal/80 leading-relaxed font-light">
                {activeService.details}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-bronze uppercase tracking-[0.2em] bg-beige p-3 border border-charcoal/10">
                <Clock className="h-4 w-4" />
                Estimated Timeline: {activeService.timeline}
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal mb-3">Core Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.deliverables.map(d => (
                    <div key={d} className="flex items-center gap-2 text-xs text-charcoal/85">
                      <CheckCircle2 className="h-4 w-4 text-bronze shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-charcoal/15 flex justify-end gap-4">
                <button
                  onClick={() => setActiveService(null)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-beige transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveService(null)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] bg-bronze text-beige hover:bg-charcoal transition-colors"
                >
                  Inquire Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
