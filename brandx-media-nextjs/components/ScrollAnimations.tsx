"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// ─── Simple Fade-In on Scroll ───────────────────────────────────────────
export function FadeIn({ 
  children, 
  className = '',
  delay = 0 
}: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Marquee / Infinite Ticker ──────────────────────────────────────────
export function Marquee({ 
  children, 
  speed = 'normal',
  direction = 'left',
  className = ''
}: { 
  children: ReactNode; 
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  className?: string;
}) {
  const speedMap = { slow: '40s', normal: '25s', fast: '15s' };

  return (
    <div className={`marquee-container ${className}`}>
      <div 
        className="marquee-track"
        style={{ 
          animationDuration: speedMap[speed],
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// ─── Stagger Children ───────────────────────────────────────────────────
export function StaggerReveal({ 
  children, 
  className = '',
  staggerDelay = 0.08 
}: { children: ReactNode[]; className?: string; staggerDelay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
