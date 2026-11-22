import { useEffect, useRef } from "react";

import {
  Clapperboard,
  Filter,
  Star,
  Store,
  Tag,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  CtaButton,
  IconBadge,
  Lead,
  Section,
  SectionTitle,
  Strong,
  SubTitle,
} from "./shared";

const criteria = [
  {
    icon: <Star />,
    title: "Avaliação acima de 4.7",
    text: "Produtos bem avaliados vendem mais e geram menos reclamações",
  },
  {
    icon: <Store />,
    title: "Mais de 1.000 vendas",
    text: "Prova social que o produto já foi validado pelo mercado",
  },
  {
    icon: <Tag />,
    title: "Preço entre R$ 29 e R$ 149",
    text: "Faixa ideal para compra por impulso sem muita reflexão",
  },
  {
    icon: <Filter />,
    title: "Resolve problema claro",
    text: "Produtos que facilitam a vida vendem naturalmente",
  },
  {
    icon: <Video />,
    title: "Vídeos reais nos comentários",
    text: "Clientes mostrando o produto em uso gera confiança total",
  },
];

const categories = [
  ["Produtos para celular", "capinhas, suportes, carregadores"],
  ["Itens de organização", "boxes, ganchos, divisórias"],
  ["Cozinha prática", "gadgets que economizam tempo"],
  ["Beleza", "skincare, maquiagem, acessórios"],
  ["Ferramentas", "produtos que facilitam reparos"],
  ["Iluminação", "LEDs, luminárias decorativas"],
  ["Pet", "brinquedos, comedouros, acessórios"],
  ["Infantil", "educativos, práticos, seguros"],
];

const tiktokSteps = [
  {
    title: "Frequência consistente",
    text: "Poste 1 a 2 vídeos por dia — consistência é mais importante que perfeição",
  },
  {
    title: "Duração estratégica",
    text: "Vídeos rápidos de 6 a 20 segundos prendem atenção e aumentam retenção",
  },
  {
    title: "Formatos que convertem",
    text: "Mostre antes e depois, teste real ou transformação problema → solução",
  },
];

