import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KalkConnect e.V. - Engagement fördern. Teilhabe stärken.",
  description:
    "Gemeinnütziger Verein in Köln-Kalk für politische Bildung, Integration und Kultur. Plattform für Begegnung, Beratung und Engagementförderung. Spenden willkommen.",
  keywords: [
    "KalkConnect",
    "Köln",
    "Kalk",
    "gemeinnützig",
    "Verein",
    "politische Bildung",
    "Integration",
    "Kultur",
    "Engagement",
    "Spenden",
    "Beratung",
    "Community",
    "Netzwerk",
    "Bildung",
    "Teilhabe",
    "Gleichberechtigung",
  ].join(", "),
  authors: [{ name: "KalkConnect e.V.", url: "https://kalkconnect.org" }],
  creator: "KalkConnect e.V.",
  publisher: "KalkConnect e.V.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kalkconnect.org",
    title: "KalkConnect e.V. - Engagement fördern. Teilhabe stärken.",
    description: "Gemeinnütziger Verein in Köln-Kalk für politische Bildung, Integration und Kultur.",
    siteName: "KalkConnect e.V.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KalkConnect e.V. - Gemeinnütziger Verein in Köln-Kalk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KalkConnect e.V. - Engagement fördern. Teilhabe stärken.",
    description: "Gemeinnütziger Verein in Köln-Kalk für politische Bildung, Integration und Kultur.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kalkconnect.org",
    languages: {
      "de-DE": "https://kalkconnect.org",
      "en-US": "https://kalkconnect.org/en",
      "tr-TR": "https://kalkconnect.org/tr",
      "ar-SA": "https://kalkconnect.org/ar",
      "fa-IR": "https://kalkconnect.org/fa",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#047857" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "Non-profit Organization",
    generator: 'v0.dev'
}

// Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "KalkConnect e.V.",
  alternateName: "KalkConnect",
  description: "Gemeinnütziger Verein in Köln-Kalk für politische Bildung, Integration und Kultur.",
  url: "https://kalkconnect.org",
  logo: "https://kalkconnect.org/logo.png",
  image: "https://kalkconnect.org/og-image.jpg",
  telephone: "+49 163 2072108",
  email: "info@kalkconnect.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kapellenstr. 9A",
    addressLocality: "Köln",
    postalCode: "51103",
    addressCountry: "DE",
    addressRegion: "NRW",
  },
  areaServed: {
    "@type": "Place",
    name: "Köln-Kalk",
  },
  foundingLocation: {
    "@type": "Place",
    name: "Köln, Deutschland",
  },
  nonprofitStatus: "NonprofitType",
  mission: "Förderung des bürgerschaftlichen Engagements in den Bereichen politische Bildung, Integration und Kultur",
  knowsAbout: [
    "Politische Bildung",
    "Integration",
    "Kultur",
    "Beratung",
    "Community Work",
    "Netzwerkarbeit",
    "Bildungsangebote",
  ],
  sameAs: ["https://kalkconnect.org"],
  potentialAction: {
    "@type": "DonateAction",
    recipient: {
      "@type": "NGO",
      name: "KalkConnect e.V.",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Skip to content link for accessibility */}
        <a href="#main" className="skip-to-content">
          Zum Hauptinhalt springen
        </a>

        {/* Main content area */}
        <main id="main" role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
