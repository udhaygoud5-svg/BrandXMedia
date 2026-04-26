"use client";
import BrochureNavbar from '@/components/BrochureNavbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

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

      {/* 3. SERVICES -> OUTCOMES */}
      <section id="services-overview" className="py-40 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Development",
                outcome: "Get a website that turns visitors into paying customers.",
                icon: "web"
              },
              {
                title: "WhatsApp Automation",
                outcome: "Automatically reply to customers and never miss a lead.",
                icon: "smart_toy"
              },
              {
                title: "Business Automation",
                outcome: "Save hours of manual work with systems that run your business smoothly.",
                icon: "bolt"
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

      {/* 5. CASE STUDIES / RESULTS */}
      <section id="why-us" className="py-40 px-8 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-24">Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-surface-container-low border border-on-surface/5 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-on-surface-variant">Local Business</h3>
              <div className="space-y-4 flex-grow flex flex-col justify-center">
                <div className="p-6 rounded-2xl bg-on-surface/5">
                  <p className="text-sm uppercase tracking-widest text-on-surface-variant mb-2">Before</p>
                  <p className="font-bold text-xl">No online leads</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="text-sm uppercase tracking-widest text-primary mb-2">After</p>
                  <p className="text-3xl font-black text-primary">50+ leads/month</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-surface-container-low border border-on-surface/5 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-on-surface-variant">Restaurant</h3>
              <div className="flex-grow flex items-center justify-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="text-3xl font-bold leading-tight text-center text-primary">More orders with instant WhatsApp replies</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-surface-container-low border border-on-surface/5 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-on-surface-variant">Gym</h3>
              <div className="flex-grow flex items-center justify-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="text-3xl font-bold leading-tight text-center text-primary">Automated enquiry system <br/><span className="text-on-surface">→ more memberships</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <ContactForm />

      {/* Footer */}
      <footer className="w-full py-12 bg-surface text-center border-t border-on-surface/5 relative z-10">
        <p className="text-sm uppercase tracking-widest text-on-surface-variant opacity-60">
          © 2026 BrandXMedia. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
