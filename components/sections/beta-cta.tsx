"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function BetaCTA() {
  return (
    <section id="beta" className="relative py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glow-radial relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-elevated px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-pink">
            Rejoins la bêta
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Essaie Pokardex avant tout le monde
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted">
            L&apos;app n&apos;est pas encore sur l&apos;App Store ni le Play Store — mais
            elle tourne déjà en bêta, ouverte à tous via Expo Go.
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4">
            {siteConfig.expoGoUrl ? (
              <Button size="lg" className="w-full" asChild>
                <a href={siteConfig.expoGoUrl}>
                  <Smartphone className="h-4 w-4" />
                  Ouvrir la bêta dans Expo Go
                </a>
              </Button>
            ) : (
              <Button size="lg" className="w-full" disabled>
                <Smartphone className="h-4 w-4" />
                Lien Expo Go bientôt disponible
              </Button>
            )}

            <div className="flex items-center gap-3 self-stretch">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-muted">ou reçois le lien par e-mail</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <EmailCaptureForm className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
