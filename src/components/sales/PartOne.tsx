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
            @keyframes hero-copy-enter {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @media (prefers-reduced-motion: no-preference) {
              .hero-title-enter {
                animation: hero-copy-enter 1100ms ease-out both;
              }
              .hero-subtitle-enter {
                animation: hero-copy-enter 1100ms ease-out 180ms both;
              }
              .hero-description-enter {
                animation: hero-copy-enter 1100ms ease-out 360ms both;
              }
            }
          `}</style>
          <h1
            className="hero-title-enter text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Do zero à <span className="text-gradient-primary">Primeira Venda</span>
          </h1>
          <h2 className="hero-subtitle-enter mt-8 max-w-2xl border-l-4 border-primary pl-5 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Você vai ganhar tanto dinheiro que vai querer{" "}
            <span className="text-gradient-primary">abandonar a CLT!</span>
          </h2>
          <Lead className="hero-description-enter mt-6 max-w-2xl text-foreground/85">
            Você está à um passo de ter acesso aos <Strong>produtos mais lucrativos do digital</Strong>. Aqueles que praticamente se vendem sozinhos. Eu vou pegar sua mão, te mostrar o ouro e te ensinar a como trabalhar de forma inteligente realizando vendas através da internet.
          </Lead>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Produtos() {


  return (
    <Section id="conteudo" className="pt-4 md:pt-8">
      <SectionTitle className="mb-6">Você terá acesso aos produtos que possuem:</SectionTitle>
      <div className="grid auto-rows-fr gap-3 md:grid-cols-6">
        {criteria.map((c, i) => (
          <div
            key={c.title}
            data-index={i}
            className={`h-full rounded-xl border border-border bg-secondary/60 p-4 shadow-card transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none md:col-span-2 ${
              i === 3 ? "md:col-start-2" : i === 4 ? "md:col-start-4" : ""
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground [&_svg]:size-4">
              {c.icon}
            </span>
            <h3 className="mt-3 text-base font-bold leading-snug text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-20 text-2xl md:text-4xl">Categorias Campeãs que Vendem Muito:</SubTitle>
      <ul className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
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
      <SectionTitle>Divulgue esses produtos<br />SEM GASTAR DINHEIRO!</SectionTitle>

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
        {tiktokSteps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-xl border border-border bg-card p-7 shadow-card transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/70 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/10 motion-safe:hover:-translate-y-2 motion-reduce:transition-none"
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
