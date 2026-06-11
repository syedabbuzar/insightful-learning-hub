import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="bg-slate-50 border-b border-black/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— {eyebrow}</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mt-3 mb-4 max-w-3xl">{title}</h1>
        {subtitle && <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}