export function Hero() {
  return (
    <header className="relative isolate w-full overflow-hidden">
      <img
        src="https://i.postimg.cc/K8FttCwF/Lista-Secreta-do-Marketing-Digital.png"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
      <div className="relative mx-auto flex min-h-[640px] max-w-6xl items-center px-5 py-16 md:min-h-[720px] md:px-8 md:py-24 lg:min-h-[800px]">
        <div>
          <style>{`
            @keyframes hero-word-open {
              from {
                opacity: 0;
                transform: translateY(0.7em) rotate(3deg);
                clip-path: inset(0 0 100% 0);
              }
              to {
                opacity: 1;
                transform: translateY(0) rotate(0);
                clip-path: inset(-10% -5% -15% -5%);
              }
            }
            @keyframes hero-copy-enter {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @media (prefers-reduced-motion: no-preference) {
              .hero-title-word {
                animation: hero-word-open 2400ms cubic-bezier(0.22, 1, 0.36, 1) both;
              }
              .hero-subtitle-enter {
                animation: hero-copy-enter 1800ms ease-out 1800ms both;
              }
              .hero-description-enter {
                animation: hero-copy-enter 1600ms ease-out 2600ms both;
              }
            }
          `}</style>
          <h1
            aria-label="Do zero à Primeira Venda"
            className="text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            <span aria-hidden="true">
              {["Do", "zero", "à", "Primeira", "Venda"].map((word, i) => (
                <span key={word}>
                  {i > 0 ? " " : null}
                  <span
                    className={`hero-title-word inline-block ${i > 2 ? "text-gradient-primary" : ""}`}
                    style={{ animationDelay: `${i * 400}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h1>
          <h2 className="hero-subtitle-enter mt-8 max-w-2xl border-l-4 border-primary pl-5 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Você vai ganhar tanto dinheiro que vai querer{" "}
            <span className="text-gradient-primary">abandonar a CLT!</span>
          </h2>
          <Lead className="hero-description-enter mt-6 max-w-2xl text-foreground/85">
            Antes de começar qualquer divulgação, você precisa ter em mãos um{" "}
            <Strong>produto campeão</Strong> — aquele que praticamente se vende sozinho. A escolha
            certa do produto é o alicerce de todo o seu sucesso como afiliado. Produtos ruins geram
            frustração, cancelamentos e desmotivação. Já os produtos certos trazem vendas
            recorrentes, avaliações positivas e clientes satisfeitos que indicam para outros.
          </Lead>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton />
            <Button asChild variant="ctaOutline" size="xl">
              <a href="#conteudo">Saber Mais</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Produtos() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const grid = cardsRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!grid || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          if (!reducedMotion.matches && typeof card.animate === "function") {
            animations.push(card.animate(
              [
                { opacity: 0, transform: "translateY(32px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 650,
                delay: (Number(card.dataset.index) % Number(card.dataset.columns || 3)) * 100,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "backwards",
              },
            ));
          }
          observer.unobserve(card);
        });
      },
      { threshold: 0.15 },
    );
    Array.from(grid.children).forEach((card) => observer.observe(card));
    if (categoriesRef.current) {
      Array.from(categoriesRef.current.children).forEach((card) => observer.observe(card));
    }
    const stopAnimations = () => {
      if (reducedMotion.matches) animations.forEach((animation) => animation.cancel());
    };
    reducedMotion.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      reducedMotion.removeEventListener("change", stopAnimations);
    };
  }, []);

  return (
    <Section id="conteudo" className="pt-4 md:pt-8">
      <div ref={cardsRef} className="grid auto-rows-fr gap-5 md:grid-cols-6 md:gap-6">
        {criteria.map((c, i) => (
          <div
            key={c.title}
            data-index={i}
            className={`h-full rounded-xl border border-border bg-secondary/60 p-7 shadow-card transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none md:col-span-2 ${
              i === 3 ? "md:col-start-2" : i === 4 ? "md:col-start-4" : ""
            }`}
          >
            <IconBadge>{c.icon}</IconBadge>
            <h3 className="mt-6 text-lg font-bold text-foreground md:text-xl">{c.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-20">Categorias Campeãs que Vendem Muito</SubTitle>
      <ul ref={categoriesRef} className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
        {categories.map(([name, desc], i) => (
          <li
            key={name}
            data-index={i}
            data-columns="2"
            className="group relative flex h-full items-start gap-3 rounded-xl border border-border bg-secondary/60 p-4 shadow-card transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/70 hover:bg-secondary hover:shadow-lg hover:shadow-primary/10 motion-safe:hover:-translate-y-1 motion-reduce:transition-none md:p-4"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary transition-transform duration-300 motion-safe:group-hover:scale-125 motion-reduce:transition-none"
            />
            <div>
              <h3 className="text-base font-bold leading-snug text-foreground">
                {name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <aside className="mt-10 rounded-xl border border-primary/40 border-l-4 border-l-primary bg-primary/10 p-5 shadow-card md:p-7">
        <p className="max-w-4xl text-base leading-relaxed text-foreground md:text-lg">
          <strong className="font-extrabold text-primary-glow">Lembre-se:</strong>{" "}
          <Strong>um produto campeão já tem demanda comprovada.</Strong> Você não precisa convencer
          ninguém a comprar — <Strong>apenas precisa mostrar que ele existe e está disponível.</Strong>
        </p>
      </aside>
    </Section>
  );
}

export function Divulgar() {
  return (
    <Section className="bg-ember">
      <SectionTitle>Você irá divulgar esses produtos SEM GASTAR DINHEIRO!</SectionTitle>

      <div className="mt-14 flex items-center gap-4">
        <IconBadge>
          <Clapperboard />
        </IconBadge>
        <SubTitle>TikTok / Reels / Kwai – O Ouro do Afiliado</SubTitle>
      </div>
      <Lead className="mt-5 max-w-4xl">
        Essas plataformas são as mais poderosas para afiliados porque o algoritmo favorece conteúdo
        novo, mesmo de perfis pequenos. Você pode ter zero seguidores e seu vídeo alcançar milhares
        de pessoas se for relevante e bem feito.
      </Lead>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <style>{`
          @keyframes sales-step-glow {
            0%, 45%, 100% { opacity: 0; }
            15%, 25% { opacity: 1; }
          }
          .sales-step-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            border: 1px solid hsl(var(--primary) / 0.8);
            box-shadow: 0 0 24px hsl(var(--primary) / 0.28),
              inset 0 0 18px hsl(var(--primary) / 0.08);
            opacity: 0;
          }
          @media (prefers-reduced-motion: no-preference) {
            .sales-step-card::after {
              animation: sales-step-glow 6s ease-in-out infinite;
              animation-delay: inherit;
            }
          }
        `}</style>
        {tiktokSteps.map((s, i) => (
          <div
            key={s.title}
            style={{ animationDelay: `${i * 2}s` }}
            className="sales-step-card relative rounded-xl border border-border bg-card p-7 shadow-card transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/70 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/10 motion-safe:hover:-translate-y-2 motion-reduce:transition-none"
          >
            <span className="font-display text-5xl font-extrabold text-primary">{i + 1}</span>
            <h4 className="mt-4 text-lg font-bold text-foreground">{s.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

    </Section>
  );
}
