"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmailCaptureForm } from "@/components/email-capture-form";

const floatingCards = [
  {
    label: "Dracaufeu ex",
    price: "312,40 €",
    trend: "+8,2 %",
    className: "left-[3%] top-[3%] -rotate-[10deg] sm:left-[2%] sm:top-[14%]",
    delay: 0.15,
    rot: "-10deg",
  },
  {
    label: "Pikachu Illustrator",
    price: "4 180,00 €",
    trend: "+2,1 %",
    className: "right-[1%] top-[8%] rotate-[9deg] hidden md:block",
    delay: 0.3,
    rot: "9deg",
  },
  {
    label: "Mewtwo VSTAR",
    price: "58,90 €",
    trend: "−1,4 %",
    negative: true,
    className: "right-[3%] bottom-[3%] rotate-[6deg] sm:right-[4%] sm:bottom-[10%]",
    delay: 0.45,
    rot: "6deg",
  },
  {
    label: "Lugia Legend",
    price: "142,00 €",
    trend: "+4,6 %",
    className: "left-[5%] bottom-[16%] -rotate-[6deg] hidden md:block",
    delay: 0.6,
    rot: "-6deg",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div className="glow-radial pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: card.delay, duration: 0.7, ease: "easeOut" }}
          className={`absolute z-0 ${card.className}`}
          style={{ ["--float-rot" as string]: card.rot }}
        >
          <div className="animate-float-slow card-holo w-24 rounded-2xl border border-white/10 bg-background-elevated/90 p-2.5 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)] backdrop-blur sm:w-40 sm:p-3">
            <div className="mb-2 h-12 w-full rounded-xl bg-gradient-brand opacity-80 sm:h-20" />
            <p className="truncate font-display text-xs font-semibold text-foreground">
              {card.label}
            </p>
            <div className="mt-1 flex items-center justify-between font-mono text-[11px]">
              <span className="text-foreground">{card.price}</span>
              <span className={card.negative ? "text-rose-400" : "text-emerald-400"}>
                {card.trend}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="container-page relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>
              <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
              Bêta ouverte via Expo Go
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Ta collection,
            <br />
            <span className="text-gradient">cotée en direct.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base text-muted sm:text-lg"
          >
            Scanne, estime, échange. Suis la valeur de chaque carte comme un vrai
            portefeuille — avec de vraies cotes Cardmarket &amp; TCGplayer, jamais
            inventées.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 w-full max-w-md"
          >
            <EmailCaptureForm />
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/10" />
              <span className="text-xs text-muted">ou</span>
              <span className="h-px w-8 bg-white/10" />
            </div>
            <Button variant="secondary" size="lg" className="mt-4 w-full" asChild>
              <a href="#beta">
                Tester la bêta maintenant <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 font-mono text-xs text-muted"
          >
            Pas encore sur les stores — 100 % gratuit en bêta, via Expo Go.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
