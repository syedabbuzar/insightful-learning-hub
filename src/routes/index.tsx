import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { faculty, courses, stats, whyChoose } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REZ Academy Nanded — 23 Years of Educational Excellence" },
      {
        name: "description",
        content:
          "REZ Academy Nanded — Premier coaching for 11th-12th Science (NEET, JEE, MHT-CET) and 5th-10th foundation. New branch opening 15th June at Hyder Bagh.",
      },
      { property: "og:title", content: "REZ Academy Nanded — 23 Years of Educational Excellence" },
      { property: "og:description", content: "Every Child Has Potential, Right Guidance Makes It Shine. Trusted since 2003." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand selection:text-white">
      <Header />
      <div className="bg-[var(--color-accent-red)] text-white py-3 px-4 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-block size-2 bg-white rounded-full animate-pulse" />
          New Branch Opening at Hyder Bagh
          <span className="px-2 py-0.5 bg-white text-[var(--color-accent-red)] rounded text-[10px]">15th June</span>
        </p>
      </div>

      {/* Hero */}
      <section className="relative pt-16 lg:pt-24 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-reveal">
            <div className="inline-block px-3 py-1 border border-brand/20 bg-brand/5 text-brand text-[11px] font-bold uppercase tracking-widest mb-6">
              23 Years of Educational Excellence
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-balance">
              Every Child Has <span className="text-brand">Potential.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-[52ch] mb-10 leading-relaxed">
              Right guidance makes it shine. Join Nanded's most trusted academy for NEET, JEE, MHT-CET and Board excellence — now expanding to Hyder Bagh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="px-7 py-3.5 bg-brand text-white font-bold rounded-sm text-base hover:shadow-2xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                Explore Courses <ArrowRight className="size-4" />
              </Link>
              <Link to="/admissions" className="px-7 py-3.5 border-2 border-slate-900 font-bold rounded-sm text-base hover:bg-slate-900 hover:text-white transition-all">
                Apply for Admission
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-black/10 pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-extrabold text-brand">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img src={heroImg} alt="REZ Academy classroom" width={1024} height={1280} className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand/10 -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand/30 -z-0" />
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-slate-50 border-t border-black/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— Academic Programs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Our Courses</h2>
            <p className="text-slate-600">Curriculums designed for peak competitive performance and academic mastery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={c.slug} className={`bg-white p-8 border border-black/5 rounded-sm hover:shadow-xl transition-all ${i === 1 ? "border-t-4 border-t-brand" : ""}`}>
                <span className="font-[var(--font-mono)] text-brand font-bold text-xs mb-4 block uppercase tracking-widest">0{i + 1} / {c.badge}</span>
                <h3 className="text-2xl font-extrabold mb-3">{c.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{c.summary}</p>
                <ul className="space-y-2 mb-8 text-sm">
                  {c.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2"><CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="block w-full py-3 text-center border border-brand text-brand font-bold uppercase tracking-widest text-xs hover:bg-brand hover:text-white transition-all">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-24 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— Our Mentors</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Expert Faculty</h2>
            <div className="h-1.5 w-20 bg-brand" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {faculty.map((f, i) => (
              <Link to="/faculty" key={f.slug} className={`group text-center w-40 sm:w-48 ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
                <div className="hex-clip w-40 h-48 sm:w-48 sm:h-56 bg-slate-100 mb-5 overflow-hidden group-hover:ring-4 ring-brand/20 transition-all mx-auto">
                  <img src={f.img} alt={f.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-base">{f.name}</h3>
                <p className="text-[11px] font-[var(--font-mono)] text-brand uppercase tracking-tight mt-1">{f.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-6 bg-slate-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— Why Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-6 leading-[1.05]">Why Choose <span className="text-brand">REZ Academy?</span></h2>
            <p className="text-slate-600 mb-8">Twenty-three years of educational trust, built on results, integrity, and personal attention.</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand font-bold uppercase text-sm tracking-widest hover:gap-3 transition-all">Read our story <ArrowRight className="size-4" /></Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {whyChoose.map((item) => (
              <div key={item.t} className="p-6 border border-black/5 bg-white hover:shadow-lg transition-all">
                <div className="size-12 bg-brand/10 text-brand grid place-items-center font-extrabold text-xl mb-4 rounded">{item.k}</div>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to start your journey?</h2>
          <p className="text-lg opacity-90 mb-8">Admissions for 2024–25 are open at both branches. Talk to our counsellor today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="bg-white text-brand font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-slate-100 transition-all">Apply Now</Link>
            <Link to="/contact" className="border-2 border-white font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-white hover:text-brand transition-all">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}