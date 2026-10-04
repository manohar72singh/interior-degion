import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Project Inquiry & Studio Consultation",
  description:
    "Inquire about interior architecture, turnkey renovation, and bespoke commissions with our design studio in Wave City, Ghaziabad.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Project Inquiry & Studio Consultation | Housen & Co.",
    description:
      "Begin your architectural commission. Connect with our principal design studio in Wave City, Ghaziabad.",
    url: "/contact",
    images: [{ url: "/images/about.jpg", width: 1200, height: 630, alt: "Housen & Co. Studio Consultation" }],
  },
};

export default function Contact() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
