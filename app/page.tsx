"use client";
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-surface text-on-surface font-['Inter'] selection:bg-primary/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-8 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,91,255,0.15),transparent_70%)] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            Stop Losing Customers — Turn Your Website Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">24/7 Sales Machine</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 font-medium">
            We help businesses get more leads, respond instantly, and increase sales without extra effort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:brandxmedia.co@gmail.com" className="w-full sm:w-auto text-center bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(46,91,255,0.5)]">
              Get Free Demo
            </a>
            <a href="https://wa.me/919347047827?text=Hi,%20I%20want%20to%20grow%20my%20business" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-on-surface/20 hover:border-primary/50 bg-surface px-10 py-5 rounded-full font-bold text-lg transition-all">
              <span className="material-symbols-outlined text-[#25D366]">chat</span>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section id="about" className="py-32 px-8 bg-surface-container-low border-t border-on-surface/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-on-surface-variant leading-tight"
          >
            Most businesses lose customers because they don’t respond fast or their website doesn’t convert.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-primary mt-12"
          >
            We fix that.
          </motion.p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-32 px-8 bg-surface border-t border-on-surface/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-primary font-bold mb-8"
          >
            Our Mission
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            To empower every business with world-class digital tools, creative branding, and intelligent automation.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-on-surface-variant font-medium">
            We build solutions engineered for today and tomorrow.
          </p>
        </div>
      </section>

      {/* 3. SERVICES -> OUTCOMES */}
      <section id="services" className="py-40 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web & Software Solutions",
                outcome: "Custom websites, high-converting landing pages, and management systems built for growth.",
                icon: "web"
              },
              {
                title: "Automation Systems",
                outcome: "WhatsApp chatbots, email automation, and CRM systems that run your business 24/7.",
                icon: "smart_toy"
              },
              {
                title: "Branding & Social Media",
                outcome: "Brand identity, Instagram growth strategies, and content that turns followers into customers.",
                icon: "auto_awesome"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-3xl bg-surface-container-low border border-on-surface/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-xl text-on-surface-variant leading-relaxed font-medium">{service.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="process" className="py-40 px-8 bg-surface-container-lowest border-y border-on-surface/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-24">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-12 left-0 w-full h-[2px] bg-on-surface/5 hidden md:block" />
            {[
              { num: "1", text: "We understand your business" },
              { num: "2", text: "We build your system" },
              { num: "3", text: "You start getting leads and customers" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pt-8 md:pt-0 text-center md:text-left"
              >
                <div className="w-24 h-24 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-4xl font-black text-primary mx-auto md:mx-0 mb-8 relative z-10 shadow-[0_0_20px_rgba(46,91,255,0.2)]">
                  {step.num}
                </div>
                <p className="text-2xl md:text-3xl font-bold tracking-tight">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-40 px-8 bg-surface-container-low border-y border-on-surface/5">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 text-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "End-to-End Solutions", text: "Web, branding, and automation all under one roof." },
              { title: "Results-Focused", text: "Every decision is tied directly to your business goals." },
              { title: "Modern & Scalable", text: "Systems engineered to grow as your business grows." },
              { title: "Tailored Strategies", text: "No templates. Every strategy is custom-built for you." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-surface border border-on-surface/5 text-left hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-on-surface-variant font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <ContactForm />

      {/* Footer */}
      <footer className="w-full py-20 bg-surface border-t border-on-surface/5 relative z-10 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tighter mb-4">BRANDXMEDIA</h2>
            <p className="text-on-surface-variant font-medium">Vijayawada, India</p>
          </div>
          <div className="flex justify-center md:justify-end gap-8">
            <a href="https://instagram.com/brandxmedia.co" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs">Instagram</a>
            <a href="https://x.com/BrandxmediaCo" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs">Twitter</a>
            <a href="mailto:brandxmedia.co@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs">Email</a>
          </div>
        </div>
        <div className="mt-20 text-center opacity-30 text-[10px] uppercase tracking-[0.2em]">
          © 2026 BrandXMedia. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
