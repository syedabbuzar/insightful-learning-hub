import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { stats, whyChoose } from "@/lib/site-data";
import heroImg from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About REZ Academy — Our Story Since 2003" },
      { name: "description", content: "Learn about REZ Academy Nanded — 23 years of educational excellence, our mission, vision, and the team behind thousands of successful students." },
      { property: "og:title", content: "About REZ Academy — Our Story Since 2003" },
      { property: "og:description", content: "23 years of educational excellence in Nanded. Our story, mission, and approach to teaching." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="About Us"
        title={<>23 years of <span className="text-brand">shaping futures</span> in Nanded.</>}
        subtitle="REZ Academy was founded in 2003 with one simple belief — every child has potential, and the right guidance makes it shine."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src={heroImg} alt="REZ classroom" className="w-full aspect-[4/3] object-cover rounded-sm shadow-xl" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>What started in 2003 as a small coaching centre at Bhagya Nagar with a handful of dedicated students has grown into one of Nanded's most respected names in academic coaching.</p>
              <p>For 23 years we have focused on one thing — concept-based teaching that builds genuine understanding, not just exam-ready memorization. Our students consistently perform in NEET, JEE, MHT-CET, and State Board examinations because they truly understand what they learn.</p>
              <p>Today, REZ Academy operates two branches in Nanded and is expanding to Hyder Bagh on 15th June to bring quality education closer to more families.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 border-l-4 border-brand">
            <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">To provide concept-based, affordable, and holistic education that prepares students not just for examinations, but for life. We believe every student deserves personal attention, expert mentorship, and an environment that nurtures both intellect and character.</p>
          </div>
          <div className="bg-white p-10 border-l-4 border-[var(--color-accent-red)]">
            <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">To be the most trusted academy in Nanded and the surrounding region — known for producing students who excel in their chosen careers and contribute meaningfully to society with strong ethical foundations.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center p-8 border border-black/5 hover:bg-slate-50 transition-all">
                <div className="text-5xl font-extrabold text-brand mb-2">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">What makes us different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.t} className="p-6 bg-white border border-black/5 hover:shadow-lg transition-all">
                <div className="size-12 bg-brand/10 text-brand grid place-items-center font-extrabold text-xl mb-4 rounded">{item.k}</div>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Meet our faculty</h2>
          <p className="opacity-90 mb-8">The teachers who make REZ Academy what it is today.</p>
          <Link to="/faculty" className="inline-block bg-white text-brand font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-slate-100 transition-all">View Faculty</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}