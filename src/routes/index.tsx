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
    const compact = window.matchMedia("(max-width: 767px)");
    const animations = new Set<Animation>();
    const sections = Array.from(page.querySelectorAll<HTMLElement>(":scope > section"));
    const order = new Map<Element, { scene: number; item: number }>();
    sections.forEach((section, scene) => {
      const content = section.firstElementChild;
      if (!content) return;
      Array.from(content.children).forEach((target, item) => order.set(target, { scene, item }));
    });
    page.querySelectorAll(":scope > div, :scope > footer").forEach((target) =>
      order.set(target, { scene: 9, item: 0 })
    );
    const play = (target: Element, frames: Keyframe[], duration: number, delay = 0) => {
      const animation = target.animate(frames, {
        duration, delay, fill: "backwards", easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
      animation.oncancel = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches) continue;
        const { scene, item } = order.get(entry.target) ?? { scene: 0, item: 0 };
        const heading = entry.target.matches("h2, h3");
        const distance = compact.matches ? 12 : 28;
        const mode = scene % 4;
        const delay = Math.min(item % 3 * 45, 90);
        if (heading) {
          play(entry.target, [
            { opacity: 0.45, clipPath: "inset(0 0 35% 0)", translate: "0 12px" },
            { opacity: 1, clipPath: "inset(-8% -3% -12% -3%)", translate: "0 0" },
          ], 1250, delay);
        } else {
          const start: Keyframe = mode === 0
            ? { opacity: 0.5, translate: "0 18px", scale: "0.99" }
            : mode === 1
              ? { opacity: 0.5, translate: `${item % 2 ? distance : -distance}px 6px` }
              : mode === 2
                ? { opacity: 0.5, scale: "0.98", translate: "0 8px" }
                : { opacity: 0.5, translate: "0 14px", clipPath: "inset(0 0 5% 0)" };
          play(entry.target, [start, {
            opacity: 1, translate: "0 0", scale: "1", clipPath: "inset(-12% -12% -12% -12%)",
          }], 1350, delay);
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    order.forEach((_, target) => observer.observe(target));

    // A short light sweep marks each scene boundary without moving the layout.
    const accents: HTMLElement[] = [];
    const sceneObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        sceneObserver.unobserve(entry.target);
        if (motion.matches) continue;
        const accent = document.createElement("span");
        accent.setAttribute("aria-hidden", "true");
        Object.assign(accent.style, {
          position: "absolute", top: "0", left: "0", width: "100%", height: "2px",
          pointerEvents: "none", zIndex: "1", transformOrigin: "center",
          background: "linear-gradient(90deg, transparent, var(--primary-glow), transparent)",
        });
        entry.target.appendChild(accent);
        accents.push(accent);
        play(accent, [
          { opacity: 0, scale: "0.08 1" },
          { opacity: 0.45, scale: "0.8 1", offset: 0.45 },
          { opacity: 0, scale: "1 1" },
        ], 1700);
        accent.style.opacity = "0";
      }
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
    sections.forEach((section) => sceneObserver.observe(section));
    const stopMotion = () => {
      if (motion.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      sceneObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      accents.forEach((accent) => accent.remove());
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
