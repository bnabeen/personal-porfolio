import type { Metadata, Viewport } from "next";
import { Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, elsewhereLinks } from "@/lib/data";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif-source",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nabinbudha.com.np"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nabeen Budha",
    "Nabin Budha",
    "bnabeen",
    "Devata",
    "RUJU FactCheck",
    "Kathmandu",
    "Nepal Tech",
    "Fact Checking Nepal",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://nabinbudha.com.np",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nabinbudha.com.np/#person",
      name: siteConfig.name,
      alternateName: ["Nabin Budha", "bnabeen"],
      url: "https://nabinbudha.com.np",
      image: "https://nabinbudha.com.np/icon.png",
      jobTitle: "Student & Founder",
      worksFor: {
        "@type": "Organization",
        name: "Devata",
      },
      alumniOf: {
        "@type": "Organization",
        name: "RUJU FactCheck",
      },
      sameAs: elsewhereLinks.map((item) => item.href),
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": "https://nabinbudha.com.np/#website",
      url: "https://nabinbudha.com.np",
      name: siteConfig.name,
      alternateName: "Nabin Budha Portfolio",
      description: siteConfig.description,
      publisher: {
        "@id": "https://nabinbudha.com.np/#person",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="site-container">{children}</div>
      </body>
    </html>
  );
}
