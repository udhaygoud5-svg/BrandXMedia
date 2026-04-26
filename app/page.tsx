"use client";
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-surface text-on-surface font-headline selection:bg-primary/30 min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen pt-48 pb-24 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* 🎨 3D Spline Scene Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Spline
            scene="https://prod.spline.design/zA-Wp5ys1AoJhU-y/scene.splinecode" 
          />
        </div>
        
        {/* Subtle Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface pointer-events-none z-[1]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 uppercase">
            Revenue-First <br/>
            <span className="text-primary">Digital Agency</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            We design and build websites, automation systems, and branding that drive sales and qualified leads without hiring a full in-house team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto bg-primary text-black px-10 py-5 rounded-full font-bold text-lg uppercase tracking-tight hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(74,222,128,0.5)]">
              Book a Strategy Call
            </a>
            <a href="#services" className="w-full sm:w-auto text-on-surface-variant hover:text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-colors">
              Our Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <section className="py-20 border-y border-on-surface/5 bg-surface-container-lowest/30">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-12 font-bold">Trusted by 32+ businesses & founders worldwide</p>
        <div className="marquee-container opacity-40">
          <div className="marquee-track">
            {[
              "ApDes Studio", "View Convert", "Wassup Media", "Trans & Log", "Outlier Labs", 
              "Nexchain AI", "FO Management", "Ella AI", "Khushiva", "Ninja WB"
            ].map((logo, i) => (
              <span key={i} className="text-xl md:text-3xl font-extrabold tracking-tight uppercase px-8">{logo}</span>
            ))}
            {/* Repeat for seamless scroll */}
            {[
              "ApDes Studio", "View Convert", "Wassup Media", "Trans & Log", "Outlier Labs", 
              "Nexchain AI", "FO Management", "Ella AI", "Khushiva", "Ninja WB"
            ].map((logo, i) => (
              <span key={i + 10} className="text-xl md:text-3xl font-extrabold tracking-tight uppercase px-8">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES (LIST STYLE) */}
      <section id="services" className="py-40 px-8">
        <div className="max-w-[1440px] mx-auto">
          <span className="label-md text-primary mb-8 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase mb-24">What We Do</h2>
          
          <div className="flex flex-col">
            {[
              {
                title: "Web & Software Solutions",
                tagline: "Turn your website into a 24/7 sales machine",
                desc: "Custom websites, high-converting landing pages, and business management systems that turn visitors into paying customers."
              },
              {
                title: "Automation Systems",
                tagline: "Run your business on autopilot",
                desc: "WhatsApp chatbots, email automation, and CRM systems that capture leads and close sales while you sleep. Maximum efficiency, zero effort."
              },
              {
                title: "Branding & Social",
                tagline: "Look like you charge what you're worth",
                desc: "Bold visual identities, Instagram growth strategies, and high-impact content designed to turn your followers into loyal customers."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-t border-on-surface/10 py-20 flex flex-col lg:grid lg:grid-cols-2 gap-12 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl"
              >
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">{service.title}</h3>
                  <p className="text-primary font-bold text-base uppercase tracking-tight">{service.tagline}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="flex gap-4">
                    <span className="w-12 h-1 bg-primary/30 group-hover:bg-primary transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-on-surface/10" />
          </div>
        </div>
      </section>

      {/* 4. PLANS / PRICING */}
      <section id="plans" className="py-40 px-8 bg-surface-container-low border-y border-on-surface/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <span className="label-md text-primary mb-4 block">Plans</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">Ready to grow?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-surface border border-on-surface/10 flex flex-col h-full"
            >
              <h3 className="text-2xl font-extrabold uppercase mb-4">High-Converting Landing Page</h3>
              <p className="text-on-surface-variant mb-12 font-medium">For businesses launching products or testing offers fast without waiting weeks.</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {["Strategy & discovery session", "Conversion copywriting", "Mobile-optimized design", "Unlimited revisions", "Analytics setup", "48-hour response time"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <Check size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full text-center py-5 rounded-full bg-white text-black font-black uppercase tracking-tighter text-lg hover:bg-primary transition-colors">Get Started</a>
            </motion.div>

            {/* Plan 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-surface border-2 border-primary flex flex-col h-full relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-1 rounded-full font-bold text-xs uppercase tracking-widest">Most Popular</div>
              <h3 className="text-2xl font-extrabold uppercase mb-4">Websites & Automation</h3>
              <p className="text-on-surface-variant mb-12 font-medium">For businesses that need a full-scale ecosystem that actually converts browsers into buyers.</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {["Strategy & discovery session", "Full 5-8 page website", "Full Automation setup", "Conversion copywriting", "CMS/Admin dashboard", "Post-launch support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <Check size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full text-center py-5 rounded-full bg-primary text-black font-black uppercase tracking-tighter text-lg hover:scale-95 transition-all">Get Started</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="faq" className="py-40 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="label-md text-primary mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">Questions? We got answers.</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Do you handle everything from branding to automation?", a: "Yes. We provide end-to-end solutions including strategy, design, development, and system integrations." },
              { q: "How long does a typical project take?", a: "Depending on complexity, landing pages take 1-2 weeks, while full websites and automation systems take 4-6 weeks." },
              { q: "What platforms do you build on?", a: "We specialize in Next.js, Framer, and custom software for maximum performance and scalability." },
              { q: "Do you provide post-launch support?", a: "Absolutely. We offer ongoing maintenance and strategy updates to ensure your systems keep performing at their peak." }
            ].map((faq, i) => (
              <div key={i} className="border border-on-surface/10 rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-bold uppercase tracking-tight">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-8 pb-8 text-on-surface-variant font-medium text-lg"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / FOOTER */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-12 leading-none">
            Ready to stop leaving <br/>
            <span className="text-primary underline decoration-primary/30 underline-offset-8">money on the table?</span>
          </h2>
          <a href="#contact" className="inline-block bg-primary text-black px-12 py-6 rounded-full font-bold text-2xl uppercase tracking-tight hover:scale-110 transition-all mb-32 shadow-[0_0_80px_-10px_rgba(74,222,128,0.5)]">
            Book an Intro Call
          </a>
          
          <div className="pt-20 border-t border-on-surface/5">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left mb-20">
              <div className="flex-1">
                <h2 className="text-[12vw] font-extrabold tracking-tighter uppercase leading-[0.8] opacity-5 select-none -ml-2 mb-8">BRANDXMEDIA</h2>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-4">
                  <span className="label-md text-on-surface-variant">Menu</span>
                  <a href="#home" className="font-bold uppercase tracking-tight hover:text-primary transition-colors">Home</a>
                  <a href="#services" className="font-bold uppercase tracking-tight hover:text-primary transition-colors">Services</a>
                  <a href="#contact" className="font-bold uppercase tracking-tight hover:text-primary transition-colors">Contact</a>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="label-md text-on-surface-variant">Social</span>
                  <a href="https://instagram.com/brandxmedia.co" target="_blank" className="font-bold uppercase tracking-tight hover:text-primary transition-colors">Instagram</a>
                  <a href="https://x.com/BrandxmediaCo" target="_blank" className="font-bold uppercase tracking-tight hover:text-primary transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-on-surface/5 text-sm font-bold opacity-40 uppercase tracking-[0.1em]">
              <p>©2026 - All Rights Reserved.</p>
              <p>Designed by <span className="text-on-surface opacity-100">BrandXMedia</span></p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
