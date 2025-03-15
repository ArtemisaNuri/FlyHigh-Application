import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 md:h-20 bg-slate-800 backdrop-blur-sm text-white">
      <div className="h-full max-w-7xl mx-auto px-4">
        <div className="h-full flex flex-wrap items-center justify-between gap-2">
          <div className="hidden md:block">
            <div className="text-emerald-500 font-bold">Smart Flights</div>
          </div>

          <nav className="flex gap-3 text-xs md:text-sm">
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms
            </a>
          </nav>

          <div className="hidden sm:flex gap-3">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-emerald-400 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="hover:text-emerald-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-emerald-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs text-gray-400 hidden md:block">
            &copy; {new Date().getFullYear()} Smart Flights
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
