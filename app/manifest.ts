import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Housen & Co. | Luxury Interior & Architecture Studio",
    short_name: "Housen & Co.",
    description: "Luxury interior and architecture studio crafting timeless, considered spaces for high-end homes and hospitality.",
    start_url: "/",
    display: "standalone",
    background_color: "#E5DFD3",
    theme_color: "#3A322C",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
