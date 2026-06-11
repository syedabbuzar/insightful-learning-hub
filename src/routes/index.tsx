import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-classroom.jpg";
import shahrazImg from "@/assets/faculty-shahraz.jpg";
import riyazImg from "@/assets/faculty-riyaz.jpg";
import sumayyaImg from "@/assets/faculty-sumayya.jpg";
import razaImg from "@/assets/faculty-raza.jpg";
import adiyaImg from "@/assets/faculty-adiya.jpg";

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
      {
        property: "og:description",
        content: "Every Child Has Potential, Right Guidance Makes It Shine. Trusted since 2003.",
      },
    ],
  }),
  component: Index,
});

const faculty = [
  { name: "Shahraz ul Haq Sir", role: "Director • Physics", img: shahrazImg },
  { name: "Riyaz ul Haq Sir", role: "Centre Head • Biology", img: riyazImg, offset: true },
  { name: "Sumayya Fatima", role: "Chemistry Faculty", img: sumayyaImg },
  { name: "Raza ul Haq Sir", role: "Mathematics", img: razaImg, offset: true },
  { name: "Adiya Fatima", role: "English Faculty", img: adiyaImg },
];

const whyChoose = [
  { k: "23", t: "Years of Trusted Service", d: "Serving Nanded since 2003 with unmatched results and credibility." },
  { k: "★", t: "Concept-Based Teaching", d: "We teach to understand and master — not just to memorize." },
  { k: "✓", t: "Personal Attention", d: "Small batches and 1:1 mentoring for every single student." },
  { k: "📈", t: "Regular Tests & Reports", d: "Weekly assessments with detailed progress reports for parents." },
  { k: "🔬", t: "Math & Science Focus", d: "Strong specialization in the subjects that define careers." },
  { k: "❤", t: "Holistic Growth", d: "MindGym, nutritional guidance, Islamic studies and career discovery." },
];

