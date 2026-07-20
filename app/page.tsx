import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { AppPreview } from "@/components/sections/app-preview";
import { Stats } from "@/components/sections/stats";
import { FAQ } from "@/components/sections/faq";
import { BetaCTA } from "@/components/sections/beta-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <AppPreview />
        <Stats />
        <FAQ />
        <BetaCTA />
      </main>
      <Footer />
    </>
  );
}
