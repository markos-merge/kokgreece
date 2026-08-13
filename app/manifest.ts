import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ΚΟΚ Ελλάς",
    short_name: "ΚΟΚ Ελλάς",
    description: "Εξάσκηση για τις θεωρητικές εξετάσεις ΚΟΚ",
    start_url: "/",
    display: "standalone",
    background_color: "#100e0b",
    theme_color: "#f0a12a",
    lang: "el",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
