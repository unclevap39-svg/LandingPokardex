"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  TrendingUp,
  Wallet,
  Globe2,
  Heart,
  Users,
  UserCircle2,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ScanLine,
    title: "Scan intelligent",
    description:
      "Pointe l'appareil photo sur une carte : l'IA la reconnaît (OCR + index de ~82 940 cartes, 8 langues) et l'ajoute à ta collection avec sa cote.",
  },
  {
    icon: TrendingUp,
    title: "Cotes réelles en direct",
    description:
      "Prix Cardmarket (EUR) et TCGplayer (USD) réels via TCGdex, jamais inventés. Historique, graphique d'évolution, alertes de prix.",
  },
  {
    icon: Wallet,
    title: "Collection & portefeuille",
    description:
      "Valeur totale, gain/perte, plusieurs exemplaires à des prix d'achat différents, statistiques par set et par performance.",
  },
  {
    icon: Globe2,
    title: "Catalogue mondial complet",
    description:
      "Toutes les séries depuis 1999 (Set de Base), tous les sets, recherche multilingue FR/EN/DE/ES/IT/PT/JA/ZH-TW.",
  },
  {
    icon: Heart,
    title: "Wishlist",
    description: "Garde un œil sur les cartes convoitées avec un prix cible d'achat.",
  },
  {
    icon: Users,
    title: "Communauté",
    description:
      "Ajoute des amis, discute en temps réel (présence en ligne), compare vos collections en duel, grimpe au classement.",
  },
  {
    icon: UserCircle2,
    title: "Profil",
    description: "Photo, niveau, XP et trophées de collectionneur pour suivre ta progression.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentialité sérieuse",
    description:
      "Données hébergées en Europe (UE), jamais vendues. Suppression de compte en un clic.",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionIntro
          eyebrow="Fonctionnalités"
          title="Tout ce qu'il faut pour gérer ta collection comme un pro"
          subtitle="Pokardex n'est pas un simple classeur numérique : c'est un portefeuille d'investissement pour cartes à collectionner."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-pink">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-muted">{subtitle}</p>
    </motion.div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof ScanLine;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={cn(
        "group relative flex flex-col bg-background p-8 transition-colors duration-300 hover:bg-background-elevated"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-violet/0 via-brand-violet/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-brand-violet/[0.06]" />
      <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-pink transition-colors group-hover:border-brand-violet/40 group-hover:text-white group-hover:bg-gradient-brand">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="relative z-10 font-display text-lg font-bold">{title}</h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}
