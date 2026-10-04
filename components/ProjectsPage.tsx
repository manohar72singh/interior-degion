"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Calendar,
  Layers,
  X,
  Maximize2,
  Check,
  Sparkles,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import ThreeDTiltCard from "@/components/ThreeDTiltCard";

interface ProjectItem {
  id: string;
  title: string;
  category: "High-end Homes" | "Coastal Villas" | "Urban Penthouses" | "Hospitality";
  caption: string;
  image: string;
  location: string;
  year: string;
  area: string;
  materials: string[];
  description: string;
  story?: string;
  features?: string[];
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "alden",
    title: "The Alden Residence",
    category: "High-end Homes",
    caption: "Historic Home Refresh",
    image: "/images/project-1.jpg",
    location: "Charleston, SC",
    year: "2024",
    area: "6,800 sq ft",
    materials: ["Custom Walnut", "Carrara Marble", "Unlacquered Brass"],
    description:
      "A complete interior architecture overhaul for an 18th-century residence, balancing historic preservation with contemporary minimalist comfort.",
    story:
      "Working closely with preservation authorities, we restored the original heart-pine timber beams while integrating discrete modern climate control, concealed linear lighting, and custom millwork in aged European walnut.",
    features: [
      "Custom integrated double-height library",
      "Restored original 18th-century hearths",
      "Bespoke chef's scullery & wine cellar",
      "Concealed architectural lighting throughout",
    ],
  },
  {
    id: "marrow",
    title: "Marrow House",
    category: "Coastal Villas",
    caption: "Oceanfront Living",
    image: "/images/project-2.jpg",
    location: "Kiawah Island, SC",
    year: "2023",
    area: "8,200 sq ft",
    materials: ["White Oak", "Limewash Walls", "Travertine Stone"],
    description:
      "Designed to capture natural ocean light through floor-to-ceiling windows, featuring organic material palettes and custom low-profile seating.",
    story:
      "Positioned between tidal marsh and coastal dunes, Marrow House embraces natural salt breezes and changing daylight. The interior palette echoes the shoreline with bleached timber and sandy lime plasters.",
    features: [
      "Continuous indoor-outdoor stone flooring",
      "Custom low-profile linen lounge collection",
      "Monolithic honed travertine kitchen island",
      "Acoustically tuned master suite with ocean vistas",
    ],
  },
  {
    id: "linden",
    title: "Linden Penthouse",
    category: "Urban Penthouses",
    caption: "High-Rise Sanctuary",
    image: "/images/project-3.jpg",
    location: "Manhattan, NY",
    year: "2024",
    area: "4,500 sq ft",
    materials: ["Smoked Glass", "Brushed Bronze", "Venetian Plaster"],
    description:
      "A full penthouse renovation featuring continuous spatial flow, acoustic dampening paneling, and tailored art-display lighting.",
    story:
      "Rising 60 floors above the metropolis, this residence was conceived as a silent aerie. We eliminated unnecessary interior walls in favor of smoked glass pocket partitions that modulate openness and intimacy.",
    features: [
      "Museum-grade art lighting system",
      "Full wraparound private terrace landscaping",
      "Acoustic silk and wool wall paneling",
      "Custom Italian marble soaking tub with skyline view",
    ],
  },
  {
    id: "solace",
    title: "Solace Retreat & Spa",
    category: "Hospitality",
    caption: "Bespoke Boutique Hotel",
    image: "/images/project-4.jpg",
    location: "Asheville, NC",
    year: "2023",
    area: "14,000 sq ft",
    materials: ["Reclaimed Chestnut", "Basalt Stone", "Linen Drapery"],
    description:
      "An eco-luxury hospitality project incorporating local natural materials, serene earth tones, and intuitive guest circulation.",
    story:
      "Nestled into the Blue Ridge Mountains, Solace creates a tranquil rhythm between community lounge spaces and restorative private guest sanctuaries.",
    features: [
      "24 bespoke guest suites with custom fireplaces",
      "Holistic wellness spa with hydrotherapy suites",
      "Locally harvested and milled chestnut paneling",
      "Quiet garden courtyard with reflecting pools",
    ],
  },
  {
    id: "birchwood",
    title: "Birchwood Estate",
    category: "High-end Homes",
    caption: "Modern Country Manor",
    image: "/images/project-5.jpg",
    location: "Greenwich, CT",
    year: "2024",
    area: "10,500 sq ft",
    materials: ["Custom Ironwork", "Granite Countertops", "Teak Detailing"],
    description:
      "A sprawling family estate combining grand proportions with cozy, intimate gathering nooks and a state-of-the-art chef's kitchen.",
    story:
      "Crafted for multigenerational gatherings, Birchwood balances vast entertaining salons with warm, tactile breakfast rooms and sunlit reading verandas.",
    features: [
      "Custom hand-forged bronze balustrades",
      "Full commercial-grade family catering kitchen",
      "Double-height conservatory with glass atrium",
      "Custom bespoke furniture designed in our studio",
    ],
  },
];

