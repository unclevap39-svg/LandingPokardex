import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://pokardex.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pokardex — Ta collection, cotée en direct.",
  description:
    "Scanne tes cartes Pokémon, suis leur cote en direct (Cardmarket, TCGplayer) et gère ta collection comme un vrai portefeuille. Bêta disponible via Expo Go.",
  keywords: [
    "Pokardex",
    "cartes Pokémon",
    "collection Pokémon",
    "cote carte Pokémon",
    "Cardmarket",
    "TCGplayer",
    "scan carte Pokémon",
    "app collectionneur",
  ],
  openGraph: {
    title: "Pokardex — Ta collection, cotée en direct.",
    description:
      "Scanne, estime, échange. Suis la valeur de chaque carte Pokémon comme un vrai portefeuille.",
    url: siteUrl,
    siteName: "Pokardex",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokardex — Ta collection, cotée en direct.",
    description:
      "Scanne, estime, échange. Suis la valeur de chaque carte Pokémon comme un vrai portefeuille.",
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
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
