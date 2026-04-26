"use client";
import BrochureNavbar from '@/components/BrochureNavbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function BrochurePage() {
  return (
    <main className="bg-surface text-on-surface font-['Inter'] selection:bg-primary/30">
      <BrochureNavbar />

      {/* 1. HERO SECTION */}
      <section id="cover" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-8 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,91,255,0.15),transparent_70%)] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            Let&apos;s Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Growth Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 font-medium">
            Strategic digital excellence for ambitious brands. We provide end-to-end solutions that drive faster and smarter growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto text-center bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(46,91,255,0.5)]">
              Start Journey
            </a>
            <a href="https://wa.me/919347047827?text=Hi,%20I%20want%20to%20grow%20my%20business" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-on-surface/20 hover:border-primary/50 bg-surface px-10 py-5 rounded-full font-bold text-lg transition-all">
              <span className="material-symbols-outlined text-[#25D366]">chat</span>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="py-32 px-8 bg-surface-container-low border-t border-on-surface/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-primary font-bold mb-8"
          >
            Our Mission
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 text-on-surface leading-tight"
          >
            To empower every business with world-class digital tools, creative branding, and intelligent automation.
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto font-medium">
            We help businesses build a strong and impactful online presence by providing solutions engineered for today and tomorrow.
          </p>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services-overview" className="py-40 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-24">Core Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-surface-container-low border border-on-surface/5"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">web</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Web & Software</h3>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Custom Websites</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> High-converting Landing Pages</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Dashboards & Analytics</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Billing & CRM Systems</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> App Development (MVPs)</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-3xl bg-surface-container-low border border-on-surface/5"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">auto_awesome</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Branding & Social</h3>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Brand Identity & Styling</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Instagram Setup & Growth</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Content Strategy & Reels</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Visual Feed Design</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Data-driven Audience Tactics</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-3xl bg-surface-container-low border border-on-surface/5"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">smart_toy</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Automation</h3>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> WhatsApp Chatbots (24/7)</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Email Drip Campaigns</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Instagram DM Automation</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Lead Pipeline Integration</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Sales Funnel Systems</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process" className="py-40 px-8 bg-surface-container-lowest border-y border-on-surface/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-24">The 4-Step System</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="absolute top-12 left-0 w-full h-[2px] bg-on-surface/5 hidden md:block" />
            {[
              { num: "01", title: "Discover", text: "Understanding your business, goals, and audience." },
              { num: "02", title: "Strategize", text: "Creating a tailored digital growth plan." },
              { num: "03", title: "Build", text: "Executing design and technology with precision." },
              { num: "04", title: "Scale", text: "Measuring and growing your presence continuously." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pt-8 md:pt-0 text-center md:text-left"
              >
                <div className="w-20 h-20 rounded-2xl bg-surface border-2 border-primary flex items-center justify-center text-3xl font-black text-primary mx-auto md:mx-0 mb-8 relative z-10 shadow-[0_0_20px_rgba(46,91,255,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-on-surface-variant font-medium">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US SECTION */}
      <section id="why-us" className="py-40 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24">Why Choose Us?</h2>
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
                className="p-10 rounded-3xl bg-surface-container-low border border-on-surface/5 text-left"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-on-surface-variant font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
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
