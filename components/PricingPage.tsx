"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X as Cross, ArrowRight, ArrowUpRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import FAQ from "@/components/FAQ";

const TIERS = [
  {
    name: "Essential",
    tagline: "Single Room Transformation",
    price: "$8,500",
    unit: "per room",
    description: "A focused architectural refresh for a single, well-loved living room, master suite, or executive study.",
    features: [
      "Initial in-home consultation & 3D laser scan",
      "Full digital mood board & curated material palette",
      "Bespoke furniture, fabric & lighting selection",
      "Two rounds of iterative design revisions",
      "Trade-discount procurement assistance",
      "Detailed furniture placement floor plan",
    ],
    highlighted: false,
    ctaText: "Select Essential",
  },
  {
    name: "Signature",
    tagline: "Whole-Home Interior Architecture",
    price: "$28,000",
    unit: "per home",
    description: "Complete full-residence interior design from initial spatial concept through white-glove installation day.",
    features: [
      "Everything in Essential tier",
      "Comprehensive whole-home spatial planning & CAD",
      "Custom millwork, kitchen & bath design schematics",
      "Photorealistic 3D virtual walkthrough renders",
      "White-glove installation day & personal styling",
      "Dedicated principal designer from start to finish",
      "Contractor & artisan coordination sessions",
    ],
    highlighted: true,
    badge: "Most Popular",
    ctaText: "Select Signature",
  },
  {
    name: "Bespoke",
    tagline: "New Builds & Historical Restorations",
    price: "Custom",
    unit: "tailored proposal",
    description: "End-to-end architecture-to-interiors for multi-million dollar estates, ground-up new builds, and heritage restorations.",
    features: [
      "Everything in Signature tier",
      "Deep architectural consulting with lead architects",
      "Bespoke one-of-a-kind furniture fabrication",
      "Full turnkey project & construction management",
      "International material sourcing trips (Europe/Asia)",
      "Ongoing 12-month post-move-in concierge support",
    ],
    highlighted: false,
    ctaText: "Request Proposal",
  },
];

const COMPARISON_ROWS = [
  { feature: "Site Consultation & Spatial Study", essential: true, signature: true, bespoke: true },
  { feature: "Curated Material & Finish Palette", essential: true, signature: true, bespoke: true },
  { feature: "CAD Floor Plans & Sightline Maps", essential: "Basic", signature: "Full Residence", bespoke: "Full Architectural Set" },
  { feature: "3D Photorealistic Renderings", essential: "1 Room", signature: "All Key Spaces", bespoke: "Unlimited / VR Walkthrough" },
  { feature: "Custom Cabinetry & Millwork Drawings", essential: false, signature: true, bespoke: true },
  { feature: "Trade Procurement Discounts", essential: "Standard (10-15%)", signature: "Premium (20-30%)", bespoke: "Full Studio Trade Access" },
  { feature: "Dedicated Principal Designer", essential: false, signature: true, bespoke: true },
  { feature: "On-site Installation & White Glove Styling", essential: false, signature: true, bespoke: true },
  { feature: "Contractor Oversight & Site Visits", essential: false, signature: "Weekly", bespoke: "Full Project Lifecycle" },
  { feature: "Post-Occupancy Concierge Support", essential: false, signature: "3 Months", bespoke: "12 Months" },
];

export default function PricingPage() {
  return (
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/project-3.jpg"
          alt="Housen & Co. luxury design investment"
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
              <span>Investment &amp; Pricing</span>
            </div>
            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              Design Packages &amp; Pricing
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              We believe great architecture starts with clarity. Explore our transparent tiers crafted for single-room refreshes, full-home transformations, and bespoke architectural commissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-20 md:py-28 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
            Select Your Scope
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
            Predictable, transparent investment.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
            Every engagement includes fixed scope commitments and direct access to trade pricing for furniture, art, and custom architectural fixtures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col justify-between p-8 sm:p-10 border transition-all duration-300 ${
                tier.highlighted
                  ? "bg-charcoal text-beige border-charcoal shadow-2xl scale-[1.02] lg:-translate-y-2 z-10"
                  : "bg-white text-charcoal border-charcoal/10 hover:border-bronze hover:shadow-lg"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-bronze text-beige px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                    {tier.name}
                  </span>
                  <span
                    className={`text-[0.7rem] uppercase tracking-wider ${
                      tier.highlighted ? "text-beige/60" : "text-charcoal/50"
                    }`}
                  >
                    {tier.tagline}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      tier.highlighted ? "text-beige/60" : "text-charcoal/50"
                    }`}
                  >
                    / {tier.unit}
                  </span>
                </div>

                <p
                  className={`mt-4 text-xs leading-relaxed ${
                    tier.highlighted ? "text-beige/70" : "text-charcoal/70"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <span
                    className={`text-[0.7rem] font-bold uppercase tracking-[0.2em] ${
                      tier.highlighted ? "text-beige/90" : "text-charcoal"
                    }`}
                  >
                    What&apos;s Included:
                  </span>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs leading-normal">
                        <Check className="h-4 w-4 shrink-0 text-bronze mt-0.5" />
                        <span className={tier.highlighted ? "text-beige/80" : "text-charcoal/80"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6">
                <Link
                  href={`/contact?plan=${encodeURIComponent(tier.name)}`}
                  className={`w-full inline-flex justify-center items-center gap-2 py-3 px-6 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-bronze text-beige hover:bg-beige hover:text-charcoal"
                      : "bg-charcoal text-beige hover:bg-bronze"
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Feature Comparison Matrix ── */}
      <section className="bg-cream py-20 border-t border-charcoal/10">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
              Side-By-Side Comparison
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl text-charcoal">
              Detailed Scope Breakdown
            </h2>
          </div>

          <div className="overflow-x-auto bg-white border border-charcoal/10 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-charcoal text-beige border-b border-charcoal">
                  <th className="p-4 sm:p-5 font-serif font-normal uppercase tracking-wider text-xs">
                    Scope &amp; Deliverable
                  </th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-center uppercase tracking-wider text-xs">
                    Essential
                  </th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-center bg-bronze/20 uppercase tracking-wider text-xs text-bronze font-bold">
                    Signature
                  </th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-center uppercase tracking-wider text-xs">
                    Bespoke
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="p-4 sm:p-5 font-medium text-charcoal">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-charcoal/70">
                      {typeof row.essential === "boolean" ? (
                        row.essential ? (
                          <Check className="h-4 w-4 mx-auto text-emerald-600" />
                        ) : (
                          <span className="text-charcoal/30">—</span>
                        )
                      ) : (
                        <span>{row.essential}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-bronze/5 font-semibold text-charcoal">
                      {typeof row.signature === "boolean" ? (
                        row.signature ? (
                          <Check className="h-4 w-4 mx-auto text-emerald-600" />
                        ) : (
                          <span className="text-charcoal/30">—</span>
                        )
                      ) : (
                        <span>{row.signature}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-charcoal/70">
                      {typeof row.bespoke === "boolean" ? (
                        row.bespoke ? (
                          <Check className="h-4 w-4 mx-auto text-emerald-600" />
                        ) : (
                          <span className="text-charcoal/30">—</span>
                        )
                      ) : (
                        <span>{row.bespoke}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQ />

      {/* ── Bottom Callout ── */}
      <section className="bg-espresso text-beige py-20 text-center">
        <div className="container max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Tailored Proposals
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-beige">
            Need a custom scope of work?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            Tell us about your property, architectural drawings, or renovation vision and we will produce a detailed estimate within 48 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-colors hover:bg-beige hover:text-charcoal"
            >
              Request Custom Estimate
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