const CATEGORIES = ["All", "High-end Homes", "Coastal Villas", "Urban Penthouses", "Hospitality"] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/project-1.jpg"
          alt="Housen & Co. architectural projects portfolio"
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
              <span>Selected Portfolio</span>
            </div>
            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              Selected Works &amp; Architecture
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              Explore our collection of private residences, coastal retreats, and boutique hospitality projects crafted across North America and Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Grid & Filter ── */}
      <section className="py-16 md:py-24 container">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-charcoal text-beige border-charcoal shadow-sm"
                    : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-bronze hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ThreeDTiltCard key={project.id} tiltIntensity={8}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white border border-charcoal/10 flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-beige">
                    {project.category}
                  </span>

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="absolute bottom-4 right-4 bg-beige text-charcoal p-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-bronze hover:text-beige"
                    aria-label={`View ${project.title} details`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-charcoal/60 mb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-bronze" />
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-charcoal group-hover:text-bronze transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-charcoal/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-bronze">
                      {project.area}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-bronze transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </ThreeDTiltCard>
          ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Modal Project Detail ── */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-beige border border-charcoal/20 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 bg-charcoal/80 text-beige p-2 hover:bg-bronze transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/9] w-full bg-charcoal">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
                    {activeModalProject.category}
                  </span>
                  <h2 className="mt-1 font-serif text-3xl sm:text-4xl text-beige font-medium">
                    {activeModalProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-8">
                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/70 p-4 border border-charcoal/10 text-center">
                  <div>
                    <span className="text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/50">Location</span>
                    <p className="mt-1 font-serif text-sm font-semibold">{activeModalProject.location}</p>
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/50">Year</span>
                    <p className="mt-1 font-serif text-sm font-semibold">{activeModalProject.year}</p>
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/50">Area</span>
                    <p className="mt-1 font-serif text-sm font-semibold">{activeModalProject.area}</p>
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/50">Category</span>
                    <p className="mt-1 font-serif text-sm font-semibold">{activeModalProject.category}</p>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                    Architectural Narrative
                  </h4>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/80">
                    {activeModalProject.story || activeModalProject.description}
                  </p>
                </div>

                {/* Features & Materials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-charcoal/10">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
                      Key Highlights
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {(activeModalProject.features || [activeModalProject.description]).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70">
                          <Check className="h-4 w-4 shrink-0 text-bronze mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
                      Material Palette
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeModalProject.materials.map((mat) => (
                        <span
                          key={mat}
                          className="bg-charcoal/5 border border-charcoal/10 px-3 py-1.5 text-xs text-charcoal"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-charcoal/60">
                    Interested in a similar architectural vision for your property?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-bronze text-beige px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-charcoal transition-colors"
                  >
                    Inquire About This Style
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Bottom CTA ── */}
      <section className="bg-espresso text-beige py-20 text-center">
        <div className="container max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Commission a Project
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-beige">
            Have a residence in mind?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            We accept a limited number of residential and boutique hospitality commissions each year to ensure uncompromising focus.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-colors hover:bg-beige hover:text-charcoal"
            >
              Discuss Your Vision
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
