# Pokardex — Landing Page

Site vitrine de l'app mobile Pokardex (« Ta collection, cotée en direct. »),
construit avec Next.js (App Router), Tailwind CSS v4 et Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assemble les sections de la page.
- `components/sections/` — Hero (sphère 3D de cartes), Fonctionnalités, Aperçu (mockups), Chiffres, FAQ, CTA bêta.
- `components/card-sphere.tsx` — scène Three.js (react-three-fiber) : sphère de vraies cartes qui tourne et explose au scroll.
- `components/ui/` — primitives type shadcn (Button, Input, Badge, Accordion).
- `lib/site-config.ts` — liens à compléter (Expo Go, contact, confidentialité).
- `lib/cards-manifest.json` + `public/cards/` — 33 illustrations de cartes réelles (1999→2023) utilisées par la sphère du hero, récupérées via l'API publique de [TCGdex](https://tcgdex.dev) (la même source que Pokardex utilise pour ses cotes réelles). Purement illustratif ; voir le disclaimer en footer.
- `app/api/waitlist/route.ts` — endpoint de capture e-mail (placeholder, à brancher sur un vrai ESP avant le lancement).

## À compléter avant mise en ligne

- Renseigner `expoGoUrl` dans `lib/site-config.ts` avec le vrai lien de test Expo Go.
- Ajouter les vraies captures d'écran dans `components/phone-mockup.tsx` (section Aperçu).
- Brancher `app/api/waitlist/route.ts` sur un service d'e-mail (Resend, Brevo, ConvertKit...).
- Adapter `siteConfig.contactEmail`.
