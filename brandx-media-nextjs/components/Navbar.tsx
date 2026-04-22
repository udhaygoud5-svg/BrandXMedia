"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl font-['Inter'] tracking-tight border-b border-on-surface/5">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto w-full">
        <a className="text-xl font-bold tracking-tighter text-on-surface uppercase" href="#">BrandXMedia</a>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-sm font-medium tracking-widest uppercase" href="#work">Work</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-sm font-medium tracking-widest uppercase" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-sm font-medium tracking-widest uppercase" href="#about">About</a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-3 rounded-md font-semibold text-sm hover:scale-95 transition-all duration-200">
            Get in Touch
          </a>

          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] bg-surface z-40 p-8 md:hidden flex flex-col gap-8 text-2xl font-bold tracking-tighter uppercase animate-in slide-in-from-right duration-500">
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary-container text-on-primary-container px-6 py-3 rounded-md font-semibold text-sm w-full text-center inline-block">
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
