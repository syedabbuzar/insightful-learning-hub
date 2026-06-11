import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { courses } from "@/lib/site-data";
import { ArrowLeft, CheckCircle2, Clock, Users, BookOpen } from "lucide-react";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — REZ Academy` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — REZ Academy` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-white px-6 text-center">
      <div>
        <h1 className="text-3xl font-extrabold mb-4">Course not found</h1>
        <Link to="/courses" className="text-brand font-bold underline">Back to courses</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <p role="alert">{error.message}</p>
    </div>
  ),
  component: CourseDetail,
});

function CourseDetail() {
  const c = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <section className="bg-slate-50 border-b border-black/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-brand mb-8">
            <ArrowLeft className="size-4" /> All Courses
          </Link>
          <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— {c.badge}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mt-3 mb-4">{c.title}</h1>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">{c.tagline}</p>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">{c.summary}</p>
        </div>
      </section>

      <section className="py-12 px-6 border-b border-black/5">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          <div className="flex gap-4 items-start">
            <Clock className="size-6 text-brand shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Duration</p>
              <p className="font-bold">{c.duration}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Users className="size-6 text-brand shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Batch Size</p>
              <p className="font-bold">{c.batchSize}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <BookOpen className="size-6 text-brand shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Subjects</p>
              <p className="font-bold">{c.subjects.length} subjects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">What You'll Learn</h2>
            <div className="space-y-3">
              {c.subjects.map((s) => (
                <div key={s} className="flex items-center gap-3 p-3 border border-black/5 bg-slate-50">
                  <CheckCircle2 className="size-5 text-brand" />
                  <span className="font-semibold">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Boards & Exams Covered</h2>
            <div className="space-y-3">
              {c.boards.map((b) => (
                <div key={b} className="p-3 border-l-2 border-brand bg-slate-50 font-semibold">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 border-y border-black/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10">Programme Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.features.map((f) => (
              <div key={f} className="flex gap-3 p-4 bg-white border border-black/5">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Interested in {c.title}?</h2>
          <p className="opacity-90 mb-8">Apply for admission or talk to our counsellor for personalized guidance.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="bg-white text-brand font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-slate-100 transition-all">Apply Now</Link>
            <a href="https://wa.me/919370123760" className="border-2 border-white font-extrabold uppercase tracking-widest text-sm py-4 px-8 hover:bg-white hover:text-brand transition-all">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}