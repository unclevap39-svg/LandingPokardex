"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#apercu", label: "Aperçu" },
  { href: "#chiffres", label: "Chiffres" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-extrabold text-white shadow-[0_0_20px_-4px_rgba(236,72,153,0.7)]">
            P
          </span>
          Pokardex
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="#beta">Tester la bêta</a>
          </Button>
        </div>

        <button
          aria-label="Ouvrir le menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 px-5 pb-6 pt-2 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-3 w-full" asChild onClick={() => setOpen(false)}>
              <a href="#beta">Tester la bêta</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
