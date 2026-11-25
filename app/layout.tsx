import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Sehyogi Enterprises | Solar Solutions in Bareilly",
    template: "%s | Sehyogi Enterprises"
  },
  description: "Solar solutions, system sizing and installation guidance from Sehyogi Enterprises, an approved UPNEDA vendor based in Bareilly, Uttar Pradesh.",
  metadataBase: site.siteUrl ? new URL(site.siteUrl) : undefined,
  openGraph: {
    title: "Sehyogi Enterprises | Solar Solutions in Bareilly",
    description: "Solar solutions for homes and commercial sites in Bareilly and nearby areas.",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Sehyogi Enterprises solar solutions" }]
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Bareilly",
      addressRegion: "Uttar Pradesh",
      postalCode: "243122",
      addressCountry: "IN"
    },
    areaServed: ["Bareilly", "Budaun", "Pilibhit", "Rampur"],
    url: site.siteUrl || undefined
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/><SiteShell>{children}</SiteShell></body></html>;
}
