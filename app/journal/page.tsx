import type { Metadata } from "next";
import JournalPage from "@/components/JournalPage";

export const metadata: Metadata = {
  title: "The Journal — Notes on Architecture & Living",
  description:
    "Explore essays, case studies, and editorial insights on interior architecture, tactile materiality, and quiet luxury by Housen & Co.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "The Journal — Notes on Architecture & Living | Housen & Co.",
    description:
      "Essays, interviews, and case studies exploring materials, lighting, and considered interior architecture.",
    url: "/journal",
    images: [{ url: "/images/journal-1.jpg", width: 1200, height: 630, alt: "Housen & Co. Journal" }],
  },
};

export default function Journal() {
  return (
    <main>
      <JournalPage />
    </main>
  );
}
