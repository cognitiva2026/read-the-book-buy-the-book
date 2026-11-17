import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/checkout";
import { cn } from "@/lib/utils";

export function CtaButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="cta" size="xl" className={cn("max-w-full whitespace-normal text-center", className)}>
      <a href={CHECKOUT_URL}>
        Quero aprender a ganhar dinheiro agora
        <ArrowRight />
      </a>
    </Button>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-3xl font-extrabold leading-[1.1] text-foreground md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SubTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-xl font-bold leading-tight text-foreground md:text-3xl", className)}>
      {children}
    </h3>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-base leading-relaxed text-muted-foreground md:text-lg", className)}>
      {children}
    </p>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-foreground">{children}</strong>;
}

export function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-primary-glow">{children}</strong>;
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow [&_svg]:size-5">
      {children}
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/50 bg-secondary/40 p-6 text-base leading-relaxed text-foreground md:p-8 md:text-lg">
      {children}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 text-lg italic leading-relaxed text-foreground md:text-2xl">
      {children}
    </blockquote>
  );
}
