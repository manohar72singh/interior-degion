export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InteriorDesignStudio",
        "@id": "https://housenandco.com/#organization",
        "name": "Housen & Co.",
        "url": "https://housenandco.com",
        "logo": "https://housenandco.com/images/logo.jpeg",
        "image": "https://housenandco.com/images/hero.jpg",
        "description": "Housen & Co. is a luxury interior design and architecture studio specializing in high-end private residences, coastal villas, and bespoke hospitality spaces.",
        "priceRange": "$$$$",
        "telephone": "+91-9599775274",
        "email": "info@housenandco.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No 17, Pine Wood Enclave Sec-2, Wave City",
          "addressLocality": "Ghaziabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201015",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Architectural & Interior Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Scope Interior Design",
                "description": "Comprehensive spatial transformation from conceptual vision to final white-glove styling."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Spatial Architecture Planning",
                "description": "Considered floor plans and traffic flow layouts optimizing natural light and acoustic luxury."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Turnkey Renovation Management",
                "description": "Complete renovation supervision respecting architectural heritage while infusing modern systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Furniture & Millwork",
                "description": "Bespoke furniture pieces and cabinetry designed in-house and hand-crafted by master artisans."
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "United States"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Europe"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://housenandco.com/#website",
        "url": "https://housenandco.com",
        "name": "Housen & Co.",
        "description": "Luxury Interior & Architecture Studio",
        "publisher": {
          "@id": "https://housenandco.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
