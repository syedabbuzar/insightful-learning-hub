import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { faculty } from "@/lib/site-data";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — REZ Academy Nanded" },
      { name: "description", content: "Meet the expert faculty of REZ Academy: Shahraz ul Haq Sir, Riyaz ul Haq Sir, Sumayya Fatima, Raza ul Haq Sir, Adiya Fatima." },
      { property: "og:title", content: "Faculty — REZ Academy Nanded" },
      { property: "og:description", content: "Decades of combined experience in Physics, Chemistry, Biology, Mathematics and English." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="Our Mentors"
        title={<>Meet the <span className="text-brand">expert faculty</span> behind every success.</>}
        subtitle="Decades of combined teaching experience across Physics, Chemistry, Biology, Mathematics, and English."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {faculty.map((f, i) => (
            <div key={f.slug} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-4">
                <div className="hex-clip w-64 h-72 mx-auto bg-slate-100 overflow-hidden">
                  <img src={f.img} alt={f.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-8">
                <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— Faculty 0{i + 1}</span>
                <h2 className="text-4xl font-extrabold mt-2 mb-1">{f.name}</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">{f.role}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{f.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {f.expertise.map((e) => (
                    <span key={e} className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-brand/5 text-brand border border-brand/10">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Learn from the best in Nanded</h2>
          <p className="opacity-90 mb-8">Enroll today and study with mentors who genuinely care about your success.</p>
          <Link to="/admissions" className="inline-block bg-white text-brand font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-slate-100 transition-all">Apply for Admission</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}