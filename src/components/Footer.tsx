import { Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-accent p-1.5 rounded-lg">
            <Video className="w-5 h-5 text-brand-dark" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">
            AVINASH <span className="text-brand-accent">EDITZ</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Avinash Editz. All rights reserved.
        </p>

        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
