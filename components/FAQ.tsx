"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you handle everything from branding to website and e-commerce development?",
    answer: "Yes! We offer end-to-end digital solutions including brand strategy, visual identity, website design & development, e-commerce platforms, and ongoing support. You get a complete digital ecosystem, not just isolated pieces."
  },
  {
    question: "What's your process for delivering a project?",
    answer: "Our process is simple: 1) Discovery Call - We learn about your business and goals. 2) Strategy & Planning - We map out the perfect solution. 3) Design & Development - We build with precision. 4) Launch & Optimize - We go live and ensure everything runs smoothly."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline depends on scope. A landing page can be ready in 1-2 weeks. A full website typically takes 3-6 weeks. Complex e-commerce or custom web apps may take 6-12 weeks. We'll give you a clear timeline during our discovery call."
  },
  {
    question: "Do you provide marketing services as well?",
    answer: "While we focus primarily on design and development, we provide strategic marketing guidance including conversion optimization, SEO best practices, and analytics setup. For ongoing marketing campaigns, we can recommend trusted partners."
  },
  {
    question: "Do you build MVPs or just full-scale products?",
    answer: "Both! We love working with startups to build MVPs that validate ideas quickly. We also build full-scale products for established businesses. Either way, we ensure it's built to convert and scale."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely! Every project comes with post-launch support. We offer different maintenance packages depending on your needs, from basic updates to full ongoing optimization and content management."
  },
  {
    question: "What if I need ongoing updates and changes?",
    answer: "We offer monthly retainer packages for businesses that need continuous updates. You'll get priority support, faster turnaround times, and discounted rates compared to one-off projects."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with both! Startups love our ability to move fast and build conversion-focused MVPs. Established businesses appreciate our strategic approach to redesigns and optimization. If you're serious about growth, we're a perfect fit."
  },
  {
    question: "What platforms do you build on?",
    answer: "We're platform-agnostic and choose the best tool for your needs. We work with Next.js, React, Framer, Shopify, WordPress, and custom solutions. Our recommendation will be based on your specific requirements, not platform preference."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="label-md tracking-widest uppercase text-primary">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-4">
            Questions? We got answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-outline-variant/20 rounded-lg overflow-hidden bg-surface-container-low hover:bg-surface-container transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg md:text-xl font-bold text-on-surface pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-primary" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
