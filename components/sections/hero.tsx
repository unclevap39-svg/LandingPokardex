"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmailCaptureForm } from "@/components/email-capture-form";

const CardSphere = dynamic(
  () => import("@/components/card-sphere").then((mod) => mod.CardSphere),
  { ssr: false }
);

function lerp(input: number[], output: number[], t: number) {
  if (t <= input[0]) return output[0];
  if (t >= input[input.length - 1]) return output[output.length - 1];
  for (let i = 0; i < input.length - 1; i++) {
    if (t >= input[i] && t <= input[i + 1]) {
      const localT = (t - input[i]) / (input[i + 1] - input[i]);
      return output[i] + (output[i + 1] - output[i]) * localT;
    }
  }
  return output[output.length - 1];
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Applied imperatively (not via style={{opacity: motionValue}}) — Framer's
  // native scroll-timeline optimization was desyncing from scrollYProgress
  // for this scoped (non-page-wide) scroll range, leaving the hero content
  // stuck at full opacity past the fade-out point.
  useMotionValueEvent(scrollYProgress, "change", (t) => {
    if (contentRef.current) {
      contentRef.current.style.opacity = String(lerp([0, 0.35, 0.55], [1, 1, 0], t));
      contentRef.current.style.transform = `translateY(${lerp([0, 0.55], [0, -60], t)}px)`;
    }
    if (scrollHintRef.current) {
      scrollHintRef.current.style.opacity = String(lerp([0, 0.15, 0.3], [1, 1, 0], t));
    }
  });

  return (
    <section id="top" ref={sectionRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="glow-radial pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-0">
          <CardSphere progress={scrollYProgress} />
        </div>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[130%] w-[min(640px,92%)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-background/55 blur-3xl"
          aria-hidden
        />

        <div ref={contentRef} className="container-page relative z-10">
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

        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          Scroll ↓
        </div>
      </div>
    </section>
  );
}
