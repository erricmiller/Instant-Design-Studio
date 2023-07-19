import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Instant Design Studio",
    short_name: "Instant Design Studio",
    description: "Instant Design Studio is a Full-stack Web, Mobile Design and Development Company.",

    prefer_related_applications: true,
    "theme_color": "#ffffff",
    "background_color": "#004740",
    "display": "fullscreen",
    "orientation": "portrait",
    "id": "/",
    "start_url": "/",
    "icons": [
      {
        "src": "icons/manifest-icon-192.maskable.webp",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-192.maskable.webp",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "icons/manifest-icon-512.maskable.webp",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-512.maskable.webp",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  };
};

export default manifest;
