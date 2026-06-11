import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { branches } from "@/lib/site-data";
import { MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — REZ Academy Nanded" },
      { name: "description", content: "Visit REZ Academy at Bhagya Nagar (main branch) or our new Hyder Bagh branch opening 15th June. Both located in Nanded, Maharashtra." },
      { property: "og:title", content: "Our Branches — REZ Academy Nanded" },
      { property: "og:description", content: "Two branches serving Nanded — Bhagya Nagar and the new Hyder Bagh facility." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="Visit Us"
        title={<>Two branches serving <span className="text-brand">Nanded</span>.</>}
        subtitle="Our flagship campus at Bhagya Nagar plus our brand-new facility opening 15th June at Hyder Bagh."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {branches.map((b) => (
            <div key={b.id} className={`p-10 border-2 ${b.color === "red" ? "border-[var(--color-accent-red)]/30 bg-gradient-to-br from-[var(--color-accent-red)]/5 to-brand/5" : "border-brand/20 bg-slate-50"}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`size-3 rounded-full ${b.color === "red" ? "bg-[var(--color-accent-red)] animate-pulse" : "bg-brand"}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${b.color === "red" ? "text-[var(--color-accent-red)]" : "text-brand"}`}>{b.label}</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-3">{b.name}</h2>
              <p className="flex items-start gap-2 text-slate-600 mb-6"><MapPin className="size-4 mt-1 shrink-0" />{b.address}</p>
              <p className="text-slate-600 leading-relaxed mb-8">{b.description}</p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Facilities</h4>
                <ul className="space-y-2">
                  {b.facilities.map((f) => (
                    <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Want to visit?</h2>
          <p className="opacity-80 mb-8">Walk in any day or call us first to schedule a tour with our counsellor.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919370123760" className="bg-white text-slate-900 font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-slate-100 transition-all">Call 93701 23760</a>
            <Link to="/contact" className="border-2 border-white font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-white hover:text-slate-900 transition-all">Send Message</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}