"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/phone-mockup";

const screens = [
  { label: "Scan en un instant", offset: "sm:mt-10" },
  { label: "Fiche carte & cote en direct", offset: "sm:mt-0" },
  { label: "Portefeuille & statistiques", offset: "sm:mt-14" },
  { label: "Communauté & duels", offset: "sm:mt-2" },
];

export function AppPreview() {
  return (
    <section id="apercu" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-radial pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-pink">
            Aperçu
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
            Une app pensée pour les collectionneurs sérieux
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Une interface sombre et lisible, façon terminal de trading — pour que la
            donnée (cotes, stats, historique) reste toujours au premier plan.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-6 sm:gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={screen.offset}
            >
              <PhoneMockup alt={screen.label} label={screen.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
