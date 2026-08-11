"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What does the design process look like?",
    answer:
      "We begin with a discovery consultation to understand your space and goals, followed by concept development, material selection, and detailed drawings. Once approved, our team manages procurement, production, and installation through to final styling.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A single-room refresh usually takes 6-10 weeks. Full-home projects generally run 4-9 months depending on scope, and renovations or new builds can extend to 12+ months. We provide a detailed timeline once scope is confirmed.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Our Essential and Signature plans are fixed-scope packages, while Bespoke projects are quoted individually based on square footage, scope, and finish level. A detailed proposal is always shared before any agreement is signed.",
  },
  {
    question: "Do you work outside of the city?",
    answer:
      "Yes — we regularly take on projects nationally and select international commissions. Travel and site-visit costs are outlined transparently in your proposal.",
  },
  {
    question: "Can you work with our existing architect or builder?",
    answer:
      "Absolutely. We frequently collaborate with clients' existing architects, contractors, and builders, and can also recommend trusted partners from our own network if needed.",
  },
  {
    question: "What is included in project management?",
    answer:
      "Our project management covers trade coordination, budget tracking, procurement, delivery scheduling, and on-site quality checks — so you have a single point of contact from groundbreaking to move-in.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-beige py-10 md:py-14 relative">
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze">
            FAQ
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Questions, answered.
          </h2>
          <div className="mt-8 h-px w-24 bg-charcoal/20 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-charcoal/20"
              >
                <AccordionTrigger className="font-serif text-xl md:text-2xl text-charcoal hover:no-underline py-6 group">
                  <span className="transition-colors duration-300 group-hover:text-bronze text-left">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-charcoal/70 pb-8 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
