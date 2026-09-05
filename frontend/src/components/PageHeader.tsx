import { Reveal } from '@/components/Reveal';
import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <Reveal variant="fade-down" duration={500}>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-400 mb-4">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={100} duration={600}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">{title}</h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200} duration={600}>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        </Reveal>
        {children && (
          <Reveal variant="fade-up" delay={300} duration={600}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
