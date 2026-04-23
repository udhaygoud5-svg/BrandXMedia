"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const SplinePlayer = dynamic(() => import('./SplinePlayer'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm z-10">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )
});

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-surface">
      {/* 🌌 Base Layer (Fallback Glow) */}
      <div className="absolute inset-0 bg-surface z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,91,255,0.08),transparent_70%)]" />
      </div>

      {/* 🎨 3D Spline Scene - Optimized for different devices */}
      {isClient && (
        <div className="absolute inset-0 z-[1] pointer-events-auto opacity-100 flex items-center justify-center">
          <div className="w-full h-full scale-[1.2] md:scale-100 transition-transform duration-1000">
            <SplinePlayer 
              scene="https://prod.spline.design/zA-Wp5ys1AoJhU-y/scene.splinecode" 
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Responsive Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[120vw] h-[120vh] bg-white/5 md:bg-white/10 blur-[100px] md:blur-[160px] rounded-full pointer-events-none z-[2] opacity-20 md:opacity-30" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl pointer-events-auto text-center md:text-left mx-auto md:mx-0"
        >
          <span className="inline-block label-md tracking-[0.2em] uppercase text-primary mb-6">
            Strategy-Led Digital Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-6">
            We Build Brands <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              That Generate Revenue
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 md:mb-12 mt-4 md:mt-8 mx-auto md:mx-0">
            Helping businesses grow through high-converting websites, branding, and conversion-focused strategy. We move the needle, not just pixels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a href="#contact" className="w-full sm:w-auto text-center bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-md font-bold text-lg hover:scale-[0.98] transition-all shadow-[0_0_40px_-10px_rgba(46,91,255,0.5)]">
              Book a Free Call
            </a>
            <a href="#work" className="w-full sm:w-auto text-center bg-surface-container-highest text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-container-high transition-all">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
