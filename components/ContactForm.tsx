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
      // 1. Store in Supabase (Primary Database)
      const { error } = await supabase.from('inquiries').insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }
      ]);
      if (error) throw error;

      // 2. Send to Google Sheets (Secondary Lead Management)
      const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
      if (googleSheetsUrl) {
        // We use no-cors because Google Apps Script can be tricky with preflight requests
        fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
          }),
        }).catch(err => console.error('Google Sheets Error:', err));
      }

      setStatus({ msg: '🚀 Request received! We will be in touch within 24 hours.', type: 'success' });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setStatus({ msg: `❌ Error: ${err.message || 'Something went wrong.'}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-40 bg-surface-container-lowest border-t border-on-surface/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
        <div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-8">
            Start growing your <br /> <span className="text-primary">business today.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-on-surface-variant mb-12 font-medium">
            Get a free strategy call. We&apos;ll identify how to get more leads and save time with our systems.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-center">
              <CheckCircle className="text-primary flex-shrink-0" size={32} />
              <p className="text-on-surface-variant text-xl font-medium">Free 20-minute strategy call</p>
            </div>
            <div className="flex gap-6 items-center">
              <CheckCircle className="text-primary flex-shrink-0" size={32} />
              <p className="text-on-surface-variant text-xl font-medium">Custom growth plan for your business</p>
            </div>
            <div className="flex gap-6 items-center">
              <CheckCircle className="text-primary flex-shrink-0" size={32} />
              <p className="text-on-surface-variant text-xl font-bold text-primary">No commitment required</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-on-surface/10">
            <p className="text-sm uppercase tracking-widest text-on-surface-variant mb-4 font-bold">Or reach us directly</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:brandxmedia.co@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">
                brandxmedia.co@gmail.com
              </a>
              <a href="https://wa.me/919347047827?text=Hi,%20I%20want%20to%20grow%20my%20business" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-bold hover:text-[#25D366] transition-colors">
                <span className="material-symbols-outlined text-[#25D366]">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low/70 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-on-surface/5 shadow-2xl relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-container/20 blur-3xl rounded-3xl -z-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Full Name</label>
              <input name="name" type="text" required className="w-full bg-surface border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30 rounded-t-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Email Address</label>
              <input name="email" type="email" required className="w-full bg-surface border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30 rounded-t-md" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Phone Number</label>
              <input name="phone" type="tel" required className="w-full bg-surface border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30 rounded-t-md" placeholder="Your Number" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">How can we help?</label>
              <textarea name="message" required className="w-full bg-surface border-none border-b border-on-surface/10 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all placeholder:text-on-surface-variant/30 h-32 resize-none rounded-t-md" placeholder="Tell us what you need..."></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary text-on-primary py-6 rounded-md font-bold text-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group shadow-[0_0_40px_-10px_rgba(46,91,255,0.4)]">
              {loading ? 'Processing...' : 'Get Free Demo'}
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
