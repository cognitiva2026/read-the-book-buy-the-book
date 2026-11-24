import { useEffect, useRef } from "react";
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
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || typeof IntersectionObserver === "undefined" || typeof Element.prototype.animate !== "function") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const targets = new Map<Element, number>();
    page.querySelectorAll(":scope > section > div > *").forEach((element) => {
      if (element.matches("style")) return;
      if (element.matches(".grid")) {
        Array.from(element.children).filter(child => !child.matches("style, .absolute")).forEach((child, index) => targets.set(child, (index % 3) * 180));
      } else {
        targets.set(element, 0);
      }
    });
    page.querySelectorAll(":scope > div, :scope > footer").forEach(element => targets.set(element, 0));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches) continue;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 1100, easing: "ease-out", delay: targets.get(entry.target) ?? 0, fill: "backwards" }
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    targets.forEach((_, target) => observer.observe(target));
    const stopMotion = () => {
      if (motion.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen overflow-x-clip bg-background text-foreground">
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
