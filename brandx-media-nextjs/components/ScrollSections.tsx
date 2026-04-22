"use client";
import Services from './Services';
import { supabase } from '@/lib/supabase/client';
import { useState, useEffect } from 'react';

const logos = ['TECHFLOW', 'NEXUS.AI', 'VELOCITY', 'LUMINA', 'ORBITAL', 'SYNAPSE', 'AXIOM', 'HELIX'];

const fallbackTestimonials = [
  { quote: "BrandXMedia didn't just build us a website; they built us a growth engine. Our inbound leads tripled within the first quarter.", name: "Sarah Chen", role: "CEO, TechFlow", content: "" },
  { quote: "The attention to detail and strategic approach is unmatched. They understood our brand vision better than we did ourselves.", name: "Marcus Thorne", role: "Founder, Nexus.AI", content: "" },
  { quote: "Highly professional, incredibly fast, and most importantly, they deliver on their promises. A true digital partner.", name: "Elena Rodriguez", role: "CMO, Orbital Systems", content: "" },
];

const fallbackProjects = [
  {
    title: "Lumina Fintech Redesign",
    problem: "Low Conversion",
    solution: "UX Overhaul",
    result: "+142% Revenue",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9NG006kuZ9FBXjBSjKarkysgXC0oCuw6_bw2lFpcf6VenVt1KdY2ylKszmoV2EAeTnU86YeND18WGXWQrD4lWmBV7AGqfxri9fM3WnyaYrAzQxKhdGmAe_5lfvugJ_yL5QQ9AWOZXJ69Oy-ewuxJVO_wVLlzgEz0Ha4oPdTk_lks_KPInF-ZREw5FPYD7n3Y7AClnV7uTPvOb-2sMVi9Z2N1o_pJ7r-Y2fEZ8oaWC-0Za8D4PaRq1XlxIIeyhEViLKPfIWntGVVX"
  },
  {
    title: "Nexus AI Platform",
    problem: "Identity Crisis",
    solution: "Global Rebrand",
    result: "85k New Users",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_eepljpXunn_3ZEWBtZy2JSqpzlw90Q7-W3ZMLGa1rWyVUWGa77pfthgEn7KA4b25CB-bWJmJdpzOR_w45BsMHsmQ0m_DEwuUn3MQER2pP3Bk93WZU-R35jAMQ1VWl4KXjxk0Bs_7sixOMwn-UvuBiEwic0LtNwVgpVUcFIcB8ZuvhmEhLN_AVqHx11F9Svku3nA95G5wfRpuGcfi7sXvXtkunKs1kmMLB5JRU75ABD5d8h6Lrb6AK2OTAoI9S_R81yjIfbYOQOD1"
  }
];

export default function ScrollSections() {
  const [projects, setProjects] = useState<any[]>(fallbackProjects);
  const [testimonials, setTestimonials] = useState<any[]>(fallbackTestimonials);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, testimonialsRes] = await Promise.all([
          supabase.from('projects').select('*').order('created_at', { ascending: false }),
          supabase.from('testimonials').select('*').order('created_at', { ascending: false })
        ]);
        if (projectsRes.data?.length) setProjects(projectsRes.data);
        if (testimonialsRes.data?.length) setTestimonials(testimonialsRes.data);
      } catch (err) {
        console.error("Failed to fetch dynamic data", err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {/* ═══ LOGO WALL ═══ */}
      <section className="py-16 bg-surface-container-low overflow-hidden">
        <p className="text-center label-md tracking-widest uppercase text-on-surface-variant mb-10">
          Trusted by growing businesses and startups
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40">
          {logos.map((logo, i) => (
            <span key={i} className="text-2xl font-black tracking-tighter text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <Services />

      {/* ═══ VALUE PROP ═══ */}
      <section id="about" className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container">
            <img 
              className="w-full h-full object-cover mix-blend-luminosity opacity-60" 
              alt="Modern minimalist architectural interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAryOWYF3fuQz7uzYfV-6rwvc984aW-I2xSgd8qbV69x2eZK4Bjg_DhMOsxbUmPueVr_noEDWL04K4TlPeGRBtgxDgMZIb_xnzeEixU22X0eN5XyArWHoUxscBem8lf2LL_KMBasR6_ilRvcqmXyOyaguhgNveEo1qAWq-RCI8boewMMnkCe6qg_ud4yfQ7hB-MCIn0QZqrKnvqku7i4rmm22jTLRX6eY-26sfmK5hUF5Sv5NQCVIlNQJBn7NIeS7tulX1cRtqfNjme" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent" />
          </div>
          
          <div>
            <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">
              We don&apos;t just design websites. We build growth systems.
            </h2>
            <div className="space-y-10">
              {[
                { icon: 'bolt', title: 'High-Velocity Results', desc: 'We prioritize speed-to-market without compromising the architectural integrity of your brand.' },
                { icon: 'insights', title: 'Conversion Intelligence', desc: 'Every design choice is backed by user psychology and data analysis for maximum impact.' },
                { icon: 'hub', title: 'Strategic Ecosystems', desc: 'We build connected digital platforms where every asset works toward a single business goal.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-container/10 border border-primary-container/20 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary-container">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section id="work" className="py-32 px-8 max-w-[1440px] mx-auto">
        <span className="label-md tracking-widest uppercase text-primary">Selected Works</span>
        <h2 className="text-5xl font-black tracking-tighter mt-4 mb-20">Proving our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container mb-8 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={project.title}
                  src={project.image_url} 
                />
                <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-outline-variant/20 mt-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Problem</p>
                  <p className="text-sm font-semibold">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Solution</p>
                  <p className="text-sm font-semibold">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">Result</p>
                  <p className="text-sm font-bold text-primary">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 bg-surface flex flex-col justify-between h-full rounded-lg">
                <p className="text-xl leading-relaxed italic text-on-surface-variant">
                  &ldquo;{t.content || t.quote}&rdquo;
                </p>
                <div className="mt-12">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-primary uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/5 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">
            Ready to Grow <br/>Your Brand?
          </h2>
          <a href="#contact" className="inline-block bg-primary-container text-on-primary-container px-12 py-6 rounded-md font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_-12px_rgba(46,91,255,0.5)]">
            Book a Free Strategy Call
          </a>
        </div>
      </section>
    </>
  );
}
