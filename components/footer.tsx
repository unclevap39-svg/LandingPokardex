import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-brand text-xs font-extrabold text-white">
            P
          </span>
          Pokardex
        </a>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Pokardex. Application non affiliée à The Pokémon
          Company ou Nintendo.
        </p>

        <div className="flex items-center gap-6 text-xs text-muted">
          <a href={siteConfig.privacyUrl} className="hover:text-foreground">
            Politique de confidentialité
          </a>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
