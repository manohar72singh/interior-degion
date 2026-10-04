import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Investment & Design Packages",
  description:
    "Transparent pricing tiers for room refreshes, whole-home interior architecture, and bespoke commissions with full deliverable scope.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Investment & Design Packages | Housen & Co.",
    description:
      "Predictable, transparent investment models for luxury interior design and turnkey architectural execution.",
    url: "/pricing",
    images: [{ url: "/images/project-3.jpg", width: 1200, height: 630, alt: "Housen & Co. Investment & Pricing" }],
  },
};

export default function Pricing() {
  return (
    <main>
      <PricingPage />
    </main>
  );
}
