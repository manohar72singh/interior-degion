"use client";

import { useState } from "react";
import Image from "next/image";
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
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import Transformation from "@/components/Transformation";
import Process from "@/components/Process";

interface ServiceItem {
  id: string;
  icon: typeof PenTool;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  deliverables: string[];
  details: string;
  highlight: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "full-scope",
    icon: PenTool,
    title: "Full-Scope Interior Design",
    subtitle: "End-to-End Residential & Commercial Concepting",
    description:
      "Comprehensive spatial transformation — from conceptual vision to final styling, tailored to your exact lifestyle.",
    timeline: "8 - 16 Weeks",
    deliverables: [
      "Photorealistic 3D Renderings & Mood Boards",
      "Custom Furniture & Bespoke Lighting Selection",
      "Material Swatch & Finishes Catalog",
      "On-site White-Glove Styling & Install",
    ],
    details:
      "Our flagship service covers every nuance of interior architecture and styling. We craft custom color stories, curate bespoke lighting fixtures, and source rare finishes to create a cohesive luxury home that feels intuitive, timeless, and completely your own.",
    highlight: "Most requested for luxury residential estates.",
  },
  {
    id: "spatial",
    icon: Ruler,
    title: "Spatial Architecture Planning",
    subtitle: "Floor Plans, Sightlines & Daylight Studies",
    description:
      "Considered floor plans and traffic flow layouts that optimize natural light, acoustic privacy, and functional luxury.",
    timeline: "4 - 8 Weeks",
    deliverables: [
      "CAD Floor Plans & Section Elevations",
      "Architectural Sightline Optimization",
      "Lighting & Electrical Schematics",
      "Acoustic & Privacy Flow Maps",
    ],
    details:
      "We analyze daylight vectors, sightlines, and room transitions to create layout solutions that feel intuitive and expansive. Every partition, archway, and portal is drafted with millimeter precision.",
    highlight: "Essential foundation before breaking ground.",
  },
  {
    id: "consulting",
    icon: Compass,
    title: "Architectural Consulting",
    subtitle: "Structural Harmony with Exterior Architecture",
    description:
      "Strategic structural guidance from foundation to facade, working in synergy with your principal architect.",
    timeline: "Ongoing Engagement",
    deliverables: [
      "Structural Material Selection & Sourcing",
      "Facade & Fenestration Interior Alignment",
      "Millwork Integration Technical Drawings",
      "Architect Collaboration & Review Sessions",
    ],
    details:
      "We bridge the gap between exterior architectural form and interior livability, ensuring ceiling heights, door frames, and window reveals match interior proportions and architectural integrity.",
    highlight: "Collaborative partnership for new builds.",
  },
  {
    id: "renovation",
    icon: Hammer,
    title: "Turnkey Renovation Management",
    subtitle: "Heritage Preservation & Modern Infrastructure",
    description:
      "Complete renovation supervision respecting original architectural heritage while infusing state-of-the-art systems.",
    timeline: "12 - 24 Weeks",
    deliverables: [
      "General Contractor & Subtrade Oversight",
      "Historical Architectural Detail Preservation",
      "Weekly Quality Assurance Site Inspections",
      "Strict Budget & Timeline Enforcement",
    ],
    details:
      "From demolition to final punch-list resolution, our studio manages general contractors, custom fabricators, and specialized artisans to guarantee execution quality without stress for the owner.",
    highlight: "Stress-free management from permits to handover.",
  },
  {
    id: "furniture",
    icon: Armchair,
    title: "Custom Furniture & Millwork",
    subtitle: "One-of-a-Kind Pieces Crafted by Master Artisans",
    description:
      "Bespoke furniture pieces and custom cabinetry designed in-house and hand-crafted by master European & American artisans.",
    timeline: "6 - 12 Weeks",
    deliverables: [
      "Custom Furniture Technical CAD Drawings",
      "Rare Wood, Stone & Metal Sourcing",
      "In-studio Artisan Prototype Reviews",
      "White-Glove Delivery, Assembly & Placement",
    ],
    details:
      "When off-the-shelf items fall short, we design unique dining tables, fluted credenzas, library walls, and integrated cabinetry tailored specifically for your space's unique scale and finishes.",
    highlight: "Heirloom craftsmanship made to endure generations.",
  },
  {
    id: "concierge",
    icon: ClipboardList,
    title: "Concierge Project Management",
    subtitle: "Global Procurement, Customs & White-Glove Install",
    description:
      "A dedicated principal coordinator overseeing budgets, procurement logistics, customs, and vendor timelines.",
    timeline: "Full Project Lifecycle",
    deliverables: [
      "Transparent Line-Item Budgeting & Tracking",
      "Global Shipping & Customs Logistics Management",
      "Climate-Controlled Warehousing & Inspection",
      "Post-Occupancy 12-Month Warranty Support",
    ],
    details:
      "Relax while we manage complex international freight, custom duty clearance, climate-controlled warehousing, and final white-glove installation with zero friction.",
    highlight: "Complete peace of mind for international clients.",
  },
];

