import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Curated Works & Architectural Portfolio",
  description:
    "Explore our collection of private residences, coastal villas, Manhattan penthouses, and boutique hospitality projects crafted with timeless restraint.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Curated Works & Architectural Portfolio | Housen & Co.",
    description:
      "A portfolio of luxury homes, historic restorations, and coastal sanctuaries designed with honest materials and spatial rigor.",
    url: "/projects",
    images: [{ url: "/images/project-1.jpg", width: 1200, height: 630, alt: "Housen & Co. Projects Portfolio" }],
  },
};

export default function Projects() {
  return (
    <main>
      <ProjectsPage />
    </main>
  );
}
