"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function Pricing() {
  const [plans, setPlans] = useState<any[]>([]);
  
  const fallbackPlans = [
    {
      id: '1',
      name: 'Starter',
      price: '$2,500',
      features: ['Custom Website Design', 'Basic SEO Setup', 'Mobile Responsive', '1 Month Support'],
      is_popular: false
    },
    {
      id: '2',
      name: 'Professional',
      price: '$5,000',
      features: ['Full-Stack Development', 'Advanced SEO & Analytics', 'CMS Integration', 'Priority Support', 'Performance Optimization'],
      is_popular: true
    },
    {
      id: '3',
      name: 'Enterprise',
      price: 'Custom',
      features: ['Complex Web Applications', 'AI Integration', 'Custom Backend Architecture', 'Dedicated Account Manager', '24/7 SLA Support'],
      is_popular: false
    }
  ];

  useEffect(() => {
    async function fetchPlans() {
      const { data } = await supabase.from('pricing_plans').select('*').order('price', { ascending: true });
      if (data?.length) {
        setPlans(data);
      } else {
        setPlans(fallbackPlans);
      }
    }
    fetchPlans();
  }, []);

  return (
    <section id="pricing" className="py-32 bg-surface-dim border-y border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-20">
          <span className="label-md tracking-widest uppercase text-primary">Investment</span>
          <h2 className="text-5xl font-black tracking-tighter mt-4">Transparent Pricing Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: any) => (
            <div 
              key={plan.id} 
              className={`relative p-10 rounded-2xl border ${
                plan.is_popular 
                  ? 'bg-surface-container-low border-primary shadow-[0_0_50px_-15px_rgba(46,91,255,0.3)]' 
                  : 'bg-surface border-outline-variant/20'
              } flex flex-col`}
            >
              {plan.is_popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-on-surface mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black text-on-surface">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-on-surface-variant">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-12 flex-1">
                {(Array.isArray(plan.features) ? plan.features : typeof plan.features === 'string' ? JSON.parse(plan.features) : []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-md font-bold transition-all ${
                plan.is_popular 
                  ? 'bg-primary-container text-on-primary-container hover:brightness-110' 
                  : 'bg-surface-container-highest text-on-surface hover:bg-surface-bright'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
