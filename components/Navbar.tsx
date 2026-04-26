"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto w-full">
        <a className="text-2xl font-black tracking-tighter text-primary uppercase italic" href="/">
          BrandX
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          <a className="text-on-surface-variant hover:text-white transition-colors text-[10px] font-black tracking-[0.3em] uppercase" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-white transition-colors text-[10px] font-black tracking-[0.3em] uppercase" href="#plans">Plans</a>
          <a className="text-on-surface-variant hover:text-white transition-colors text-[10px] font-black tracking-[0.3em] uppercase" href="#faq">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:inline-block bg-white text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all duration-300">
            Book an Intro Call
          </a>

          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[84px] bg-black z-40 p-12 md:hidden flex flex-col gap-12 text-4xl font-black tracking-tighter uppercase italic animate-in slide-in-from-right duration-500">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#plans" onClick={() => setIsOpen(false)}>Plans</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-black px-12 py-6 rounded-full font-black text-xl text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
