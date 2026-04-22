"use client";
import { motion } from 'framer-motion';
import { SplineScene } from './SplineScene';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-surface">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineScene scene="https://prod.spline.design/vw6hp5jbZ2R3I5pX/scene.splinecode" className="w-full h-full" />
      </div>

      {/* White Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-white/20 blur-[160px] rounded-full pointer-events-none z-0 opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl pointer-events-auto"
        >
          <span className="inline-block label-md tracking-[0.2em] uppercase text-primary mb-6">
            Strategy-Led Digital Excellence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
            We Build Brands <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              That Generate Revenue
            </span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12 mt-8">
            Helping businesses grow through high-converting websites, branding, and conversion-focused strategy. We move the needle, not just pixels.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-md font-bold text-lg hover:scale-[0.98] transition-all shadow-[0_0_40px_-10px_rgba(46,91,255,0.5)]">
              Book a Free Call
            </a>
            <a href="#work" className="inline-block bg-surface-container-highest text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-container-high transition-all">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
