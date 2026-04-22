import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import ScrollSections from '@/components/ScrollSections'

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Background Effect */}
        <div className="fixed inset-0 perspective-grid perspective-mask opacity-20 pointer-events-none" />
        
        <Navbar />
        <Hero />
        
        {/* Scroll sections without heavy animations */}
        <ScrollSections />
        
        <ContactForm />

        {/* Footer */}
        <footer className="w-full py-8 bg-[#131313] border-t border-white/5 text-xs uppercase tracking-widest text-[#c4c5d9] opacity-60">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1440px] mx-auto gap-4">
            <span className="font-bold text-white">BrandXMedia</span>
            <p>© 2026 BrandXMedia. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