const MATERIAL_STANDARDS = [
  {
    name: "Aged White Oak",
    use: "Flooring, Custom Millwork & Architectural Paneling",
    desc: "Sustainably harvested and custom treated with natural oils for a matte, tactile patina that deepens with age.",
  },
  {
    name: "Honed Travertine & Calacatta",
    use: "Kitchen Islands, Bath Vanities & Fireplace Surrounds",
    desc: "Hand-selected slabs sourced directly from quarries in Italy, honed to a velvety non-reflective finish.",
  },
  {
    name: "Living Unlacquered Brass",
    use: "Hardware, Architectural Trim & Custom Lighting",
    desc: "Left untreated to develop a distinctive, natural patina uniquely shaped by touch and atmospheric interaction.",
  },
  {
    name: "Artisanal Mineral Limewash",
    use: "Wall Finishes & Vaulted Ceilings",
    desc: "Breathable, VOC-free lime plaster formulations that soften acoustic reverberation and bathe rooms in warm light.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/philosophy.jpg"
          alt="Housen & Co. architectural interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />
        
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
              <span>Services &amp; Architecture</span>
            </div>
            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              Interior Architecture &amp; Bespoke Design
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              We guide discerning clients through every dimension of space creation — from spatial layout and structural consulting to custom joinery and white-glove installation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-bronze px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-all duration-300 hover:bg-beige hover:text-charcoal shadow-sm"
              >
                Inquire For Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#services-list"
                className="inline-flex items-center gap-2 border border-beige/40 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige backdrop-blur-sm transition-all hover:bg-beige/20"
              >
                View Services Overview
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Interactive Showcase ── */}
      <section id="services-list" className="py-20 md:py-28 container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
            What We Deliver
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
            Comprehensive studio capabilities.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Select a service below to explore detailed timelines, deliverables, and our architectural methodology.
          </p>
        </div>

        {/* Desktop Split View / Mobile Stack */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Service Buttons List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              const isSelected = selectedService.id === srv.id;

              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className={`group relative text-left p-6 transition-all duration-300 border ${
                    isSelected
                      ? "bg-charcoal text-beige border-charcoal shadow-lg"
                      : "bg-white/60 text-charcoal border-charcoal/10 hover:border-bronze hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2.5 transition-colors ${
                          isSelected ? "bg-bronze text-beige" : "bg-charcoal/5 text-bronze group-hover:bg-bronze group-hover:text-beige"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-medium">
                          {srv.title}
                        </h3>
                        <p
                          className={`mt-1 text-xs transition-colors ${
                            isSelected ? "text-beige/70" : "text-charcoal/60"
                          }`}
                        >
                          {srv.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        isSelected ? "rotate-90 text-bronze lg:rotate-0" : "text-charcoal/30 group-hover:text-bronze"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-charcoal/10 p-8 sm:p-10 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/5 rounded-bl-full pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                      Featured Capability
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-medium sm:text-3xl text-charcoal">
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-charcoal/5 px-3.5 py-1.5 text-xs font-semibold text-charcoal">
                    <Clock className="h-3.5 w-3.5 text-bronze" />
                    <span>{selectedService.timeline}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-base leading-relaxed text-charcoal/80">
                    {selectedService.details}
                  </p>
                </div>

                <div className="mt-8 bg-cream/70 border border-charcoal/5 p-4 text-xs font-medium text-charcoal/80">
                  <span className="font-bold text-bronze uppercase tracking-wider mr-2">Highlight:</span>
                  {selectedService.highlight}
                </div>

                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
                    Primary Deliverables &amp; Scope
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-bronze mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-charcoal/60">
                    Need a tailored combination of services?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-charcoal text-beige px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-bronze"
                  >
                    Request Consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Studio Process ── */}
      <Process />

      {/* ── Space Transformation ── */}
      <Transformation />

      {/* ── Material Standards Showcase ── */}
      <section className="bg-cream py-20 md:py-28 border-t border-charcoal/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              Materiality &amp; Tactility
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
              Natural finishes that age with grace.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              We never use synthetic veneers or fleeting trends. Every surface is chosen for sensory richness and enduring elegance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIAL_STANDARDS.map((mat, i) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-beige border border-charcoal/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="h-1 w-10 bg-bronze mb-4" />
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    {mat.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-bronze">
                    {mat.use}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-charcoal/70">
                    {mat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-espresso text-beige py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Start Your Transformation
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl md:text-5xl text-beige">
            Ready to reimagine your living space?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            Book an initial site visit or design discovery session with our founding principals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-colors hover:bg-beige hover:text-charcoal"
            >
              Book Design Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
