"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-md tracking-widest uppercase text-primary">About Us</span>
          <h2 className="text-5xl font-black tracking-tighter mt-4 mb-8">Architects of the Digital Future</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
            At BrandXMedia, we blur the lines between technology and art. Founded on the principle that digital experiences should be both breathtaking and highly functional, we specialize in building enterprise-grade solutions for ambitious brands.
          </p>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
            Our team of engineers, designers, and growth strategists work in unison to transform complex business challenges into intuitive, beautiful, and scalable digital ecosystems.
          </p>
          
          <div className="flex gap-12 border-t border-outline-variant/20 pt-8">
            <div>
              <p className="text-4xl font-black text-primary mb-2">50+</p>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant">Global Clients</p>
            </div>
            <div>
              <p className="text-4xl font-black text-primary mb-2">10x</p>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant">Average ROI</p>
            </div>
            <div>
              <p className="text-4xl font-black text-primary mb-2">12</p>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant">Industry Awards</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container"
        >
          {/* Abstract placeholder image for About section with dark luxury aesthetic */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract digital architecture" 
            className="w-full h-full object-cover mix-blend-luminosity opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
