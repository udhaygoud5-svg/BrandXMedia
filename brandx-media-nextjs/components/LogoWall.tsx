"use client";
import { motion } from 'framer-motion';

const logos = [
  "ApDes Studio",
  "View Convert",
  "Wassup Media",
  "Trans & Log",
  "Outlier Labs",
  "Nexchain AI",
  "FO Management",
  "Ella AI",
  "Khushiva",
  "Ninja WB",
  "Prestige DWR",
  "AE Creatives",
  "Upsync Media",
  "Thryve Collective",
  "Slyte",
  "Taru Studios",
  "Zenith Funding",
  "Send Embrace"
];

export default function LogoWall() {
  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 mb-12">
        <p className="text-center label-md tracking-widest uppercase text-on-surface-variant">
          Trusted by 32+ agencies, businesses, and founders worldwide
        </p>
      </div>
      
      {/* Infinite Scroll Animation */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10" />
        
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-black tracking-tighter text-on-surface-variant/40 hover:text-on-surface-variant/70 transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
