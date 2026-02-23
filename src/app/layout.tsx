import type { Metadata } from "next";
import { cormorant, cormorantGaramond } from "@/lib/fonts";
import { AmplitudeProvider } from "@/lib/amplitude";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fleurizz — Des fleurs livrées chaque mois",
  description:
    "Abonnez-vous et offrez un bouquet de saison chaque mois à la personne que vous aimez. Simple, élégant, automatique.",
  openGraph: {
    title: "Fleurizz — Des fleurs livrées chaque mois",
    description:
      "Abonnez-vous et offrez un bouquet de saison chaque mois à la personne que vous aimez. Simple, élégant, automatique.",
    type: "website",
    locale: "fr_FR",
    siteName: "Fleurizz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleurizz — Des fleurs livrées chaque mois",
    description:
      "Abonnez-vous et offrez un bouquet de saison chaque mois à la personne que vous aimez. Simple, élégant, automatique.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${cormorantGaramond.variable}`}
    >
      <body className="antialiased">
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
