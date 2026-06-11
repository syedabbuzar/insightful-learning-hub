import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact REZ Academy Nanded" },
      { name: "description", content: "Get in touch with REZ Academy Nanded. Call +91 93701 23760 / 77700 07694, email director@rezacademynanded.com, or visit either branch." },
      { property: "og:title", content: "Contact REZ Academy Nanded" },
      { property: "og:description", content: "Reach us by phone, email, WhatsApp, or visit one of our two branches in Nanded." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Subject is required").max(100),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
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
    const body = encodeURIComponent(`Name: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email || "-"}\n\n${parsed.data.message}`);
    const subject = encodeURIComponent(parsed.data.subject);
    window.location.href = `mailto:director@rezacademynanded.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app...");
    (e.target as HTMLFormElement).reset();
  };

  const field = "w-full px-4 py-3 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm";
  const lbl = "text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 block";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <PageHero
        eyebrow="Contact Us"
        title={<>We'd love to <span className="text-brand">hear from you.</span></>}
        subtitle="Reach us by phone, email, or WhatsApp — or just walk into one of our branches."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <ContactRow icon={<Phone className="size-5" />} label="Call us" lines={["+91 93701 23760", "+91 77700 07694"]} href="tel:+919370123760" />
              <ContactRow icon={<MessageCircle className="size-5" />} label="WhatsApp" lines={["+91 93701 23760"]} href="https://wa.me/919370123760" />
              <ContactRow icon={<Mail className="size-5" />} label="Email" lines={["director@rezacademynanded.com"]} href="mailto:director@rezacademynanded.com" />
              <ContactRow icon={<Globe className="size-5" />} label="Website" lines={["www.rezacademynanded.com"]} />
              <ContactRow icon={<MapPin className="size-5" />} label="Branches" lines={["Bhagya Nagar, Nanded", "Behind Essar Petrol Pump, Hyder Bagh, Nanded"]} />
            </div>

            <div className="mt-10 p-6 bg-brand text-white">
              <h4 className="font-bold text-lg mb-2">Office Hours</h4>
              <p className="text-sm opacity-90">Mon – Sat · 8:00 AM – 8:00 PM</p>
              <p className="text-sm opacity-90">Sunday · 9:00 AM – 1:00 PM (counselling only)</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 border border-black/5 bg-slate-50 space-y-5 self-start">
            <h2 className="text-2xl font-extrabold mb-2">Send a Message</h2>
            <p className="text-sm text-slate-600 mb-4">We typically respond within a few hours during office hours.</p>
            <div>
              <label className={lbl}>Name *</label>
              <input name="name" maxLength={80} className={field} />
              {errors.name && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={lbl}>Mobile *</label>
                <input name="phone" maxLength={10} inputMode="numeric" className={field} />
                {errors.phone && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className={lbl}>Email</label>
                <input name="email" type="email" maxLength={120} className={field} />
                {errors.email && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className={lbl}>Subject *</label>
              <input name="subject" maxLength={100} className={field} />
              {errors.subject && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className={lbl}>Message *</label>
              <textarea name="message" maxLength={1000} rows={5} className={field} />
              {errors.message && <p className="text-xs text-[var(--color-accent-red)] mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full py-4 bg-brand text-white font-extrabold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactRow({ icon, label, lines, href }: { icon: React.ReactNode; label: string; lines: string[]; href?: string }) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? <a href={href} className="hover:text-brand transition-colors">{children}</a> : <>{children}</>;
  return (
    <div className="flex gap-4 p-5 border border-black/5 hover:bg-slate-50 transition-all">
      <div className="size-10 shrink-0 bg-brand/10 text-brand grid place-items-center rounded">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm font-semibold break-all">
            <Wrapper>{l}</Wrapper>
          </p>
        ))}
      </div>
    </div>
  );
}