"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Maximize2, MapPin, Calendar, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

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
}

const PROJECTS: ProjectItem[] = [
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
    description: "A complete interior architecture overhaul for an 18th-century residence, balancing historic preservation with contemporary minimalist comfort."
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
    description: "Designed to capture natural ocean light through floor-to-ceiling windows, featuring organic material palettes and custom low-profile seating."
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
    description: "A full penthouse renovation featuring continuous spatial flow, acoustic dampening acoustic paneling, and tailored art-display lighting."
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
    description: "An eco-luxury hospitality project incorporating local natural materials, serene earth tones, and intuitive guest circulation."
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
    description: "A sprawling family estate combining grand proportions with cozy, intimate gathering nooks and a state-of-the-art chef's kitchen."
  },
];

const CATEGORIES = ["All", "High-end Homes", "Coastal Villas", "Urban Penthouses", "Hospitality"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const scroll = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.5;
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollerRef.current && !activeModalProject) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          scrollerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activeModalProject]);

  return (
    <section id="projects" className="bg-beige py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        {/* Header & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
              Selected Portfolio
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Spaces we&apos;ve shaped with intention.
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:bg-bronze hover:border-bronze hover:text-beige"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:bg-bronze hover:border-bronze hover:text-beige"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-charcoal/15 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300",
                selectedCategory === cat
                  ? "bg-charcoal text-beige shadow-md"
                  : "bg-cream/60 text-charcoal/70 hover:bg-beige hover:text-charcoal border border-charcoal/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Horizontal Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          ref={scrollerRef}
          className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative aspect-[3/4] w-[80%] flex-none snap-start overflow-hidden rounded-none shadow-xl cursor-pointer sm:w-[42%] lg:w-[30%]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 80vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-beige/20 backdrop-blur-md text-beige opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-bronze/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-beige">
                  {project.category}
                </span>
                <p className="mt-2 font-serif text-2xl text-beige font-medium">
                  {project.title}
                </p>
                <p className="mt-1 text-xs text-beige/70 font-light flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-bronze" />
                  {project.location} • {project.year}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Project Lightbox Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-cream border border-charcoal/15 shadow-2xl text-charcoal overflow-hidden my-8"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-beige transition-colors hover:bg-bronze"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/5] min-h-[350px] w-full">
                  <Image
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-bronze">
                      {activeModalProject.category}
                    </span>
                    <h3 className="mt-2 font-serif text-3xl text-charcoal font-medium">
                      {activeModalProject.title}
                    </h3>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4 border-y border-charcoal/15 py-4 text-xs">
                      <div>
                        <p className="text-charcoal/50 uppercase tracking-[0.15em] flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-bronze" /> Location
                        </p>
                        <p className="font-semibold text-charcoal mt-1">{activeModalProject.location}</p>
                      </div>
                      <div>
                        <p className="text-charcoal/50 uppercase tracking-[0.15em] flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-bronze" /> Year
                        </p>
                        <p className="font-semibold text-charcoal mt-1">{activeModalProject.year}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-charcoal/50 uppercase tracking-[0.15em] flex items-center gap-1">
                          <Layers className="h-3 w-3 text-bronze" /> Key Materials
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {activeModalProject.materials.map(m => (
                            <span key={m} className="bg-beige px-2.5 py-1 text-[0.65rem] font-medium text-charcoal border border-charcoal/10">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-charcoal/80">
                      {activeModalProject.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-bronze uppercase tracking-[0.2em]">
                      Area: {activeModalProject.area}
                    </span>
                    <a
                      href="#contact"
                      onClick={() => setActiveModalProject(null)}
                      className="bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige hover:bg-bronze transition-colors"
                    >
                      Inquire Similar Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