function Index() {
  return (
    <div className="min-h-screen font-[var(--font-display)] bg-white text-slate-900 selection:bg-brand selection:text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="size-10 bg-brand text-white grid place-items-center font-extrabold text-lg rounded-md">R</div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight">REZ ACADEMY</span>
              <span className="font-[var(--font-mono)] text-[10px] text-brand tracking-widest uppercase mt-1">Est. 2003 • Nanded</span>
            </div>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider text-slate-600">
            <a href="#courses" className="hover:text-brand transition-colors">Courses</a>
            <a href="#faculty" className="hover:text-brand transition-colors">Faculty</a>
            <a href="#why" className="hover:text-brand transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </div>
          <a
            href="https://wa.me/919370123760"
            className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* Announcement */}
      <div className="bg-[var(--color-accent-red)] text-white py-3 px-4 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-block size-2 bg-white rounded-full animate-pulse" />
          New Branch Opening at Hyder Bagh
          <span className="px-2 py-0.5 bg-white text-[var(--color-accent-red)] rounded text-[10px]">15th June</span>
        </p>
      </div>

      {/* Hero */}
      <section id="home" className="relative pt-16 lg:pt-24 pb-24 px-6 overflow-hidden">
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
              <a href="#courses" className="px-7 py-3.5 bg-brand text-white font-bold rounded-sm text-base hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                Explore Courses
              </a>
              <a href="#contact" className="px-7 py-3.5 border-2 border-slate-900 font-bold rounded-sm text-base hover:bg-slate-900 hover:text-white transition-all">
                Visit a Branch
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-black/10 pt-8">
              <div>
                <div className="text-3xl font-extrabold text-brand">23+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Years</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand">5</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand">2</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Branches</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src={heroImg}
              alt="Students studying at REZ Academy classroom"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand/10 -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand/30 -z-0" />
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— 02 / Our Mentors</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Expert Faculty</h2>
            <div className="h-1.5 w-20 bg-brand" />
            <p className="mt-6 text-slate-600">Decades of combined experience across Physics, Chemistry, Biology, Mathematics and English.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {faculty.map((f) => (
              <div key={f.name} className={`group text-center w-44 sm:w-52 ${f.offset ? "lg:mt-16" : ""}`}>
                <div className="hex-clip w-44 h-52 sm:w-52 sm:h-60 bg-slate-100 mb-5 overflow-hidden group-hover:ring-4 ring-brand/20 transition-all mx-auto">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-base sm:text-lg">{f.name}</h3>
                <p className="text-[11px] font-[var(--font-mono)] text-brand uppercase tracking-tight mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 bg-slate-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— 01 / Academic Programs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Academic Courses</h2>
            <p className="text-slate-600">Curriculums designed for peak competitive performance and academic mastery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/5 rounded-sm hover:shadow-xl transition-all">
              <span className="font-[var(--font-mono)] text-brand font-bold text-xs mb-4 block uppercase tracking-widest">01 / Senior Wing</span>
              <h3 className="text-2xl font-extrabold mb-3">11th & 12th Science</h3>
              <p className="text-slate-600 text-sm mb-6">Comprehensive coaching for NEET, JEE, and MHT-CET with State Board integration.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Physics & Chemistry</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Mathematics & Biology</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />English Language</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />State Board · NEET · JEE · MHT-CET</li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center border border-brand text-brand font-bold uppercase tracking-widest text-xs hover:bg-brand hover:text-white transition-all">
                Enquire
              </a>
            </div>

            <div className="bg-white p-8 border border-black/5 rounded-sm hover:shadow-xl transition-all border-t-4 border-t-brand relative">
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-brand text-white px-2 py-0.5 rounded">Foundation</span>
              <span className="font-[var(--font-mono)] text-brand font-bold text-xs mb-4 block uppercase tracking-widest">02 / Junior Wing</span>
              <h3 className="text-2xl font-extrabold mb-3">Classes 5th to 10th</h3>
              <p className="text-slate-600 text-sm mb-6">Building a solid conceptual base for CBSE and State Board students with foundation studies.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />State Board · CBSE</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Conceptual Learning</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />NEET/JEE Foundation</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Olympiad Preparation</li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center bg-brand text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all">
                Enquire
              </a>
            </div>

            <div className="bg-white p-8 border border-black/5 rounded-sm hover:shadow-xl transition-all">
              <span className="font-[var(--font-mono)] text-brand font-bold text-xs mb-4 block uppercase tracking-widest">03 / Student Support</span>
              <h3 className="text-2xl font-extrabold mb-3">Holistic Growth</h3>
              <p className="text-slate-600 text-sm mb-6">Going beyond academics for the overall development of every student.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />English Language Development</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Handwriting Improvement</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Daily Islamic Guidance</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />MindGym · Nutritional Guidance</li>
                <li className="flex items-center gap-3"><span className="size-1.5 bg-brand" />Career Path Discovery</li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center border border-brand text-brand font-bold uppercase tracking-widest text-xs hover:bg-brand hover:text-white transition-all">
                Enquire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why" className="py-24 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-brand font-bold">— 03 / Why Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-6 leading-[1.05]">
                Why Choose <span className="text-brand">REZ Academy?</span>
              </h2>
              <p className="text-slate-600 mb-8">Twenty-three years of educational trust, built on a foundation of results, integrity, and personal attention to every student.</p>
              <div className="bg-brand text-white p-8 rounded-sm">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Admissions Open</p>
                <p className="text-2xl font-extrabold mb-3">2024–25 Batch</p>
                <p className="text-sm opacity-90 mb-6">Seats are filling fast at Bhagya Nagar and our new Hyder Bagh facility.</p>
                <a href="https://wa.me/919370123760" className="inline-block bg-white text-brand font-extrabold uppercase tracking-widest text-xs py-3 px-6 hover:bg-slate-100 transition-all">
                  WhatsApp Admission
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {whyChoose.map((item) => (
                <div key={item.t} className="p-6 border border-black/5 bg-slate-50 hover:bg-white hover:shadow-lg transition-all">
                  <div className="size-12 bg-brand/10 text-brand grid place-items-center font-extrabold text-xl mb-4 rounded">
                    {item.k}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                  <p className="text-sm text-slate-600">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches & Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-blue-400 font-bold">— 04 / Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Our Branches</h2>
            <div className="h-1.5 w-20 bg-blue-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="size-3 bg-blue-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Branch 01 · Main</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Bhagya Nagar</h3>
              <p className="text-white/70 mb-6">Our central campus serving the Nanded community for 23 years with proven academic results.</p>
              <p className="text-sm font-[var(--font-mono)] text-white/60">Bhagya Nagar, Nanded · Maharashtra</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-accent-red)]/20 to-brand/20 border border-[var(--color-accent-red)]/30 p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="size-3 bg-[var(--color-accent-red)] rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-red)]">Branch 02 · New</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Hyder Bagh</h3>
              <p className="text-white/70 mb-6">Brand new state-of-the-art facility. Now starting from 15th June — be a part of the inaugural batch.</p>
              <p className="text-sm font-[var(--font-mono)] text-white/60">Behind Essar Petrol Pump, Hyder Bagh, Nanded</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Call Us</h4>
              <a href="tel:+919370123760" className="block text-xl font-[var(--font-mono)] hover:text-blue-400 transition-colors">+91 93701 23760</a>
              <a href="tel:+917770007694" className="block text-xl font-[var(--font-mono)] hover:text-blue-400 transition-colors mt-1">+91 77700 07694</a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Email</h4>
              <a href="mailto:director@rezacademynanded.com" className="text-base hover:text-blue-400 transition-colors break-all">
                director@rezacademynanded.com
              </a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Website</h4>
              <a href="https://www.rezacademynanded.com" className="text-base hover:text-blue-400 transition-colors break-all">
                www.rezacademynanded.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white/60 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="size-8 bg-brand text-white grid place-items-center font-extrabold text-sm rounded">R</div>
            <span className="font-bold text-white">REZ ACADEMY</span>
            <span className="text-xs">· Since 2003</span>
          </div>
          <p className="text-xs font-[var(--font-mono)] tracking-widest uppercase">© 2024 · Every Child Has Potential</p>
        </div>
      </footer>
    </div>
  );
}
