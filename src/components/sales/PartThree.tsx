import { Check, Search, Target, TrendingUp, X } from "lucide-react";

import celebrating from "@/assets/celebrating.jpg.asset.json";
import { Button } from "@/components/ui/button";

import {
  CtaButton,
  Highlight,
  Lead,
  Quote,
  Section,
  SectionTitle,
  SubTitle,
} from "./shared";

const secrets = [
  {
    title: "Postam TODOS OS DIAS",
    text: "Consistência alimenta o algoritmo e cria múltiplas oportunidades de viralizar. Cada vídeo é uma nova chance de explodir.",
  },
  {
    title: "Repetem o mesmo produto de formas diferentes",
    text: "Não desista de um produto depois de um vídeo. Teste diferentes ângulos, músicas, formatos. O décimo vídeo pode ser o que vira.",
  },
  {
    title: "Usam a mesma música que está em alta",
    text: 'Músicas virais recebem impulso extra do algoritmo. Entre em "Tendências" e use os áudios mais populares no momento.',
  },
  {
    title: "Respondem todos os comentários",
    text: "Interação nos comentários aumenta o engajamento e empurra seu vídeo para mais pessoas. Além disso, respostas podem gerar vendas diretas.",
  },
];

const naoVende = [
  "Posta quando lembra",
  "Testa produto uma vez e desiste",
  "Ignora comentários",
  "Usa músicas aleatórias",
];
const vendeMuito = [
  "Posta religiosamente todo dia",
  "Testa o mesmo produto 10+ vezes",
  "Responde e interage sempre",
  "Acompanha e usa tendências",
];

const findSteps = [
  {
    icon: <Search />,
    title: "Pesquise palavras-chave certas",
    text: 'Use termos como "Shopee achados", "Produto barato Shopee", "Testando produto Shopee". Essas buscas revelam vídeos virais comprovados.',
  },
  {
    icon: <Target />,
    title: "Identifique vídeos vencedores",
    text: "Abra vídeos com muitas curtidas, muitos comentários e alta taxa de compartilhamento. Esses são os que realmente venderam.",
  },
  {
    icon: <TrendingUp />,
    title: "Analise o que funciona",
    text: "Observe estrutura do vídeo, tipo de abertura, estilo de legenda e ritmo. Não copie palavra por palavra — adapte o formato ao seu estilo.",
  },
];

const copyRows = [
  ["Estrutura narrativa do vídeo", "O perfil ou identidade do criador"],
  ["Tipo de abertura e gancho", "Textos e frases exatas"],
  ["Estilo de legenda e emojis", "Músicas de baixa performance"],
  ["Ângulos de câmera e transições", "Vídeos com poucos comentários"],
  ["Ritmo e duração do vídeo", "Conteúdo desatualizado"],
];

const errors = [
  {
    title: "Divulgar Produto Ruim",
    text: "Produto com avaliação baixa, poucas vendas ou que demora 3 meses pra chegar vai gerar cancelamentos e frustrações. Escolha produtos validados desde o início — isso é 70% do sucesso.",
  },
  {
    title: "Ficar Trocando de Nicho Toda Hora",
    text: "Hoje você divulga produtos de beleza, amanhã ferramentas, depois pet. Isso confunde o algoritmo e sua audiência. Escolha um nicho e fique nele por pelo menos 90 dias.",
  },
  {
    title: "Postar e Parar",
    text: "Você posta 5 vídeos numa semana, não vê resultado imediato e para. O algoritmo pune inconsistência. Afiliados que vendem postam religiosamente, mesmo quando parece que nada está acontecendo.",
  },
  {
    title: "Querer Resultado em 3 Dias",
    text: "Marketing de afiliados não é loteria. Você está construindo presença, autoridade e confiança. Isso leva tempo. Quem espera resultado mágico em 72 horas sempre desiste cedo demais.",
  },
];

const timeline = [
  {
    title: "Dias 1-15",
    text: "Fase de aprendizado. Você está testando, errando, ajustando. Poucas ou nenhuma venda ainda — é normal.",
  },
  {
    title: "Dias 15-30",
    text: "Primeiras vendas começam a aparecer. Você identifica o que funciona e o que não funciona. Ainda irregular.",
  },
  {
    title: "Dias 30-45",
    text: "Consistência traz tração. Vendas se tornam mais previsíveis. Você entende seu público e otimiza sua estratégia.",
  },
];

