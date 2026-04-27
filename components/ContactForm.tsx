"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-40 px-8 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="label-md text-primary mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
            Ready to scale <br/>your revenue?
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="text-primary" size={48} />
              </div>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Request Sent!</h3>
              <p className="text-on-surface-variant text-lg mb-10 max-w-lg mx-auto">
                Thank you for reaching out! Our team will review your request and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-white/10 text-on-surface px-10 py-4 rounded-full font-bold uppercase tracking-tight hover:bg-white/20 transition-colors"
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant ml-4">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant ml-4">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@business.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant ml-4">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant ml-4">Business Name</label>
                  <input
                    type="text"
                    required
                    value={formData.business}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Agency / SaaS"
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="label-md text-on-surface-variant ml-4">How can we help?</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-5 text-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-6 py-4"
                >
                  <AlertCircle className="text-red-400 shrink-0" size={20} />
                  <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary text-black py-6 rounded-full font-bold text-xl uppercase tracking-tight hover:scale-[0.98] transition-all shadow-[0_0_40px_-10px_rgba(74,222,128,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={22} />
                    Sending...
                  </>
                ) : (
                  'Send Request'
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
