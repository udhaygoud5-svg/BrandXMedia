"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission logic
    alert("Strategy call request sent!");
  };

  return (
    <section id="contact" className="py-40 px-8 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="label-md text-primary mb-4 block">Get Started</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            Ready to scale <br/>your revenue?
          </h2>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="label-md text-on-surface-variant ml-4">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-xl focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="label-md text-on-surface-variant ml-4">Work Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-xl focus:border-primary focus:outline-none transition-colors"
                placeholder="john@business.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="label-md text-on-surface-variant ml-4">Business Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="Your Agency / SaaS"
              onChange={(e) => setFormData({...formData, business: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="label-md text-on-surface-variant ml-4">How can we help?</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-6 text-xl focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your goals..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-black py-8 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-[0.98] transition-all shadow-[0_0_40px_-10px_rgba(74,222,128,0.5)]"
          >
            Send Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}
