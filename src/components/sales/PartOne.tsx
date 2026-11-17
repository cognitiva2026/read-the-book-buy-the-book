import {
  Clapperboard,
  Filter,
  Star,
  Store,
  Tag,
  Video,
} from "lucide-react";

import ebookCover from "@/assets/ebook-cover.jpg";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import { Button } from "@/components/ui/button";

import {
  Callout,
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
    <header className="relative overflow-hidden">
      <img
        src={heroBg.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Do Zero à <span className="text-gradient-primary">Primeira Venda</span>
          </h1>
          <Lead className="mt-8 max-w-2xl text-foreground/85">
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
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-6 rounded-full bg-primary/40 blur-3xl" />
          <img
            src={ebookCover}
            alt="Capa do ebook Escolha de Produtos que Realmente Vendem"
            width={1024}
            height={1280}
            className="relative animate-float-slow mask-fade-edges"
          />
        </div>
      </div>
    </header>
  );
}

export function Produtos() {
  return (
    <Section id="conteudo" className="pt-4 md:pt-8">
      <div className="grid gap-5 md:grid-cols-6">
        {criteria.map((c, i) => (
          <div
            key={c.title}
            className={`rounded-xl border border-border bg-secondary/60 p-7 shadow-card transition-transform hover:-translate-y-1 ${
              i < 3 ? "md:col-span-2" : "md:col-span-3"
            }`}
          >
            <IconBadge>{c.icon}</IconBadge>
            <h3 className="mt-6 text-lg font-bold text-foreground md:text-xl">{c.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-20">Categorias Campeãs que Vendem Muito</SubTitle>
      <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {categories.map(([name, desc]) => (
          <li key={name} className="flex gap-3 text-base md:text-lg">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">
              <Strong>{name}</Strong> — {desc}
            </span>
          </li>
        ))}
      </ul>

      <Lead className="mt-12 max-w-4xl">
        Lembre-se: um produto campeão já tem demanda comprovada. Você não precisa convencer ninguém
        a comprar — apenas precisa mostrar que ele existe e está disponível.
      </Lead>
    </Section>
  );
}

export function Divulgar() {
  return (
    <Section className="bg-ember">
      <SectionTitle>Onde Divulgar de Forma Orgânica (GRÁTIS)</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        A boa notícia é que você <Strong>NÃO precisa aparecer</Strong> se não quiser. Existem
        estratégias inteligentes que permitem vender sem expor seu rosto, sua voz ou sua
        identidade. O foco está no produto, não em você.
      </Lead>

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
          <div key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
            <span className="font-display text-5xl font-extrabold text-primary">{i + 1}</span>
            <h4 className="mt-4 text-lg font-bold text-foreground">{s.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Callout>
          <Strong>Nunca fale "compre aqui"</Strong> — isso soa forçado e derruba o engajamento. Use
          frases naturais como: "Link tá no comentário fixado", "Achei na Shopee", ou "Quem quiser
          eu deixei o link". Essa abordagem sutil funciona muito melhor.
        </Callout>
      </div>

      <Lead className="mt-10 max-w-4xl">
        O segredo está em criar vídeos que pareçam recomendações genuínas de amigos, não anúncios
        comerciais. Quando as pessoas sentem que você está compartilhando uma descoberta útil, elas
        confiam e clicam.
      </Lead>
    </Section>
  );
}
