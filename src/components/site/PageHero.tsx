import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-pine text-pine-foreground">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </>
      )}
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow animate-rise text-ember-glow">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-3xl text-5xl leading-[1.02] md:text-7xl [animation-delay:80ms]">
          {title}
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg text-pine-muted [animation-delay:160ms]">
          {intro}
        </p>
        {children && <div className="animate-rise mt-8 [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
