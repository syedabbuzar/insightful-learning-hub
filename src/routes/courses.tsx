import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { courses } from "@/lib/site-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — REZ Academy Nanded" },
      { name: "description", content: "Explore academic courses at REZ Academy — 11th & 12th Science (NEET/JEE/MHT-CET), Foundation courses for Classes 5-10, and holistic student support programs." },
      { property: "og:title", content: "Courses — REZ Academy Nanded" },
      { property: "og:description", content: "11th-12th Science, 5th-10th Foundation, and holistic student support programs." },
    ],
  }),
  component: CoursesLayout,
});

function CoursesLayout() {
  const matches = useMatches();
  const isDetail = matches.some((m) => m.routeId === "/courses/$slug");
  if (isDetail) return <Outlet />;
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="Academic Programs"
        title={<>Courses built for <span className="text-brand">real understanding.</span></>}
        subtitle="Three flagship programs covering foundation, senior wing, and holistic student development."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={c.slug} className={`bg-white p-8 border border-black/10 rounded-sm flex flex-col ${i === 1 ? "border-t-4 border-t-brand" : ""}`}>
              <span className="font-[var(--font-mono)] text-brand font-bold text-xs mb-4 block uppercase tracking-widest">0{i + 1} / {c.badge}</span>
              <h3 className="text-2xl font-extrabold mb-2">{c.title}</h3>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">{c.tagline}</p>
              <p className="text-slate-600 text-sm mb-6">{c.summary}</p>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Subjects</p>
                <div className="flex flex-wrap gap-2">
                  {c.subjects.map((s) => (
                    <span key={s} className="text-[11px] font-semibold px-2 py-1 bg-slate-100 text-slate-700 rounded">{s}</span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 mb-8 text-sm flex-1">
                {c.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2"><CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all">
                Full Details <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}