const kit = [
  {
    title: "5 Ideias de Produtos Campeões",
    text: "Produtos validados, com alta conversão, avaliações excelentes e demanda comprovada. Você não precisa adivinhar — vai direto ao que funciona.",
  },
  {
    title: "5 Roteiros Prontos de Vídeo",
    text: "Scripts completos seguindo a estrutura que vende. É só adaptar ao produto escolhido, gravar e postar. Economize horas de planejamento.",
  },
  {
    title: "5 Textos Prontos para WhatsApp",
    text: "Mensagens persuasivas e testadas para Stories, Status e grupos. Copie, cole e comece a divulgar imediatamente.",
  },
  {
    title: "Estratégia Personalizada Pro Seu Perfil",
    text: "Análise do seu perfil atual, nicho ideal, melhores plataformas e plano de ação customizado para seus objetivos e disponibilidade.",
  },
];

export function SemSeguidores() {


  return (
    <Section className="bg-ember">
      <SectionTitle>Venda muito mesmo com perfil pequeno</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        O maior erro dos iniciantes é achar que precisam de milhares de seguidores para vender. A
        verdade é que <Highlight>muitos afiliados faturam alto com perfis pequenos</Highlight>{" "}
        porque entendem que engajamento e consistência importam mais que números de vaidade. Você
        pode ter 500 seguidores e vender mais que alguém com 10 mil.
      </Lead>

      <SubTitle className="mt-16">Segredos dos Afiliados que Vendem Muito com Poucos Seguidores</SubTitle>
      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {secrets.map((s, i) => (
          <div key={s.title} data-index={i} className="flex gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary font-display text-lg font-bold text-foreground">
              {i + 1}
            </span>
            <div>
              <h4 className="text-lg font-bold text-foreground md:text-xl">{s.title}</h4>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <h4 className="text-xl font-bold text-foreground">Perfil Pequeno que Não Vende</h4>
          <ul className="mt-6 space-y-4">
            {naoVende.map((t) => (
              <li key={t} className="flex items-center gap-3 text-muted-foreground">
                <X className="size-5 shrink-0 text-destructive" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-primary bg-secondary/60 p-8 shadow-glow">
          <h4 className="text-xl font-bold text-foreground">Perfil Pequeno que Vende Muito</h4>
          <ul className="mt-6 space-y-4">
            {vendeMuito.map((t) => (
              <li key={t} className="flex items-center gap-3 text-foreground">
                <Check className="size-5 shrink-0 text-success" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Lead className="mt-10 max-w-4xl">
        O algoritmo recompensa comportamento, não tamanho. Seja estratégico, consistente e paciente.
        Resultados virão.
      </Lead>
    </Section>
  );
}

export function CopiarFunciona() {
  return (
    <Section>
      <SectionTitle>Copiar o que Já Funciona (Modelo Profissional)</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        Não existe vergonha nenhuma em se inspirar (ou copiar inteligentemente) o que já está dando
        resultado. Afiliados profissionais não inventam a roda — eles observam o que funciona e
        replicam com pequenos ajustes. Isso economiza tempo, reduz erros e acelera resultados.
      </Lead>

      <SubTitle className="mt-16">Como Encontrar Conteúdo Campeão no TikTok</SubTitle>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {findSteps.map((s, i) => (
          <div key={s.title} className="relative rounded-xl border border-border bg-card p-7 shadow-card">
            <span className="absolute right-6 top-5 font-display text-5xl font-extrabold text-primary/30">
              {i + 1}
            </span>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground [&_svg]:size-5">
              {s.icon}
            </div>
            <h4 className="mt-5 text-lg font-bold text-foreground">{s.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-16">O Que Copiar e O Que Evitar</SubTitle>
      <div className="mt-8 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-2 bg-secondary font-display text-sm font-bold text-foreground md:text-base">
          <div className="flex items-center gap-2 p-4 md:p-5">
            <Check className="size-5 text-success" /> Pode Copiar
          </div>
          <div className="flex items-center gap-2 border-l border-border p-4 md:p-5">
            <X className="size-5 text-destructive" /> Não Copie
          </div>
        </div>
        {copyRows.map(([ok, no]) => (
          <div key={ok} className="grid grid-cols-2 border-t border-border bg-card text-sm md:text-base">
            <div className="p-4 text-foreground md:p-5">{ok}</div>
            <div className="border-l border-border p-4 text-muted-foreground md:p-5">{no}</div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Quote>
          "O objetivo não é plagiar, mas sim aprender com quem já dominou o jogo. Você está copiando
          estratégias vencedoras, não roubando identidade."
        </Quote>
      </div>
      <Lead className="mt-10 max-w-4xl">
        Modele o sucesso. Os maiores afiliados do Brasil fazem isso todos os dias — analisam
        concorrentes, adaptam o que funciona e escalam resultados rapidamente.
      </Lead>
    </Section>
  );
}

export function Erros() {
  return (
    <Section className="bg-ember">
      <SectionTitle>Erros Que Mais Fazem Afiliado Desistir</SectionTitle>
      <Lead className="mt-6 max-w-4xl">
        A taxa de desistência entre afiliados iniciantes é altíssima — mais de 80% abandonam nas
        primeiras semanas. Mas não é por falta de potencial ou oportunidade. É porque cometem erros
        evitáveis que destroem a motivação antes dos resultados chegarem. Se você conhece esses
        erros, pode evitá-los.
      </Lead>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {errors.map((e) => (
          <div key={e.title} className="rounded-xl border border-border bg-secondary/70 p-7 shadow-card">
            <h4 className="flex items-center gap-3 text-lg font-bold text-foreground md:text-xl">
              <X className="size-6 shrink-0 text-primary-glow" />
              {e.title}
            </h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{e.text}</p>
          </div>
        ))}
      </div>

      <SubTitle className="mt-20">A Verdade Sobre Prazos Reais</SubTitle>
      <div className="relative mt-10 grid gap-8 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-primary/60 md:block" />
        {timeline.map((t, i) => (
          <div key={t.title} className="relative">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-primary bg-secondary font-display text-xl font-extrabold text-foreground">
              {i + 1}
            </span>
            <h4 className="mt-5 text-xl font-bold text-foreground">{t.title}</h4>
            <p className="mt-2 leading-relaxed text-muted-foreground">{t.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
        <mark className="rounded bg-primary px-1.5 py-0.5 font-bold text-primary-foreground">
          Resultado real vem entre 15 e 45 dias com consistência.
        </mark>{" "}
        Se você desistir antes disso, está desistindo exatamente quando o sucesso estava começando a
        chegar.
      </p>
    </Section>
  );
}

export function Oferta() {
  return (
    <Section id="oferta">
      <SectionTitle>Quer um Começo Prático Agora?</SectionTitle>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <Lead>
            Você acabou de receber o mapa completo para vender como afiliado sem aparecer, sem
            investir e de forma totalmente orgânica. Mas conhecimento sem ação não gera resultados.
            A diferença entre quem vende e quem só sonha é{" "}
            <Highlight>executar o primeiro passo hoje mesmo.</Highlight>
          </Lead>
          <Lead>
            Se você quiser acelerar sua jornada e eliminar o período de tentativa e erro, eu posso te
            entregar agora mesmo um kit completo para começar hoje:
          </Lead>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/25 blur-3xl" />
          <img
            src={celebrating.url}
            alt="Homem comemorando com os braços erguidos"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative aspect-square w-full rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {kit.map((k) => (
          <div
            key={k.title}
            className="rounded-xl border border-primary/60 border-l-8 border-l-primary bg-card p-7 shadow-card"
          >
            <h4 className="flex items-start gap-3 text-lg font-bold text-foreground md:text-xl">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-success text-background">
                <Check className="size-4" strokeWidth={3} />
              </span>
              {k.title}
            </h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{k.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-primary bg-secondary/50 p-8 text-center shadow-glow md:p-14">
        <SubTitle>O Momento de Agir É Agora</SubTitle>
        <Lead className="mx-auto mt-6 max-w-3xl">
          Cada dia que passa sem ação é uma oportunidade perdida. Enquanto você espera o momento
          perfeito, outros afiliados estão vendendo, aprendendo e crescendo. O momento perfeito não
          existe — existe o momento de começar, que é sempre hoje.
        </Lead>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton />
        </div>
        <Lead className="mx-auto mt-10 max-w-3xl text-foreground">
          Você tem todo o conhecimento. Você tem a estratégia. Agora falta apenas a decisão de
          executar. Vamos juntos nessa jornada?
        </Lead>
      </div>
    </Section>
  );
}
