"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ msg: string; type: 'success' | 'error' | 'idle' }>({ msg: '', type: 'idle' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ msg: '', type: 'idle' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      ]);
      if (error) throw error;
      setStatus({ msg: '🚀 Audit request received! We will be in touch within 48 hours.', type: 'success' });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setStatus({ msg: `❌ Error: ${err.message || 'Something went wrong.'}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-40 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-8">
            Ready to stop leaving <br /> <span className="text-primary-container">revenue on the table?</span>
          </h2>
          <p className="text-lg lg:text-xl text-on-surface-variant mb-12">Claim your free AI Strategy Audit. We&apos;ll identify your biggest revenue leaks and map a path to weightless growth.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <CheckCircle className="text-primary" size={32} />
              <p className="text-on-surface-variant text-lg">20-minute strategy workshop with our founder.</p>
            </div>
            <div className="flex gap-6">
              <CheckCircle className="text-primary" size={32} />
              <p className="text-on-surface-variant text-lg">Personalized AI roadmap delivered in 48 hours.</p>
            </div>
            <div className="flex gap-6">
              <CheckCircle className="text-primary" size={32} />
              <p className="text-on-surface-variant text-lg text-primary-container font-bold">Only 3 audit slots remaining this month.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-outline-variant/10">
            <p className="text-sm uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Direct Contact</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:brandxmedia.co@gmail.com" className="text-xl text-primary font-medium hover:text-primary-container transition-colors">
                brandxmedia.co@gmail.com
              </a>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-on-surface-variant mt-2">
                <a href="tel:+919347047827" className="text-lg hover:text-primary transition-colors">
                  +91 93470 47827
                </a>
                <span className="hidden lg:inline-block text-on-surface-variant/30">•</span>
                <a href="tel:+919347651574" className="text-lg hover:text-primary transition-colors">
                  +91 93476 51574
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low/70 backdrop-blur-xl p-8 lg:p-12 rounded-2xl relative border border-on-surface/5 shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-container to-primary opacity-10 blur-3xl rounded-2xl -z-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Full Name</label>
              <input name="name" type="text" required className="w-full bg-surface-container-high border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Work Email</label>
              <input name="email" type="email" required className="w-full bg-surface-container-high border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">How can we help?</label>
              <textarea name="message" required className="w-full bg-surface-container-high border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30 h-24 resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary-container text-on-primary-container py-5 rounded-md font-bold text-xl hover:scale-[0.98] transition-all flex items-center justify-center gap-3 group shadow-[0_0_40px_-10px_rgba(46,91,255,0.4)]">
              {loading ? 'Processing...' : 'Launch My Audit'}
              {!loading && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
            </button>
            {status.msg && (
              <p className={`text-center text-sm font-bold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
