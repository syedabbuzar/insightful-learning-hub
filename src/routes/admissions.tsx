import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { courses } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions Open 2024-25 — REZ Academy Nanded" },
      { name: "description", content: "Admissions open for 11th-12th Science (NEET/JEE/MHT-CET) and Classes 5th-10th at REZ Academy Nanded. Apply online or visit our branches." },
      { property: "og:title", content: "Admissions Open 2024-25 — REZ Academy Nanded" },
      { property: "og:description", content: "Apply now for the 2024-25 academic year at REZ Academy Nanded." },
    ],
  }),
  component: AdmissionsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  parent: z.string().trim().min(2, "Parent name is required").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  course: z.string().min(1, "Select a course"),
  branch: z.string().min(1, "Select a branch"),
  message: z.string().max(500).optional(),
});

const steps = [
  { n: 1, t: "Fill the Enquiry Form", d: "Submit the form below or call our admissions team." },
  { n: 2, t: "Counselling Session", d: "We'll schedule a meeting to discuss the student's needs and the right course." },
  { n: 3, t: "Diagnostic Test", d: "A short assessment for senior wing applicants to gauge the starting level." },
  { n: 4, t: "Confirm Admission", d: "Submit documents, pay the first instalment, and start your journey." },
];

const required = ["Last year's mark-sheet (photocopy)", "Aadhaar card (student + parent)", "2 passport-size photographs", "Transfer Certificate (for senior wing)"];

function AdmissionsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      parent: String(fd.get("parent") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      course: String(fd.get("course") || ""),
      branch: String(fd.get("branch") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    const text = `Admission Enquiry%0A%0AStudent: ${encodeURIComponent(parsed.data.name)}%0AParent: ${encodeURIComponent(parsed.data.parent)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0AEmail: ${encodeURIComponent(parsed.data.email || "-")}%0ACourse: ${encodeURIComponent(parsed.data.course)}%0ABranch: ${encodeURIComponent(parsed.data.branch)}%0AMessage: ${encodeURIComponent(parsed.data.message || "-")}`;
    window.open(`https://wa.me/919370123760?text=${text}`, "_blank");
    toast.success("Enquiry sent! We'll contact you shortly.");
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const field = "w-full px-4 py-3 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm";
  const lbl = "text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 block";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="Admissions 2024-25"
        title={<>Apply now — <span className="text-brand">seats filling fast.</span></>}
        subtitle="Admissions are open at both Bhagya Nagar and the new Hyder Bagh branch. The process is simple, transparent, and student-first."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-8">How Admissions Work</h2>
            <div className="space-y-6 mb-12">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <div className="size-12 shrink-0 bg-brand text-white grid place-items-center font-extrabold text-lg rounded-full">{s.n}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{s.t}</h3>
                    <p className="text-sm text-slate-600">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border border-black/5 bg-slate-50">
              <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-4">Documents Required</h4>
              <ul className="space-y-2">
                {required.map((r) => (
                  <li key={r} className="flex gap-2 text-sm"><CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 border border-black/5 bg-slate-50 space-y-5 self-start">
            <h2 className="text-2xl font-extrabold mb-2">Enquiry Form</h2>
            <p className="text-sm text-slate-600 mb-4">Fill this form — we'll WhatsApp you within a few hours.</p>
            <div>
              <label className={lbl}>Student Name *</label>
              <input name="name" maxLength={80} className={field} />
              {errors.name && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className={lbl}>Parent Name *</label>
              <input name="parent" maxLength={80} className={field} />
              {errors.parent && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.parent}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={lbl}>Mobile *</label>
                <input name="phone" maxLength={10} inputMode="numeric" className={field} />
                {errors.phone && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className={lbl}>Email (optional)</label>
                <input name="email" type="email" maxLength={120} className={field} />
                {errors.email && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className={lbl}>Course *</label>
              <select name="course" className={field} defaultValue="">
                <option value="" disabled>Select a course</option>
                {courses.map((c) => <option key={c.slug} value={c.title}>{c.title}</option>)}
              </select>
              {errors.course && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.course}</p>}
            </div>
            <div>
              <label className={lbl}>Preferred Branch *</label>
              <select name="branch" className={field} defaultValue="">
                <option value="" disabled>Select branch</option>
                <option>Bhagya Nagar</option>
                <option>Hyder Bagh (opening 15th June)</option>
              </select>
              {errors.branch && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.branch}</p>}
            </div>
            <div>
              <label className={lbl}>Message (optional)</label>
              <textarea name="message" maxLength={500} rows={3} className={field} />
            </div>
            <button type="submit" disabled={submitting} className="w-full py-4 bg-brand text-white font-extrabold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all disabled:opacity-60">
              {submitting ? "Sending..." : "Submit Enquiry via WhatsApp"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}