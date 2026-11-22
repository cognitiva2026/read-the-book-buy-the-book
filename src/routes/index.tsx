import { createFileRoute } from "@tanstack/react-router";

import { Divulgar, Hero, Produtos } from "@/components/sales/PartOne";
import { EstruturaVideo, Instagram, WhatsApp } from "@/components/sales/PartTwo";
import { CopiarFunciona, Erros, Oferta, SemSeguidores } from "@/components/sales/PartThree";
import { CtaButton } from "@/components/sales/shared";

const TITLE = "Escolha de Produtos que Realmente Vendem";
const DESCRIPTION =
  "Antes de começar qualquer divulgação, você precisa ter em mãos um produto campeão — aquele que praticamente se vende sozinho.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function MidCta() {
  return (
    <div className="flex justify-center pb-4">
      <CtaButton />
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Produtos />
      <Divulgar />
      <WhatsApp />
      <Instagram />
      <EstruturaVideo />
      <MidCta />
      <SemSeguidores />
      <CopiarFunciona />
      <Erros />
      <Oferta />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        LandingPage produzida por Cognitiva Marketing Digital - 2027
      </footer>
    </main>
  );
}
