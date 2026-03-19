import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Product Sourcing China | Build Brand from China | Fujma Limited",
  description:
    "Leading China sourcing agency helping entrepreneurs build brands from China. Expert product sourcing China services, Hong Kong company formation, and China import export services. Launch your brand with confidence.",
  keywords: [
    "product sourcing China",
    "build brand from China",
    "China sourcing agency",
    "Hong Kong company formation",
    "China import export services",
    "China manufacturing",
    "product sourcing agency",
    "China factory sourcing",
    "brand creation China",
    "trademark registration Hong Kong",
    "import export China",
    "China supplier verification",
  ],
  authors: [{ name: "Fujma Limited" }],
  creator: "Fujma Limited",
  publisher: "Fujma Limited",
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
    locale: "en_US",
    url: "https://fujma.com",
    siteName: "Fujma Limited",
    title: "Product Sourcing China | Build Brand from China | Fujma Limited",
    description:
      "Leading China sourcing agency helping entrepreneurs build brands from China. Expert product sourcing China services, Hong Kong company formation, and China import export services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fujma Limited - Product Sourcing China and Brand Building Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Sourcing China | Build Brand from China | Fujma Limited",
    description:
      "Leading China sourcing agency helping entrepreneurs build brands from China. Expert product sourcing China services and Hong Kong company formation.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fujma.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fujma Limited",
              description:
                "Leading China sourcing agency helping entrepreneurs build brands from China with expert product sourcing, Hong Kong company formation, and import export services.",
              url: "https://fujma.com",
              logo: "https://fujma.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "RM 1202, Flat A, 12/F, Efficiency House, 35 Tai Yau Street, San Po Kong",
                addressLocality: "Hong Kong",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+852-5926-9273",
                contactType: "Customer Service",
                email: "contact@fujma.com",
                availableLanguage: ["English", "Chinese"],
              },
              sameAs: [
                "https://linkedin.com/company/fujma",
                "https://twitter.com/fujma",
              ],
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "China Sourcing and Brand Building Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Product Sourcing China",
                      description:
                        "Expert product sourcing services from verified Chinese factories and suppliers.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brand Creation from China",
                      description:
                        "Complete brand building services including design, packaging, and market positioning.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hong Kong Company Formation",
                      description:
                        "Professional Hong Kong company registration and setup services for international trade.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "China Import Export Services",
                      description:
                        "Full logistics support including inspection, documentation, and worldwide shipping.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Trademark Registration",
                      description:
                        "Trademark registration and brand protection services in Hong Kong.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
