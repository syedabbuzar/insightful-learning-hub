import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/branches", label: "Branches" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="size-10 bg-brand text-white grid place-items-center font-extrabold text-lg rounded-md">R</div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-base tracking-tight">REZ ACADEMY</span>
            <span className="font-[var(--font-mono)] text-[10px] text-brand tracking-widest uppercase mt-1">Est. 2003 · Nanded</span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-7 text-sm font-semibold uppercase tracking-wider text-slate-600">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: l.to === "/" }}
              className="hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919370123760"
            className="hidden sm:inline-block bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            Enroll Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919370123760"
            className="sm:hidden mt-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold text-center"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}