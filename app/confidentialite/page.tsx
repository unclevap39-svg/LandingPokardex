import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Pokardex",
};

export default function PrivacyPage() {
  return (
    <main className="container-page py-24 sm:py-32">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l&apos;accueil
      </Link>

      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-muted">Dernière mise à jour : {new Date().getFullYear()}</p>

      <div className="prose-invert mt-10 flex max-w-2xl flex-col gap-8 text-muted">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Hébergement de vos données
          </h2>
          <p className="mt-2 leading-relaxed">
            Toutes les données de Pokardex (compte, collection, messages) sont hébergées
            au sein de l&apos;Union européenne, conformément au RGPD.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Vos données ne sont jamais vendues
          </h2>
          <p className="mt-2 leading-relaxed">
            Nous ne vendons ni ne louons vos données personnelles à des tiers, à aucun
            moment. Les cotes de cartes affichées proviennent de sources publiques de
            marché (Cardmarket, TCGplayer via TCGdex) et ne constituent pas des données
            personnelles.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Suppression de compte
          </h2>
          <p className="mt-2 leading-relaxed">
            Vous pouvez supprimer votre compte et l&apos;ensemble de vos données associées
            en un clic, directement depuis les réglages de l&apos;application.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Nous contacter
          </h2>
          <p className="mt-2 leading-relaxed">
            Pour toute question relative à vos données, écrivez-nous à{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-foreground underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
