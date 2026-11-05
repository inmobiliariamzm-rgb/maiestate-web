import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // v2: la página de administración de alquileres pasó a /servicios/alquileres.
  redirects() {
    return [
      {
        source: "/servicios/administracion",
        destination: "/servicios/alquileres",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
