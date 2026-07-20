"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pokardex est-elle disponible sur l'App Store ou le Play Store ?",
    answer:
      "Pas encore — l'app est en bêta et la soumission aux stores est en préparation. En attendant, tu peux la tester dès maintenant via Expo Go, gratuitement.",
  },
  {
    question: "Comment fonctionne le scan de cartes ?",
    answer:
      "Pointe simplement ton appareil photo sur une carte. Notre moteur d'OCR la reconnaît et la fait correspondre à un index de plus de 82 940 cartes (FR, EN, DE, ES, IT, PT, JA, ZH-TW), puis l'ajoute à ta collection avec sa cote du moment.",
  },
  {
    question: "D'où viennent les cotes affichées ?",
    answer:
      "Des vraies cotes de marché : Cardmarket pour l'Europe (EUR) et TCGplayer pour les États-Unis (USD), récupérées via TCGdex. On n'invente jamais de prix.",
  },
  {
    question: "Pokardex est-elle gratuite ?",
    answer:
      "Oui, l'app est gratuite à l'usage pendant la bêta. Scan, collection, cotes, wishlist et communauté sont accessibles sans payer.",
  },
  {
    question: "Que deviennent mes données ?",
    answer:
      "Elles sont hébergées en Europe (UE) et ne sont jamais vendues à des tiers. Tu peux supprimer ton compte et tes données en un clic, à tout moment.",
  },
  {
    question: "Puis-je suivre plusieurs exemplaires de la même carte ?",
    answer:
      "Oui — tu peux ajouter plusieurs exemplaires d'une même carte, chacun avec son propre prix d'achat, pour suivre précisément ton gain ou ta perte réels.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-pink">
            FAQ
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
