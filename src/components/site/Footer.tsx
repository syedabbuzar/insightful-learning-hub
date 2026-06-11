import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white/70 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="size-10 bg-brand text-white grid place-items-center font-extrabold text-lg rounded-md">R</div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight text-white">REZ ACADEMY</span>
              <span className="font-[var(--font-mono)] text-[10px] text-blue-400 tracking-widest uppercase mt-1">Since 2003</span>
            </div>
          </div>
          <p className="text-sm">Every Child Has Potential, Right Guidance Makes It Shine.</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
            <li><Link to="/faculty" className="hover:text-blue-400 transition-colors">Faculty</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Branches</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5 text-blue-400" /><span>Bhagya Nagar, Nanded</span></li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5 text-[var(--color-accent-red)]" /><span>Behind Essar Petrol Pump, Hyder Bagh, Nanded</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="size-4 shrink-0 mt-0.5 text-blue-400" /><a href="tel:+919370123760" className="hover:text-blue-400">+91 93701 23760</a></li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 mt-0.5 text-blue-400" /><a href="tel:+917770007694" className="hover:text-blue-400">+91 77700 07694</a></li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 mt-0.5 text-blue-400" /><a href="mailto:director@rezacademynanded.com" className="hover:text-blue-400 break-all">director@rezacademynanded.com</a></li>
            <li className="flex gap-2"><Globe className="size-4 shrink-0 mt-0.5 text-blue-400" /><span>www.rezacademynanded.com</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2024 REZ Academy Nanded · All rights reserved.</p>
        <p className="font-[var(--font-mono)] tracking-widest uppercase">23 Years of Educational Excellence</p>
      </div>
    </footer>
  );
}