"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const BrochurePage = () => {
  return (
    <main className="bg-surface text-on-surface font-['Inter'] selection:bg-primary/30">
      <Navbar />
      
      {/* 🎯 Page 1 — Cover Page */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-8">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <spline-viewer url="https://prod.spline.design/vw6hp5jbZ2R3I5pX/scene.splinecode"></spline-viewer>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface pointer-events-none z-1" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-b from-on-surface to-on-surface/40">
            BrandXmedia
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] uppercase font-light text-primary-container">
            Building Brands That Grow Online
          </p>
        </motion.div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="material-symbols-outlined text-4xl">expand_more</span>
        </div>
      </section>

      {/* 🧠 Page 2 — About Us */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 border-t border-on-surface/5 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="label-md text-primary tracking-[0.2em] uppercase mb-8 block"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-12"
          >
            At BrandXmedia, we help businesses build a strong and impactful online presence.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light"
          >
            From creating stunning websites to crafting engaging brand identities and automating customer interactions, we provide end-to-end solutions that help businesses grow faster and smarter.
          </motion.p>
        </div>
      </section>

      {/* 🚀 Page 3 — What We Do (Overview) */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="text-center mb-24">
            <span className="label-md text-primary tracking-[0.2em] uppercase mb-4 block">Our Services</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">Strategic Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Web & Software Solutions', icon: 'developer_mode', items: ['Custom Sites', 'Dashboards', 'App MVPs'] },
              { id: '02', title: 'Branding & Social Media', icon: 'auto_awesome', items: ['Brand Identity', 'Feed Design', 'Content Strategy'] },
              { id: '03', title: 'WhatsApp Automation', icon: 'smart_toy', items: ['Chatbots', 'Lead Capture', 'CRM Integration'] },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-low p-12 rounded-3xl group hover:bg-surface-container-high transition-all duration-500 border border-on-surface/5"
              >
                <div className="text-primary text-5xl mb-8">
                  <span className="material-symbols-outlined text-6xl">{service.icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3 opacity-60">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Page 4 — Websites & Software */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface-container-low border-t border-on-surface/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <span className="label-md text-primary tracking-[0.2em] uppercase mb-8 block">01 / Web & Software</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
              Web & Software <br/> Solutions
            </h2>
            <p className="text-2xl text-primary font-bold mb-12 italic">
              &quot;We build digital platforms that don’t just look good — they perform.&quot;
            </p>
          </div>
          <div className="space-y-6">
            {[
              'Custom Websites & Landing Pages',
              'Business Websites (Portfolio / Service-based)',
              'Dashboard & Data Visualizations',
              'Billing & Management Systems',
              'App Development (Basic MVPs)'
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-on-surface/5 border border-on-surface/5"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {i + 1}
                </div>
                <span className="text-xl font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎨 Page 5 — Branding & Social Media */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface border-t border-on-surface/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div className="order-2 lg:order-1 space-y-6">
            {[
              'Brand Identity (colors, style, positioning)',
              'Instagram Page Setup & Optimization',
              'Content Strategy (Reels, Posts, Ideas)',
              'Visual Feed Design',
              'Audience Growth Strategy'
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="text-xl font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <span className="label-md text-primary tracking-[0.2em] uppercase mb-8 block">02 / Branding & Content</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
              Branding & <br/> Strategy
            </h2>
            <p className="text-2xl text-primary font-bold mb-12 italic">
              &quot;We turn your business into a brand people recognize and trust.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 🤖 Page 6 — WhatsApp Automation */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface-container-low border-t border-on-surface/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="label-md text-primary tracking-[0.2em] uppercase mb-8 block">03 / Automation</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
            Smart Automation <br/> Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
            {[
              'WhatsApp Chatbots',
              'Auto-replies & Lead Capture',
              'Customer Support Automation',
              'CRM Integration',
              'Sales Funnel Automation'
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-container-high border border-on-surface/5 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">bolt</span>
                <span className="text-lg font-bold">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-3xl text-primary font-black italic">
            &quot;Automate conversations. Capture leads. Close more customers.&quot;
          </p>
        </div>
      </section>

      {/* 💡 Page 7 — Our Approach */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface border-t border-on-surface/5">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="text-center mb-32">
            <span className="label-md text-primary tracking-[0.2em] uppercase mb-4 block">Our Process</span>
            <h2 className="text-7xl font-black tracking-tighter uppercase italic">How We Scale</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-on-surface/10 hidden md:block" />
            {[
              { step: '01', title: 'Discover', desc: 'Understand your business & goals' },
              { step: '02', title: 'Strategize', desc: 'Create a custom growth plan' },
              { step: '03', title: 'Build', desc: 'Execute design, tech & content' },
              { step: '04', title: 'Scale', desc: 'Optimize and grow your presence' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 p-12 bg-surface-container-low border border-on-surface/5 rounded-3xl text-center group hover:bg-primary transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary mx-auto mb-8 group-hover:bg-on-primary group-hover:text-primary">
                  {item.step}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white">{item.title}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Page 8 — Why Choose Us */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-surface-container-low border-t border-on-surface/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="label-md text-primary tracking-[0.2em] uppercase mb-8 block">Why Choose Us</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-20 leading-none">
            Why BrandXmedia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { title: 'End-to-End Solutions', desc: 'We handle everything from code to content, ensuring zero friction in your growth.' },
              { title: 'Focus on Results', desc: 'We don\'t just make things look pretty; we make them move the needle for your business.' },
              { title: 'Modern & Scalable', desc: 'Built on the latest tech stacks to ensure your business is future-proof.' },
              { title: 'Tailored Strategies', desc: 'No templates. Every strategy is custom-built for your specific market needs.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl bg-on-surface/5 border border-on-surface/10 hover:border-primary/50 transition-colors"
              >
                <h4 className="text-2xl font-bold mb-4 text-primary">{item.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Page 9 — Ready to Grow Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-primary text-on-primary text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <span className="label-md text-on-primary-container tracking-[0.2em] uppercase mb-8 block">Next Steps</span>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-16 leading-none">
            Ready to Grow <br/>Your Brand?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-4">call</span>
              <p className="text-xl font-bold uppercase tracking-widest">Phone</p>
              <p className="opacity-80">+91 [Your Number]</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-4">mail</span>
              <p className="text-xl font-bold uppercase tracking-widest">Email</p>
              <p className="opacity-80 lowercase">hello@brandxmedia.com</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-4">camera</span>
              <p className="text-xl font-bold uppercase tracking-widest">Instagram</p>
              <p className="opacity-80">@brandxmedia</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-4">location_on</span>
              <p className="text-xl font-bold uppercase tracking-widest">Location</p>
              <p className="opacity-80">Vijayawada, AP</p>
            </div>
          </div>
          
          <a 
            href="mailto:hello@brandxmedia.com" 
            className="inline-block bg-on-primary text-primary px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-all shadow-2xl"
          >
            Start Your Journey
          </a>
        </motion.div>
      </section>
      
      {/* Short Footer */}
      <footer className="w-full py-8 bg-surface border-t border-on-surface/5 text-xs uppercase tracking-widest text-on-surface-variant opacity-60 text-center">
        <p>© 2026 BrandXMedia. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default BrochurePage;
