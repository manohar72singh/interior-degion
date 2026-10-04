import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Interior Architecture & Design Services",
  description:
    "Explore our full suite of luxury services: full-scope interior design, spatial architecture planning, turnkey renovation, and bespoke artisan furniture.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Interior Architecture & Design Services | Housen & Co.",
    description:
      "Full-scope interior design, spatial planning, and turnkey architectural renovation for luxury residences and hospitality.",
    url: "/services",
    images: [{ url: "/images/philosophy.jpg", width: 1200, height: 630, alt: "Housen & Co. Services" }],
  },
};

export default function Services() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}
