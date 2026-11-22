import { useEffect, useRef } from "react";

import { BadgePercent, Hand, MessageCircle, PackageX, Users } from "lucide-react";

import { Callout, IconBadge, Lead, Quote, Section, SectionTitle, Strong, SubTitle } from "./shared";

const whatsappPlaces = [
  {
    title: "Status todos os dias",
    text: "Poste no status do WhatsApp diariamente. Muita gente assiste os status enquanto espera, toma café ou está entediada. É visualização garantida sem esforço.",
  },
  {
    title: "Grupos de promoções",
    text: "Entre em grupos focados em ofertas e promoções. As pessoas nesses grupos já têm intenção de compra — você só precisa mostrar a oferta certa.",
  },
  {
    title: "Grupos de bairro",
    text: 'Grupos comunitários são ótimos porque geram confiança local. Pessoas compram mais de quem está "perto".',
  },
  {
    title: "Família (sim, funciona!)",
    text: "Não subestime o poder da família. Eles confiam em você, compartilham suas mensagens e fazem propaganda boca a boca naturalmente.",
  },
];

const stories = [
  {
    icon: <Users />,
    title: "Prova Social",
    text: "Compartilhe prints de avaliações positivas, vídeos de clientes usando o produto e depoimentos reais. Isso reduz a insegurança e aumenta a confiança.",
  },
  {
    icon: <BadgePercent />,
    title: "Cupom Exclusivo",
    text: 'Ofereça cupons de desconto que parecem exclusivos para quem está assistindo seus stories. "Só pra quem tá aqui agora" funciona muito bem.',
  },
  {
    icon: <PackageX />,
    title: "Estoque Acabando",
    text: "Mostre que o estoque está acabando ou que a promoção está terminando. Urgência genuína acelera a decisão de compra.",
  },
];

const videoSteps = [
  {
    title: "Chamada Forte (3 segundos)",
    text: 'Você tem apenas 3 segundos para capturar atenção. Use frases como: "Esse produto quase acabou com meu problema" ou "Você precisa ver isso antes que acabe". Seja direto e intrigante.',
  },
  {
    title: "Mostre o Problema (rápido)",
    text: 'Identifique uma dor real: "Isso aqui vivia quebrando…", "Eu gastava uma fortuna com…", "Minha casa estava sempre bagunçada…". Faça o espectador se identificar.',
  },
  {
    title: "Mostre a Solução",
    text: 'Apresente o produto naturalmente: "Aí achei isso na Shopee…", "Descobri esse produto que mudou tudo…". Mostre o antes e depois de forma visual.',
  },
  {
    title: "Prova Social",
    text: 'Valide a escolha com números: "Mais de 15 mil vendidos", "Avaliação 4.9 estrelas", "Milhares de comentários positivos". Isso quebra objeções instantaneamente.',
  },
  {
    title: "CTA Leve",
    text: 'Finalize com chamada sutil: "Link tá no comentário fixado", "Quem quiser, eu deixei o link". Nunca force — deixe parecer uma recomendação amigável.',
  },
];

export function WhatsApp() {
  const placesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = placesRef.current;
    if (!grid || !("IntersectionObserver" in window)) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const item = entry.target as HTMLElement;
          if (reducedMotion.matches || typeof item.animate !== "function") return;
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
          const previous = animations.get(item);
          const opacity = getComputedStyle(item).opacity;
          const transform = getComputedStyle(item).transform;
          previous?.cancel();
          animations.set(item, item.animate(
            [
              { opacity, transform },
              { opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" },
            ],
            {
              duration: visible ? 850 : 450,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both",
            },
          ));
        });
      },
      { threshold: [0, 0.1] },
    );
    Array.from(grid.children).forEach((item) => observer.observe(item));
    const stopAnimations = () => {
      if (reducedMotion.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    reducedMotion.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      reducedMotion.removeEventListener("change", stopAnimations);
    };
  }, []);

  return (
    <Section>
      <SectionTitle>Whatsapp: Uma máquina de vendas!</SectionTitle>

      <SubTitle className="mt-14">Onde e Como Divulgar no WhatsApp:</SubTitle>
      <div ref={placesRef} className="mt-8 grid gap-5 md:grid-cols-2">
        {whatsappPlaces.map((w) => (
          <div key={w.title}>
          <div
            className="flex h-full gap-5 rounded-xl border border-border bg-card p-7 shadow-card transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/70 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/10 motion-safe:hover:-translate-y-2 motion-reduce:transition-none"
          >
            <IconBadge>
              <MessageCircle />
            </IconBadge>
            <div>
              <h4 className="text-lg font-bold text-foreground">{w.title}</h4>
              <p className="mt-2 leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          </div>
          </div>
        ))}
      </div>

    </Section>
  );
}

export function Instagram() {
  return (
    <Section className="bg-ember">
      <SectionTitle>Instagram: Todo mundo usa!</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        No instagram é fácil viralizar esses produtos. Use gatilhos mentais, crie senso de urgência
        e transforme reels e stories em ferramentas para fazer dinheiro!
      </Lead>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stories.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-secondary/60 p-7 shadow-card">
            <IconBadge>{s.icon}</IconBadge>
            <h4 className="mt-6 text-lg font-bold text-foreground">{s.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-16">Reels para Alcance Massivo</SubTitle>
      <div className="mt-10">
        <Quote>
          "Reels bem feitos no Instagram podem alcançar milhões de visualizações mesmo sem
          seguidores. O segredo está em copiar formatos que já estão funcionando."
        </Quote>
      </div>
      <Lead className="mt-10 max-w-4xl">
        A combinação de Stories para manter relacionamento e Reels para crescimento orgânico cria um
        sistema poderoso de vendas no Instagram.
      </Lead>
    </Section>
  );
}

export function EstruturaVideo() {
  return (
    <Section>
      <SectionTitle>Estrutura PERFEITA de Vídeo que Vende Sozinho</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        Existe uma fórmula testada e aprovada que afiliados profissionais usam para criar vídeos que
        convertem visualizações em vendas. Essa estrutura é baseada em psicologia de consumo e foi
        refinada por milhares de testes. Se você seguir esse modelo, seus vídeos vão performar muito
        melhor.
      </Lead>

      <ol className="mt-12 grid gap-5 md:grid-cols-6">
        {videoSteps.map((s, i) => (
          <li
            key={s.title}
            className={`rounded-xl border border-border bg-card p-7 shadow-card ${
              i < 3 ? "md:col-span-2" : "md:col-span-3"
            }`}
          >
            <span className="font-display text-4xl font-extrabold text-gradient-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-4 text-lg font-bold text-foreground">{s.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <Callout>
          <span className="flex gap-4">
            <Hand className="mt-1 size-6 shrink-0 text-primary-glow" />
            <span>
              <Strong>Dica profissional:</Strong> Grave o vídeo mostrando apenas suas mãos usando o
              produto. Assim você não precisa aparecer, e o vídeo fica focado 100% no produto — que
              é o que realmente importa.
            </span>
          </span>
        </Callout>
      </div>

      <Lead className="mt-10 max-w-4xl">
        Essa estrutura funciona porque conduz o espectador numa jornada emocional: identificação com
        o problema → esperança com a solução → confiança pela prova social → ação pela chamada
        natural. É uma máquina de conversão testada e aprovada.
      </Lead>
    </Section>
  );
}
