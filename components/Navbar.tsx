"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-5 max-w-[1440px] mx-auto w-full">
        <a className="text-xl font-extrabold tracking-tight text-primary uppercase" href="/">
          BrandXMedia
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-on-surface-variant hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase" href="#plans">Plans</a>
          <a className="text-on-surface-variant hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase" href="#faq">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:inline-block bg-white text-black px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-primary transition-all duration-300">
            Book an Intro Call
          </a>

          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black z-40 p-12 md:hidden flex flex-col gap-10 text-3xl font-extrabold tracking-tight uppercase animate-in slide-in-from-right duration-500">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#plans" onClick={() => setIsOpen(false)}>Plans</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-black px-10 py-5 rounded-full font-bold text-lg text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
