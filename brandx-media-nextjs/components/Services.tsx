"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { GlowCard } from './GlowCard';

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await supabase.from('services').select('*').order('created_at', { ascending: true });
      if (data?.length) {
        setServices(data);
      } else {
        // Fallback data
        setServices([
          { title: "Website Design & Development", description: "Performance-driven digital experiences built on modern stacks that convert casual visitors into loyal customers.", icon: "language", large: true },
          { title: "Branding & Identity", description: "Visual narratives that command attention and build long-term authority in your market.", icon: "brand_awareness" },
          { title: "SEO & Growth", description: "Data-backed search strategies to ensure you are discovered by those who need you most.", icon: "trending_up" },
          { title: "Marketing & Ads", description: "Scalable paid media campaigns designed for maximum ROI and aggressive market expansion.", icon: "ads_click", large: true },
        ]);
      }
    }
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-32 px-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <span className="label-md tracking-widest uppercase text-primary">Core Services</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4">Precision-Engineered Solutions</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {services.map((s: any, i: number) => (
          <GlowCard
            key={i}
            className={`${i === 0 || i === 3 ? 'md:col-span-2' : ''} p-12 group cursor-pointer h-full`}
            hue={i * 60 + 200}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-8 relative z-10">
              {s.icon}
            </span>
            <h3 className="text-3xl font-bold mb-4 relative z-10">{s.title}</h3>
            <p className="text-on-surface-variant text-lg max-w-md relative z-10">{s.description}</p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
