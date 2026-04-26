"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function BrochureNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Overview", href: "#cover" },
    { name: "Services", href: "#services-overview" },
    { name: "Our Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl tracking-tight border-b border-on-surface/5">
      <div className="flex justify-between items-center px-8 py-5 max-w-[1440px] mx-auto w-full">
        <a className="text-lg font-extrabold tracking-tight text-on-surface uppercase" href="/">BrandXMedia</a>
        
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link.name}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[11px] font-bold tracking-[0.2em] uppercase" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:scale-95 transition-all duration-200">
            Start Journey
          </a>

          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-surface z-40 p-8 md:hidden flex flex-col gap-8 text-2xl font-bold tracking-tight uppercase animate-in slide-in-from-right duration-500">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg w-full text-center inline-block">
            Start Journey
          </a>
        </div>
      )}
    </nav>
  );
}
