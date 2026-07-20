"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/stat-counter";

const stats = [
  {
    value: 82940,
    suffix: "+",
    label: "Cartes référencées",
    detail: "FR / EN / DE / ES / IT / PT / JA / ZH-TW",
  },
  {
    value: 2,
    label: "Sources de cotation",
    detail: "Cardmarket (EUR) & TCGplayer (USD), en direct",
    isText: true,
  },
  {
    value: 1999,
    label: "Depuis le Set de Base",
    detail: "Toutes les séries jusqu'à aujourd'hui",
    noSeparator: true,
  },
  {
    value: 8,
    label: "Langues indexées",
    detail: "Recherche et scan multilingues",
  },
];

export function Stats() {
  return (
    <section id="chiffres" className="relative py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-pink">
            En chiffres
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
            Un catalogue complet, des cotes fiables
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Pokardex est en bêta — pas de faux chiffres d&apos;utilisateurs ici, seulement
            des données de catalogue vérifiables.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-holo rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8"
            >
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                {stat.noSeparator ? (
                  stat.value
                ) : (
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-2 font-display text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
